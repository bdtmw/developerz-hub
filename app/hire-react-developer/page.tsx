import './lp.css';
import { LeadForm } from './lead-form';
import { BodyClass } from './body-class';
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
  { name: 'Marcus', country: 'Australia', project: 'React stock photography marketplace', quote: 'Developer understood what I was looking for and got it right from the very start.' },
  { name: 'Sophie', country: 'United Kingdom', project: 'Next.js animation project', quote: 'Thank you.' },
  { name: 'James', country: 'United States', project: 'HVAC admin dashboard', quote: 'Responsive communication throughout and delivered exactly what we needed. Would absolutely hire again.' },
  { name: 'Priya', country: 'Canada', project: 'Quoting and payment setup', quote: 'Fast responses and got the payment processing and transfers set up quickly and correctly.' },
  { name: 'Tom', country: 'United Kingdom', project: 'Calculator updates', quote: 'Great quality work, clear communication, and completed ahead of schedule. Really pleased with the result.' },
  { name: 'Rachel', country: 'Australia', project: 'Website updates', quote: 'Consistently high quality across several projects. Reliable, thorough, and easy to work with.' },
  { name: 'Daniel', country: 'United States', project: 'Admin panel feature update', quote: 'Excellent work on the feature update. Delivered cleanly and on time — highly recommended.' },
];

const FAQS = [
  { q: 'How quickly can development start?', a: 'Typically within 1–2 weeks of your brief review and discovery call, once scope and budget are agreed.' },
  { q: 'How does pricing work?', a: 'Two models: $20/hr for focused fixes and production issues, or a fixed quote for complete projects. We agree upfront so there are no surprises.' },
  { q: 'Can you match our existing tech stack?', a: 'Yes. We work across 12+ stacks including React, Next.js, Node.js, Laravel, WordPress, Shopify, Flutter and more.' },
  { q: 'What if I already have a design?', a: 'Hand us your Figma or design files and we build from them. We also provide design as part of full-service engagements.' },
  { q: "What if I'm not happy with the work?", a: 'We iterate until it\'s right. The process includes staged milestone reviews before final delivery.' },
];

