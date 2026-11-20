import './relaunch.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/relaunch/');

const highlights = [
  { icon: '⚡', label: 'Faster', note: 'Rebuilt from the ground up' },
  { icon: '✦', label: 'Sharper', note: 'Cleaner design, clearer copy' },
  { icon: '🛠', label: 'More capable', note: 'New services and new tools' },
];

export default function Page() {
  return (
    <main id="main" className="rl-page">
      <div className="rl-inner">

        <div className="rl-badge">
          <span className="rl-badge-dot" aria-hidden="true"></span>
          We&rsquo;re back
        </div>

        <h1 className="rl-heading">
          New look.<br />
          Same team.<br />
          <em>Better everything.</em>
        </h1>

        <p className="rl-body">
          Developerz Hub has relaunched — rebuilt to make it easier to scope
          your project, understand your options, and get started fast.
        </p>

        <div className="rl-highlights">
          {highlights.map(h => (
            <div key={h.label} className="rl-highlight">
              <span className="rl-hi-icon" aria-hidden="true">{h.icon}</span>
              <div>
                <strong>{h.label}</strong>
                <span>{h.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rl-actions">
          <Link href="/" className="button rl-cta-primary">
            Explore the new site <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/mvp-development/" className="button rl-cta-secondary">
            See our MVP service <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>

      {/* decorative burst */}
      <div className="rl-burst" aria-hidden="true">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
    </main>
  );
}
