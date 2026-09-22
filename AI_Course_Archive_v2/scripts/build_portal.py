"""Build the unified file:// course room from canonical Markdown, without touching lecture outputs."""
import argparse, hashlib, html, json, re, shutil
from pathlib import Path
from urllib.parse import quote, unquote, urlencode, urlsplit
from html.parser import HTMLParser
from build_review import render_md, BASE

FILES={'notes':'Lecture_Notes.md','transcript':'Transcript_Corrected.md','sources':'Lecture_Source_Map.md'}
def digest(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def route(course,lecture=None,view=None,anchor=None,document=None):
    return '#'+urlencode({k:v for k,v in dict(course=course,lecture=lecture,view=view,anchor=anchor,document=document).items() if v},quote_via=quote)
def course_info(index):
    text=index.read_text(encoding='utf-8')
    title=re.search(r'^# (.+)',text,re.M).group(1).strip()
    lectures=[]; unit=''
    lines=text.splitlines()
    for i,line in enumerate(lines):
        if line.startswith('### Unit '):unit=line[4:].strip()
        match=re.match(r'#### Lecture (\d+)\s*[—–-]\s*(.+)',line)
        if match:
            block=[]
            for subsequent in lines[i+1:]:
                if subsequent.startswith('##'):break
                block.append(subsequent)
            topics=next((x.split('Topics：',1)[1] for x in block if 'Topics：' in x),'')
            lectures.append(dict(id=f'L{int(match[1]):02}',title=match[2].strip(),unit=unit,topics=topics))
        match=re.match(r'\|\s*(L\d+)\s*\|\s*([^|]+)\|',line)
        if match and not any(x['id']==match[1] for x in lectures):
            lectures.append(dict(id=match[1],title=match[2].strip(),unit='',topics=''))
    actual={p.parent.name for p in index.parent.glob('Lectures/L*/Lecture_Notes.md')}
    listed={x['id'] for x in lectures}
    if actual!=listed or len(listed)!=len(lectures):
        raise ValueError(f'{title}: index/directory mismatch; actual={actual}, index={listed}')
    return dict(id=index.parent.name,title=title,lectures=lectures)

class Rewrite(HTMLParser):
    def __init__(self,source,mode,root,known,headings):
        super().__init__(convert_charrefs=False)
        self.source,self.mode,self.root,self.known,self.headings=source,mode,root,known,headings
        self.out=[];self.resources=set()
    def url(self,value):
        u=urlsplit(html.unescape(value))
        if u.scheme or u.netloc:return value
        if not u.path:
            anchor=unquote(u.fragment)
            anchor=self.headings.get(anchor,anchor)
            meta=self.known[self.source.resolve()]
            return route(**meta,anchor=anchor)
        target=(self.source.parent/unquote(u.path)).resolve()
        if target in self.known:
            meta=self.known[target].copy()
            anchor=unquote(u.fragment)
            if anchor in FILES:meta['view']=anchor;anchor=''
            elif anchor.startswith('T'):meta['view']='transcript'
            elif anchor.startswith('N'):meta['view']='notes'
            return route(**meta,anchor=anchor)
        if not target.exists():raise ValueError(f'Missing resource: {self.source}: {value}')
        try:relative=target.relative_to(self.root).as_posix()
        except ValueError:raise ValueError(f'Outside archive link: {self.source}: {value}')
        self.resources.add(relative)
        return quote(relative,safe='/')+('?' + u.query if u.query else '')+('#'+u.fragment if u.fragment else '')
    def handle_starttag(self,tag,attrs):
        out=[]
        for k,v in attrs:
            if v is not None:
                if k in ('src','href'):v=self.url(v)
                elif k=='id' and tag in ['h1','h2','h3','h4','h5','h6']:v=self.headings.get(v,v)
                if tag=='audio' and k=='preload':v='none'
            out.append(k if v is None else f'{k}="{html.escape(v,quote=True)}"')
        if tag=='img':
            src=next((v for k,v in attrs if k=='src'),'')
            out.append('data-source-path="'+html.escape(self.url(src),quote=True)+'"')
        self.out.append('<'+tag+(' '+' '.join(out) if out else '')+'>')
    def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs)
    def handle_endtag(self,tag):self.out.append('</'+tag+'>')
    def handle_data(self,d):self.out.append(d)
    def handle_entityref(self,n):self.out.append('&'+n+';')
    def handle_charref(self,n):self.out.append('&#'+n+';')
    def handle_comment(self,d):self.out.append('<!--'+d+'-->')

