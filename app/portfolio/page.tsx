import './portfolio.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/portfolio/');

const projects = [
  {
    num: '01',
    tag: 'AI',
    icon: '💬',
    title: 'AI Customer Support Chatbot',
    desc: "A website chatbot that answers customer questions from your knowledge base and captures leads when it can't answer.",
    features: ['Upload FAQs & knowledge base', 'AI answers grounded in your content', 'Embeddable chat widget', 'Lead capture dashboard'],
    stack: ['Next.js', 'Supabase', 'pgvector', 'AI API'],
  },
  {
    num: '02',
    tag: 'CRM',
    icon: '📊',
    title: 'AI Lead Qualification CRM',
    desc: 'Capture, score, and follow up with incoming leads. Pipeline stages, activity history, and one automated follow-up sequence.',
    features: ['Lead capture form + manual entry', 'Rule-based scoring (budget, urgency)', 'Pipeline: New → Contacted → Won/Lost', 'Email follow-up template'],
    stack: ['Next.js', 'Supabase', 'Resend'],
  },
  {
    num: '03',
    tag: 'AI',
    icon: '📄',
    title: 'AI Document Extraction',
    desc: 'Upload PDFs and extract structured fields automatically. Review, correct, and export data — no manual data entry.',
    features: ['PDF upload + secure storage', 'AI field extraction (vendor, date, total)', 'Manual correction interface', 'CSV export'],
    stack: ['Next.js', 'Supabase Storage', 'AI API', 'Zod'],
  },
  {
    num: '04',
    tag: 'CRM',
    icon: '🔄',
    title: 'CRM with Automated Follow-ups',
    desc: 'A lightweight CRM for small businesses to manage contacts, track opportunities, and trigger scheduled follow-up emails.',
    features: ['Contact + company management', 'Customizable pipeline stages', 'Follow-up tasks with due dates', 'Automated email sequence'],
    stack: ['Next.js', 'Supabase', 'Resend'],
  },
  {
    num: '05',
    tag: 'AI',
    icon: '✍️',
    title: 'AI Content Generation SaaS',
    desc: 'Let users generate marketing copy from templates — social posts, product descriptions, emails. Save and revisit past generations.',
    features: ['Template-based generation', 'Social, email, product copy', 'Edit, copy, regenerate', 'Per-user usage limits (server-enforced)'],
    stack: ['Next.js', 'Supabase', 'AI API'],
  },
  {
    num: '06',
    tag: 'Platform',
    icon: '🚀',
    title: 'Client Onboarding Portal',
    desc: 'Replace scattered onboarding emails with one portal. Invite clients, assign checklists, receive documents, track progress.',
    features: ['Client invitation + login', 'Customizable onboarding checklist', 'Secure document uploads', 'Admin progress dashboard'],
    stack: ['Next.js', 'Supabase Auth', 'Storage', 'Resend'],
  },
  {
    num: '07',
    tag: 'Platform',
    icon: '📅',
    title: 'Appointment Booking System',
    desc: 'A public booking page for a single business or service provider. Conflict prevention, confirmation emails, and admin calendar.',
    features: ['Service listing + availability', 'Public booking with conflict check', 'Confirmation + reminder emails', 'Reschedule / cancel via secure link'],
    stack: ['Next.js', 'Supabase', 'Resend'],
  },
  {
    num: '08',
    tag: 'AI',
    icon: '🧠',
    title: 'AI Knowledge-Base Assistant',
    desc: 'A private AI assistant for your team. Upload documents, ask questions, get answers with references. Access-controlled by user.',
    features: ['Upload + index PDF documents', 'Vector search over your content', 'AI answers with document references', 'Per-user access controls'],
    stack: ['Next.js', 'Supabase', 'pgvector', 'AI API'],
  },
  {
    num: '09',
    tag: 'Marketplace',
    icon: '🛍️',
    title: 'Niche Marketplace MVP',
    desc: 'Sellers post listings, buyers browse and submit inquiries. Category filters, image uploads, and admin moderation.',
    features: ['Seller registration + listings', 'Public directory with search + filters', 'Listing image uploads', 'Buyer inquiry form + seller dashboard'],
    stack: ['Next.js', 'Supabase', 'Storage', 'RLS'],
    warning: 'Listings and inquiries only — no payments or transactions.',
  },
  {
    num: '10',
    tag: 'AI',
    icon: '📞',
    title: 'AI Voice Receptionist Dashboard',
    desc: 'Configure and review an AI phone receptionist. Set greeting, FAQs, and call-handling rules. View call summaries and captured leads.',
    features: ['Receptionist greeting + FAQ config', 'Connect a supported voice AI provider', 'Webhook call summaries', 'Lead capture + notification emails'],
    stack: ['Next.js', 'Supabase', 'Voice AI API', 'Resend'],
    warning: 'Requires a supported prebuilt voice AI platform.',
  },
];

const tagColors: Record<string, string> = {
  'AI': 'tag-ai',
  'CRM': 'tag-crm',
  'Platform': 'tag-platform',
  'Marketplace': 'tag-marketplace',
};

export default function Page() {
  return (
    <main id="main" className="template-portfolio">

      {/* ── Hero ── */}
      <section className="pf-hero section">
        <p className="eyebrow">MVP PORTFOLIO</p>
        <h1 className="pf-h1">10 products.<br /><em>Each ships in 9 days.</em></h1>
        <p className="pf-sub">
          These are ready-to-build MVP templates your team can deliver from day one. Each is scoped for 9 working days at a fixed price. Tell us which fits your idea — or bring your own.
        </p>
        <div className="pf-hero-actions">
          <Link href="/mvp-development/" className="button">See how it works <span aria-hidden="true">↗</span></Link>
          <Link href="/contact/" className="text-link">Get a quote <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      {/* ── Filter legend ── */}
      <div className="pf-legend section" style={{ paddingTop: 0, paddingBottom: '20px' }}>
        <span className="pf-tag tag-ai">AI</span>
        <span className="pf-tag tag-crm">CRM</span>
        <span className="pf-tag tag-platform">Platform</span>
        <span className="pf-tag tag-marketplace">Marketplace</span>
      </div>

      {/* ── Project grid ── */}
      <section className="pf-grid section" style={{ paddingTop: '8px' }}>
        {projects.map(p => (
          <article key={p.num} className="pf-card">
            <div className="pf-card-top">
              <div className="pf-card-meta">
                <span className="pf-num">{p.num}</span>
                <span className={`pf-tag ${tagColors[p.tag]}`}>{p.tag}</span>
              </div>
              <span className="pf-icon" aria-hidden="true">{p.icon}</span>
            </div>
            <h2 className="pf-card-title">{p.title}</h2>
            <p className="pf-card-desc">{p.desc}</p>
            <ul className="pf-features">
              {p.features.map(f => (
                <li key={f}><span aria-hidden="true">✓</span>{f}</li>
              ))}
            </ul>
            <div className="pf-card-footer">
              <div className="pf-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              {p.warning && <p className="pf-warning">{p.warning}</p>}
            </div>
          </article>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" style={{ margin: '0 5.5% 90px' }}>
        <span className="cta-spark" aria-hidden="true">✦</span>
        <h2>Have a different idea?<br /><em>We'll scope it.</em></h2>
        <p style={{ fontSize: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
          These 10 templates are starting points, not limits. If your idea is different, tell us — we'll scope it free and quote it fixed.
        </p>
        <Link href="/contact/" className="button" style={{ position: 'relative', zIndex: 1 }}>
          Discuss your idea <span aria-hidden="true">↗</span>
        </Link>
      </section>

    </main>
  );
}
