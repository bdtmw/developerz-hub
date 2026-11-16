import Link from 'next/link';
import { coreServices } from '@/components/site';

// Line icons for the three core services, keyed by service slug.
const icons: Record<string, React.ReactNode> = {
  'hire-web-developers': <><rect x="3" y="4.5" width="18" height="15" rx="2.2"/><path d="M3 9h18"/><path d="M9.5 12.5l-2 2 2 2"/><path d="M14.5 12.5l2 2-2 2"/></>,
  'hire-wordpress-developers': <><circle cx="12" cy="12" r="9"/><path d="M6.8 9.2l2.6 6.6L12 10l2.6 5.8 2.6-6.6"/></>,
  'hire-full-stack-developers': <><path d="M12 3.5l8.5 4.3L12 12.1 3.5 7.8z"/><path d="M3.5 12l8.5 4.3 8.5-4.3"/><path d="M3.5 16.2l8.5 4.3 8.5-4.3"/></>,
};

export function ExpertiseCards() {
  return <>
    <div className="xp-grid">
      {coreServices.map((s, i) => <Link href={`/${s.slug}/`} className="xp-card" key={s.slug}>
        <div className="xp-top">
          <span className="xp-icon"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[s.slug]}</svg></span>
          <span className="xp-number">0{i + 1}</span>
        </div>
        <h3>{s.title}</h3>
        <p>{s.description}</p>
        <ul>{s.items.slice(0, 3).map(item => <li key={item}>{item}</li>)}</ul>
        <div className="xp-tags">{s.tags.split(' / ').map(tag => <span key={tag}>{tag}</span>)}</div>
        <span className="xp-more">Explore {s.title.toLowerCase().replace('wordpress', 'WordPress')} <span aria-hidden="true">↗</span></span>
      </Link>)}
    </div>
    <p className="xp-all"><Link href="/hire-developers/#all-expertise">Browse all development stacks <span aria-hidden="true">↗</span></Link></p>
  </>;
}
