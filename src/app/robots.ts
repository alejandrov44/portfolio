import type { MetadataRoute } from "next";
import { url } from "@/utils/seo";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${url}/sitemap.xml` };
};

export default robots;
