"""Explicit end-of-task publication; no watcher, scheduler, force-push, or credentials in files."""
import argparse, hashlib, json, subprocess, sys, time, zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
def run(*args, capture=False):
    return subprocess.run(args,cwd=ROOT,check=True,stdout=subprocess.PIPE if capture else None,encoding='utf-8').stdout
def tracked():
    return run('git','ls-files','-z',capture=True).rstrip('\0').split('\0')
def package():
    out=ROOT/'tmp'/'publish';out.mkdir(parents=True,exist_ok=True)
    archive=out/'course-study-room-offline.zip'
    files=tracked();names=set(files)
    manifest=json.loads((ROOT/'site/build.json').read_text(encoding='utf-8'))
    missing=[p for p in manifest['resources'] if p not in names]
    if missing:raise RuntimeError('Reading resources are not tracked: '+repr(missing))
    for p,h in manifest['inputs'].items():
        if hashlib.sha256((ROOT/p).read_bytes()).hexdigest()!=h:raise RuntimeError('Stale build input: '+p)
    with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
        for name in files:
            p=ROOT/name
            with p.open('rb') as f:
                if f.read(50).startswith(b'version https://git-lfs.github.com/spec/v1'):raise RuntimeError('LFS pointer instead of actual file: '+name)
            z.write(p,'course-study-room/'+name)
    with zipfile.ZipFile(archive) as z:
        error=z.testzip()
        if error:raise RuntimeError('ZIP checksum failure: '+error)
    checksum=out/'SHA256SUMS.txt'
    with archive.open('rb') as f:sha=hashlib.file_digest(f,'sha256').hexdigest()
    checksum.write_text(sha+'  '+archive.name+'\n',encoding='utf-8')
    print(f'Offline package: {archive.stat().st_size/1024**2:.1f} MiB; SHA256 {sha}')
    return archive,checksum
def main():
    a=argparse.ArgumentParser();a.add_argument('--message',default='Update course study materials');a.add_argument('--release',action='store_true');a.add_argument('--package-only',action='store_true');args=a.parse_args()
    if args.package_only:package();return
    # Repository-local authorization and source permission review must happen before this command.
    branch=run('git','branch','--show-current',capture=True).strip()
    if branch!='main':raise RuntimeError('Publication expects main; reconcile current branch manually')
    remote=run('git','remote','get-url','origin',capture=True).strip()
    if remote not in ['https://github.com/zhyu-24/course-study-room.git','https://github.com/zhyu-24/course-study-room','git@github.com:zhyu-24/course-study-room.git']:raise RuntimeError('Unexpected publication target')
    run(sys.executable,str(ROOT/'AI_Course_Archive_v2/scripts/build_portal.py'))
    run('git','add','--all')
    diff=run('git','diff','--cached','--name-only',capture=True).strip()
    if diff:run('git','commit','-m',args.message)
    run('git','push','-u','origin','main')
    local=run('git','rev-parse','HEAD',capture=True).strip()
    remote_head=run('git','ls-remote','origin','refs/heads/main',capture=True).split()[0]
    if local!=remote_head:raise RuntimeError('Remote verification failed')
    print('Remote main verified: '+local)
    if args.release:
        archive,checksum=package()
        tag='v'+time.strftime('%Y.%m.%d-%H%M%S')
        notes=archive.parent/'release-notes.md'
        notes.write_text('完整离线阅读包。下载 course-study-room-offline.zip 后完整解压，打开 index.html。\n\n包括本次经发布者确认可公开转载的课程资料；SHA256SUMS.txt 用于校验。普通 Source code ZIP 中的大文件可能为 Git LFS 指针。\n\n免费非商业学习与交流，许可和来源说明见 README。\n\nCommit: '+local+'\n',encoding='utf-8')
        run('gh','release','create',tag,str(archive),str(checksum),'--target',local,'--title','课程复习室 · '+tag,'--notes-file',str(notes))
if __name__=='__main__':main()

