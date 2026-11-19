import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/about/');

const steps = [
  {
    num: '01',
    heading: 'Start with what matters',
    body: 'A useful brief connects business goals to specific user journeys. We use it to discuss the right development scope, the content and integrations required, and the decisions needed before work begins.',
  },
  {
    num: '02',
    heading: 'Make responsibilities explicit',
    body: 'Define deliverables, review milestones, access requirements and ownership before implementation. Content, hosting, software licences and ongoing support should all have clear owners.',
  },
  {
    num: '03',
    heading: 'Review working outcomes',
    body: 'Use observable acceptance criteria: a visitor can submit an enquiry, an editor can update a page, a customer can complete a workflow. Documentation and handover are part of every maintainable result.',
  },
];

const stats = [
  { value: '1,000+', label: 'Projects delivered' },
  { value: '50+', label: 'Developers' },
  { value: '12+', label: 'Technology stacks' },
  { value: '7+', label: 'Years active' },
];

export default function Page() {
  return (
    <main id="main" className="template-about">
      <section className="about-hero">
        <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" />DEVELOPERZ HUB</p>
        <h1>A clear approach<br />to <em>digital development.</em></h1>
        <p className="about-intro">Developerz Hub works across web, mobile, backend, ecommerce and specialist development stacks. Our starting point is the problem you want to solve and the experience you want to create.</p>
        <div className="about-hero-actions">
          <Link href="/contact/" className="button">Start a project brief <span aria-hidden="true">↗</span></Link>
          <Link href="/hire-developers/" className="text-link">Browse developers <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <div className="about-stats" aria-label="Company overview">
        {stats.map(s => (
          <div key={s.label} className="about-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <section className="about-approach">
        <p className="eyebrow">HOW WE WORK</p>
        <h2>Three steps to a<br /><em>project that ships.</em></h2>
        <div className="about-steps">
          {steps.map(s => (
            <div key={s.num} className="about-step">
              <span className="about-step-num">{s.num}</span>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-links">
        <div className="about-links-header">
          <div>
            <p className="eyebrow">WHAT WE BUILD</p>
            <h2>Explore our <em>expertise</em></h2>
          </div>
          <Link href="/hire-developers/#all-expertise" className="text-link about-links-all">Browse all stacks <span aria-hidden="true">↗</span></Link>
        </div>
        <ul className="about-link-list">
          <li>
            <Link href="/hire-web-developers/">Web development</Link>
            <span>Websites and browser-based applications.</span>
          </li>
          <li>
            <Link href="/hire-wordpress-developers/">WordPress development</Link>
            <span>Content publishing and editable websites.</span>
          </li>
          <li>
            <Link href="/hire-full-stack-developers/">Full-stack development</Link>
            <span>Connected interfaces, APIs and application data.</span>
          </li>
          <li>
            <Link href="/hire-mobile-app-developers/">Mobile app development</Link>
            <span>iOS and Android native and cross-platform apps.</span>
          </li>
          <li>
            <Link href="/hire-shopify-developers/">Shopify development</Link>
            <span>Custom themes, apps and ecommerce flows.</span>
          </li>
          <li>
            <Link href="/hire-chatbot-developers/">Chatbot &amp; AI applications</Link>
            <span>Conversational interfaces and AI-powered tools.</span>
          </li>
        </ul>
      </section>

      <section className="cta-section">
        <span className="cta-spark" aria-hidden="true">✦</span>
        <h2>Hire a developer<br />or <em>brief a project.</em></h2>
        <p style={{ fontSize: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
          Email <a href="mailto:info@developerzhub.com" style={{ color: 'inherit' }}>info@developerzhub.com</a> with a short overview,
          or use the project brief form to get started.
        </p>
        <Link href="/contact/" className="button" style={{ position: 'relative', zIndex: 1 }}>Create a project brief <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
