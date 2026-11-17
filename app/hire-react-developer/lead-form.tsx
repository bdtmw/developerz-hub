'use client';
import { useState, type FormEvent } from 'react';

const SERVICES = [
  'React / Next.js application (new build)',
  'React bug fix or production issue',
  'Next.js migration or upgrade',
  'New website (design + build)',
  'Full-stack application (Node.js / API)',
  'E-commerce store',
  'WordPress or WooCommerce site',
  'Performance audit or Core Web Vitals fix',
  'Dedicated developer — ongoing retainer',
  'Something else — describe below',
];

const BUDGETS = [
  'Under £2,000',
  '£2,000 – £5,000',
  '£5,000 – £15,000',
  '£15,000 – £50,000',
  '£50,000+',
  'Not sure yet',
];

export function LeadForm({ id = 'lp-form' }: { id?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const brief = [
      'DEVELOPERZ HUB — PROJECT ENQUIRY',
      '',
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Service: ${f.get('service')}`,
      `Budget: ${f.get('budget')}`,
      '',
      `Project description:`,
      f.get('description'),
    ].join('\n');

    const mailto = `mailto:info@developerzhub.com?subject=${encodeURIComponent('Project enquiry via developerzhub.com')}&body=${encodeURIComponent(brief)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="lp-form-success" role="status">
        <span className="lp-success-icon" aria-hidden="true">✓</span>
        <strong>Your email draft is open.</strong>
        <p>Review the brief in your email app and hit send to info@developerzhub.com. We reply within 24 hours.</p>
        <button className="button lp-form-btn" onClick={() => setSent(false)}>Send another brief</button>
      </div>
    );
  }

  return (
    <form id={id} className="lp-form" onSubmit={handleSubmit} noValidate>
      <div className="lp-form-row">
        <label className="lp-label">
          Full name <span aria-hidden="true">*</span>
          <input name="name" required autoComplete="name" placeholder="Alex Morgan" maxLength={100} />
        </label>
        <label className="lp-label">
          Work email <span aria-hidden="true">*</span>
          <input name="email" type="email" required autoComplete="email" placeholder="alex@company.com" maxLength={200} />
        </label>
      </div>
      <label className="lp-label">
        What do you need?
        <select name="service">
          {SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="lp-label">
        Rough budget
        <select name="budget">
          {BUDGETS.map(b => <option key={b}>{b}</option>)}
        </select>
      </label>
      <label className="lp-label">
        Tell us about your project <span aria-hidden="true">*</span>
        <textarea name="description" required minLength={20} maxLength={2000}
          placeholder="What are you building, who is it for, and what would make it a success?" rows={4} />
      </label>
      <button type="submit" className="button lp-form-btn">Get My Free Quote →</button>
      <p className="lp-form-note">No spam. Your brief opens in your email app — nothing is sent by this website until you hit send.</p>
    </form>
  );
}
