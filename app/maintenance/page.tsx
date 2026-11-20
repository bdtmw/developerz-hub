import './maintenance.css';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/maintenance/');

export default function Page() {
  return (
    <main id="main" className="mt-page">
      <div className="mt-inner">
        <div className="mt-icon-wrap" aria-hidden="true">
          <svg className="mt-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M54 10C49 5 41 4 35 8l5 5-8 8-5-5C23 22 24 30 29 35c2 2 4 3 7 4l-16 16a4 4 0 0 0 0 6 4 4 0 0 0 6 0l16-16c1 3 3 5 4 7 5 5 13 6 18 1l-5-5 8-8 5 5c4-6 3-14-2-19Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="eyebrow">MAINTENANCE</p>
        <h1 className="mt-heading">Back shortly.<br /><em>Bear with us.</em></h1>
        <p className="mt-body">
          We're making improvements to the site. This won't take long —
          check back in a few minutes.
        </p>
        <div className="mt-status">
          <span className="mt-pulse" aria-hidden="true"></span>
          In progress
        </div>
        <p className="mt-note">
          Urgent? Write to us at{' '}
          <a href="mailto:info@developerzhub.com">info@developerzhub.com</a>
        </p>
      </div>
    </main>
  );
}
