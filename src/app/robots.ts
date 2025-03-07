import type { MetadataRoute } from "next";
import { url } from "@/utils/seo";

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
