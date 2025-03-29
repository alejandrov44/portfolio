import { url } from "@/utils/seo";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    { changeFrequency: "monthly", lastModified: new Date(), priority: 1, url },
    { changeFrequency: "monthly", lastModified: new Date(), priority: 0.8, url: `${url}/experience-timeline` },
    { changeFrequency: "monthly", lastModified: new Date(), priority: 0.8, url: `${url}/skills` },
    { changeFrequency: "monthly", lastModified: new Date(), priority: 0.8, url: `${url}/projects` },
  ];
};

export default sitemap;
