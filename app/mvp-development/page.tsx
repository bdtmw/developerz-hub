import './mvp.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import MvpQualifyForm from './MvpQualifyForm';
export const metadata = pageMetadata('/mvp-development/');

const phases = [
  {
    days: 'Days 1–2',
    title: 'Scope & Plan',
    body: 'We define exactly what gets built: core user flows, tech stack, integrations. You receive a fixed brief with no ambiguity before a single line of code is written.',
    items: ['Fixed feature list', 'Tech stack agreed', 'Timeline locked'],
  },
  {
    days: 'Days 3–7',
    title: 'Build',
    body: 'Your dedicated developer builds the MVP. Daily updates keep you in the loop. No scope creep, no surprise additions — only what was agreed.',
    items: ['One dedicated developer', 'Daily progress updates', 'You can review as it builds'],
  },
  {
    days: 'Days 8–9',
    title: 'Review & Launch',
    body: 'We test, fix edge cases and deploy. You review the working product against the agreed scope. Full code handover — it\'s yours, no lock-in.',
    items: ['Deployed working MVP', 'Full code ownership', '7-day post-launch support'],
  },
];

const included = [
  { icon: '📋', label: 'Fixed scope document', note: 'Written before we start' },
  { icon: '👨‍💻', label: 'Dedicated developer', note: 'One person, full focus' },
  { icon: '📬', label: 'Daily updates', note: 'Know exactly where things stand' },
  { icon: '🚀', label: 'Live deployment', note: 'On your domain, production-ready' },
  { icon: '🔑', label: 'Full code ownership', note: 'No lock-in, ever' },
  { icon: '🛟', label: '7-day support', note: 'Post-launch fixes included' },
];

const reviews = [
  { name: 'Mohamad', country: 'Saudi Arabia', project: 'Virtual exhibition MVP', quote: 'The communication was smooth and professional throughout, and the work was completed exactly as required. He was responsive, supportive, and demonstrated strong technical skills.' },
  { name: 'Avishek', country: 'United States', project: 'React application integration', quote: 'He made sure he had the perfect understanding of the requirements and was able to deliver the project on time. Highly recommended freelancer.' },
  { name: 'Zachary', country: 'Canada', project: 'Corporate website development', quote: 'He quickly understood our needs and delivered high-quality work that exceeded expectations. Communication was clear throughout the process, and he handled revisions promptly and professionally.' },
];

const portfolio = [
  { tag: 'AI', icon: '💬', title: 'AI Customer Support Chatbot', desc: 'Embeddable chatbot grounded in your knowledge base. Captures leads when it can\'t answer.' },
  { tag: 'CRM', icon: '📊', title: 'AI Lead Qualification CRM', desc: 'Capture, score, and follow up with leads automatically. Pipeline stages included.' },
  { tag: 'Platform', icon: '📅', title: 'Appointment Booking System', desc: 'Public booking page with conflict prevention, reminders, and admin calendar.' },
  { tag: 'AI', icon: '🧠', title: 'AI Knowledge-Base Assistant', desc: 'Private team assistant. Upload docs, ask questions, get answers with references.' },
  { tag: 'Platform', icon: '🚀', title: 'Client Onboarding Portal', desc: 'Invite clients, assign checklists, receive documents, track progress in one portal.' },
  { tag: 'Marketplace', icon: '🛍️', title: 'Niche Marketplace MVP', desc: 'Sellers post listings, buyers browse and inquire. Category filters and moderation.' },
];

const faqs = [
  { q: 'What counts as an MVP?', a: 'A focused product with one core user flow that works end-to-end. Think: users can sign up, complete the main action (book, buy, submit, generate), and you can see it happen. No admin dashboards, no advanced settings — just the thing that proves your idea.' },
  { q: 'What if my idea is too complex for 9 days?', a: 'We\'ll tell you upfront. After the first scoping conversation, if 9 days isn\'t realistic we quote a larger fixed project instead. No wasted time on either side.' },
  { q: 'What technology do you use?', a: 'Whatever fits the brief — Next.js, React, Node.js, Laravel, React Native for mobile, and more. We recommend the stack during scoping; you approve it before we build.' },
  { q: 'What happens after the 9 days?', a: 'You own everything and can take it anywhere. If you need ongoing development, fixes, or a larger phase 2, we quote that separately at $20/hr or as a fixed project.' },
];

