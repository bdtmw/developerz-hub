const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const ts=require('typescript');
const {load}=require('cheerio');
require.extensions['.ts']=(mod,file)=>mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const {hiringCopies}=require('../lib/hiring-copy.ts');
const dest=path.resolve('../hiring-page-copy');fs.mkdirSync(dest,{recursive:true});
const rows=[];const errors=[];
const count=s=>s.trim().split(/\s+/).filter(Boolean).length;
for(const p of hiringCopies){
 const file=path.resolve('out',p.slug,'index.html');const $=load(fs.readFileSync(file,'utf8'));
 const schema=$('script[type="application/ld+json"]').toArray().map(el=>JSON.parse($(el).html()));
 const faq=schema.find(s=>s['@type']==='FAQPage');
 const body=$('main').clone();body.find('script').remove();
 const text=load(body.html().replace(/<[^>]+>/g,' ')).text().replace(/\s+/g,' ').trim();
 const wordCount=count(text);
 const primary=`hire a ${p.name.toLowerCase()} developer`;
 const checks={sections:$('main>section').length===16,primaryInH1:$('h1').text().toLowerCase().includes(primary),primaryInOpening:text.toLowerCase().split(/\s+/).slice(0,100).join(' ').includes(primary),primaryInH2:$('h2').toArray().filter(h=>$(h).text().toLowerCase().includes(primary)).length>=2,wordCount:wordCount>=2000&&wordCount<=3000,titleLength:p.titleTag.length>=55&&p.titleTag.length<=60,descriptionLength:p.description.length>=150&&p.description.length<=160,oneH1:$('h1').length===1,capabilities:p.sections.find(s=>s.id==='capabilities').blocks.every(b=>count(b.paragraphs[0])>=30&&count(b.paragraphs[0])<=40),faqCount:$('.hiring-faq').length===14,faqMatches:faq?.mainEntity.every((f,i)=>f.name===$('.hiring-faq h3').eq(i).text()&&f.acceptedAnswer.text===$('.hiring-faq>p').eq(i).text()),noindex:$('meta[name="robots"]').attr('content')?.includes('noindex')};
 for(const [check,pass]of Object.entries(checks))if(!pass)errors.push(`${p.slug}: ${check} (${wordCount} words)`);
 const placeholders=[...new Set((text+' '+p.altText.join(' ')).match(/\[ADD [^\]]+\]/g)||[])].sort();
 const lines=[`# Copy deliverable: ${p.name}`,`URL slug: /${p.slug}/`,`Title tag (${p.titleTag.length} characters): ${p.titleTag}`,`Meta description (${p.description.length} characters): ${p.description}`,`Visible copy: ${wordCount} words, including headings, placeholders, form labels and expandable FAQ answers; excluding shared site navigation/footer and JSON-LD.`,`Status: local draft; marked business facts remain unconfirmed.`, '', '---',''];
 function inline(el){return $(el).text().trim().replace(/\s+/g,' ');}
 function walk(el){
  const tag=el.tagName;if(!tag)return;
  if(['script','style'].includes(tag))return;
  if(/^h[123]$/.test(tag)){lines.push(`${'#'.repeat(Number(tag[1]))} ${tag.toUpperCase()}: ${inline(el)}`,'');return;}
  if(tag==='p'){lines.push(inline(el),'');return;}
  if(tag==='table'){const rr=$(el).find('tr').toArray().map(tr=>$(tr).children('th,td').toArray().map(td=>inline(td).replaceAll('|','/')));lines.push('| '+rr[0].join(' | ')+' |','| '+rr[0].map(()=> '---').join(' | ')+' |',...rr.slice(1).map(r=>'| '+r.join(' | ')+' |'),'');return;}
  if(tag==='ul'){lines.push(...$(el).children('li').toArray().map(li=>'- '+inline(li)),'');return;}
  if(tag==='dl'){lines.push(...$(el).children('div').toArray().map(d=>`- ${$(d).find('dt').text()}: ${$(d).find('dd').text()}`),'');return;}
  if(tag==='a'){lines.push(`[${inline(el)}](${$(el).attr('href')})`,'');return;}
  if(tag==='label'){lines.push(`Form field: ${$(el).clone().children().remove().end().text().trim()}`,'');if($(el).find('option').length)lines.push('Choices: '+$(el).find('option').toArray().map(o=>inline(o)).join('; '),'');return;}
  if(tag==='button'){lines.push('Action: '+inline(el),'');return;}
  for(const child of $(el).children().toArray())walk(child);
 }
 for(const el of $('main').children().toArray())walk(el);
 lines.push('---','## Image alt text',...p.altText.map(x=>'- '+x),'','## Internal link suggestions',...p.related.map(l=>`- [${l.label}](${l.path})`),`- [${p.guide.label}](${p.guide.path})`,'- Related service page and case studies need verified URLs; placeholders are not dead links.','','## JSON-LD','```json',JSON.stringify(schema,null,2),'```','','## Placeholder checklist',...placeholders.map(x=>`- [ ] ${x}`),'');
 fs.writeFileSync(path.join(dest,p.slug+'.md'),lines.join('\n'));
 fs.writeFileSync(path.join(dest,p.slug+'.json'),JSON.stringify({url:`https://developerzhub.com/${p.slug}/`,titleTag:p.titleTag,metaDescription:p.description,visibleWordCount:wordCount,copy:p,jsonLd:schema,placeholders},null,2));
 rows.push({slug:p.slug,words:wordCount,titleCharacters:p.titleTag.length,descriptionCharacters:p.description.length,placeholderCount:placeholders.length,checks});
}
fs.writeFileSync(path.join(dest,'validation.json'),JSON.stringify({pages:rows.length,passed:errors.length===0,errors,rows},null,2));
fs.writeFileSync(path.join(dest,'README.md'),`# Developerz Hub hiring-page copy\n\n51 local draft pages following the supplied landing-page brief. Each Markdown file includes metadata, labeled headings, full copy, alt-text guidance, internal links, JSON-LD, word count and a placeholder checklist. JSON files provide the same source in structured form.\n\nBusiness claims remain placeholders. Do not interpret the listed tools as portfolio evidence or the model comparisons as confirmed staffing policies. The dedicated pages describe engagements rather than a programming stack.\n\n| Page | Visible words | Title characters | Description characters |\n| --- | ---: | ---: | ---: |\n${rows.map(r=>`| [${r.slug}](${r.slug}.md) | ${r.words} | ${r.titleCharacters} | ${r.descriptionCharacters} |`).join('\n')}\n`);
console.log(JSON.stringify({pages:rows.length,minWords:Math.min(...rows.map(r=>r.words)),maxWords:Math.max(...rows.map(r=>r.words)),errors},null,2));
assert.equal(errors.length,0,'Hiring copy requirements failed');
