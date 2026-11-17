import './lp.css';
import { LeadForm } from './lead-form';
import { BodyClass } from './body-class';
import { ThemeToggle } from './theme-toggle';
import { ExpertBar } from './expert-bar';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Hire a React Developer | Developerz Hub — Response in 24 Hours' },
  description: 'Hire expert React and Next.js developers. Tell us what you need — get a scoped brief and response within 24 hours. No lock-in.',
  robots: { index: false, follow: false },
};

const TICKER = [
  "Alex's React dashboard went live — London · 2 min ago",
  "Sarah's Next.js migration completed — Manchester · 1 hr ago",
  'James fixed a React production bug — New York · just now',
  "Priya's Next.js App Router refactor shipped — Toronto · 45 min ago",
  'Liam started a React component library — Dubai · 3 min ago',
  "Chen's Next.js e-commerce build launched — Singapore · 20 min ago",
];

const PROBLEMS = [
  { n: '01', title: 'New website build', desc: 'Brand identity, design system, marketing pages and CMS. Launch-ready from day one.' },
  { n: '02', title: 'React / Next.js app', desc: 'SPAs, SSR apps, dashboards and customer portals. Modern stack, clean architecture.' },
  { n: '03', title: 'WordPress or WooCommerce', desc: 'CMS builds, theme development, plugin customisation and e-commerce setup.' },
  { n: '04', title: 'E-commerce platform', desc: 'Shopify, WooCommerce or bespoke checkout. Product catalogue, payments and fulfilment.' },
  { n: '05', title: 'Backend API or service', desc: 'Node.js, Laravel, Python microservices and third-party API integrations.' },
  { n: '06', title: 'Performance & Core Web Vitals', desc: 'Speed audit, bundle optimisation, LCP/CLS improvements and pagespeed recovery.' },
];

const PROCESS = [
  { n: '01', title: 'Send a brief', body: 'Fill in the form. A project manager reviews your requirements and responds within 24 hours.' },
  { n: '02', title: 'Scope the project', body: 'Discovery call to clarify deliverables, timeline and budget. No obligation.' },
  { n: '03', title: 'Build and ship', body: 'Development starts with weekly check-ins, staged delivery and final handover.' },
];

const REVIEWS = [
  { name: 'Derick', country: 'United States', project: 'WordPress development', quote: 'Clean code, fast performance, responsive design, and great communication from start to finish. He understood our requirements immediately, offered smart suggestions, and delivered exactly what we needed—on time and without shortcuts.' },
  { name: 'Zachary', country: 'Canada', project: 'Corporate website development', quote: 'He quickly understood our needs and delivered high-quality work that exceeded expectations. Communication was clear throughout the process, and he handled revisions promptly and professionally.' },
  { name: 'Leonor', country: 'United States', project: 'Booking website development', quote: 'They were very attentive to detail and made sure to deliver everything exactly as I asked for. Communication was smooth and timely throughout the entire project.' },
];

const FAQS = [
  { q: 'How quickly can development start?', a: 'Typically within 1–2 weeks of your brief review and discovery call, once scope and budget are agreed.' },
  { q: 'Fixed price or time-and-materials?', a: 'Both — we agree on the right model for your project. Defined builds usually suit fixed-price; ongoing products suit a retainer.' },
  { q: 'Can you match our existing tech stack?', a: 'Yes. We work across 12+ stacks including React, Next.js, Node.js, Laravel, WordPress, Shopify, Flutter and more.' },
  { q: 'What if I already have a design?', a: 'Hand us your Figma or design files and we build from them. We also provide design as part of full-service engagements.' },
  { q: "What if I'm not happy with the work?", a: 'We iterate until it\'s right. The process includes staged milestone reviews before final delivery.' },
];

