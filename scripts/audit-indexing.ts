import assert from "node:assert/strict";
import { pages } from "../src/content";
import { indexingEnabled, pageRobots } from "../src/lib/indexing";
import sitemap from "../src/app/sitemap";
import robots from "../src/app/robots";

const urls = sitemap().map((p) => new URL(p.url).pathname);
assert.equal(pageRobots().index, indexingEnabled);
assert.equal(pageRobots(true).index, false);
if (indexingEnabled) {
  assert(urls.includes("/"));
  for (const page of pages)
    assert.equal(urls.includes(page.path), !page.review, page.path);
  assert.equal(robots().sitemap, "https://factorylane.ca/sitemap.xml");
} else {
  assert.equal(urls.length, 0);
  assert.deepEqual(robots().rules, { userAgent: "*", disallow: "/" });
}
console.log(
  `Indexing ${indexingEnabled ? "production" : "preview"}: passed; ${urls.length} sitemap URLs.`,
);
