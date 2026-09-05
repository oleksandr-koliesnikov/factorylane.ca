import type { MetadataRoute } from "next";
import { pages } from "@/content";
import { site } from "@/lib/site";
import { indexingEnabled } from "@/lib/indexing";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];
  const paths = [
    "/",
    "/offers/",
    "/estimate/",
    "/appointments/showroom/",
    ...pages.filter((p) => !p.review).map((p) => p.path),
  ];
  return paths.map((path) => ({ url: site.url + path }));
}
