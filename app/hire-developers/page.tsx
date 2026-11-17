import StackDirectory from '@/components/stack-directory';
import Link from 'next/link';
import {CTA, ServiceLinks} from '@/components/site';
import {Breadcrumbs} from '@/components/seo';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('/hire-developers/');
export default function Page(){return <main id="main" className="template-hire-dev">

  <section className="hd-hero">
    <Breadcrumbs items={[{name:'Hire developers',path:'/hire-developers/'}]}/>
    <p className="eyebrow">THE RIGHT EXPERTISE</p>
    <h1>Hire developers.<br/><em>Build your next chapter.</em></h1>
    <p className="hd-intro">Hire developers across web, mobile, backend, ecommerce, cloud and specialist technologies. Start with the outcome you need, then match your project with the right technical responsibilities.</p>
    <div className="hd-hero-actions">
      <a href="#all-expertise" className="button">Browse all stacks ↓</a>
      <Link href="/contact/" className="text-link">Start a brief →</Link>
    </div>
  </section>

  <div className="about-stats" aria-label="Developerz Hub overview">
    <div className="about-stat"><strong>1,000+</strong><span>Projects delivered</span></div>
    <div className="about-stat"><strong>50+</strong><span>Developers available</span></div>
    <div className="about-stat"><strong>12+</strong><span>Technology stacks</span></div>
    <div className="about-stat"><strong>7+</strong><span>Years active</span></div>
  </div>

  <section className="hd-featured">
    <p className="eyebrow">MOST REQUESTED</p>
    <h2>Start with the right<br/><em>development stack.</em></h2>
    <ServiceLinks/>
  </section>

  <section className="hd-match">
    <div className="hd-match-header">
      <p className="eyebrow">FIND YOUR FIT</p>
      <h2>Which developer does<br/>your project need?</h2>
    </div>
    <div className="hd-match-grid">
      <div className="hd-match-item">
        <span className="hd-match-num">01</span>
        <h3>Business website or frontend</h3>
        <p>Page layouts, content, mobile experience and integrations.</p>
        <Link href="/hire-web-developers/" className="hd-match-link">Hire a web developer →</Link>
      </div>
      <div className="hd-match-item">
        <span className="hd-match-num">02</span>
        <h3>Editable content website</h3>
        <p>Content types, themes, plugins and publishing workflow.</p>
        <Link href="/hire-wordpress-developers/" className="hd-match-link">Hire a WordPress developer →</Link>
      </div>
      <div className="hd-match-item">
        <span className="hd-match-num">03</span>
        <h3>Application with custom data and workflows</h3>
        <p>User roles, APIs, data models, authentication and operations.</p>
        <Link href="/hire-full-stack-developers/" className="hd-match-link">Hire full-stack developers →</Link>
      </div>
    </div>
    <p className="hd-match-more">Also explore <Link href="/hire-software-developers/">custom software development</Link>, <Link href="/hire-dedicated-developers/">dedicated developer engagements</Link>, or read our <Link href="/guides/how-to-hire-developer/">guide to choosing the right developer role</Link>.</p>
  </section>

  <section className="hd-prepare">
    <div className="hd-prepare-left">
      <p className="eyebrow">BEFORE YOU START</p>
      <h2>What to prepare<br/><em>before hiring.</em></h2>
      <p className="hd-prepare-desc">A well-prepared brief gets better estimates, clearer responsibilities and a faster project start. Ask what is included in design, development, testing, revisions and handover before you compare proposals.</p>
      <div className="hd-guide-links">
        <Link href="/guides/web-developer-cost/" className="hd-guide-card">
          <strong>Cost guide</strong>
          <span>What shapes a useful project estimate, with an illustrative budget and a proposal checklist.</span>
        </Link>
        <Link href="/guides/hire-developer-startup/" className="hd-guide-card">
          <strong>Startup hiring guide</strong>
          <span>How to find the right development partner for your first product.</span>
        </Link>
      </div>
    </div>
    <ul className="hd-checklist">
      <li>The business problem and the people the website or application will serve.</li>
      <li>Your must-have user journeys and features you can defer.</li>
      <li>Existing designs, content, website URLs or technical documentation.</li>
      <li>Required integrations, deadline constraints and budget expectations.</li>
      <li>Who will review deliverables and maintain the result after launch.</li>
    </ul>
  </section>

  <StackDirectory/>
  <CTA/>
</main>}
