import { url } from "@/utils/seo";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return { rules: { allow: "/", userAgent: "*" }, sitemap: `${url}/sitemap.xml` };
};

export default robots;
