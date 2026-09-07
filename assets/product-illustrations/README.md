# Temporary product illustrations

Created 2026-09-07 with built-in Codex ImageGen for Factory Lane. These are generic educational illustrations, not photography of supplied models, completed jobs, manufacturer endorsements or dimensional drawings.

- Website assets: `public/media/illustrations/` (WebP plus 480/800/1200 responsive variants).
- Type-to-image and descriptive-caption mapping: `src/content/product-illustrations.ts`.
- Door design filter uses the matching material/style illustration.
- Generation prompts: `prompts.json` in this directory.
- Full-resolution selected PNGs: local `output/imagegen/product-originals/` (not published).
- Preparation script: `scripts/prepare-product-illustrations.mjs`, using local `output/imagegen/product-illustrations-manifest.json`.
- Verification: `node --import tsx scripts/audit-product-imagery.ts`; local result `output/audit/product-imagery.json`.

## Replacement after filming

Match each new photo to the actual opening mechanism or approved catalogue design. Replace that page's `image`, `imageAlt` and `imageCaption` together. Keep pictures of a showroom or manufacturing process identified as contextual footage. A generated image cannot identify a Novatech model; those collection pages retain a qualified real showroom reference until matched model media is provided.

The illustration CSS uses `contain` and the whole square frame so top/bottom hinges, sills and folding-panel arrangements are not cropped on mobile. The footer and the homepage composition are outside this change.