export default function Page() {
  return (
    <main id="main" className="template-mvp">

      {/* ── Hero ── */}
      <section className="mvp-hero">
        <div className="mvp-hero-cols">
          <div className="mvp-hero-left">
            <p className="eyebrow">MVP DEVELOPMENT</p>
            <h1 className="mvp-h1">
              Your App Idea<br />
              Doesn't Need a<br />
              <span className="mvp-strike">$10,000</span> Budget.
            </h1>
            <p className="mvp-sub">
              Launch a focused, working MVP in 9 days. Fixed scope. One fixed price. You own the code.
            </p>
            <div className="mvp-offer-row">
              <div className="mvp-day-badge">9 Days</div>
              <div className="mvp-divider" aria-hidden="true">·</div>
              <div className="mvp-price-badge">From $999</div>
            </div>
            <p className="mvp-trust">50+ developers · 1,000+ projects delivered</p>
          </div>
          <div className="mvp-hero-right">
            <MvpQualifyForm />
          </div>
        </div>
      </section>

      {/* ── 9-Day Process ── */}
      <section className="section mvp-process" id="process">
        <div className="mvp-section-head">
          <p className="eyebrow">THE 9-DAY PROCESS</p>
          <h2>Three phases.<br /><em>One working product.</em></h2>
        </div>
        <div className="mvp-phases">
          {phases.map((p, i) => (
            <div key={p.days} className="mvp-phase">
              <div className="mvp-phase-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="mvp-phase-days">{p.days}</div>
              <h3 className="mvp-phase-title">{p.title}</h3>
              <p className="mvp-phase-body">{p.body}</p>
              <ul className="mvp-phase-items">
                {p.items.map(item => (
                  <li key={item}><span aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="section mvp-included">
        <div className="mvp-section-head">
          <p className="eyebrow">WHAT'S INCLUDED</p>
          <h2>Everything you need.<br /><em>Nothing you don't.</em></h2>
        </div>
        <div className="mvp-included-grid">
          {included.map(item => (
            <div key={item.label} className="mvp-included-item">
              <span className="mvp-inc-icon" aria-hidden="true">{item.icon}</span>
              <div>
                <strong>{item.label}</strong>
                <span>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio preview ── */}
      <section className="section mvp-portfolio">
        <div className="mvp-section-head">
          <p className="eyebrow">WHAT WE BUILD</p>
          <h2>Ready-to-build templates.<br /><em>Or bring your own idea.</em></h2>
        </div>
        <div className="mvp-portfolio-grid">
          {portfolio.map(p => (
            <div key={p.title} className="mvp-pf-card">
              <div className="mvp-pf-card-top">
                <span className={`mvp-pf-tag mvp-pf-tag-${p.tag.toLowerCase()}`}>{p.tag}</span>
                <span className="mvp-pf-icon" aria-hidden="true">{p.icon}</span>
              </div>
              <h3 className="mvp-pf-title">{p.title}</h3>
              <p className="mvp-pf-desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mvp-portfolio-footer">
          <p className="mvp-pf-note">These are 6 of 10 ready-to-build templates. Each ships in 9 days.</p>
          <Link href="/portfolio/" className="text-link">Browse all 10 templates <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section mvp-pricing" id="pricing">
        <div className="mvp-pricing-card">
          <div className="mvp-pricing-left">
            <p className="eyebrow">PRICING</p>
            <h2 className="mvp-price-heading">Fixed quote.<br /><em>No surprises.</em></h2>
            <p className="mvp-pricing-note">
              Every project starts with a free scoping call. We quote a fixed price before anything starts — you only pay when you're happy with the scope.
            </p>
            <p className="mvp-pricing-note">
              Need ongoing support after launch? Additional work is billed at <strong>$20/hr</strong> — or we quote the next phase as a fixed project.
            </p>
            <Link href="/contact/" className="button" style={{ marginTop: '10px' }}>Get a fixed quote <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mvp-pricing-right">
            <div className="mvp-price-tag">
              <span className="mvp-price-from">Starting at</span>
              <span className="mvp-price-amount">$999</span>
              <span className="mvp-price-sub">Fixed scope MVP · 9-day delivery</span>
            </div>
            <ul className="mvp-price-list">
              <li><span aria-hidden="true">✓</span>Scope document before we start</li>
              <li><span aria-hidden="true">✓</span>Dedicated developer, full focus</li>
              <li><span aria-hidden="true">✓</span>Fixed price — no change orders</li>
              <li><span aria-hidden="true">✓</span>Live deployment on your domain</li>
              <li><span aria-hidden="true">✓</span>Full code ownership, no lock-in</li>
              <li><span aria-hidden="true">✓</span>7-day post-launch support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section mvp-reviews" aria-labelledby="mvp-reviews-title">
        <div className="mvp-section-head">
          <p className="eyebrow">CLIENT EXPERIENCES</p>
          <h2 id="mvp-reviews-title">What clients say.<br /><em>After it shipped.</em></h2>
        </div>
        <div className="mvp-reviews-grid">
          {reviews.map(r => (
            <figure key={r.name} className="client-review">
              <div className="client-review-top">
                <span className="client-review-project">{r.project}</span>
                <span className="client-review-rating" aria-label="Rated 5 out of 5">
                  <span aria-hidden="true">★★★★★</span><b>5.0</b>
                </span>
              </div>
              <blockquote><p>"{r.quote}"</p></blockquote>
              <figcaption>
                <span className="client-review-avatar" aria-hidden="true">{r.name.charAt(0)}</span>
                <span><strong>{r.name}</strong><small>{r.country}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq mvp-faq">
        <h2>Common questions.</h2>
        {faqs.map(f => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" style={{ margin: '0 5.5% 90px' }}>
        <span className="cta-spark" aria-hidden="true">✦</span>
        <h2>Ready to qualify<br /><em>your idea?</em></h2>
        <p style={{ fontSize: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
          Tell us what you want to build. We'll scope it, quote it, and get back to you within 24 hours.
        </p>
        <Link href="/contact/" className="button" style={{ position: 'relative', zIndex: 1 }}>
          Start the conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>

    </main>
  );
}
