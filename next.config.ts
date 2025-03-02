import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["tsx", "mdx"],
  experimental: {
    typedRoutes: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
