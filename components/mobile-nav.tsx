'use client';
import Link from 'next/link';
import {useRef} from 'react';
export default function MobileNav(){const menu=useRef<HTMLDetailsElement>(null);return <details className="mobile-nav" ref={menu}><summary aria-label="Open navigation">☰</summary><nav onClick={(event)=>{if((event.target as HTMLElement).closest('a')&&menu.current)menu.current.open=false}}><Link href="/">Home</Link><Link href="/about/">About</Link><Link href="/hire-developers/">Expertise</Link><Link href="/guides/">Insights</Link><Link href="/contact/">Contact</Link></nav></details>}
