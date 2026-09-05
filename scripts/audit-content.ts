import { pages, pageByPath, staticLabels, breadcrumbs } from "../src/content";
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
const errors: string[] = [];
const known = new Set([
  "/",
  "/sitemap/",
  "/offers/",
  "/estimate/",
  "/appointments/showroom/",
  ...pages.map((p) => p.path),
]);
const referenced = new Set<string>();
const check = (href: string, source: string) => {
  if (!href.startsWith("/")) return;
  const path = href.split(/[?#]/)[0];
  referenced.add(path);
  if (!known.has(path)) errors.push(`Broken content link: ${source} → ${href}`);
};
for (const p of pages) {
  check(p.parent, p.path);
  p.related.forEach((h) => check(h, p.path));
  p.sections.forEach((s) => s.links?.forEach((l) => check(l.href, p.path)));
  breadcrumbs(p.path);
  if (!p.title || !p.description || !p.intro || !p.sections.length)
    errors.push(`Incomplete page: ${p.path}`);
}
const duplicateTitles = pages.filter(
  (p, i) =>
    pages.findIndex((q) => q.title.toLowerCase() === p.title.toLowerCase()) !==
    i,
);
duplicateTitles.forEach((p) => errors.push(`Duplicate title: ${p.path}`));
const counts = Object.fromEntries(
  [...new Set(pages.map((p) => p.kind))].map((k) => [
    k,
    pages.filter((p) => p.kind === k).length,
  ]),
);
const manifest = pages.map((p) => ({
  path: p.path,
  title: p.title,
  parent: p.parent,
  kind: p.kind,
  words: [
    p.intro,
    ...p.sections.flatMap((s) => [
      s.title,
      ...(s.paragraphs ?? []),
      ...(s.bullets ?? []),
      ...(s.table?.rows.flat() ?? []),
    ]),
  ]
    .join(" ")
    .split(/\s+/).length,
  review: p.review ?? null,
  links: [
    p.parent,
    ...p.related,
    ...p.sections.flatMap((s) => s.links?.map((l) => l.href) ?? []),
  ],
}));
mkdirSync("output/audit", { recursive: true });
writeFileSync(
  "output/audit/content-manifest.json",
  JSON.stringify(manifest, null, 2),
);
writeFileSync(
  "output/audit/content-summary.json",
  JSON.stringify(
    {
      pages: pages.length,
      counts,
      errors,
      reviewRequired: manifest.filter((p) => p.review).length,
      totalWords: manifest.reduce((s, p) => s + p.words, 0),
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      pages: pages.length,
      counts,
      errors,
      reviewRequired: manifest.filter((p) => p.review).length,
      totalWords: manifest.reduce((s, p) => s + p.words, 0),
    },
    null,
    2,
  ),
);
if (errors.length) process.exitCode = 1;