def build(root, with_helper=True):
    root=root.resolve();out=root/'site';data=out/'data';data.mkdir(parents=True,exist_ok=True)
    courses=[course_info(p) for p in sorted(root.glob('*/Course_Index.md'))]
    known={};inputs={};resources=set();jobs=[]
    for c in courses:
        base=root/c['id']
        inputs[(base/'Course_Index.md').relative_to(root).as_posix()]=digest(base/'Course_Index.md')
        c['documents']=[]
        for p in sorted((base/'Global').glob('*.md')):
            document=p.relative_to(base).as_posix()
            c['documents'].append(dict(id=document,title='教材索引' if p.stem=='Textbook_Index' else ('课程知识入口' if p.stem=='Global_Knowledge' else '全局来源'),key=c['id']+'|'+document))
            known[p.resolve()]=dict(course=c['id'],document=document)
            jobs.append((c,document,{'document':p},{}))
        c['textbook']=next((d['id'] for d in c['documents'] if d['id']=='Global/Textbook_Index.md'),None)
        for l in c['lectures']:
            folder=base/'Lectures'/l['id']
            present={k:folder/v for k,v in FILES.items() if (folder/v).exists()}
            if 'notes' not in present or 'sources' not in present:raise ValueError(f'Incomplete lecture: {folder}')
            l.update(views=list(present),key=c['id']+'|'+l['id'])
            for mode,p in present.items():known[p.resolve()]=dict(course=c['id'],lecture=l['id'],view=mode)
            known[(folder/'Review.html').resolve()]=dict(course=c['id'],lecture=l['id'],view='notes')
            mapping=re.search(r'<!-- ALIGNMENT_JSON\s*(.*?)\s*END_ALIGNMENT_JSON -->',present['sources'].read_text(encoding='utf-8'),re.S)
            segments={s['id']:s for s in json.loads(mapping[1])} if mapping else {}
            jobs.append((c,l['id'],present,segments))
    bundles={}
    for c,item,present,segments in jobs:
        key=c['id']+'|'+item
        payload=dict(key=key,course=c['id'],item=item,views={},inputs={},segments=segments)
        for mode,p in present.items():
            body=render_md(p,segments)
            headings={x:mode+'-'+x for x in re.findall(r'<h[1-6] id="([^"]+)"',body)}
            parser=Rewrite(p,mode,root,known,headings);parser.feed(body)
            payload['views'][mode]=''.join(parser.out);resources.update(parser.resources)
            name=p.relative_to(root).as_posix();payload['inputs'][name]=digest(p);inputs[name]=digest(p)
        filename=hashlib.sha256(key.encode()).hexdigest()[:20]+'.js'
        (data/filename).write_text('window.CourseRoom.register('+json.dumps(payload,ensure_ascii=False)+');\n',encoding='utf-8')
        bundles[key]='site/data/'+filename
    catalog=dict(version='2.1',courses=courses,bundles=bundles)
    (out/'catalog.js').write_text('window.COURSE_CATALOG='+json.dumps(catalog,ensure_ascii=False)+';\n',encoding='utf-8')
    shutil.copytree(BASE/'vendor/package/dist',out/'katex',dirs_exist_ok=True)
    shutil.copy2(BASE/'vendor/package/LICENSE',out/'katex/LICENSE')
    for name in ['portal.css','portal.js','review.css']:shutil.copy2(BASE/'assets'/name,out/name)
    page=(BASE/'assets/portal.html').read_text(encoding='utf-8')
    helper=BASE/'optional/question-helper'
    optional_tag=''
    if with_helper and all((helper/n).exists() for n in ('helper-loader.js','question-helper.js')):
        try:
            shutil.copytree(helper,out/'optional/question-helper',dirs_exist_ok=True)
            optional_tag='<script defer src="site/optional/question-helper/helper-loader.js"></script>'
        except OSError as error:
            print(f'Optional question helper skipped: {error}')
    (root/'index.html').write_text(page.replace('<!--OPTIONAL_HELPER-->',optional_tag),encoding='utf-8')
    (out/'build.json').write_text(json.dumps(dict(version='2.1',inputs=inputs,resources=sorted(resources),courses=len(courses),lectures=sum(len(c['lectures']) for c in courses)),ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'{root / "index.html"}: {len(courses)} courses / {sum(len(c["lectures"]) for c in courses)} lectures')
if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--root',type=Path,default=BASE.parent);ap.add_argument('--without-helper',action='store_true',help='Build the independent reader without the optional question helper');args=ap.parse_args();build(args.root,not args.without_helper)