export default function Page() {
  return (
    <main id="main" className="template-lp">
      <BodyClass className="has-lp-ticker" />
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
            <li>$20/hr fixes or fixed quote for complete projects</li>
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
            <p className="lp-price-label">Hourly fixes</p>
            <p className="lp-price-amount">$20 <span className="lp-price-unit">/ hour</span></p>
            <p className="lp-price-desc">Pay for exactly what you need. Best for bug fixes, production issues, and focused improvements with a clear scope.</p>
            <ul className="lp-price-features">
              <li>No minimum commitment</li>
              <li>Time tracked and reported</li>
              <li>Same-day start available</li>
              <li>React, Next.js, full-stack</li>
            </ul>
            <a href="#lp-form" className="button lp-form-btn">Brief a fix →</a>
          </div>
          <div className="lp-price-card lp-price-featured">
            <p className="lp-price-badge">Complete projects</p>
            <p className="lp-price-label">Fixed quote</p>
            <p className="lp-price-desc">One price for the whole project — no surprises. Best for complete page builds, new apps, and defined deliverables.</p>
            <ul className="lp-price-features">
              <li>Agreed scope and deliverables</li>
              <li>Milestone-based payments</li>
              <li>Dedicated project manager</li>
              <li>Staged review and sign-off</li>
            </ul>
            <a href="#lp-form" className="button lp-form-btn">Get a fixed quote →</a>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="lp-reviews-section">
        <div className="lp-section-header">
          <p className="eyebrow">CLIENT REVIEWS</p>
          <h2>Good work.<br/><em>In our clients' words.</em></h2>
        </div>
        <div className="lp-marquee-wrap" aria-label="Client reviews">
          {/* Row 1 — scrolls left */}
          <div className="lp-marquee-track lp-marquee-left" aria-hidden="true">
            {[...REVIEWS.slice(0, 5), ...REVIEWS.slice(0, 5)].map((r, i) => (
              <figure key={i} className="lp-review-card">
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
          {/* Row 2 — scrolls right */}
          <div className="lp-marquee-track lp-marquee-right" aria-hidden="true">
            {[...REVIEWS.slice(5), ...REVIEWS.slice(5)].map((r, i) => (
              <figure key={i} className="lp-review-card">
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
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="lp-cases-section">
        <div className="lp-section-header">
          <p className="eyebrow">REACT PROJECTS WE'VE BUILT</p>
          <h2>Real work.<br/><em>Real React.</em></h2>
          <p className="lp-section-sub">Anonymous case studies from live projects — different kinds of React and Next.js work, end to end.</p>
        </div>
        <div className="lp-cases-grid">
          <article className="lp-case-card">
            <div className="lp-case-preview lp-case-preview-marketplace">
              <div className="lp-case-screen">
                <div className="lp-case-row"><span className="lp-case-pill lp-case-pill-img"/><span className="lp-case-pill lp-case-pill-img"/><span className="lp-case-pill lp-case-pill-img"/></div>
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-txt"/><span className="lp-case-pill lp-case-pill-price"/></div>
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-long"/></div>
                <div className="lp-case-stripe-btn">Pay &amp; download</div>
              </div>
            </div>
            <div className="lp-case-body">
              <p className="lp-case-type">Marketplace</p>
              <h3>Stock photography marketplace</h3>
              <p>Photographers manage galleries, upload images, and set prices. Buyers browse watermarked previews, pay through Stripe, and download at their chosen resolution.</p>
              <ul className="lp-case-stack"><li>React</li><li>TanStack Start</li><li>Stripe</li></ul>
            </div>
          </article>

          <article className="lp-case-card">
            <div className="lp-case-preview lp-case-preview-quote">
              <div className="lp-case-screen">
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-long"/><span className="lp-case-pill lp-case-pill-short"/></div>
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-long"/><span className="lp-case-pill lp-case-pill-short"/></div>
                <div className="lp-case-divider"/>
                <div className="lp-case-total"><span className="lp-case-total-label">Total</span><span className="lp-case-total-val">£ 4,820.00</span></div>
                <div className="lp-case-stripe-btn lp-case-btn-alt">Print estimate</div>
              </div>
            </div>
            <div className="lp-case-body">
              <p className="lp-case-type">Internal tool</p>
              <h3>Custom quoting and order management</h3>
              <p>Staff enter product dimensions and options; the tool calculates margins and generates a printable estimate. One workflow from configuration to quote.</p>
              <ul className="lp-case-stack"><li>React</li><li>TypeScript</li></ul>
            </div>
          </article>

          <article className="lp-case-card">
            <div className="lp-case-preview lp-case-preview-eng">
              <div className="lp-case-screen">
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-long"/></div>
                <div className="lp-case-calc">
                  <div className="lp-case-calc-row"><span className="lp-case-calc-label">Annual savings</span><span className="lp-case-calc-val lp-case-val-green">£12,400</span></div>
                  <div className="lp-case-calc-row"><span className="lp-case-calc-label">Payback period</span><span className="lp-case-calc-val">2.1 yrs</span></div>
                  <div className="lp-case-calc-row"><span className="lp-case-calc-label">Operating cost</span><span className="lp-case-calc-val">£ 3,200</span></div>
                </div>
              </div>
            </div>
            <div className="lp-case-body">
              <p className="lp-case-type">Platform + CMS</p>
              <h3>Engineering platform and CMS</h3>
              <p>Technical documentation, project submissions, and an energy analysis calculator in one Next.js application. The calculator outputs savings, operating costs, and payback period.</p>
              <ul className="lp-case-stack"><li>Next.js</li><li>TypeScript</li><li>Supabase</li></ul>
            </div>
          </article>

          <article className="lp-case-card">
            <div className="lp-case-preview lp-case-preview-portal">
              <div className="lp-case-screen">
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-txt"/><span className="lp-case-pill lp-case-pill-status lp-case-status-green">In review</span></div>
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-txt"/><span className="lp-case-pill lp-case-pill-status lp-case-status-amber">Pending</span></div>
                <div className="lp-case-row lp-case-row-sm"><span className="lp-case-pill lp-case-pill-txt"/><span className="lp-case-pill lp-case-pill-status lp-case-status-muted">Draft</span></div>
                <div className="lp-case-stripe-btn lp-case-btn-alt">Approve scope</div>
              </div>
            </div>
            <div className="lp-case-body">
              <p className="lp-case-type">Client portal</p>
              <h3>Agency project management and client portal</h3>
              <p>Clients and the delivery team approve scope, submit change requests, and track time in the same Next.js portal. All project decisions in one place.</p>
              <ul className="lp-case-stack"><li>Next.js</li><li>Supabase</li><li>Resend</li></ul>
            </div>
          </article>
        </div>
        <div className="lp-cases-cta">
          <a href="#lp-form" className="button">Discuss your React project →</a>
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
