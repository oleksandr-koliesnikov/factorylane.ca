import assert from "node:assert/strict";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { pages, pageByPath } from "../src/content";
import { productIllustrations } from "../src/content/product-illustrations";
import sizes from "../src/content/image-sizes.json";
const rows: { path: string; title: string; image: string; caption: string }[] =
  [];
for (const [path, expected] of Object.entries(productIllustrations)) {
  const p = pageByPath.get(path);
  assert(p, `Missing product route: ${path}`);
  assert.equal(
    p.image,
    `illustrations/${expected.image}`,
    `Wrong product image: ${path}`,
  );
  assert.equal(p.imageAlt, expected.alt, `Wrong product alt: ${path}`);
}
for (const p of pages.filter((p) => p.image?.startsWith("illustrations/"))) {
  const name = p.image!;
  assert(
    p.imageCaption?.includes("AI-generated"),
    `Missing disclosure: ${p.path}`,
  );
  assert(
    p.imageAlt && !p.imageAlt.includes("showroom"),
    `Misleading alt: ${p.path}`,
  );
  for (const suffix of ["", "-480", "-800", "-1200"])
    assert(
      existsSync(`public/media/${name}${suffix}.webp`),
      `Missing asset: ${name}${suffix}`,
    );
  assert(name in sizes, `Missing responsive image data: ${name}`);
  rows.push({
    path: p.path,
    title: p.title,
    image: name,
    caption: p.imageCaption!,
  });
}
const windows = Object.keys(productIllustrations).filter((p) =>
  p.startsWith("/windows/"),
);
assert.equal(windows.length, 11);
assert.equal(
  new Set(windows.map((path) => pageByPath.get(path)!.image)).size,
  11,
  "Window types must not share one generic picture",
);
mkdirSync("output/audit", { recursive: true });
writeFileSync(
  "output/audit/product-imagery.json",
  JSON.stringify(rows, null, 2) + "\n",
);
console.log(
  `Product imagery: ${windows.length} distinct window-type images; ${rows.length} illustrated pages; assets, captions and responsive sources passed.`,
);
