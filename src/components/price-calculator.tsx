"use client";
import { useState } from "react";
import prices from "@/content/prices.json";
import { Actions } from "./common";
const money = (n: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
export function PriceGuide({
  doors = false,
  product,
}: {
  doors?: boolean;
  product?: string;
}) {
  const available = prices.filter(
    (p) =>
      p.basis === "Product reference" &&
      (product ? p.product === product : p.id.startsWith(doors ? "D" : "W")),
  );
  const names = Array.from(new Set(available.map((r) => r.product)));
  const [choice, setChoice] = useState(names[0] ?? "");
  const [option, setOption] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const options = available.filter((r) => r.product === choice);
  const record = options[option] ?? options[0];
  if (!record) return null;
  const allRows = product ? available : available;
  return (
    <section className="pricing-module" id="price-calculator">
      <div className="calculator">
        <div>
          <p className="eyebrow">PLAN YOUR BUDGET</p>
          <h2>
            A starting point
            <br />
            for your project.
          </h2>
          <p>
            Very approximate product prices in Canadian dollars, excluding
            installation. Installation is quoted separately. Dimensions, glass,
            finishes and selected options affect the final price.
          </p>
          <p className="calculator-caution">
            This calculator does not place an order or provide a final quote.
          </p>
          {record.note && <p className="calculator-caution">{record.note}</p>}
        </div>
        <div className="calculator-controls">
          <label>
            Product
            <select
              value={choice}
              onChange={(e) => {
                setChoice(e.target.value);
                setOption(0);
              }}
            >
              {names.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
          <div className="form-row">
            <label>
              {doors ? "Price basis" : "Size group"}
              <select
                value={option}
                onChange={(e) => setOption(Number(e.target.value))}
              >
                {options.map((r, i) => (
                  <option key={r.id} value={i}>
                    {doors ? r.basis : r.size}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Quantity
              <input
                type="number"
                min={1}
                max={100}
                step={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(
                      1,
                      Math.min(100, Math.floor(Number(e.target.value) || 1)),
                    ),
                  )
                }
              />
            </label>
          </div>
          <div className="calculated-price" aria-live="polite">
            <span>
              {record.needsReview
                ? "This range needs verification"
                : "Approximate product price · installation excluded"}
            </span>
            <strong>
              {record.needsReview
                ? "Request a measured quote"
                : `${money(record.min * quantity)} – ${money(record.max * quantity)}`}
            </strong>
            <small>
              {record.needsReview
                ? "This range is excluded until its scope is confirmed."
                : "CAD · installation quoted separately · taxes to confirm"}
            </small>
          </div>
          {!doors && quantity >= 3 && (
            <p className="calculator-offer">
              Planning 3+ windows? Ask about single roll blinds in the free-gift
              offer.
            </p>
          )}
        </div>
      </div>
      <div className="pricing-table">
        <h3>
          {product
            ? product + " planning ranges"
            : doors
              ? "Door cost reference table"
              : "Window cost reference table"}
        </h3>
        <p className="table-description">
          Approximate product prices only. Installation is quoted separately.
          Size labels are planning groups; exact dimensions, inclusions and
          taxes require confirmation.
        </p>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Price reference table"
        >
          <table>
            <caption>
              Planning prices in CAD · reviewed September 7, 2026
            </caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">{doors ? "Basis" : "Size group"}</th>
                <th scope="col">Product price · no installation</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((r) => (
                <tr key={r.id}>
                  <th scope="row">{r.product}</th>
                  <td>
                    {doors ? "Product only" : r.size}
                    {r.note && (
                      <span className="price-scope-note">{r.note}</span>
                    )}
                  </td>
                  <td>
                    {r.needsReview
                      ? "Pending verification"
                      : `${money(r.min)} – ${money(r.max)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Actions
        context={product ?? (doors ? "Door price guide" : "Window price guide")}
      />
    </section>
  );
}
