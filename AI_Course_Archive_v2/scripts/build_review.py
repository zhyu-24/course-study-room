"""Build an offline review from Markdown; no independently maintained HTML prose."""
import argparse, hashlib, html, json, re, shutil, sys
from pathlib import Path
BASE=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(BASE/'vendor'))
import markdown

def render_md(path,segments):
    text=path.read_text(encoding='utf-8')
    # The language revision opts migrated lectures into learner-facing controls.
    frontmatter=re.match(r'\A---\n(.*?)\n---\n',text,re.S)
    learner_language=bool(frontmatter and re.search(r'^archive_version:\s*v2\.0\.1\s*$',frontmatter.group(1),re.M))
    text=re.sub(r'\A---\n.*?\n---\n','',text,flags=re.S)
    def segment(match):
        r=segments[match.group(1)]
        gallery=''.join(f'<figure><img loading="lazy" src="assets/slides/p-{p:02}.jpg" alt="课件 PDF 第 {p} 页"><figcaption>PDF 第 {p} 页</figcaption></figure>' for p in r['pages'])
        processing_status='' if learner_language else '（未核听）'
        return f'<div class="segment-tools"><button type="button" data-seek="{r["start"]}">原音定位 {r["time"].split("–")[0]}{processing_status}</button></div>'+ ('<details><summary>展开对应课件页</summary>'+gallery+'</details>' if gallery else '')
    text=re.sub(r'<!--SEGMENT (T\d+)-->',segment,text)
    text=re.sub(r'<!-- ALIGNMENT_JSON.*?END_ALIGNMENT_JSON -->','',text,flags=re.S)
    math=[]
    def stash(match):
        key=f'MATHPLACEHOLDER{len(math):05}X'
        math.append(match.group(0));return key
    text=re.sub(r'\\\[.*?\\\]|\\\(.*?\\\)',stash,text,flags=re.S)
    md=markdown.Markdown(extensions=['tables','fenced_code','toc','md_in_html'],extension_configs={'toc':{'permalink':False}})
    result=md.convert(text)
    for i,tex in enumerate(math):result=result.replace(f'MATHPLACEHOLDER{i:05}X',html.escape(tex))
    return result

def main():
    a=argparse.ArgumentParser();a.add_argument('lecture');a.add_argument('--no-portal',action='store_true',help='Only rebuild the compatible single-lecture page');args=a.parse_args();lecture=Path(args.lecture).resolve()
    files={'notes':'Lecture_Notes.md','transcript':'Transcript_Corrected.md','sources':'Lecture_Source_Map.md'}
    present={k:v for k,v in files.items() if (lecture/v).exists()}
    if 'notes' not in present or 'sources' not in present:raise ValueError('Notes and source map are required')
    mapping=re.search(r'<!-- ALIGNMENT_JSON\s*(.*?)\s*END_ALIGNMENT_JSON -->',(lecture/files['sources']).read_text(encoding='utf-8'),re.S)
    segments={s['id']:s for s in json.loads(mapping.group(1))} if mapping else {}
    target=lecture/'assets';target.mkdir(exist_ok=True)
    shutil.copytree(BASE/'vendor/package/dist',target/'katex',dirs_exist_ok=True)
    shutil.copy2(BASE/'vendor/package/LICENSE',target/'katex/LICENSE')
    for name in ['review.css','review.js']:shutil.copy2(BASE/'assets'/name,target/name)
    sections=[];nav=[]
    for key,name in present.items():
        body=render_md(lecture/name,segments)
        # Namespace generated heading IDs; preserve stable editorial N/T anchors.
        body=re.sub(r'(<h[1-6] id=")([^"]+)(")',lambda m:m.group(1)+key+'-'+m.group(2)+m.group(3),body)
        # Markdown source links to the three documents become same-page anchors.
        for mode,fn in files.items():
            body=re.sub(r'href="'+re.escape(fn)+r'(#[^"]*)?"',lambda m:'href="'+(m.group(1) or '#'+mode)+'"',body)
        sections.append(f'<article id="{key}" data-view="{key}"'+(' hidden' if key!='notes' else '')+'>'+body+'</article>')
        nav.append(f'<button type="button" data-mode="{key}" aria-pressed="'+('true' if key=='notes' else 'false')+'">'+{'notes':'完整讲义','transcript':'课堂回顾','sources':'来源与订正'}[key]+'</button>')
    title=lecture.parent.parent.name+' · '+lecture.name
    page=(BASE/'assets/review.html').read_text(encoding='utf-8').replace('@@TITLE@@',html.escape(title)).replace('@@NAV@@',''.join(nav)).replace('@@BODY@@','\n'.join(sections))
    (lecture/'Review.html').write_text(page,encoding='utf-8')
    manifest={name:hashlib.sha256((lecture/name).read_bytes()).hexdigest() for name in present.values()}
    (target/'build.json').write_text(json.dumps({'inputs':manifest,'renderer':'Markdown 3.8.2 + KaTeX 0.16.22'},indent=2),encoding='utf-8')
    print(lecture/'Review.html')
    if not args.no_portal and lecture.is_relative_to(BASE.parent) and (lecture.parent.parent/'Course_Index.md').exists():
        from build_portal import build
        build(BASE.parent)

if __name__=='__main__':main()
