import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since you're using a custom domain, we don't need basePath
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
