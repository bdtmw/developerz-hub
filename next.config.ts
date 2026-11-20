import type { NextConfig } from 'next';
const config: NextConfig = { trailingSlash: true, experimental: { cpus: 1 }, devIndicators: false };
export default config;
