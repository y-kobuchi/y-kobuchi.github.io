import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack:(config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 200,
      };
    }
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  turbopack: {}, // ← ここの追加が重要
};

export default nextConfig;
