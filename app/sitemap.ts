import type { MetadataRoute } from "next";
import { siteConfig as s } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: s.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${s.url}/medical-store`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${s.url}/pathkind-lab`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${s.url}/blood-collection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${s.url}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${s.url}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
