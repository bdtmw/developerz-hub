import type { MetadataRoute } from 'next';
import { absoluteUrl, pages } from '@/lib/seo';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return Object.keys(pages).filter(path=>path!=='/privacy/').map(path=>({url:absoluteUrl(path)})); }
