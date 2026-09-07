"use client";
import { MediaImage } from "./media-image";
import Link from "@/components/site-link";
import { useState } from "react";
export function CatalogFilter() {
  const [material, setMaterial] = useState("All");
  const [style, setStyle] = useState("All");
  const items = ["steel", "fiberglass"].flatMap((m) =>
    [
      "traditional",
      "modern",
      "contemporary",
      "craftsman",
      ...(m === "fiberglass" ? ["shaped"] : []),
    ].map((s) => ({
      material: m,
      style: s,
      path: `/catalog/${m}-${s}-doors/`,
    })),
  );
  const shown = items.filter(
    (i) =>
      (material === "All" || i.material === material) &&
      (style === "All" || i.style === style),
  );
  return (
    <section className="catalog-browser" aria-label="Browse door designs">
      <div className="catalog-filters">
        <label>
          Material
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            {["All", "steel", "fiberglass"].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label>
          Design direction
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            {[
              "All",
              "traditional",
              "modern",
              "contemporary",
              "craftsman",
              "shaped",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <p aria-live="polite">
          {shown.length} design{" "}
          {shown.length === 1 ? "collection" : "collections"}
        </p>
      </div>
      <div className="design-cards">
        {shown.map((item) => (
          <Link href={item.path} key={item.path}>
            <MediaImage
              className="catalog-illustration"
              name={`illustrations/door-${item.material}-${item.style}`}
              alt={`Illustrative ${item.style} ${item.material} entry-door design`}
              sizes="(max-width: 600px) 45vw, 22vw"
              loading="lazy"
            />
            <h3>
              {item.style} {item.material}
            </h3>
            <span>Explore the design →</span>
          </Link>
        ))}
        {shown.length === 0 && (
          <p>
            No collections match these filters. Choose another material or
            design direction.
          </p>
        )}
      </div>
      <p className="table-description">
        AI-generated illustrations show design directions, not specific supplied
        models.
      </p>
    </section>
  );
}
