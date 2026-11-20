import './temp.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/temp/');

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
          <span className="ph-pill ph-pill-on">
            <span className="ph-pill-dot" aria-hidden="true"></span>
            Maintenance
          </span>
          <span className="ph-sep" aria-hidden="true">·</span>
          <span className="ph-pill ph-pill-on">
            <span className="ph-pill-dot" aria-hidden="true"></span>
            Relaunching
          </span>
        </div>

        <h1 className="ph-heading">
          We&rsquo;re rebuilding<br /><em>something better.</em>
        </h1>

        <p className="ph-body">
          Developerz Hub is undergoing a full relaunch. We&rsquo;ll be back
          shortly with a faster site, sharper services, and a better way
          to start your project.
        </p>

        <Link href="/contact/" className="button ph-cta">
          Get notified when we&rsquo;re live <span aria-hidden="true">↗</span>
        </Link>

        <p className="ph-note">
          Or reach us at{' '}
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
