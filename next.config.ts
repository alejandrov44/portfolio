import environmentVariables from "@/utils/environments";
import { NextConfig } from "next";

export const basePath = new URL(environmentVariables.baseUrl).pathname.replace(/\/$/, "");

const next = () => {
  const nextConfig = {
    output: "export",
    basePath: basePath === "/" ? "" : basePath,
    assetPrefix: basePath === "/" ? "" : basePath,
    trailingSlash: true,
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    pageExtensions: ["tsx", "mdx"],
    experimental: { typedRoutes: true },
  } satisfies NextConfig;
  return nextConfig;
};
export default next;
