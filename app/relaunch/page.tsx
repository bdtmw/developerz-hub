import './relaunch.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/relaunch/');

export default function Page() {
  return (
    <main id="main" className="ph-page">
      <div className="ph-inner">
        <div className="ph-status-row">
          <span className="ph-pill ph-pill-off">Coming soon</span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-off">Maintenance</span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-on">
            <span className="ph-pill-dot" aria-hidden="true"></span>
            Relaunching
          </span>
        </div>
        <h1 className="ph-heading">
          New look.<br />Same team.<br /><em>Better everything.</em>
        </h1>
        <p className="ph-body">
          Developerz Hub has relaunched — rebuilt to make it easier to scope
          your project, understand your options, and get started fast.
        </p>
        <div className="ph-actions">
          <Link href="/" className="button ph-cta">
            Explore the new site <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/mvp-development/" className="button ph-cta-sec">
            See our MVP service <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="ph-sparks" aria-hidden="true">
        <span className="ph-spark ph-spark-1">✦</span>
        <span className="ph-spark ph-spark-2">✦</span>
        <span className="ph-spark ph-spark-3">✦</span>
      </div>
    </main>
  );
}
