// Offline navigation and rendering regression for the unified course room.
const {chromium}=require(process.env.COURSE_PLAYWRIGHT||'playwright');
const fs=require('fs'),path=require('path'),vm=require('vm'),{pathToFileURL,fileURLToPath}=require('url');
(async()=>{
 const root=path.resolve(process.argv[2]||'.'),out=path.join(root,'site/qa');fs.mkdirSync(out,{recursive:true});
 const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'site/catalog.js'),'utf8'),sandbox);
 const cat=sandbox.window.COURSE_CATALOG,bundles={};
 for(const [key,file] of Object.entries(cat.bundles)){
  vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),{window:{CourseRoom:{register:p=>bundles[key]=p}}});
 }
 const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:1440,height:1000}});await context.setOffline(true);
 const page=await context.newPage(),errors=[],external=[],checks=[],views=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))external.push(r.url());});
 const base=pathToFileURL(path.join(root,'index.html')).href;
 const route=(c,l,v,a,d)=>'#'+new URLSearchParams(Object.entries({course:c,lecture:l,view:v,anchor:a,document:d}).filter(([,v])=>v)).toString();
 const check=(name,ok,details)=>{checks.push({name,ok,details});if(!ok)throw new Error(name+': '+JSON.stringify(details));};
 const ready=async()=>{await page.waitForFunction(()=>!document.querySelector('[role=status]')?.textContent.includes('正在'));};
 const navigate=async hash=>{await page.evaluate(h=>location.hash=h,hash);await page.waitForTimeout(60);await ready();};
 await page.goto(base);await ready();
 if(process.argv.includes('--helper-enabled')){await page.locator('#helper-toggle').click();await page.waitForSelector('#qh-hint');await page.locator('#qh-hide-hint').click();}
 check('home cards',await page.locator('.course-card').count()===3);
 await page.screenshot({path:path.join(out,'home.png')});
 await page.locator('#course-search').fill('卷积');check('title search',await page.locator('.lecture-card').count()===1);
 await page.locator('#course-search').fill('无匹配测试');check('empty search',await page.locator('.empty').count()===1);
 await page.locator('#course-search').fill('');
 await page.locator('.enter').first().click();await ready();await page.waitForTimeout(80);
 check('course navigation',await page.locator('.lecture-card').count()>0);
 await page.screenshot({path:path.join(out,'course.png')});
 await page.goBack();await page.waitForTimeout(80);check('back home',await page.locator('#course-search').count()===1);
 await page.goForward();await page.waitForTimeout(80);check('forward course',await page.locator('.lecture-card').count()>0);
 for(const c of cat.courses){
  for(const l of c.lectures){
   for(const mode of l.views){
    await navigate(route(c.id,l.id,mode));
    await page.waitForSelector('article[data-view="'+mode+'"]:not([hidden])');
    const active=page.locator('article:not([hidden])');
    await active.evaluate(async a=>{a.querySelectorAll('details').forEach(d=>d.open=true);await Promise.all([...a.querySelectorAll('img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));});
    const result=await active.evaluate(a=>({course:a.dataset.course,lecture:a.dataset.lecture,view:a.dataset.view,math:a.querySelectorAll('.katex').length,mathErrors:a.querySelectorAll('.katex-error').length,brokenImages:[...a.querySelectorAll('img')].filter(i=>!i.naturalWidth).map(i=>i.src),overflow:document.documentElement.scrollWidth>innerWidth,duplicates:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,arr)=>arr.indexOf(id)!==i)}));
    check(c.id+l.id+mode,result.course===c.id&&result.lecture===l.id&&!result.mathErrors&&!result.brokenImages.length&&!result.overflow&&!result.duplicates.length,result);views.push(result);
    if(mode==='notes'){
     check('lecture pager '+c.id+l.id,await page.locator('.lecture-pager a').count()===(c.lectures.length===1?0:l===c.lectures[0]||l===c.lectures.at(-1)?1:2));
     await active.locator('img').first().click();check('lightbox '+c.id+l.id,await page.locator('#lightbox').isVisible());await page.locator('#close-image').click();
     if(!l.views.includes('transcript'))check('no fabricated audio '+c.id+l.id,await page.locator('audio,[data-view-link=transcript]').count()===0);
    }
    if(mode==='transcript'){
     await active.locator('[data-seek]').nth(1).click();
     await page.waitForFunction(()=>document.querySelector('audio').readyState>=1);
     const audio=await page.locator('audio').evaluate(a=>({time:a.currentTime,error:a.error?.message}));
     const expected=Number(await active.locator('[data-seek]').nth(1).getAttribute('data-seek'));
     check('audio seek '+c.id+l.id,Math.abs(audio.time-expected)<1&&!audio.error,audio);
     await page.evaluate(()=>{window.oldAudio=document.querySelector('audio');oldAudio.muted=true;return oldAudio.play();});
     await navigate(route(c.id));check('audio stopped '+c.id+l.id,await page.evaluate(()=>oldAudio.paused));
    }
   }
  }
  for(const d of c.documents){
   await navigate(route(c.id,'','','',d.id));
   check('global document '+c.id+d.id,await page.locator('article[data-view=document]:not([hidden])').count()===1);
  }
 }
 // Validate all rewritten internal links against their destination bundle, including hidden views.
 const badLinks=[];
 for(const p of Object.values(bundles))for(const body of Object.values(p.views)){
  const attrs=[...body.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&').replaceAll('&#x27;',"'"));
  for(const raw of attrs){
   if(raw.startsWith('#')){
    const q=new URLSearchParams(raw.slice(1)),key=q.get('course')+'|'+(q.get('document')||q.get('lecture')),dest=bundles[key],anchor=q.get('anchor');
    if(!dest||(anchor&&!Object.entries(dest.views).some(([v,b])=>v===anchor||b.includes('id="'+anchor+'"'))))badLinks.push({key:p.key,raw});
   }else{const u=new URL(raw,base);if(u.protocol==='file:'&&!fs.existsSync(fileURLToPath(u)))badLinks.push({key:p.key,raw});}
  }
 }
 check('all source links and anchors',badLinks.length===0,badLinks);
 await navigate(route('信号与系统','L02','notes','N05'));
 check('deep N05',await page.locator('#N05').count()===1);
 await page.reload();await ready();await page.waitForSelector('#notes:not([hidden])');
 check('refresh deep route',await page.locator('#N05').count()===1);
 await page.screenshot({path:path.join(out,'reading-desktop.png')});
 await navigate(route('信号与系统','L03','notes','T20'));
 check('cross-view deep link',await page.locator('#transcript:not([hidden])').count()===1);
 await navigate(route('聚变能源概论','L01','notes','N01'));
 check('same anchor different lecture',await page.locator('#notes').getAttribute('data-course')==='聚变能源概论');
 await navigate(route('信号与系统','L02','notes'));
 await page.locator('.lecture-pager a').last().click();await page.waitForTimeout(80);await ready();
 check('click next lecture',await page.locator('#notes').getAttribute('data-lecture')==='L03');
 await page.locator('.lecture-pager a').first().click();await page.waitForTimeout(80);await ready();
 check('click previous lecture',await page.locator('#notes').getAttribute('data-lecture')==='L02');
 const crossLink=page.locator('#notes a[href*="view=transcript"]').first();
 await crossLink.click();await page.waitForTimeout(80);check('click notes to transcript',await page.locator('#transcript:not([hidden])').count()===1);
 await page.goBack();await page.waitForTimeout(80);check('back to notes',await page.locator('#notes:not([hidden])').count()===1);
 await navigate(route('聚变能源概论','','','','Global/Textbook_Index.md'));
 check('textbook original PDF page',await page.locator('#document a[href$="pdf#page=11"]').count()>0);
 await navigate(route('聚变能源概论','L01','notes','N10'));
 await page.locator('#notes details').evaluateAll(es=>es.forEach(e=>e.open=true));await page.screenshot({path:path.join(out,'textbook-desktop.png')});
 await page.setViewportSize({width:390,height:844});
 for(const c of cat.courses)for(const l of c.lectures)for(const mode of l.views){
  await navigate(route(c.id,l.id,mode));check('mobile '+c.id+l.id+mode,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 }
 await navigate(route('信号与系统','L03','notes','N08'));
 await page.screenshot({path:path.join(out,'reading-mobile.png')});
 check('mobile panels collapsed',!await page.locator('#course-panel').evaluate(e=>e.open)&&!await page.locator('#topic-panel').evaluate(e=>e.open));
 await page.locator('#topic-panel summary').click();check('mobile toc opens',await page.locator('#topic-panel').evaluate(e=>e.open));
 await page.screenshot({path:path.join(out,'navigation-mobile.png')});
 await navigate('#');await page.screenshot({path:path.join(out,'home-mobile.png')});
 check('mobile home width',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await navigate(route('核工程原理','L01','notes'));
 await page.emulateMedia({media:'print'});
 check('print navigation hidden',await page.locator('.room-header').evaluate(e=>getComputedStyle(e).display==='none'));
 check('print only active view',await page.locator('article').evaluateAll(es=>es.filter(e=>getComputedStyle(e).display!=='none').length)===1);
 await page.emulateMedia({media:'screen'});
 await navigate('#course=missing');check('invalid route',await page.locator('[role=alert]').count()===1);
 await navigate(route('聚变能源概论','L01','transcript'));check('missing view error',await page.locator('[role=alert]').count()===1);
 await navigate(route('聚变能源概论','L01','notes','not-a-real-anchor'));check('missing anchor message',await page.locator('.error').count()===1);
 await navigate('#');
 check('no runtime errors',errors.length===0,errors);check('no network dependencies',external.length===0,external);
 fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({offline:true,checks,views,errors,external,pass:checks.every(c=>c.ok)},null,2));
 console.log(JSON.stringify({pass:true,checks:checks.length,views:views.length}));await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
