'use client';
import { useState, type FormEvent } from 'react';

export default function MvpQualifyForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const idea = form.get('idea') as string;

    const body = `MVP DEVELOPMENT ENQUIRY — DEVELOPERZ HUB

Name: ${name}
Email: ${email}

What I want to build:
${idea}

---
Submitted via /mvp-development/`;

    const href = `mailto:info@developerzhub.com?subject=${encodeURIComponent('MVP Development Enquiry — ' + name)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <form className="mvp-qualify-form" onSubmit={handleSubmit} noValidate>
      <p className="mvp-qf-heading">See if your idea qualifies</p>

      <label className="mvp-qf-label">
        Your name
        <input
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Alex Morgan"
          autoComplete="name"
          className="mvp-qf-input"
        />
      </label>

      <label className="mvp-qf-label">
        Email address
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="alex@company.com"
          autoComplete="email"
          className="mvp-qf-input"
        />
      </label>

      <label className="mvp-qf-label">
        What do you want to build?
        <textarea
          name="idea"
          required
          minLength={10}
          maxLength={1000}
          rows={3}
          placeholder="Describe your idea in a sentence or two — what it does and who it's for."
          className="mvp-qf-textarea"
        />
      </label>

      <button type="submit" className="button mvp-qf-submit">
        Get a free scope <span aria-hidden="true">↗</span>
      </button>

      {submitted && (
        <p className="mvp-qf-note" role="status">
          Your email draft should be open — just hit send. If it didn't open, email us at{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>.
        </p>
      )}

      {!submitted && (
        <p className="mvp-qf-note">Free scoping call. Response within 24 hours.</p>
      )}
    </form>
  );
}
