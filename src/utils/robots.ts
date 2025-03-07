import type { MetadataRoute } from "next";
import { url } from "./seo";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}`,
  };
};
export default robots;
