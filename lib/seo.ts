import { hiringCopies } from './hiring-copy';
import { stackPages, stackPath } from './expanded-services';
import { hiringGuides } from './hiring-guides';
import type { Metadata } from 'next';

export const site = {
  name: 'Developerz Hub',
  url: 'https://developerzhub.com',
  email: 'info@developerzhub.com',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
export const pages: Record<string, {title: string; description: string}> = {
  ...Object.fromEntries(stackPages.map(s => [stackPath(s.slug), {title: `Hire ${s.name} Developers`, description: s.summary}])),
  ...Object.fromEntries(hiringGuides.map(g => [`/guides/${g.slug}/`, {title:g.title,description:g.intro}])),
  '/': { title: 'Web & Software Development Services', description: 'Build with Developerz Hub across web, mobile, backend, ecommerce and specialist development stacks. Explore services and practical developer hiring guides.' },
  '/hire-developers/': { title: 'Hire Developers for Websites & Applications', description: 'Hire developers across web, mobile, backend, ecommerce and specialist stacks. Compare services and plan your project with Developerz Hub.' },
  '/hire-web-developers/': { title: 'Hire a Web Developer | Websites & Web Apps', description: 'Hire a web developer for responsive websites and custom web applications. Explore Next.js, React, integrations, project scoping and delivery at Developerz Hub.' },
  '/hire-wordpress-developers/': { title: 'Hire a WordPress Developer | Custom Websites', description: 'Hire a WordPress developer for custom themes, content workflows, WooCommerce and website improvements. Plan your WordPress project with Developerz Hub.' },
  '/hire-full-stack-developers/': { title: 'Hire Full-Stack Developers | Web Applications', description: 'Hire full-stack developers for connected interfaces, backend services, APIs and data workflows. Define your application requirements with Developerz Hub.' },
  '/guides/': { title: 'Developer Hiring & Project Planning Guides', description: 'Plan your development project with practical guides to hiring developers, estimating web development costs and choosing a partner for your startup.' },
  '/guides/web-developer-cost/': { title: 'Web Developer Costs: How to Budget Your Project', description: 'Learn what affects web developer costs, compare fixed and hourly pricing, use a sample budget calculation and prepare a brief for a project-specific quote.' },
  '/guides/hire-developer-startup/': { title: 'How to Hire a Developer for Your Startup', description: 'Learn how to scope your first release, evaluate developers, compare engagement models and prepare a practical hiring brief for your startup.' },
  '/about/': { title: 'About Us & Our Development Approach', description: 'Learn how Developerz Hub approaches web, mobile and software projects, from defining requirements to reviewing deliverables and planning the handover.' },
  '/contact/': { title: 'Contact Us | Discuss Your Project', description: 'Contact Developerz Hub at info@developerzhub.com for web, mobile or software development. Prepare a brief with your goals, stack and timeline.' },
  '/privacy/': { title: 'Privacy Information', description: 'How the Developerz Hub website handles project briefs, email enquiries, fonts and basic site delivery information.' },
} as const;
export type PagePath = keyof typeof pages;
export const absoluteUrl = (path: string) => new URL(path, site.url).href;
export function pageMetadata(path: PagePath): Metadata {
  const page = pages[path];
  const hiring=hiringCopies.find(p=>`/${p.slug}/`===path);
  const title = hiring?.titleTag ?? `${page.title} | ${site.name}`;
  const image = { url: absoluteUrl('/social-preview.jpg'), width: 1200, height: 630, alt: 'Developerz Hub — Web, WordPress and full-stack development' };
  return {
    title: { absolute: title }, description: hiring?.description ?? page.description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: site.indexable && path !== '/privacy/', follow: true, googleBot: { index: site.indexable && path !== '/privacy/', follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: { type: 'website', siteName: site.name, title, description: hiring?.description ?? page.description, url: absoluteUrl(path), images: [image] },
    twitter: { card: 'summary_large_image', title, description: hiring?.description ?? page.description, images: [image.url] },
  };
}
export const organization = { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url, email: site.email, logo: { '@type': 'ImageObject', url: absoluteUrl('/developerz-hub-logo.png'), width: 344, height: 66 } };
