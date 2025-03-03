import { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
const repoName = "portfolio";

export default (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig = {
    basePath: isDev ? undefined : `/${repoName}`,
    assetPrefix: isDev ? undefined : `/${repoName}`,
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
