import './coming-soon.css';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/coming-soon/');

export default function Page() {
  return (
    <main id="main" className="cs-page">
      <div className="cs-inner">
        <span className="cs-spark" aria-hidden="true">✦</span>
        <p className="eyebrow">COMING SOON</p>
        <h1 className="cs-heading">Something new<br /><em>is on its way.</em></h1>
        <p className="cs-body">
          We're building something worth waiting for. Be the first to know when it launches.
        </p>
        <Link href="/contact/" className="button cs-cta">
          Get notified <span aria-hidden="true">↗</span>
        </Link>
        <p className="cs-note">
          Or write to us directly at{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>
        </p>
      </div>
    </main>
  );
}
