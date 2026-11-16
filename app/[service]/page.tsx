import Link from 'next/link';
import {notFound} from 'next/navigation';
import {hiringCopies,hiringFaqSchema} from '@/lib/hiring-copy';
import {pageMetadata} from '@/lib/seo';
import {Breadcrumbs,ServiceSchema,JsonLd} from '@/components/seo';
import HiringBrief from '@/components/hiring-brief';
export const dynamicParams=false;
export function generateStaticParams(){return hiringCopies.map(p=>({service:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{service:string}>}){const {service}=await params;if(!hiringCopies.some(p=>p.slug===service))notFound();return pageMetadata(`/${service}/`);}
export default async function Page({params}:{params:Promise<{service:string}>}){
 const {service}=await params;const p=hiringCopies.find(page=>page.slug===service);if(!p)notFound();
 return <main id="main" className="hiring-page">
  <ServiceSchema name={`Hire a ${p.name} developer`} description={p.description} path={`/${p.slug}/`}/><JsonLd data={hiringFaqSchema(p)}/>
  <section className="section hiring-hero">
   <Breadcrumbs items={[{name:'Hire developers',path:'/hire-developers/'},{name:`Hire a ${p.name} developer`,path:`/${p.slug}/`}]}/>
   <p className="draft-notice">LOCAL COPY DRAFT · Bracketed facts need completion.</p>
   <h1>{p.h1}</h1><p className="intro-description">{p.intro}</p>
   <div className="brief-actions"><a className="button" href="#hiring-enquiry">Prepare hiring brief ↗</a><a className="button light" href="#pricing">Compare hiring models ↓</a></div>
   <p className="hiring-trust">Reviews: [ADD VERIFIED REVIEW SCORE, COUNT AND SOURCE]</p>
   <dl className="hiring-glance">{p.glance.map(([term,value])=><div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
  </section>
  {p.sections.map(section=><section className={`section hiring-section hiring-${section.id}`} id={section.id} key={section.id}>
   <h2>{section.heading}</h2><p className="section-answer">{section.answer}</p>
   <div className="hiring-blocks">{section.blocks.map((block,index)=><div className="hiring-block" key={block.heading??index}>{block.heading&&<h3>{block.heading}</h3>}{block.paragraphs?.map((text,i)=><p key={i}>{text}</p>)}{block.items&&<ul>{block.items.map(item=><li key={item}>{item}</li>)}</ul>}</div>)}</div>
   {section.table&&<div className="table-scroll" tabIndex={0} role="region" aria-label="Hiring arrangement comparison"><table><caption>Compare the proposed hiring arrangements</caption><thead><tr>{section.table.headers.map(h=><th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{section.table.rows.map(row=><tr key={row[0]}>{row.map((cell,i)=>i===0?<th scope="row" key={i}>{cell}</th>:<td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>}
   {section.id==='fit'&&<nav aria-label="Alternative developer roles" className="hiring-related">{p.related.map(link=><Link href={link.path} key={link.path}>{link.label} ↗</Link>)}</nav>}
  </section>)}
  <section className="section hiring-section" id="faq"><h2>What else should you know before hiring a {p.name} developer?</h2><p className="section-answer">Use these answers to clarify the {p.name} responsibilities and the proposal terms still to confirm.</p>{p.faq.map(f=><details key={f.question} className="hiring-faq"><summary><h3>{f.question}</h3></summary><p>{f.answer}</p></details>)}</section>
  <section className="section hiring-section hiring-enquiry" id="hiring-enquiry"><h2>Prepare your {p.name} hiring brief</h2><p>Describe the work, choose a hiring model to discuss and prepare your enquiry for info@developerzhub.com.</p><HiringBrief stack={p.name}/><p>Phone / WhatsApp: [ADD VERIFIED PHONE AND WHATSAPP LINK]. Booking alternative: [ADD BOOKING URL].</p></section>
  <section className="section hiring-section hiring-footer"><h2>Explore related expertise and evidence</h2><p>Compare the linked roles with the {p.name} scope before choosing the next step.</p><nav className="hiring-related" aria-label="Related hiring resources">{p.related.map(link=><Link href={link.path} key={link.path}>{link.label} ↗</Link>)}<Link href={p.guide.path}>{p.guide.label} ↗</Link></nav><p>Related services page: [ADD {p.name.toUpperCase()} SERVICES PAGE URL]. Case studies: [ADD VERIFIED CASE STUDIES URL].</p></section>
 </main>;
}
