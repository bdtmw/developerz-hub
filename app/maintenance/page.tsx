import './maintenance.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/maintenance/');

export default function Page() {
  return (
    <main id="main" className="ph-page">
      <div className="ph-inner">
        <div className="ph-status-row">
          <span className="ph-pill ph-pill-off">Coming soon</span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-on">
            <span className="ph-pill-dot" aria-hidden="true"></span>
            Maintenance
          </span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-off">Relaunching</span>
        </div>
        <h1 className="ph-heading">
          Back shortly.<br /><em>Bear with us.</em>
        </h1>
        <p className="ph-body">
          We&rsquo;re making improvements to the site. This won&rsquo;t take
          long — check back in a few minutes.
        </p>
        <Link href="/contact/" className="button ph-cta">
          Get notified <span aria-hidden="true">↗</span>
        </Link>
        <p className="ph-note">
          Urgent? Write to us at{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>
        </p>
      </div>
      <div className="ph-sparks" aria-hidden="true">
        <span className="ph-spark ph-spark-1">✦</span>
        <span className="ph-spark ph-spark-2">✦</span>
        <span className="ph-spark ph-spark-3">✦</span>
      </div>
    </main>
  );
}
