import Link from 'next/link';
import {stackGroups, stackPages, stackPath} from '@/lib/expanded-services';

const groupId = (name:string) => `stack-${name.toLowerCase().replace(/[^a-z]+/g,'-')}`;
export default function StackDirectory(){
 return <section className="section stack-directory" id="all-expertise">
  <p className="eyebrow">FIND YOUR DEVELOPMENT STACK</p>
  <h2>One partner.<br/><em>A full spectrum of expertise.</em></h2>
  <p className="intro-description">From an interface to the systems behind it, explore the expertise your project needs. Each service explains what to build, what to prepare and how to review the result.</p>
  <nav className="stack-jumps" aria-label="Development categories">{stackGroups.map(group=><a href={`#${groupId(group)}`} key={group}>{group} <span aria-hidden="true">↓</span></a>)}</nav>
  {stackGroups.map(group=><section className="stack-group" id={groupId(group)} key={group}>
   <h3>{group}</h3>
   <div className="stack-grid">{stackPages.filter(s=>s.group===group).map(s=><Link href={stackPath(s.slug)} key={s.slug} className="stack-card"><h4>{s.name}<span aria-hidden="true">↗</span></h4><p>{s.summary}</p><span className="stack-card-label">Explore development services</span></Link>)}</div>
  </section>)}
  <p className="stack-help">Not sure which stack fits? <Link href="/contact/">Describe your project</Link> and we’ll help define the technical scope.</p>
 </section>;
}
