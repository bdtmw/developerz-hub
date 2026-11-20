'use client';
import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';

type OtpState = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified';

export default function MvpQualifyForm() {
  const [idea, setIdea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [otpState, setOtpState] = useState<OtpState>('idle');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const otpRef = useRef<HTMLInputElement>(null);

  async function sendCode() {
    setError('');
    if (!email || !email.includes('@')) { setError('Enter a valid email first.'); return; }
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (otpState !== 'verified') return;
    const body = `MVP DEVELOPMENT ENQUIRY\n\nName: ${name}\nEmail: ${email}\n(email verified)\n\nIdea:\n${idea}`;
    const href = `mailto:info@developerzhub.com?subject=${encodeURIComponent('MVP Enquiry — ' + name)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  const canSend = email.includes('@') && otpState === 'idle';
  const canSubmit = otpState === 'verified' && idea.trim().length >= 10 && name.trim().length >= 2;

  return (
    <form className="mvp-qualify-form" onSubmit={handleSubmit} noValidate>

      {/* Step indicator */}
      <div className="mvp-qf-steps" aria-label="Step 1 of 2">
        <span className="mvp-qf-step active" aria-current="step">1</span>
        <span className="mvp-qf-step-line" aria-hidden="true" />
        <span className="mvp-qf-step">2</span>
        <span className="mvp-qf-step-label">Step 1 of 2</span>
      </div>

      <p className="mvp-qf-heading">Tell us your idea</p>

      {/* Idea */}
      <label className="mvp-qf-label">
        What do you want to build?
        <textarea
          className="mvp-qf-textarea"
          rows={3}
          required
          minLength={10}
          maxLength={1000}
          value={idea}
          onChange={e => setIdea(e.target.value)}
          placeholder="Describe in a sentence or two — what it does and who it's for."
        />
      </label>

      {/* Name */}
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

      {/* Email + send code */}
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
            onChange={e => { setEmail(e.target.value); if (otpState !== 'idle') { setOtpState('idle'); setOtp(''); setToken(''); } }}
            placeholder="alex@company.com"
            disabled={otpState === 'verified'}
          />
          {otpState !== 'verified' && (
            <button
              type="button"
              className="mvp-qf-send-btn"
              onClick={sendCode}
              disabled={!canSend || otpState === 'sending'}
            >
              {otpState === 'sending' ? '…' : 'Send code'}
            </button>
          )}
          {otpState === 'verified' && (
            <span className="mvp-qf-verified" aria-label="Email verified">✓ Verified</span>
          )}
        </div>
      </div>

      {/* OTP input */}
      {(otpState === 'sent' || otpState === 'verifying') && (
        <div className="mvp-qf-otp-row">
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
        </div>
      )}

      {error && <p className="mvp-qf-error" role="alert">{error}</p>}

      {/* Submit */}
      <button type="submit" className="button mvp-qf-submit" disabled={!canSubmit}>
        Continue <span aria-hidden="true">→</span>
      </button>

      {submitted ? (
        <p className="mvp-qf-note" role="status">
          Email draft opened — just hit send. If it didn't open, write to{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>.
        </p>
      ) : (
        <p className="mvp-qf-note">Free scope call · Response within 24 h</p>
      )}
    </form>
  );
}
