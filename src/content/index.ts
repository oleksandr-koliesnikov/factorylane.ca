import { applyProductIllustrations } from "./product-illustrations";
import { specifyCatalogue } from "./depth/catalogue-specific";
import { deepenCities } from "./depth/cities";
import { deepenHubs } from "./depth/hubs";
import { deepenWindows } from "./depth/windows";
import { deepenDoors } from "./depth/doors";
import { deepenTechnology } from "./depth/technology";
import { deepenComparisons } from "./depth/comparisons";
import { deepenSeries } from "./depth/series-catalog";
import { deepenCatalogue } from "./depth/series-catalog";
import { deepenPlanning } from "./depth/planning";
import { deepenExtensions } from "./depth/extensions";
import { windowPages, windowTechnologyPages } from "./windows";
import { doorPages } from "./doors";
import { comparisonPages } from "./guides";
import { cityPages } from "./cities";
import { businessPages } from "./business";
import { resourcePages } from "./resources";
import { extensionPages } from "./extensions";
import { hubPages } from "./hubs";
import { catalogPages } from "./catalog";
import { evidencePages } from "./placeholders";
import { videoPages, videoItems } from "./videos";
import { ownedPages } from "./owned-records";
export const pages = [
  ...windowPages,
  ...windowTechnologyPages,
  ...doorPages,
  ...comparisonPages,
  ...cityPages,
  ...businessPages,
  ...resourcePages,
  ...extensionPages,
  ...hubPages,
  ...catalogPages,
  ...evidencePages,
  ...videoPages,
  ...ownedPages,
];
deepenWindows(windowPages);
deepenDoors(doorPages);
deepenTechnology(windowTechnologyPages);
deepenComparisons(comparisonPages);
deepenSeries(hubPages);
deepenCatalogue(catalogPages);
specifyCatalogue(catalogPages);
deepenPlanning(pages);
deepenExtensions(extensionPages);
deepenCities(cityPages);
deepenHubs(hubPages);
for (const p of pages) {
  const footage =
    (p.kind === "product" && p.parent === "/windows/") ||
    p.path.startsWith("/windows/series/")
      ? videoItems[1]
      : p.path.startsWith("/doors/patio/")
        ? videoItems[2]
        : p.path.startsWith("/doors/entry/") || p.path === "/showroom/"
          ? videoItems[0]
          : undefined;
  if (footage)
    p.sections.push({
      title:
        footage === videoItems[1]
          ? "A look at the production setting"
          : footage === videoItems[2]
            ? "See a patio system in motion"
            : "Explore the showroom displays",
      video: {
        file: footage.file,
        poster: footage.poster,
        title: footage.title,
        description: footage.description,
        transcript: footage.transcript,
      },
      links: [
        { label: "Watch this film and read its context", href: footage.path },
        { label: "Plan your showroom visit", href: "/showroom/" },
      ],
    });
}
for (const record of ownedPages) {
  const parent = pages.find((p) => p.path === record.parent);
  if (parent) {
    let section = parent.sections.find(
      (s) => s.title === "Explore the collection",
    );
    if (!section) {
      section = { title: "Explore the collection", links: [] };
      parent.sections.push(section);
    }
    section.links!.push({ label: record.title, href: record.path });
  }
}
applyProductIllustrations(pages);
export const pageByPath = new Map(pages.map((page) => [page.path, page]));
if (pageByPath.size !== pages.length) throw new Error("Duplicate content URL");
export const staticLabels: Record<string, string> = {
  "/": "Home",
  "/estimate/": "Free home estimate",
  "/appointments/showroom/": "Showroom appointment",
  "/offers/": "Free blinds offer",
};
export const pageLabel = (path: string) =>
  pageByPath.get(path)?.title ?? staticLabels[path] ?? path;
export function breadcrumbs(path: string) {
  const result = [{ label: pageLabel(path), href: path }];
  let page = pageByPath.get(path);
  const visited = new Set([path]);
  while (page && page.parent !== "/") {
    if (visited.has(page.parent)) throw new Error("Circular breadcrumb");
    visited.add(page.parent);
    result.unshift({ label: pageLabel(page.parent), href: page.parent });
    page = pageByPath.get(page.parent);
  }
  return [{ label: "Home", href: "/" }, ...result];
}
