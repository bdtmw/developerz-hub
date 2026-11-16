import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';

const origin='https://developerzhub.com';
const production=process.argv.includes('--production');
const out=path.resolve('out');
function discoverRoutes(directory=out){return fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{if(entry.name.startsWith('_')||entry.name==='fonts'||entry.name==='404')return [];const full=path.join(directory,entry.name);if(entry.isDirectory())return discoverRoutes(full);if(entry.name!=='index.html')return [];const relative=path.relative(out,directory).split(path.sep).join('/');return [relative?`/${relative}/`:'/'];});}
const routes=discoverRoutes().sort();
const errors=[];const rows=[];const titles=new Set();const descriptions=new Set();
const check=(condition,message)=>{if(!condition)errors.push(message);};
const pageFile=route=>path.join(out,route,'index.html');
for(const route of routes){
  if(!fs.existsSync(pageFile(route))){errors.push(`Missing page ${route}`);continue;}
  const $=load(fs.readFileSync(pageFile(route),'utf8'));
  const title=$('title').text();const description=$('meta[name="description"]').attr('content');const canonical=$('link[rel="canonical"]').attr('href');const robotTags=$('meta[name="robots"]').map((_,el)=>$(el).attr('content')).get().join(',');
  check($('html').attr('lang')==='en',`${route}: missing document language`);
  check($('h1').length===1,`${route}: expected one h1, got ${$('h1').length}`);
  check(Boolean(title)&&!titles.has(title),`${route}: missing or duplicate title`);titles.add(title);
  check(Boolean(description)&&!descriptions.has(description),`${route}: missing or duplicate description`);descriptions.add(description);
  check(canonical===`${origin}${route}`,`${route}: incorrect canonical ${canonical}`);
  check($('meta[property="og:url"]').attr('content')===canonical,`${route}: OG URL mismatch`);
  check($('meta[property="og:title"]').attr('content')===title,`${route}: OG title mismatch`);
  check($('meta[name="twitter:card"]').attr('content')==='summary_large_image',`${route}: missing social card`);
  check($('meta[property="og:image"]').attr('content')===`${origin}/social-preview.jpg`,`${route}: missing social image`);
  const shouldIndex=production&&route!=='/privacy/';
  check(shouldIndex?!robotTags.includes('noindex')&&/(^|[, ])index([, ]|$)/.test(robotTags):robotTags.includes('noindex'),`${route}: incorrect indexing state (${robotTags})`);
  check(!robotTags.includes('nofollow'),`${route}: internal links should be followable`);
  const schema=[];
  $('script[type="application/ld+json"]').each((_,el)=>{try{const obj=JSON.parse($(el).html());check(obj['@context']==='https://schema.org',`${route}: schema context missing`);schema.push(...(obj['@graph']||[obj]));}catch{errors.push(`${route}: invalid JSON-LD`);}});
  for(const type of ['Organization','WebSite'])check(schema.some(s=>s['@type']===type),`${route}: missing ${type} schema`);
  if(route.startsWith('/hire-')&&route!=='/hire-developers/')check(schema.some(s=>s['@type']==='Service'),`${route}: missing Service schema`);
  if(route.startsWith('/guides/')&&route!=='/guides/')check(schema.some(s=>s['@type']==='Article'),`${route}: missing Article schema`);
  if(!['/','/privacy/'].includes(route))check(schema.some(s=>s['@type']==='BreadcrumbList'),`${route}: missing breadcrumbs`);
  $('a[href]').each((_,el)=>{
    const href=$(el).attr('href');if(!href||/^(mailto:|tel:|https?:\/\/)/.test(href))return;
    const url=new URL(href,origin+route);let file=pageFile(url.pathname);if(!url.pathname.endsWith('/'))file=path.join(out,url.pathname);
    check(fs.existsSync(file),`${route}: broken internal link ${href}`);
    if(url.hash&&fs.existsSync(file)&&file.endsWith('.html')){const target=load(fs.readFileSync(file,'utf8'));check(target('[id]').toArray().some(n=>target(n).attr('id')===decodeURIComponent(url.hash.slice(1))),`${route}: broken anchor ${href}`);}
  });
  $('img').each((_,el)=>{const img=$(el);check(img.attr('alt')!==undefined,`${route}: image missing alt`);check(Boolean(img.attr('width')&&img.attr('height')),`${route}: image missing dimensions`);const src=img.attr('src');if(src?.startsWith('/'))check(fs.existsSync(path.join(out,src)),`${route}: missing image ${src}`);});
  $('main script').remove();const words=$('main').text().trim().split(/\s+/).length;
  rows.push({route,title,titleCharacters:title.length,descriptionCharacters:description?.length,words,canonical,indexable:shouldIndex,schema:schema.map(s=>s['@type'])});
}
const xml=load(fs.readFileSync(path.join(out,'sitemap.xml'),'utf8'),{xmlMode:true});const locs=xml('loc').map((_,el)=>xml(el).text()).get();
check(locs.length===routes.length-1,'Sitemap must contain all public content pages except privacy');
for(const route of routes.filter(r=>r!=='/privacy/'))check(locs.includes(origin+route),`Sitemap missing ${route}`);
check(locs.every(url=>url.startsWith(origin+'/')&&!url.includes('localhost')),'Sitemap contains incorrect origin');
const robots=fs.readFileSync(path.join(out,'robots.txt'),'utf8');check(robots.includes('Allow: /'),'robots.txt must permit crawling so meta noindex can be read');check(production?robots.includes(`${origin}/sitemap.xml`):!robots.includes('Sitemap:'),'robots sitemap declaration mismatch');
check(load(fs.readFileSync(path.join(out,'404.html'),'utf8'))('meta[name="robots"]').toArray().some(el=>load(el)('meta').attr('content')?.includes('noindex')),'404 should be noindex');
const report={mode:production?'production-indexable':'local-noindex',pages:rows.length,checksPassed:errors.length===0,errors,rows};
const reportAt=process.argv.indexOf('--report');if(reportAt!==-1)fs.writeFileSync(process.argv[reportAt+1],JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));assert.equal(errors.length,0,`${errors.length} SEO checks failed`);
