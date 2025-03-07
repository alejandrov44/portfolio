import type { MetadataRoute } from "next";
import { url } from "@/utils/seo";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${url}/experience-timeline`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
};

export default sitemap;
