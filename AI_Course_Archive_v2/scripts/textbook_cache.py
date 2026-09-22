"""Fingerprint-keyed PDF page cache. Rendering never implies content verification."""
import argparse, hashlib, json, shutil, subprocess
from pathlib import Path

def digest(path):
    h=hashlib.sha256()
    with open(path,'rb') as f:
        for block in iter(lambda:f.read(1024*1024),b''): h.update(block)
    return h.hexdigest()

def open_cache(source,root,edition):
    source=Path(source).resolve(); key=digest(source)
    dest=Path(root)/key; dest.mkdir(parents=True,exist_ok=True)
    file=dest/'manifest.json'
    m=json.loads(file.read_text(encoding='utf-8')) if file.exists() else {
        'schema_version':1,'source_sha256':key,'source_path':str(source),
        'edition':edition,'pages':{}}
    if m['source_sha256']!=key or m['edition']!=edition: raise ValueError('Source/edition mismatch')
    return dest,m

def save(dest,m):
    (dest/'manifest.json').write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')

def resolve(source,root,edition,page):
    dest,m=open_cache(source,root,edition)
    entry=m['pages'].get(str(page))
    if not entry: return None
    p=dest/entry['image']
    if not p.exists() or digest(p)!=entry['image_sha256']: return None
    return p

def main():
    a=argparse.ArgumentParser(description=__doc__)
    a.add_argument('action',choices=['get','render']);a.add_argument('--source',required=True)
    a.add_argument('--root',required=True);a.add_argument('--edition',required=True)
    a.add_argument('--pages',required=True,help='1,3,5-8');a.add_argument('--poppler')
    args=a.parse_args(); pages=[]
    for token in args.pages.split(','):
        parts=token.split('-'); pages.extend(range(int(parts[0]),int(parts[-1])+1))
    if any(n<1 for n in pages): raise ValueError('Pages are one based')
    dest,m=open_cache(args.source,args.root,args.edition)
    for n in sorted(set(pages)):
        hit=resolve(args.source,args.root,args.edition,n)
        if hit: print(json.dumps({'page':n,'cache_hit':True,'path':str(hit)},ensure_ascii=False));continue
        if args.action=='get': print(json.dumps({'page':n,'cache_hit':False}));continue
        exe=args.poppler or shutil.which('pdftoppm')
        if not exe: raise RuntimeError('Pass --poppler with the pdftoppm executable')
        prefix=dest/f'p-{n:03}'
        subprocess.run([exe,'-f',str(n),'-l',str(n),'-singlefile','-scale-to','1800','-png',args.source,str(prefix)],check=True)
        path=prefix.with_suffix('.png')
        m['pages'][str(n)]={'image':path.name,'image_sha256':digest(path),'rendered':True,
            'text_extracted':False,'ocr':False,'visual_verified':False,'verification_note':None}
        save(dest,m);print(json.dumps({'page':n,'cache_hit':False,'rendered':True,'path':str(path)},ensure_ascii=False))

if __name__=='__main__': main()
