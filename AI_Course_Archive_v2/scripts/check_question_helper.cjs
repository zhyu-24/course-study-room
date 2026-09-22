const {chromium}=require(process.env.COURSE_PLAYWRIGHT||'playwright');
const fs=require('fs'),path=require('path'),{pathToFileURL}=require('url');
(async()=>{
 const root=path.resolve('.'),out=path.join(root,'site/qa/question-helper');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true}),checks=[],errors=[],network=[];
 const base=pathToFileURL(path.join(root,'index.html')).href;
 const route=(c,l,a='')=>'#'+new URLSearchParams({course:c,lecture:l,view:'notes',...(a?{anchor:a}:{})});
 const check=(name,ok,detail)=>{checks.push({name,ok,detail});if(!ok)throw Error(name+': '+JSON.stringify(detail));};
 const ctx=await browser.newContext({viewport:{width:1440,height:1000}});await ctx.setOffline(true);
 await ctx.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{window.copiedQuestion=t;}},configurable:true}));
 const p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url());});
 await p.goto(base+route('信号与系统','L02','N05'));await p.waitForSelector('#notes:not([hidden]) .katex');
 check('off by default',await p.locator('#qh-panel').count()===0);
 await p.locator('#helper-toggle').click();await p.waitForSelector('#qh-hint');
 async function select(selector,formula=false){
  await p.locator(selector).first().evaluate((el,formula)=>{const range=document.createRange();range.selectNodeContents(formula?el.querySelector('.katex-html')||el:el);const s=getSelection();s.removeAllRanges();s.addRange(range);},formula);
  await p.locator('#qh-ask').waitFor({state:'visible'});await p.locator('#qh-ask').click();
 }
 await select('#notes h2');
 await p.locator('#qh-question').fill('请解释这里的含义。');await p.locator('#qh-copy').click();
 const text=await p.evaluate(()=>copiedQuestion);
 check('text source and question',text.includes('信号与系统 / L02')&&text.includes('Lecture_Notes.md')&&text.includes('请解释这里的含义。')&&text.includes('定位锚点：'),text.slice(0,400));
 await p.locator('#qh-close').click();
 await select('#notes .katex',true);const formula=await p.locator('#qh-output').inputValue();
 check('original TeX retained',formula.includes('\\(')&&!formula.includes('MathML'),formula.slice(-900));
 await p.screenshot({path:path.join(out,'formula-desktop.png')});
 await p.locator('#qh-close').click();
 await p.locator('#notes img').first().click();await p.locator('#qh-image-ask').click();
 check('image path included',(await p.locator('#qh-output').inputValue()).includes('assets/slides/'));
 await p.screenshot({path:path.join(out,'image-desktop.png')});
 await p.evaluate(()=>location.hash='#'+new URLSearchParams({course:'核工程原理',lecture:'L01',view:'notes'}));await p.waitForSelector('#notes[data-course="核工程原理"]');
 check('navigation clears old selection',!await p.locator('#qh-panel').isVisible()&&!await p.locator('#qh-ask').isVisible());
 await select('#notes h2');
 await p.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:()=>Promise.reject(Error('denied'))},configurable:true}));
 await p.locator('#qh-copy').click();await p.waitForTimeout(80);
 check('clipboard fallback',await p.locator('#qh-preview').evaluate(e=>e.open)&&(await p.locator('#qh-status').textContent()).includes('Ctrl+C'));
 await p.setViewportSize({width:390,height:844});await p.screenshot({path:path.join(out,'mobile.png')});
 check('mobile width',await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await p.locator('#helper-toggle').click();
 check('disable removes UI and hooks',await p.locator('#qh-panel').count()===0&&await p.locator('#qh-image-ask').count()===0);
 await p.locator('#notes img').first().click();check('zoom after disable',await p.locator('#lightbox').isVisible());await p.locator('#close-image').click();
 // A runtime failure in an enabled event handler must clean up this enhancement only.
 await p.locator('#helper-toggle').click();await p.waitForSelector('#qh-hint');
 await p.evaluate(()=>{window.originalSelection=window.getSelection;window.getSelection=()=>{throw Error('simulated optional failure');};document.dispatchEvent(new Event('selectionchange'));});
 await p.waitForTimeout(250);await p.evaluate(()=>window.getSelection=window.originalSelection);
 check('runtime failure contained',(await p.locator('.notice').textContent()).includes('不受影响')&&await p.locator('#qh-image-ask').count()===0);
 await p.locator('[data-view-link=sources]').click();await p.waitForSelector('#sources:not([hidden])');
 check('core navigation after failure',await p.locator('#sources:not([hidden])').count()===1);
 await ctx.close();
 // Fault injection uses disposable copies: the live reader and plugin files remain untouched.
 for(const mode of ['missing-loader','missing-plugin','broken-plugin']){
  const file=path.join(out,'fixture-'+mode+'.html');
  let html=fs.readFileSync(path.join(root,'index.html'),'utf8').replace('<head>','<head><base href="'+base+'">');
  const optionalFile=path.join(out,'fault-'+mode+'.js');
  if(mode==='missing-loader')html=html.replace('site/optional/question-helper/helper-loader.js','site/optional/question-helper/does-not-exist.js');
  else{
   let loader=fs.readFileSync(path.join(root,'site/optional/question-helper/helper-loader.js'),'utf8');
   const target=mode==='missing-plugin'?'not-here.js':'broken.js';
   loader=loader.replace("new URL('question-helper.js',document.currentScript.src).href",JSON.stringify(pathToFileURL(path.join(out,target)).href));
   fs.writeFileSync(optionalFile,loader);html=html.replace('site/optional/question-helper/helper-loader.js',pathToFileURL(optionalFile).href);
   if(mode==='broken-plugin')fs.writeFileSync(path.join(out,'broken.js'),'window.CourseQuestionHelper={mount(){throw new Error("simulated init failure")}};');
  }
  fs.writeFileSync(file,html);
  const c=await browser.newContext();await c.setOffline(true);const q=await c.newPage();
  await q.goto(pathToFileURL(file).href+route('核工程原理','L01'));await q.waitForSelector('#notes:not([hidden]) .katex');
  if(mode!=='missing-loader'){await q.locator('#helper-toggle').click();await q.waitForTimeout(200);check(mode+' visible fallback',(await q.locator('.notice').textContent()).includes('不受影响'));}
  await q.locator('[data-view-link=sources]').click();await q.waitForSelector('#sources:not([hidden])');check(mode+' reader works',true);
  await c.close();
 }
 check('no plugin runtime leaks',errors.length===0,errors);check('no network',network.length===0,network);
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({pass:true,checks,errors,network},null,2));
 console.log(JSON.stringify({pass:true,checks:checks.length}));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

