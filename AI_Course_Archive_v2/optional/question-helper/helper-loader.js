/* Optional, independently loaded enhancement. The course reader never calls this file. */
'use strict';
(() => {
 let host,root,button,message,slot,instance=null,starting=false,token=0;
 const pluginURL=new URL('question-helper.js',document.currentScript.src).href;
 try {
  host=document.createElement('div');host.id='course-question-helper';
  root=host.attachShadow({mode:'open'});
  root.innerHTML='<style>:host{all:initial;position:fixed;right:16px;bottom:16px;z-index:50;font:14px/1.6 "Microsoft YaHei",sans-serif;color:#24332f;pointer-events:none}*{box-sizing:border-box}[hidden]{display:none!important}button{font:inherit;cursor:pointer;border:1px solid #c4d2c5;border-radius:8px;background:#fffefb;color:#245942;padding:8px 13px}button:focus-visible{outline:3px solid #d4a848}.launcher{pointer-events:auto;display:flex;justify-content:flex-end;gap:8px;align-items:center}.notice{max-width:230px;background:#fffefb;border-radius:6px;padding:6px 10px;font-size:12px}#helper-slot{pointer-events:auto}@media print{:host{display:none!important}}</style><div id="helper-slot"></div><div class="launcher"><span class="notice" role="status" hidden></span><button type="button" id="helper-toggle" aria-pressed="false">提问辅助</button></div>';
  document.body.append(host);button=root.getElementById('helper-toggle');message=root.querySelector('.notice');slot=root.getElementById('helper-slot');
  function stop(note=''){
   token++;starting=false;try{instance?.destroy();}catch(_){}instance=null;slot.replaceChildren();
   button.textContent='提问辅助';button.setAttribute('aria-pressed','false');button.disabled=false;
   message.textContent=note;message.hidden=!note;
  }
  function fail(){stop('提问辅助暂不可用，阅读不受影响。');}
  function load(){
   if(window.CourseQuestionHelper?.mount)return Promise.resolve();
   return new Promise((resolve,reject)=>{
    const s=document.createElement('script');let timer;
    const done=fn=>{clearTimeout(timer);s.remove();fn();};
    s.src=pluginURL;s.onload=()=>done(()=>window.CourseQuestionHelper?.mount?resolve():reject(new Error('No helper')));
    s.onerror=()=>done(()=>reject(new Error('Unavailable')));timer=setTimeout(()=>done(()=>reject(new Error('Timeout'))),5000);document.head.append(s);
   });
  }
  button.addEventListener('click',async()=>{
   if(instance||starting){stop();return;}
   starting=true;const ticket=++token;button.textContent='取消启用';message.hidden=true;
   try{
    await load();if(ticket!==token)return;
    instance=window.CourseQuestionHelper.mount(slot,{onFailure:fail});
    if(!instance?.destroy)throw new Error('Invalid helper');
    starting=false;button.textContent='关闭提问辅助';button.setAttribute('aria-pressed','true');
   }catch(_){if(ticket===token)fail();}
  });
 }catch(_){try{host?.remove();}catch(_){}}
})();

