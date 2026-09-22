'use strict';
const views=[...document.querySelectorAll('article[data-view]')];
const toc=document.getElementById('toc');
function show(mode){views.forEach(v=>v.hidden=v.id!==mode);document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));toc.replaceChildren();const current=document.getElementById(mode);current.querySelectorAll('h2').forEach(h=>{const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;toc.append(a)});}
function followHash(){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(!target)return;const view=target.closest('article')||target;if(view.matches('article'))show(view.id);for(let p=target.parentElement;p;p=p.parentElement){if(p.tagName==='DETAILS')p.open=true;}setTimeout(()=>target.scrollIntoView({behavior:'instant'}),0);}
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{show(b.dataset.mode);history.replaceState(null,'','#'+b.dataset.mode);window.scrollTo({top:0});}));
window.addEventListener('hashchange',followHash);
const box=document.getElementById('lightbox');document.querySelectorAll('article img').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');const open=()=>{box.querySelector('img').src=img.src;box.querySelector('img').alt=img.alt;box.querySelector('p').textContent=img.alt;box.showModal();};img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
document.getElementById('close-image').addEventListener('click',()=>box.close());
document.getElementById('print').addEventListener('click',()=>window.print());
document.querySelectorAll('[data-seek]').forEach(b=>b.addEventListener('click',()=>{const audio=document.getElementById('class-audio');const seek=()=>{audio.currentTime=Number(b.dataset.seek);audio.scrollIntoView({block:'center'});audio.focus();};if(audio.readyState>=1)seek();else{audio.addEventListener('loadedmetadata',seek,{once:true});audio.load();}}));
show('notes');if(typeof renderMathInElement==='function')renderMathInElement(document.body,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});followHash();
