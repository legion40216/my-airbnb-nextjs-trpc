import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zlygfbahmdwaxbhrtrjs.supabase.co',
      },
    ],
  },
};

export default nextConfig;
