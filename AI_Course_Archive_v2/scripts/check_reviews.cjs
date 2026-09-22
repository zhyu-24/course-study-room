// Mechanical checks for any generated lecture. Academic review stays manual.
const {chromium}=require(process.env.COURSE_PLAYWRIGHT||'playwright');
const fs=require('fs'),path=require('path');const {pathToFileURL,fileURLToPath}=require('url');
(async()=>{
 const browser=await chromium.launch({headless:true});
 for(const input of process.argv.slice(2)){
  const dir=path.resolve(input),out=path.join(dir,'assets/qa');fs.mkdirSync(out,{recursive:true});
  const context=await browser.newContext({viewport:{width:1440,height:1000}});await context.setOffline(true);
  const page=await context.newPage(),errors=[],externalRequests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))externalRequests.push(r.url())});
  const url=pathToFileURL(path.join(dir,'Review.html'));
  await page.goto(url.href);await page.waitForFunction(()=>document.querySelector('.katex'));await page.evaluate(()=>document.fonts.ready);
  await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  const modes=await page.locator('[data-mode]').evaluateAll(es=>es.map(e=>e.dataset.mode));
  const links=await page.locator('[href],[src]').evaluateAll(es=>es.map(e=>e.getAttribute('href')||e.getAttribute('src'))),brokenLinks=[];
  for(const link of links){if(!link||link.startsWith('data:'))continue;const u=new URL(link,url);if(u.protocol!=='file:')continue;const f=fileURLToPath(u);if(!fs.existsSync(f))brokenLinks.push(link);else if(u.hash&&f===fileURLToPath(url)){if(!await page.locator('[id]').evaluateAll((es,id)=>es.some(e=>e.id===id),decodeURIComponent(u.hash.slice(1))))brokenLinks.push(link)}}
  const duplicateIds=await page.locator('[id]').evaluateAll(es=>{const ids=es.map(e=>e.id);return ids.filter((id,i)=>ids.indexOf(id)!==i)});
  const views={};
  for(const mode of modes){await page.locator(`[data-mode="${mode}"]`).click();await page.evaluate(async()=>{document.querySelectorAll('article:not([hidden]) details').forEach(d=>d.open=true);await Promise.all([...document.querySelectorAll('article:not([hidden]) img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{})}))});
   const height=await page.evaluate(()=>document.documentElement.scrollHeight);for(let y=0;y<height;y+=1000)await page.evaluate(y=>scrollTo(0,y),y);
   views[mode]=await page.locator('#'+mode).evaluate(e=>({headings:e.querySelectorAll('h2').length,math:e.querySelectorAll('.katex').length,mathErrors:[...e.querySelectorAll('.katex-error')].map(x=>x.textContent),brokenImages:[...e.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),overflow:document.documentElement.scrollWidth>innerWidth}));
   await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:path.join(out,mode+'-top.png')});
  }
  const anchors=await page.locator('#notes a[id]').evaluateAll(es=>es.map(e=>e.id));
  await page.evaluate(id=>location.hash=id,anchors[Math.floor(anchors.length/2)]);await page.waitForTimeout(150);await page.screenshot({path:path.join(out,'middle.png')});
  await page.locator('#notes img').first().click();const lightbox=await page.locator('#lightbox').isVisible();await page.locator('#close-image').click();
  let audio=null,hashSwitch=null;
  if(modes.includes('transcript')){await page.evaluate(()=>location.hash='T01');await page.waitForTimeout(100);hashSwitch=await page.locator('#transcript').isVisible();const buttons=page.locator('[data-seek]');const index=Math.floor(await buttons.count()/2);const expected=Number(await buttons.nth(index).getAttribute('data-seek'));await buttons.nth(index).click();await page.waitForFunction(()=>document.querySelector('audio')?.readyState>=1);await page.waitForTimeout(150);audio=await page.locator('audio').evaluate(a=>({duration:a.duration,currentTime:a.currentTime,error:a.error?.message||null}));audio.expectedTime=expected;audio.seekOK=Math.abs(audio.currentTime-expected)<1;await page.screenshot({path:path.join(out,'transcript-middle.png')});}
  await page.setViewportSize({width:390,height:844});await page.evaluate(id=>location.hash=id,anchors[anchors.length-2]);await page.waitForTimeout(150);await page.screenshot({path:path.join(out,'mobile.png')});const mobileOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  const report={offline:true,externalRequests,errors,brokenLinks,duplicateIds,views,lightbox,hashSwitch,audio,mobileOverflow};
  report.pass=!externalRequests.length&&!errors.length&&!brokenLinks.length&&!duplicateIds.length&&lightbox&&!mobileOverflow&&Object.values(views).every(v=>!v.mathErrors.length&&!v.brokenImages.length&&!v.overflow)&&(!audio||audio.seekOK&&!audio.error)&&hashSwitch!==false;
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({lecture:input,...report}));await context.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
