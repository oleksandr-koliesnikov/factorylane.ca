import { MediaImage } from "@/components/media-image";
import type { Metadata } from "next";
import Link from "@/components/site-link";
import { notFound } from "next/navigation";
import { pages, pageByPath, pageLabel, breadcrumbs } from "@/content";
import { videoItems } from "@/content/videos";
import { Actions } from "@/components/common";
import { PriceGuide } from "@/components/price-calculator";
import { CatalogFilter } from "@/components/catalog-filter";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";
import { WindowDiagram } from "@/components/window-diagram";
import { pageRobots } from "@/lib/indexing";
export const dynamicParams = false;
export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}
type Props = { params: Promise<{ slug: string[] }> };
function description(text: string) {
  return text.length > 160
    ? text.slice(0, 157).replace(/\s+\S*$/, "") + "…"
    : text;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = pageByPath.get("/" + slug.join("/") + "/");
  if (!p) return { title: "Page not found" };
  return {
    title: p.title,
    description: description(p.description),
    robots: pageRobots(Boolean(p.review)),
    alternates: { canonical: p.path },
    openGraph: {
      title: p.title,
      description: description(p.description),
      url: p.path,
      images: [
        {
          url: `/media/${p.image ?? "windows"}.webp`,
          alt: p.imageAlt ?? p.title,
        },
      ],
    },
  };
}
export default async function Content({ params }: Props) {
  const { slug } = await params;
  const path = "/" + slug.join("/") + "/";
  const p = pageByPath.get(path);
  if (!p) notFound();
  const crumbs = breadcrumbs(path);
  const video = videoItems.find((v) => v.path === path);
  const isWindow = p.kind === "product" && p.parent === "/windows/";
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": site.url + "/#website",
      url: site.url,
      name: site.name,
      publisher: { "@id": site.url + "/#organization" },
      inLanguage: "en-CA",
    },
    {
      "@type": "Organization",
      "@id": site.url + "/#organization",
      name: site.name,
      url: site.url,
      logo: site.url + "/media/logo-header.webp",
    },
    {
      "@type": p.kind === "hub" ? "CollectionPage" : "WebPage",
      "@id": site.url + path + "#webpage",
      url: site.url + path,
      name: p.title,
      description: p.intro,
      inLanguage: "en-CA",
      isPartOf: { "@id": site.url + "/#website" },
      publisher: { "@id": site.url + "/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: site.url + c.href,
      })),
    },
  ];
  if (p.faq?.length)
    graph.push({
      "@type": "FAQPage",
      "@id": site.url + path + "#faq",
      isPartOf: { "@id": site.url + path + "#webpage" },
      mainEntity: p.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  if (p.city)
    graph.push({
      "@type": "Service",
      "@id": site.url + path + "#service",
      name: `Window and door project consultations in ${p.city}`,
      serviceType: "Window and door replacement consultation",
      areaServed: { "@type": "Place", name: p.city },
      provider: { "@id": site.url + "/#organization" },
    });
  if (video)
    graph.push({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: site.url + video.poster,
      contentUrl: site.url + video.file,
      uploadDate: "2026-09-05",
      duration: video.duration,
      transcript: video.transcript,
      isPartOf: { "@id": site.url + path + "#webpage" },
    });
  return (
    <main id="main" className={`content-page content-${p.kind}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": graph,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.href}>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page">{c.label}</span>
                ) : (
                  <Link href={c.href}>{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <header className={`content-hero ${p.image ? "with-image" : ""}`}>
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            <h1>{p.title}</h1>
            <p className="content-intro">{p.intro}</p>
            <Actions context={p.title} />
          </div>
          {p.image && (
            <figure
              className={
                p.image.startsWith("illustrations/")
                  ? "product-illustration"
                  : undefined
              }
            >
              <MediaImage
                name={p.image}
                sizes="(max-width: 767px) 100vw, (max-width: 1440px) 44vw, 565px"
                width="1200"
                height="1000"
                alt={p.imageAlt ?? "Showroom and product details"}
                fetchPriority="high"
              />
              <figcaption>
                {p.imageCaption ??
                  (p.image === "comfort-backyard"
                    ? "Illustrative home concept"
                    : "From our showroom & production media")}
              </figcaption>
            </figure>
          )}
        </header>
        {p.video && (
          <div className="watch-player">
            <video
              controls
              preload="metadata"
              playsInline
              poster={video?.poster}
              aria-label={p.title}
            >
              <source src={p.video} type="video/mp4" />
            </video>
            <p>Silent demonstration · written description below</p>
          </div>
        )}
        {p.path === "/catalog/doors-catalog/" && <CatalogFilter />}
        {p.gallery && (
          <div className="owned-gallery">
            {p.gallery.map((photo) => (
              <figure key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width="1400"
                  height="1000"
                />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
        {isWindow && (
          <WindowDiagram key={slug[1]} type={slug[1]} title={p.title} />
        )}
        <div className="article-layout">
          <aside className="article-nav">
            <p>ON THIS PAGE</p>
            <nav aria-label="On this page">
              {p.sections.map((s, i) => (
                <a key={i} href={`#section-${i + 1}`}>
                  {s.title}
                </a>
              ))}
              {(p.priceProduct ||
                ["/pricing/windows/", "/pricing/doors/"].includes(p.path)) && (
                <a href="#price-calculator">Price reference & calculator</a>
              )}
              {p.faq && <a href="#page-questions">Your questions</a>}
            </nav>
            <Link href={p.parent} className="text-link">
              Explore {pageLabel(p.parent).toLowerCase()} <Icon size={17} />
            </Link>
          </aside>
          <article className="article-body">
            {p.sections.map((section, i) => (
              <section
                id={`section-${i + 1}`}
                className="article-section"
                key={i}
              >
                <span className="section-count">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((text, j) => (
                  <p key={j}>{text}</p>
                ))}
                {section.video && (
                  <figure className="section-video">
                    <video
                      controls
                      preload="none"
                      playsInline
                      poster={section.video.poster}
                      aria-label={section.video.title}
                    >
                      <source src={section.video.file} type="video/mp4" />
                    </video>
                    <figcaption>
                      <strong>{section.video.title}</strong>
                      <p>{section.video.description}</p>
                    </figcaption>
                    <details>
                      <summary>Read the silent video description</summary>
                      <p>{section.video.transcript}</p>
                    </details>
                  </figure>
                )}
                {section.bullets && (
                  <ul className="content-checklist">
                    {section.bullets.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div
                    className="table-scroll article-table"
                    tabIndex={0}
                    role="region"
                    aria-label={section.title}
                  >
                    <table>
                      <caption>{section.title}</caption>
                      <thead>
                        <tr>
                          {section.table.headers.map((h) => (
                            <th scope="col" key={h}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, r) => (
                          <tr key={r}>
                            {row.map((v, c) =>
                              c === 0 ? (
                                <th scope="row" key={c}>
                                  {v}
                                </th>
                              ) : (
                                <td key={c}>{v}</td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.links && (
                  <div className="content-links">
                    {section.links.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span>{link.label}</span>
                        <Icon size={20} />
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
        {(p.priceProduct ||
          p.path === "/pricing/windows/" ||
          p.path === "/pricing/doors/") && (
          <PriceGuide
            doors={p.path.includes("/doors/")}
            product={p.priceProduct}
          />
        )}
        {p.faq && (
          <section id="page-questions" className="content-faq">
            <div>
              <p className="eyebrow">BEFORE YOU DECIDE</p>
              <h2>
                Your questions,
                <br />
                <em>answered.</em>
              </h2>
            </div>
            <div className="faq-list">
              {p.faq.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <Icon name="plus" size={21} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        <section className="related-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KEEP EXPLORING</p>
              <h2>The next useful detail.</h2>
            </div>
            <Link href={p.parent} className="text-link">
              Back to {pageLabel(p.parent).toLowerCase()} <Icon size={18} />
            </Link>
          </div>
          <div className="related-grid">
            {p.related.map((url) => (
              <Link href={url} key={url}>
                <span>{pageLabel(url)}</span>
                <Icon />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className="content-closing">
        <div className="container">
          <div>
            <p className="eyebrow light">LET’S PUT THE DETAILS TOGETHER</p>
            <h2>
              Ready to talk
              <br />
              <em>about your home?</em>
            </h2>
          </div>
          <Actions light context={p.title} />
        </div>
      </section>
    </main>
  );
}
