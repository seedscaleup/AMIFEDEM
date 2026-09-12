import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/prets",
        destination: "/epargne-credit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
