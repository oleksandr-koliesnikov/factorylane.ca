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
import { videoPages } from "./videos";
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
