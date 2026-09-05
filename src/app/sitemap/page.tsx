import type { Metadata } from "next";
import Link from "@/components/site-link";
import { pages } from "@/content";
export const metadata: Metadata = {
  title: "Website Sitemap",
  description:
    "Find every Factory Lane window, door, comparison, price, installation and service-area page in the website sitemap.",
  alternates: { canonical: "/sitemap/" },
};
export default function Sitemap() {
  const groups = [
    ["Windows", pages.filter((p) => p.path.startsWith("/windows/"))],
    [
      "Doors & catalogue",
      pages.filter(
        (p) => p.path.startsWith("/doors/") || p.path.startsWith("/catalog/"),
      ),
    ],
    [
      "Compare & learn",
      pages.filter(
        (p) =>
          p.path.startsWith("/compare/") ||
          p.path.startsWith("/resources/") ||
          p.path.startsWith("/videos/"),
      ),
    ],
    [
      "Service areas",
      pages.filter((p) => p.path.startsWith("/service-areas/")),
    ],
    [
      "Company, installation & more",
      pages.filter(
        (p) =>
          ![
            "/windows/",
            "/doors/",
            "/catalog/",
            "/compare/",
            "/resources/",
            "/videos/",
            "/service-areas/",
          ].some((s) => p.path.startsWith(s)),
      ),
    ],
  ] as const;
  return (
    <main id="main" className="container sitemap-page">
      <p className="eyebrow">FIND YOUR WAY</p>
      <h1>
        Every useful detail.
        <br />
        <em>All in one place.</em>
      </h1>
      <p>Browse the window, door, installation and service-area pages.</p>
      <div className="sitemap-actions">
        <Link href="/">Home</Link>
        <Link href="/offers/">Current offer</Link>
        <Link href="/estimate/">Home estimate</Link>
        <Link href="/appointments/showroom/">Showroom appointment</Link>
      </div>
      {groups.map(([title, items]) => (
        <section key={title}>
          <h2>{title}</h2>
          <ul>
            {items.map((p) => (
              <li key={p.path}>
                <Link href={p.path}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
