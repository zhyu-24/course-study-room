'use strict';
(() => {
const catalog=window.COURSE_CATALOG, reader=document.getElementById('reader'), layout=document.getElementById('room-layout');
const nav=document.getElementById('course-nav'), toc=document.getElementById('topic-nav'), crumbs=document.getElementById('breadcrumbs');
const coursePanel=document.getElementById('course-panel'), topicPanel=document.getElementById('topic-panel');
const names={notes:'完整讲义',transcript:'课堂回顾',sources:'来源与订正',document:'教材与课程资料'};
const cache=new Map(), loading=new Map(), scrolls=new Map();let generation=0,lastHash='',currentKey='',currentPayload=null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url=(c,l='',v='',a='',d='')=>'#'+new URLSearchParams(Object.entries({course:c,lecture:l,view:v,anchor:a,document:d}).filter(([,value])=>value)).toString();
const link=(href,text,attrs='')=>'<a href="'+esc(href)+'" '+attrs+'>'+esc(text)+'</a>';
window.CourseRoom={register:p=>cache.set(p.key,p)};
function getBundle(key){
 if(cache.has(key))return Promise.resolve(cache.get(key));
 if(loading.has(key))return loading.get(key);
 const source=catalog.bundles[key];if(!source)return Promise.reject(new Error('目录中没有这份资料'));
 const promise=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=source;script.onload=()=>{script.remove();if(cache.has(key))resolve(cache.get(key));else reject(new Error('资料加载不完整'));};script.onerror=()=>{script.remove();reject(new Error('无法打开本地资料，请重新生成统一入口'));};document.head.append(script);});
 loading.set(key,promise);promise.catch(()=>loading.delete(key));return promise;
}
function pauseAudio(){reader.querySelectorAll('audio').forEach(a=>a.pause());}
function panels(){coursePanel.open=innerWidth>800;topicPanel.open=innerWidth>1150;}
window.addEventListener('resize',panels);
function sidebar(course,lecture){
 nav.innerHTML=link('#','所有课程')+catalog.courses.map(c=>'<div class="nav-course">'+link(url(c.id),c.title,c.id===course&&!lecture?'aria-current="page"':'')+'</div>'+
 (c.id===course?c.lectures.map((l,i)=>((l.unit&&l.unit!==c.lectures[i-1]?.unit)?'<div class="nav-unit">'+esc(l.unit)+'</div>':'')+link(url(c.id,l.id,'notes'),l.id+' · '+l.title,'class="nav-lecture" '+(l.id===lecture?'aria-current="page"':''))).join('')+(c.textbook?link(url(c.id,'','','',c.textbook),'教材索引','class="nav-textbook"'):''):'')).join('');
}
function badges(l){return '<div class="badges">'+l.views.map(v=>'<span class="badge">'+names[v]+'</span>').join('')+'<span class="badge">draft</span></div>';}
function lectureCard(c,l){return '<li class="lecture-card">'+link(url(c.id,l.id,'notes'),l.id+' · '+l.title,'class="lecture-title"')+(l.topics?'<p>'+esc(l.topics)+'</p>':'')+badges(l)+'</li>';}
function home(){
 layout.className='room-layout home';coursePanel.hidden=topicPanel.hidden=true;crumbs.innerHTML='';document.title='课程复习室';
 reader.innerHTML='<p class="eyebrow">从一堂课开始，逐步连成知识</p><h1>今天想复习哪门课？</h1><p class="intro">选一门课程，沿着课堂内容复习。讲义、教师讲解与原始资料，都在对应的位置。</p><label class="search-label" for="course-search">查找课程或讲次</label><input class="course-search" id="course-search" type="search" placeholder="输入课程名或讲次标题，如“卷积”" autocomplete="off"><div id="search-results"></div><footer>课程资料 v2 · 阅读界面 v2.1 · 学术内容状态以各讲来源记录为准</footer>';
 const results=document.getElementById('search-results');
 const update=()=>{const q=document.getElementById('course-search').value.trim().toLocaleLowerCase();if(!q){results.innerHTML='<div class="course-grid">'+catalog.courses.map(c=>'<section class="course-card"><span class="eyebrow">'+c.lectures.length+' 讲已收录</span><h2>'+esc(c.title)+'</h2><p>'+esc(c.lectures.map(l=>l.id).join(' · '))+'</p>'+link(url(c.id),'进入课程 →','class="enter"')+'</section>').join('')+'</div>';return;}
 const matches=catalog.courses.map(c=>({c,lessons:c.lectures.filter(l=>(c.title+' '+l.id+' '+l.title).toLocaleLowerCase().includes(q))})).filter(x=>x.lessons.length);
 results.innerHTML=matches.length?matches.map(({c,lessons})=>'<section><h2>'+link(url(c.id),c.title)+'</h2><ul class="lecture-list">'+lessons.map(l=>lectureCard(c,l)).join('')+'</ul></section>').join(''):'<p class="empty" role="status">没有匹配的课程或讲次。</p>';};
 document.getElementById('course-search').addEventListener('input',update);update();
}
function coursePage(c){
 layout.className='room-layout course-page';coursePanel.hidden=false;topicPanel.hidden=true;sidebar(c.id);
 crumbs.innerHTML=link('#','所有课程')+' / '+esc(c.title);document.title=c.title+' · 课程复习室';
 reader.innerHTML='<p class="eyebrow">课程目录 · '+c.lectures.length+' 讲</p><h1>'+esc(c.title)+'</h1><p class="intro">按讲次复习，或打开教材索引查找原页。课堂回顾仅在已有转写的讲次提供。</p><div class="document-links">'+c.documents.map(d=>link(url(c.id,'','','',d.id),d.title)).join(' · ')+'</div>'+
 c.lectures.map((l,i)=>((l.unit&&l.unit!==c.lectures[i-1]?.unit)?'<h2>'+esc(l.unit)+'</h2>':'')+'<ul class="lecture-list">'+lectureCard(c,l)+'</ul>').join('');
}
function makeToc(c,l,mode,doc){
 const active=reader.querySelector('article:not([hidden])');toc.innerHTML='';
 active.querySelectorAll('h2').forEach(h=>{const a=document.createElement('a');a.href=url(c.id,l?.id||'',doc?'':mode,h.id,doc);a.textContent=h.textContent;toc.append(a);});
 topicPanel.querySelector('summary').textContent=doc?'资料目录':'本讲目录';
}
function renderPayload(c,l,p,doc){
 pauseAudio();currentPayload=p;currentKey=p.key;
 const sourceAttr=esc(Object.keys(p.inputs).join('|'));
 reader.innerHTML='<p class="reading-context">'+esc(c.title)+(l?' / '+esc(l.id+' · '+l.title):' / 教材与课程资料')+'</p><nav class="reading-toolbar" aria-label="阅读模式">'+
 (l?Object.keys(p.views).map(v=>link(url(c.id,l.id,v),names[v],'data-view-link="'+v+'"')).join(''):link(url(c.id),'返回课程目录'))+'</nav>'+
 Object.entries(p.views).map(([v,body])=>'<article id="'+v+'" data-view="'+v+'" data-course="'+esc(c.id)+'" data-lecture="'+esc(l?.id||'')+'" data-source-files="'+sourceAttr+'" hidden>'+body+'</article>').join('')+
 (l?'<nav class="lecture-pager" aria-label="相邻讲次">'+(()=>{const i=c.lectures.indexOf(l),prev=c.lectures[i-1],next=c.lectures[i+1];return (prev?link(url(c.id,prev.id,'notes'),'← '+prev.id+' '+prev.title):'<span></span>')+(next?link(url(c.id,next.id,'notes'),next.id+' '+next.title+' →'):'<span></span>');})()+'</nav>':'')+'<footer>内容状态 draft · 公式与图像可离线阅读 · 来源与未解决疑点见相应记录</footer>';
 if(typeof renderMathInElement==='function')renderMathInElement(reader,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});
 reader.querySelectorAll('article img').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');});
}
async function navigate(){
 const token=++generation;const hash=location.hash;if(lastHash!==hash){scrolls.set(lastHash,scrollY);lastHash=hash;}const saved=scrolls.get(hash);
 const params=new URLSearchParams(hash.slice(1)),cid=params.get('course'),lid=params.get('lecture'),doc=params.get('document'),anchor=params.get('anchor');
 pauseAudio();
 if(!cid){currentKey='';home();panels();scrollTo(0,saved||0);return;}
 const c=catalog.courses.find(c=>c.id===cid);
 try{
 if(!c)throw new Error('找不到这门课程。');
 if(!lid&&!doc){currentKey='';coursePage(c);panels();scrollTo(0,saved||0);return;}
 const l=lid?c.lectures.find(l=>l.id===lid):null;if(lid&&!l)throw new Error('找不到这一讲。');
 if(doc&&!c.documents.some(d=>d.id===doc))throw new Error('找不到这份课程资料。');
 const key=c.id+'|'+(doc||lid);
 if(key!==currentKey){currentKey='';reader.innerHTML='<p role="status">正在打开资料…</p>';}
 const payload=await getBundle(key);if(token!==generation)return;
 layout.className='room-layout';coursePanel.hidden=topicPanel.hidden=false;sidebar(c.id,lid);
 crumbs.innerHTML=link('#','所有课程')+' / '+link(url(c.id),c.title)+' / '+esc(l?l.id:'课程资料');
 document.title=c.title+' · '+(l?l.id:'教材与课程资料')+' · 课程复习室';
 if(key!==currentKey)renderPayload(c,l,payload,doc);
 let mode=doc?'document':params.get('view')||'notes';
 const target=anchor?[...reader.querySelectorAll('[id]')].find(x=>x.id===anchor):null;
 if(target?.closest('article'))mode=target.closest('article').dataset.view;
 if(!payload.views[mode])throw new Error('这一讲没有所选阅读视图。');
 reader.querySelectorAll('article[data-view]').forEach(a=>a.hidden=a.dataset.view!==mode);
 reader.querySelectorAll('[data-view-link]').forEach(a=>{if(a.dataset.viewLink===mode)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 makeToc(c,l,mode,doc);panels();
 reader.querySelectorAll('.route-warning').forEach(e=>e.remove());
 if(anchor&&!target){const warning=document.createElement('p');warning.className='error route-warning';warning.textContent='该定位已不存在，已打开对应资料，请从目录重新选择。';reader.prepend(warning);}
 requestAnimationFrame(()=>{if(token!==generation)return;if(target){for(let p=target.parentElement;p&&p!==reader;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;target.scrollIntoView();}else scrollTo(0,saved||0);});
 }catch(e){if(token!==generation)return;currentKey='';reader.innerHTML='<div class="error" role="alert"><h1>暂时无法打开</h1><p>'+esc(e.message)+'</p>'+link('#','返回课程首页')+'</div>';topicPanel.hidden=true;}
}
const box=document.getElementById('lightbox');
function zoom(img){box.querySelector('img').src=img.src;box.querySelector('img').alt=img.alt;box.querySelector('p').textContent=img.alt;box.showModal();}
reader.addEventListener('click',e=>{
 const image=e.target.closest('article img');if(image){zoom(image);return;}
 const seek=e.target.closest('[data-seek]');if(seek){const audio=reader.querySelector('#class-audio');if(!audio)return;const move=()=>{audio.currentTime=Number(seek.dataset.seek);audio.scrollIntoView({block:'center'});audio.focus();};if(audio.readyState>=1)move();else{audio.addEventListener('loadedmetadata',move,{once:true});audio.load();}}
});
reader.addEventListener('keydown',e=>{if(e.target.matches('article img')&&['Enter',' '].includes(e.key)){e.preventDefault();zoom(e.target);}});
document.getElementById('close-image').addEventListener('click',()=>box.close());
document.getElementById('room-print').addEventListener('click',()=>window.print());
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();reader.focus();reader.scrollIntoView();});
window.addEventListener('hashchange',()=>{if(box.open)box.close();navigate();});
if('scrollRestoration' in history)history.scrollRestoration='manual';
navigate();
})();
