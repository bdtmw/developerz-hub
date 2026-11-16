import Link from 'next/link';
import { ServiceSlider } from '@/components/service-slider';

// Services shown in the home slider. `hue` tints each card's artwork.
const cards = [
  { href: '/hire-web-developers/', title: 'Web development', hue: 325, icon: <><rect x="3" y="4.5" width="18" height="15" rx="2.2"/><path d="M3 9h18"/><path d="M9.5 12.5l-2 2 2 2"/><path d="M14.5 12.5l2 2-2 2"/></> },
  { href: '/hire-wordpress-developers/', title: 'WordPress development', hue: 285, icon: <><circle cx="12" cy="12" r="9"/><path d="M6.8 9.2l2.6 6.6L12 10l2.6 5.8 2.6-6.6"/></> },
  { href: '/hire-full-stack-developers/', title: 'Full-stack development', hue: 255, icon: <><path d="M12 3.5l8.5 4.3L12 12.1 3.5 7.8z"/><path d="M3.5 12l8.5 4.3 8.5-4.3"/><path d="M3.5 16.2l8.5 4.3 8.5-4.3"/></> },
  { href: '/hire-mobile-app-developers/', title: 'Mobile app development', hue: 335, icon: <><rect x="7" y="2.8" width="10" height="18.4" rx="2.4"/><path d="M10.5 5.6h3"/><path d="M11 18.2h2"/></> },
  { href: '/hire-shopify-developers/', title: 'Shopify development', hue: 300, icon: <><path d="M5 8h14l-1 12.2H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></> },
  { href: '/hire-cloud-developers/', title: 'Cloud & APIs', hue: 265, icon: <><path d="M7.2 18.5a4.2 4.2 0 0 1-.5-8.4 5.6 5.6 0 0 1 10.8 1.2 3.6 3.6 0 0 1-.5 7.2z"/></> },
  { href: '/hire-chatbot-developers/', title: 'Chatbot & AI applications', hue: 315, icon: <><path d="M4 5.5h16v10.5H11l-4.5 3.5V16H4z"/><path d="M12 8.2l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z"/></> },
  { href: '/hire-ecommerce-developers/', title: 'Ecommerce development', hue: 275, icon: <><path d="M3 4.5h2.6l2 10.5h10.2l1.7-7.5H6.6"/><circle cx="9.3" cy="18.6" r="1.4"/><circle cx="16.6" cy="18.6" r="1.4"/></> },
];

export function ExpertiseCards() {
  return <>
    <ServiceSlider>
      {cards.map((card, i) => <Link href={card.href} className="sv-card" key={card.href} style={{ '--sv-hue': card.hue } as React.CSSProperties}>
        <span className="sv-face">
          <span className="sv-number">{String(i + 1).padStart(2, '0')}</span>
          <svg className="sv-art" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{card.icon}</svg>
          <span className="sv-title">{card.title}</span>
        </span>
        <span className="sv-arrow" aria-hidden="true">↗</span>
      </Link>)}
    </ServiceSlider>
    <p className="xp-all"><Link href="/hire-developers/#all-expertise">Browse all development stacks <span aria-hidden="true">↗</span></Link></p>
  </>;
}
