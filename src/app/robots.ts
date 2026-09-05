import type { MetadataRoute } from "next";
import { indexingEnabled } from "@/lib/indexing";
import { site } from "@/lib/site";
export const dynamic = "force-static";
// Remove this launch gate only when real contact details, offer terms and CRM are ready.
export default function robots(): MetadataRoute.Robots {
  return indexingEnabled
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: site.url + "/sitemap.xml",
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
