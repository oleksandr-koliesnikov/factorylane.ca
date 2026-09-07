# Factory Lane Windows & Doors

Next.js website for factorylane.ca. The complete preview includes 159 HTML pages: product types, profiles, glass, pricing, comparisons, installation, service areas, catalogue collections, videos, company information and two enquiry flows. Blog articles are intentionally deferred.

## Local development

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To check the production export:

```sh
npm run audit
npm run build
python3 scripts/audit-export.py
npm run preview
```

The export audit defaults to the noindex preview. Generated reports and screenshots are in the ignored `output/` directory.

## Content and media

- `src/content/`: typed page records and factual reference tables. Each record has its own title, description, sections, parent and related links.
- `src/content/owned-records.ts`: project and door-model records. Add approved records with your own photography; routes, gallery, breadcrumbs and collection links are generated automatically. Empty records create no invented case studies or model pages.
- `src/content/prices.json`: CAD planning ranges. Product and installed references remain distinct. Only product-price rows are published; installation is quoted separately. Large custom picture windows carry an explicit scope note.
- `src/content/window-references.json`: additional installed ranges and dimension references.
- `src/lib/site.ts`: business hours, campaign and hero chapter boundaries. Replace the video and chapter timing together after the professional shoot.
- `public/media/`: supplied showroom/production media and generated brand/concept assets. The Comfort scene is an illustrative home concept, labelled accordingly.

Use readable visible content, relevant links and verified facts. Do not add keyword stuffing, invented reviews, unverified ratings or fictitious city offices.

## Indexing and launch

The default is a review preview: every page has `noindex`, robots disallows crawling and the XML sitemap is empty. After the business details, content and lead delivery are approved, set `SITE_INDEXING_ENABLED=true` **only in the production build environment** and rebuild. Do not set this for preview branches.

Content records with a `review` reason remain `noindex` and are omitted from the XML sitemap even after the global launch switch. Resolve the reason and remove the field page by page. The 95 current review flags include local evidence/logistics, exact model details, extensions and business information. The HTML sitemap remains available for review of all pages.

The enquiry flows prepare a mailto message addressed to the configured enquiry email. Visitors review the details and send the message from their email app; the website never claims the message was sent or a meeting reserved. Drafts stay in page memory. A direct-delivery endpoint and CRM/calendar remain the next integration step.

## Cloudflare Pages via GitHub

The Next.js build is a static export and requires these Pages build settings:

- Build command: `npm run build`
- Output directory: `out`
- Node.js: 22 or newer
- Production branch: `main`; work should be reviewed on a separate branch first.

The existing coming-soon deployment uses a different configuration: no build command and output `public`. Updating the repository alone does not migrate that configuration. The owner authorized publishing the full website on September 7, 2026. The Pages project has been migrated to `npm run build` and `out`. Production uses `SITE_INDEXING_ENABLED=true`; preview branches retain the default noindex. Pages with unresolved review reasons remain noindex.

When CRM is connected, use an authenticated server-side integration (for example a separate Cloudflare Worker endpoint), with server validation, spam protection, retries and explicit appointment confirmation. A static export cannot run Next.js server actions or API routes.
