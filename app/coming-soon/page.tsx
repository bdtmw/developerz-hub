import './coming-soon.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/coming-soon/');

export default function Page() {
  return (
    <main id="main" className="ph-page">
      <div className="ph-inner">
        <div className="ph-status-row">
          <span className="ph-pill ph-pill-on">
            <span className="ph-pill-dot" aria-hidden="true"></span>
            Coming soon
          </span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-off">Maintenance</span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-off">Relaunching</span>
        </div>
        <h1 className="ph-heading">
          Something new<br /><em>is on its way.</em>
        </h1>
        <p className="ph-body">
          We&rsquo;re building something worth waiting for. Be the first to
          know when it launches.
        </p>
        <Link href="/contact/" className="button ph-cta">
          Get notified <span aria-hidden="true">↗</span>
        </Link>
        <p className="ph-note">
          Or write to us at{' '}
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
