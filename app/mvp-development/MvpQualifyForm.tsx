'use client';
import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';

type OtpState = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified';
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
  // OTP
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [otpState, setOtpState] = useState<OtpState>('idle');
  const [error, setError] = useState('');
  const otpRef = useRef<HTMLInputElement>(null);
  // Steps
  const [step, setStep] = useState<1 | 2>(1);
  const [productType, setProductType] = useState<ProductType>(null);
  const [submitted, setSubmitted] = useState(false);

  /* ── OTP ── */
  async function sendCode() {
    setError('');
    if (!email.includes('@')) { setError('Enter a valid email first.'); return; }
    setOtpState('sending');
    try {
      const res = await fetch('/api/mvp-otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || data.error) { setError(data.error ?? 'Could not send code. Try again.'); setOtpState('idle'); return; }
      setToken(data.token);
      setOtpState('sent');
      setTimeout(() => otpRef.current?.focus(), 50);
    } catch {
      setError('Network error. Try again.');
      setOtpState('idle');
    }
  }

  async function verifyCode(code: string) {
    if (code.length < 6) return;
    setOtpState('verifying');
    setError('');
    try {
      const res = await fetch('/api/mvp-otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, code }),
      });
      const data = await res.json();
      if (data.valid) {
        setOtpState('verified');
      } else {
        setError('Incorrect code. Try again.');
        setOtpState('sent');
        setOtp('');
        otpRef.current?.focus();
      }
    } catch {
      setError('Network error. Try again.');
      setOtpState('sent');
    }
  }

  function handleOtpChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(val);
    if (val.length === 6) verifyCode(val);
  }

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
      `Email: ${email} (verified)`,
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
  const canContinue = briefReady && otpState === 'verified' && name.trim().length >= 2;

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

        <div className="mvp-qf-label">
          <span>Email address</span>
          <div className="mvp-qf-email-row">
            <input
              className="mvp-qf-input"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (otpState !== 'idle') { setOtpState('idle'); setOtp(''); setToken(''); }
              }}
              placeholder="alex@company.com"
              disabled={otpState === 'verified'}
            />
            {otpState !== 'verified' && (
              <button
                type="button"
                className="mvp-qf-send-btn"
                onClick={sendCode}
                disabled={!email.includes('@') || otpState !== 'idle'}
              >
                {otpState === 'sending' ? '…' : 'Send code'}
              </button>
            )}
            {otpState === 'verified' && (
              <span className="mvp-qf-verified" aria-label="Email verified">✓ Verified</span>
            )}
          </div>
        </div>

        {(otpState === 'sent' || otpState === 'verifying') && (
          <label className="mvp-qf-label">
            <span>Verification code <span className="mvp-qf-otp-hint">— sent to {email}</span></span>
            <input
              ref={otpRef}
              className="mvp-qf-input mvp-qf-otp-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="123456"
              value={otp}
              onChange={handleOtpChange}
              disabled={otpState === 'verifying'}
              autoComplete="one-time-code"
            />
          </label>
        )}

        {error && <p className="mvp-qf-error" role="alert">{error}</p>}

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
