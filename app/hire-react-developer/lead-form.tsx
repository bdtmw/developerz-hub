'use client';
import { useState, type FormEvent } from 'react';

const HIRING_MODELS = [
  'Help me choose',
  '$20/hr — focused fixes and production issues',
  'Fixed quote — complete project, agreed upfront',
  'Dedicated developer — ongoing retainer',
  'Not sure yet — describe the work below',
];

export function LeadForm({ id = 'lp-form' }: { id?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const brief = [
      'DEVELOPERZ HUB — REACT HIRING BRIEF',
      '',
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Hiring model: ${f.get('service')}`,
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
        Hiring model
        <select name="service">
          {HIRING_MODELS.map(s => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="lp-label">
        Project description <span aria-hidden="true">*</span>
        <textarea name="description" required minLength={20} maxLength={2000}
          placeholder="What are you building, who is it for, and what would make it a success?" rows={4} />
      </label>
      <button type="submit" className="button lp-form-btn">Prepare hiring brief ↗</button>
      <p className="lp-form-note">Prepared locally. Review the draft in your email app before sending. Do not include passwords or confidential records.</p>
    </form>
  );
}
