import Link from 'next/link';
import { ServiceSlider } from '@/components/service-slider';

// Services shown in the home slider. Photos live in /public/services (Unsplash, free licence).
const cards = [
  { href: '/hire-web-developers/', title: 'Web development', photo: 'web' },
  { href: '/hire-wordpress-developers/', title: 'WordPress development', photo: 'wordpress' },
  { href: '/hire-full-stack-developers/', title: 'Full-stack development', photo: 'full-stack' },
  { href: '/hire-mobile-app-developers/', title: 'Mobile app development', photo: 'mobile' },
  { href: '/hire-shopify-developers/', title: 'Shopify development', photo: 'shopify' },
  { href: '/hire-cloud-developers/', title: 'Cloud & APIs', photo: 'cloud' },
  { href: '/hire-chatbot-developers/', title: 'Chatbot & AI applications', photo: 'ai' },
  { href: '/hire-ecommerce-developers/', title: 'Ecommerce development', photo: 'ecommerce' },
];

export function ExpertiseCards() {
  return <>
    <ServiceSlider>
      {cards.map((card, i) => <Link href={card.href} className="sv-card" key={card.href}>
        <span className="sv-face">
          <img className="sv-photo" src={`/services/${card.photo}.webp`} alt="" width="480" height="660" loading="lazy" decoding="async"/>
          <span className="sv-number">{String(i + 1).padStart(2, '0')}</span>
          <span className="sv-title">{card.title}</span>
        </span>
        <span className="sv-arrow" aria-hidden="true">↗</span>
      </Link>)}
    </ServiceSlider>
    <p className="xp-all"><Link href="/hire-developers/#all-expertise">Browse all development stacks <span aria-hidden="true">↗</span></Link></p>
  </>;
}