export default function Page() {
  return (
    <main id="main" className="template-lp">
      <BodyClass className="has-lp-ticker" />
      <ThemeToggle />
      <ExpertBar />

      {/* ── Ticker ── */}
      <div className="lp-ticker" aria-hidden="true">
        <div className="lp-tick-track">
          {[...TICKER, ...TICKER].map((msg, i) => (
            <span key={i} className="lp-tick-item">✦ {msg}</span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="lp-hero">
        <div className="lp-headline">
          <p className="eyebrow lp-eyebrow">REACT, NEXT.JS &amp; FULL-STACK DEVELOPMENT</p>
          <h1>Hire a React Developer.<br/><em>Complete Fixes or New Builds.<br/>Start in 10 Minutes.</em></h1>
          <p className="lp-sub">React, Next.js and full-stack development. Whether you need a complete page rebuild or a production fix — brief your project in minutes and we scope, staff and start building.</p>
          <ul className="lp-trust">
            <li>1,000+ projects delivered globally</li>
            <li>Dedicated project manager on every job</li>
            <li>Fixed-price or monthly retainer options</li>
            <li>No lock-in, cancel-friendly terms</li>
          </ul>
          <div className="lp-hero-ctas">
            <a href="#lp-form" className="button">Get a Free Quote →</a>
            <a href="mailto:info@developerzhub.com" className="lp-link-cta">Email us directly ↗</a>
          </div>
          <p className="lp-hero-note">Brief takes under 10 minutes. We respond within 24 hours.</p>
        </div>

        <div className="lp-form-col">
          <div className="lp-form-box">
            <p className="lp-form-title">Get Your Free Quote</p>
            <p className="lp-form-sub">Tell us what you're building — we'll come back with a scope and estimate.</p>
            <LeadForm id="lp-form" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="lp-stats">
        <div className="lp-stat"><strong>1,000+</strong><span>Projects delivered</span></div>
        <div className="lp-stat"><strong>7+</strong><span>Years active</span></div>
        <div className="lp-stat"><strong>4.9★</strong><span>Client rating</span></div>
        <div className="lp-stat"><strong>50+</strong><span>Developers</span></div>
      </div>

      {/* ── Problems ── */}
      <section className="lp-problems">
        <div className="lp-section-header">
          <p className="eyebrow">WHAT WE BUILD</p>
          <h2>Developers for the work<br/><em>that actually matters.</em></h2>
          <p className="lp-section-sub">Whether you're launching a new product, fixing a production issue or scaling an existing platform — we have the right stack.</p>
        </div>
        <div className="lp-problems-grid">
          {PROBLEMS.map(p => (
            <div key={p.n} className="lp-problem-card">
              <span className="lp-problem-num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="lp-problems-cta">
          <a href="#lp-form" className="button">Brief your project →</a>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="lp-process-section">
        <div className="lp-section-header">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From brief to build<br/><em>in three steps.</em></h2>
        </div>
        <div className="lp-process-grid">
          {PROCESS.map(s => (
            <div key={s.n} className="lp-process-step">
              <span className="lp-step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="lp-pricing-section">
        <div className="lp-section-header">
          <p className="eyebrow">ENGAGEMENT OPTIONS</p>
          <h2>Simple, honest pricing.<br/><em>No surprises.</em></h2>
          <p className="lp-section-sub">Every engagement includes a dedicated project manager and clear milestone sign-off.</p>
        </div>
        <div className="lp-pricing-grid">
          <div className="lp-price-card">
            <p className="lp-price-label">Fixed project</p>
            <p className="lp-price-desc">Scoped deliverables, milestone payments, defined timeline. Best for defined builds with clear requirements.</p>
            <ul className="lp-price-features">
              <li>Agreed scope and deliverables</li>
              <li>Milestone-based payments</li>
              <li>Dedicated project manager</li>
              <li>Staged review and sign-off</li>
            </ul>
            <a href="#lp-form" className="button lp-form-btn">Get a fixed quote →</a>
          </div>
          <div className="lp-price-card lp-price-featured">
            <p className="lp-price-badge">Most popular</p>
            <p className="lp-price-label">Monthly retainer</p>
            <p className="lp-price-desc">Ongoing development at a set monthly rate. Best for products, platforms and long-term technical partnerships.</p>
            <ul className="lp-price-features">
              <li>Flexible priorities each month</li>
              <li>Weekly progress updates</li>
              <li>Dedicated project manager</li>
              <li>Cancel with 30 days' notice</li>
            </ul>
            <a href="#lp-form" className="button lp-form-btn">Start a retainer →</a>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="lp-reviews-section">
        <div className="lp-section-header">
          <p className="eyebrow">CLIENT REVIEWS</p>
          <h2>Good work.<br/><em>In our clients' words.</em></h2>
        </div>
        <div className="lp-reviews-grid">
          {REVIEWS.map(r => (
            <figure key={r.name} className="lp-review-card">
              <div className="lp-review-top">
                <span className="lp-review-project">{r.project}</span>
                <span className="lp-review-stars" aria-label="Rated 5 out of 5">★★★★★ <b>5.0</b></span>
              </div>
              <blockquote><p>&#8220;{r.quote}&#8221;</p></blockquote>
              <figcaption>
                <span className="lp-review-avatar" aria-hidden="true">{r.name[0]}</span>
                <span><strong>{r.name}</strong><small>{r.country}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lp-faq-section">
        <div className="lp-faq-inner">
          <div className="lp-faq-header">
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2>Everything you need<br/><em>to know before hiring.</em></h2>
            <a href="#lp-form" className="button lp-form-btn" style={{marginTop:'32px',display:'inline-flex'}}>Brief your project →</a>
          </div>
          <dl className="lp-faq-list">
            {FAQS.map(f => (
              <div key={f.q} className="lp-faq-item">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="lp-bottom-cta">
        <div className="lp-bottom-inner">
          <div className="lp-bottom-copy">
            <h2>Ready to hire a developer?</h2>
            <p>Brief your project and hear back within 24 hours. No spam, no lock-in — just good development work.</p>
            <div className="lp-bottom-links">
              <a href="mailto:info@developerzhub.com" className="lp-link-cta lp-link-light">info@developerzhub.com ↗</a>
              <Link href="/hire-developers/" className="lp-link-cta lp-link-light">Browse all stacks ↗</Link>
            </div>
          </div>
          <div className="lp-bottom-form">
            <LeadForm id="lp-form-bottom" />
          </div>
        </div>
      </section>

    </main>
  );
}
