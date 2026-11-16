import Link from 'next/link';
import { ServiceLinks } from '@/components/site';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('/');
const certifications = ['Shopify Partner', 'Meta Certified Developer', 'HubSpot Certified'];
const specialties = ['Web development', 'WordPress', 'Full-stack', 'Mobile apps', 'Cloud & APIs', 'AI applications'];
export default function Home() {
  return <main id="main" className="template-home">
    <section className="editorial-hero">
      <div className="code-texture" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i}>imagine. create. develop. {'{'} ideas: possibilities, craft: human {'}'} — build what comes next</span>)}</div>
      <div className="editorial-headline">
        <p className="eyebrow">WEB &amp; SOFTWARE DEVELOPMENT SERVICES</p>
        <h1>Web development.<br/><em>Extraordinary possibilities.</em></h1>
        <p>Hire developers across web, mobile and software stacks<br className="desktop-break"/> to build your next digital product.</p>
        <Link href="/contact/" className="button">Start your project <span>↗</span></Link>
      </div>
      <div className="hero-composition">
        <div className="hero-explore"><a href="#creative-approach"><span className="mouse-outline"/> Scroll to learn more</a><div className="specialty-tags">{specialties.map(s => <span key={s}>{s}</span>)}</div><p>YOUR VISION. OUR CRAFT.</p></div>
        <figure className="hero-artwork"><img src="/digital-future.webp" srcSet="/digital-future-480.webp 480w, /digital-future-800.webp 800w, /digital-future.webp 1536w" sizes="(max-width: 760px) 90vw, 50vw" decoding="async" alt="Futuristic chrome figure beside a glowing pink portal" width="1536" height="1024" fetchPriority="high"/><figcaption><span>IMAGINATION, ENGINEERED.</span><span>01 / DEVELOPERZ HUB</span></figcaption></figure>
      </div>
      <div className="hero-side-label" aria-hidden="true">DESIGN — DEVELOPMENT — POSSIBILITY</div>
    </section>
    <section className="cert-marquee" aria-label="Developer certifications">
      <p className="cert-sr">Our developers are certified: {certifications.join(', ')}.</p>
      <div className="cert-track" aria-hidden="true">
        {[0, 1].map(group => <ul key={group}>{Array.from({ length: 4 }, () => certifications).flat().map((name, i) => <li key={i}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5l2.4 1.9 3-.3 1 2.9 2.6 1.6-.9 2.9.9 2.9-2.6 1.6-1 2.9-3-.3-2.4 1.9-2.4-1.9-3 .3-1-2.9L3 14.4l.9-2.9L3 8.6l2.6-1.6 1-2.9 3 .3z"/><path d="M8.5 11.8l2.4 2.4 4.6-4.9"/></svg><span>{name}</span></li>)}</ul>)}
      </div>
    </section>
    <section id="creative-approach" className="creative-split section">
      <div className="image-collage"><img className="collage-tall" src="/new-perspectives.webp" srcSet="/new-perspectives-480.webp 480w, /new-perspectives-800.webp 800w, /new-perspectives.webp 1122w" sizes="(max-width: 760px) 90vw, 50vw" decoding="async" alt="An explorer beneath a luminous sculptural ribbon" width="1122" height="1402" loading="lazy"/><img className="collage-detail" src="/digital-future.webp" srcSet="/digital-future-480.webp 480w, /digital-future-800.webp 800w, /digital-future.webp 1536w" sizes="(max-width: 760px) 90vw, 50vw" decoding="async" alt="Magenta-lit futuristic architecture" width="1536" height="1024" loading="lazy"/><span className="collage-star" aria-hidden="true">✳</span></div>
      <div className="creative-copy"><p className="eyebrow">CREATIVE APPROACH</p><h2>The right solutions<br/>for your <em>next big idea.</em></h2><p>A brand-new website. A better digital experience. An ambitious product. Whatever you’re imagining, it starts with understanding what matters to you.</p><p>Bring your vision. We’ll help shape the approach, connect the right expertise, and turn the possibilities into a clear plan.</p><Link className="button" href="/hire-developers/">Meet your next developers <span>↗</span></Link></div>
    </section>
    <section id="expertise" className="section editorial-expertise"><div className="editorial-section-title"><p className="eyebrow">WHAT WE DO</p><h2>Your ambition.<br/><em>Our development expertise.</em></h2><p>Choose the right foundation for what comes next.</p></div><ServiceLinks/></section>
    <section id="approach" className="vision-section section"><p className="eyebrow">WHO WE ARE</p><h2>We connect your vision<br/>with the craft to <em>bring it to life.</em></h2><div className="vision-bottom"><span className="vision-mark" aria-hidden="true">{'{ }'}</span><p>Human ideas. Thoughtful engineering.<br/>A collaborative approach, from the first conversation<br className="desktop-break"/> to your next release.</p><Link href="/contact/" className="circle-link" aria-label="Start a project with Developerz Hub">↗</Link></div></section>
    <section className="immersive-panel"><img src="/new-perspectives.webp" srcSet="/new-perspectives-480.webp 480w, /new-perspectives-800.webp 800w, /new-perspectives.webp 1122w" sizes="100vw" decoding="async" alt="A small explorer looking toward a monumental pink and purple sculpture" width="1122" height="1402" loading="lazy"/><div><p className="eyebrow">A NEW PERSPECTIVE</p><h2>Build beyond<br/><em>the expected.</em></h2><Link href="/hire-full-stack-developers/" className="button light">Explore full-stack development <span>↗</span></Link></div></section>
    <section className="section process-editorial"><div><p className="eyebrow">FROM IDEA TO EXPERIENCE</p><h2>Big thinking.<br/><em>Clear next steps.</em></h2></div><div className="process"><div><span>01</span><h3>Discover the possibilities</h3><p>Define your audience, your priorities, and the problem worth solving.</p></div><div><span>02</span><h3>Make the idea tangible</h3><p>Translate an agreed scope into working software you can review.</p></div><div><span>03</span><h3>Create the next chapter</h3><p>Test, prepare the handover, and plan the next iteration with purpose.</p></div></div></section>
    <section id="insights" className="section editorial-insights"><div className="editorial-section-title"><p className="eyebrow">OUR LATEST THINKING</p><h2>Ideas &amp; insights</h2></div><div className="guide-grid"><Link href="/guides/web-developer-cost/" className="guide-card"><div className="guide-art cost-art"><span className="abstract-circle"/><span className="guide-art-label">SCOPE × CRAFT × TIME</span><span className="giant-symbol">↗</span></div><p className="eyebrow">PLANNING / COSTS</p><h3>What does it cost to hire<br/>a web developer? <span>↗</span></h3><p className="guide-excerpt">Understand the decisions that shape a useful project estimate.</p></Link><Link href="/guides/hire-developer-startup/" className="guide-card"><div className="guide-art startup-art"><img src="/new-perspectives.webp" srcSet="/new-perspectives-480.webp 480w, /new-perspectives-800.webp 800w, /new-perspectives.webp 1122w" sizes="(max-width: 760px) 90vw, 50vw" decoding="async" alt="" width="1122" height="1402" loading="lazy"/></div><p className="eyebrow">STARTUPS / HIRING</p><h3>Your first developer.<br/>Your next big step. <span>↗</span></h3><p className="guide-excerpt">A practical starting point for finding the right development partner.</p></Link></div></section>
  </main>;
}
