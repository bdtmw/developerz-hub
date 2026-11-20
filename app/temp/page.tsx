import './temp.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/temp/');

export default function Page() {
  return (
    <main id="main" className="tmp-page">

      <div className="tmp-inner">

        {/* Status row */}
        <div className="tmp-status-row">
          <span className="tmp-status-pill tmp-pill-maintenance">
            <span className="tmp-pill-dot" aria-hidden="true"></span>
            Maintenance
          </span>
          <span className="tmp-status-sep" aria-hidden="true">·</span>
          <span className="tmp-status-pill tmp-pill-relaunch">
            Relaunching
          </span>
          <span className="tmp-status-sep" aria-hidden="true">·</span>
          <span className="tmp-status-pill tmp-pill-soon">
            Coming soon
          </span>
        </div>

        {/* Headline */}
        <h1 className="tmp-heading">
          We&rsquo;re rebuilding<br />
          <em>something better.</em>
        </h1>

        <p className="tmp-body">
          Developerz Hub is undergoing a full relaunch. We&rsquo;ll be back
          shortly with a faster site, sharper services, and a better way
          to start your project.
        </p>

        {/* CTA */}
        <Link href="/contact/" className="button tmp-cta">
          Get notified when we&rsquo;re live <span aria-hidden="true">↗</span>
        </Link>

        <p className="tmp-note">
          Or reach us directly at{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>
        </p>

      </div>

      {/* Background sparks */}
      <div className="tmp-sparks" aria-hidden="true">
        <span className="tmp-spark tmp-spark-1">✦</span>
        <span className="tmp-spark tmp-spark-2">✦</span>
        <span className="tmp-spark tmp-spark-3">✦</span>
      </div>

    </main>
  );
}
