import './temp.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/temp/');

export default function Page() {
  return (
    <main id="main" className="ph-page">
      <div className="ph-inner">

        <div className="ph-badge">
          <span className="ph-badge-dot" aria-hidden="true"></span>
          Early bird offer — limited spots
        </div>

        <h1 className="ph-heading">
          Get 50% off<br /><em>your first project.</em>
        </h1>

        <p className="ph-body">
          Developerz Hub is relaunching. To celebrate, the first clients
          through the door get 50% off their project — React, Next.js,
          WordPress, mobile or backend. Lock in the rate before we go fully live.
        </p>

        <div className="ph-discount-card">
          <div className="ph-discount-left">
            <span className="ph-discount-pct">50<span>%</span></span>
            <span className="ph-discount-label">off your first project</span>
          </div>
          <div className="ph-discount-divider" aria-hidden="true"></div>
          <ul className="ph-discount-perks">
            <li><span aria-hidden="true">✓</span> Any stack, any project size</li>
            <li><span aria-hidden="true">✓</span> Fixed scope, fixed price</li>
            <li><span aria-hidden="true">✓</span> Full code ownership</li>
            <li><span aria-hidden="true">✓</span> Limited to early clients only</li>
          </ul>
        </div>

        <Link href="/contact/" className="button ph-cta">
          Claim early bird access <span aria-hidden="true">↗</span>
        </Link>

        <p className="ph-note">
          Or email us directly at{' '}
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
