import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for better Netlify compatibility
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
  
  // Base path for deployment (leave empty for root domain)
  basePath: '',
  
  // Disable server-side features for static export
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
