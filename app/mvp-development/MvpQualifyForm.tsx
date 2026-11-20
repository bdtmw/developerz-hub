'use client';
import { useState, type FormEvent } from 'react';

type ProductType = 'mvp' | 'full' | null;

export default function MvpQualifyForm() {
  // Brief fields
  const [what, setWhat] = useState('');
  const [who, setWho] = useState('');
  const [core, setCore] = useState('');
  const [timing, setTiming] = useState('');
  // Identity
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Steps
  const [step, setStep] = useState<1 | 2>(1);
  const [productType, setProductType] = useState<ProductType>(null);
  const [submitted, setSubmitted] = useState(false);

  /* ── Steps ── */
  function goToStep2(e: FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!productType) return;
    const typeLabel = productType === 'mvp'
      ? 'MVP (9-day, fixed scope, from $999)'
      : 'Full product (custom scope, quote on request)';
    const body = [
      'MVP DEVELOPMENT BRIEF — DEVELOPERZ HUB',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'WHAT ARE YOU BUILDING?',
      what,
      '',
      'WHO IS IT FOR?',
      who,
      '',
      'CORE FEATURE / DAY-ONE MUST-HAVE',
      core,
      '',
      `WHEN DO YOU NEED TO LAUNCH: ${timing || 'Not specified'}`,
      '',
      `BUILDING: ${typeLabel}`,
    ].join('\n');
    const href = `mailto:info@developerzhub.com?subject=${encodeURIComponent('MVP Brief — ' + name)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  /* ── Guards ── */
  const briefReady = what.trim().length >= 15 && who.trim().length >= 3 && core.trim().length >= 10;
  const canContinue = briefReady && name.trim().length >= 2 && email.includes('@');

  return (
    <form className="mvp-qualify-form" onSubmit={step === 1 ? goToStep2 : handleSubmit} noValidate>

      {/* Step indicator */}
      <div className="mvp-qf-steps" aria-label={`Step ${step} of 2`}>
        <span className={`mvp-qf-step ${step === 1 ? 'active' : 'done'}`} aria-current={step === 1 ? 'step' : undefined}>
          {step > 1 ? '✓' : '1'}
        </span>
        <span className="mvp-qf-step-line" aria-hidden="true" />
        <span className={`mvp-qf-step ${step === 2 ? 'active' : ''}`} aria-current={step === 2 ? 'step' : undefined}>2</span>
        <span className="mvp-qf-step-label">Step {step} of 2</span>
      </div>

      {/* ── STEP 1 — The brief ── */}
      {step === 1 && <>
        <p className="mvp-qf-heading">Your project brief</p>

        <label className="mvp-qf-label">
          What are you building?
          <textarea
            className="mvp-qf-textarea"
            rows={2}
            required
            minLength={15}
            maxLength={800}
            value={what}
            onChange={e => setWhat(e.target.value)}
            placeholder="Describe the product — what it is and what problem it solves."
          />
        </label>

        <label className="mvp-qf-label">
          Who is it for?
          <input
            className="mvp-qf-input"
            type="text"
            required
            maxLength={200}
            value={who}
            onChange={e => setWho(e.target.value)}
            placeholder="e.g. small business owners, freelancers, HR teams…"
          />
        </label>

        <label className="mvp-qf-label">
          What must it do on day one?
          <textarea
            className="mvp-qf-textarea"
            rows={2}
            required
            minLength={10}
            maxLength={800}
            value={core}
            onChange={e => setCore(e.target.value)}
            placeholder="The single most important action a user needs to complete."
          />
        </label>

        <label className="mvp-qf-label">
          When do you need to launch?
          <select
            className="mvp-qf-input mvp-qf-select"
            value={timing}
            onChange={e => setTiming(e.target.value)}
          >
            <option value="">— Select —</option>
            <option value="Just exploring">Just exploring</option>
            <option value="Within a month">Within a month</option>
            <option value="1–3 months">1–3 months</option>
            <option value="I have a specific deadline">I have a specific deadline</option>
          </select>
        </label>

        <div className="mvp-qf-divider" aria-hidden="true" />

        <label className="mvp-qf-label">
          Your name
          <input
            className="mvp-qf-input"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Alex Morgan"
          />
        </label>

        <label className="mvp-qf-label">
          Email address
          <input
            className="mvp-qf-input"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="alex@company.com"
          />
        </label>

        <button type="submit" className="button mvp-qf-submit" disabled={!canContinue}>
          Continue <span aria-hidden="true">→</span>
        </button>

        <p className="mvp-qf-note">Free scope call · Response within 24 h</p>
      </>}

      {/* ── STEP 2 — MVP or full product ── */}
      {step === 2 && <>
        <p className="mvp-qf-heading">MVP or full product?</p>
        <p className="mvp-qf-sub">We scope both — pick the one that fits where you are.</p>

        <div className="mvp-qf-options" role="radiogroup" aria-label="Product type">
          <label className={`mvp-qf-option ${productType === 'mvp' ? 'selected' : ''}`}>
            <input type="radio" name="product_type" value="mvp" checked={productType === 'mvp'} onChange={() => setProductType('mvp')} className="mvp-qf-radio" />
            <div className="mvp-qf-option-inner">
              <div className="mvp-qf-option-top">
                <span className="mvp-qf-option-title">MVP</span>
                <span className="mvp-qf-option-badge">From $999</span>
              </div>
              <p className="mvp-qf-option-desc">One core flow. Ships in 9 days. Fixed scope and fixed price — no surprises.</p>
              <ul className="mvp-qf-option-list">
                <li>Fixed feature list</li>
                <li>9-day delivery</li>
                <li>You own the code</li>
              </ul>
            </div>
          </label>

          <label className={`mvp-qf-option ${productType === 'full' ? 'selected' : ''}`}>
            <input type="radio" name="product_type" value="full" checked={productType === 'full'} onChange={() => setProductType('full')} className="mvp-qf-radio" />
            <div className="mvp-qf-option-inner">
              <div className="mvp-qf-option-top">
                <span className="mvp-qf-option-title">Full product</span>
                <span className="mvp-qf-option-badge outline">Quote on request</span>
              </div>
              <p className="mvp-qf-option-desc">Multi-phase build, custom scope. We quote a fixed price before anything starts.</p>
              <ul className="mvp-qf-option-list">
                <li>Custom scope &amp; timeline</li>
                <li>Dedicated team</li>
                <li>Fixed-price phases</li>
              </ul>
            </div>
          </label>
        </div>

        {submitted ? (
          <p className="mvp-qf-note" role="status">
            Email draft opened — just hit send. Or write to{' '}
            <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>.
          </p>
        ) : (
          <>
            <button type="submit" className="button mvp-qf-submit" disabled={!productType}>
              Get my free quote <span aria-hidden="true">↗</span>
            </button>
            <p className="mvp-qf-note">Free scope call · No commitment</p>
          </>
        )}
      </>}

    </form>
  );
}
