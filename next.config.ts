import environmentVariables from "@/utils/environments";
import { NextConfig } from "next";

export const basePath = new URL(environmentVariables.baseUrl).pathname.replace(/\/$/, "");

export default () => {
  const nextConfig = {
    basePath: basePath !== "/" ? basePath : "",
    assetPrefix: basePath !== "/" ? basePath : "",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
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
  return nextConfig;
};
