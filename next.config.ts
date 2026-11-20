import type { NextConfig } from 'next';
const config: NextConfig = {
  trailingSlash: true,
  experimental: { cpus: 1 },
  devIndicators: false,
  async redirects() {
    return [
      { source: '/', destination: '/temp/', permanent: false },
    ];
  },
};
export default config;
