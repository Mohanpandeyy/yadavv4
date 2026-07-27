import type { MetadataRoute } from "next";
import { siteConfig as s } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${s.url}/sitemap.xml` };
}
