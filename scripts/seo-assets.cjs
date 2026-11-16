const fs=require('fs'); const path=require('path'); const sharp=require('sharp');
(async()=>{
fs.mkdirSync('public/fonts',{recursive:true});
const url='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..700&family=Space+Grotesk:wght@400..700&display=swap';
const response=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}});if(!response.ok)throw Error('Font CSS '+response.status);const css=await response.text();
const blocks=[...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*\{[^}]+\})/g)].map(m=>m[1]);if(blocks.length!==2)throw Error('Expected two Latin variable font faces, got '+blocks.length);
const local=[];
for(const block of blocks){const family=block.match(/font-family: '([^']+)'/)[1];const fontUrl=block.match(/url\(([^)]+)\)/)[1];const name=family.toLowerCase().replaceAll(' ','-');const r=await fetch(fontUrl);if(!r.ok)throw Error('Font download');fs.writeFileSync(`public/fonts/${name}.woff2`,Buffer.from(await r.arrayBuffer()));local.push(block.replace(fontUrl,`/fonts/${name}.woff2`));const lic=await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${name.replaceAll('-','')}/OFL.txt`);if(!lic.ok)throw Error('License download');fs.writeFileSync(`public/fonts/${name}-LICENSE.txt`,await lic.text());}
fs.writeFileSync('app/fonts.css',local.join('\n')+'\n');
for(const name of ['digital-future','new-perspectives'])for(const width of [480,800]) await sharp(`public/${name}.webp`).resize({width,withoutEnlargement:true}).webp({quality:80}).toFile(`public/${name}-${width}.webp`);
const bg=await sharp('public/digital-future.webp').resize(1200,630,{fit:'cover'}).toBuffer();
const overlay=Buffer.from(`<svg width="1200" height="630"><defs><linearGradient id="g"><stop stop-color="#11091f"/><stop offset=".65" stop-color="#11091f" stop-opacity=".9"/><stop offset="1" stop-color="#11091f" stop-opacity=".2"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/><text x="65" y="285" fill="white" font-family="Arial" font-weight="bold" font-size="64">Your next idea.</text><text x="65" y="365" fill="#f263b0" font-family="Arial" font-weight="bold" font-size="64">Expertly built.</text><text x="65" y="450" fill="#d6c7e0" font-family="Arial" font-size="25">Web · WordPress · Full-stack development</text><text x="65" y="560" fill="#d6c7e0" font-family="Arial" font-size="22">developerzhub.com</text></svg>`);
const logo=await sharp('public/developerz-hub-logo.png').resize({width:300}).toBuffer();await sharp(bg).composite([{input:overlay},{input:logo,left:65,top:65}]).jpeg({quality:88}).toFile('public/social-preview.jpg');
console.log('Self-hosted fonts with licenses, responsive WebP images and 1200×630 social image created.');
})().catch(e=>{console.error(e.message);process.exit(1)});
