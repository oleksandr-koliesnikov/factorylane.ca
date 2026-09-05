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
  const available = prices.filter((p) =>
    product ? p.product === product : p.id.startsWith(doors ? "D" : "W"),
  );
  const names = Array.from(new Set(available.map((r) => r.product)));
  const [choice, setChoice] = useState(names[0] ?? "");
  const [option, setOption] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const options = available.filter((r) => r.product === choice);
  const record = options[option] ?? options[0];
  if (!record) return null;
  const allRows = product
    ? available
    : prices.filter((p) => p.id.startsWith(doors ? "D" : "W"));
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
            Canadian-dollar planning references. Confirm dimensions,
            installation scope, taxes and selected options in your written
            quote.
          </p>
          <p className="calculator-caution">
            This calculator does not place an order or provide a final quote.
          </p>
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
                : "Reference range · " + record.basis.toLowerCase()}
            </span>
            <strong>
              {record.needsReview
                ? "Request a measured quote"
                : `${money(record.min * quantity)} – ${money(record.max * quantity)}`}
            </strong>
            <small>
              {record.needsReview
                ? "This source outlier is excluded from calculations."
                : "CAD · final scope and taxes to confirm"}
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
          {doors
            ? "Product and installed references are separate."
            : "Size labels are reference groups, not approved measurement bands."}{" "}
          Exact inclusions and taxes require confirmation.
        </p>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Price reference table"
        >
          <table>
            <caption>
              Planning prices in CAD · reviewed September 5, 2026
            </caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">{doors ? "Basis" : "Size group"}</th>
                <th scope="col">Range</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((r) => (
                <tr key={r.id}>
                  <th scope="row">{r.product}</th>
                  <td>{doors ? r.basis : r.size}</td>
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
