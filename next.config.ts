import environmentVariables from "@/utils/environments";
import { NextConfig } from "next";

export const basePath = new URL(environmentVariables.baseUrl).pathname.replace(/\/$/, "");

const next = () => {
  const nextConfig = {
    assetPrefix: basePath === "/" ? "" : basePath,
    basePath: basePath === "/" ? "" : basePath,
    eslint: { ignoreDuringBuilds: true },
    experimental: { typedRoutes: true },
    images: { unoptimized: true },
    output: "export",
    pageExtensions: ["tsx", "mdx"],
    trailingSlash: true,
    typescript: { ignoreBuildErrors: true },
  } satisfies NextConfig;
  return nextConfig;
};
export default next;
