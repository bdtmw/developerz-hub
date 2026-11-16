import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site';
import { SiteSchema } from '@/components/seo';
import './globals.css';
import './fonts.css';
import './reference-style.css';
import './seo-style.css';
export const metadata: Metadata = {metadataBase:new URL('https://developerzhub.com'),title:{default:'Developerz Hub',template:'%s | Developerz Hub'},robots:{index:false,follow:true},verification:{google:process.env.GOOGLE_SITE_VERIFICATION||undefined,other:process.env.BING_SITE_VERIFICATION?{'msvalidate.01':process.env.BING_SITE_VERIFICATION}:undefined}};
// Browser extensions (for example Grammarly) may add body attributes before hydration.
// Suppress only this element's mismatch warning; descendant hydration checks remain enabled.
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><head><link rel="preload" href="/fonts/dm-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body suppressHydrationWarning><a className="skip-link" href="#main">Skip to content</a><SiteSchema/><Header/>{children}<Footer/></body></html>}
