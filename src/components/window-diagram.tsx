"use client";
import { useState } from "react";
export function WindowDiagram({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  const fixed = ["picture", "fixed-casement", "bay", "bow"].includes(type);
  const [open, setOpen] = useState(false);
  const horizontal = type === "sliding";
  const hung = ["single-hung", "double-hung"].includes(type);
  const tilt = ["awning", "hopper", "tilt-and-turn"].includes(type);
  return (
    <section className="window-explainer">
      <div>
        <p className="eyebrow">UNDERSTAND THE OPENING</p>
        <h2>
          {fixed
            ? "See the configuration."
            : "A small detail. A different movement."}
        </h2>
        <p>
          {fixed
            ? "This schematic explains the general arrangement. Actual frame proportions, glazing and operating side panels are specified for your selected configuration."
            : "Switch the schematic to compare closed and opening positions. The illustration explains the movement; it is not a dimensional drawing or a product certification."}
        </p>
        {!fixed && (
          <button
            className="diagram-toggle"
            aria-pressed={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Show closed position" : "Show opening movement"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
      <figure>
        <svg
          viewBox="0 0 420 290"
          role="img"
          aria-label={`${title}: ${open ? "opening" : "closed"} schematic`}
        >
          <defs>
            <linearGradient id={"glass-" + type} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#dce6df" />
              <stop offset="1" stopColor="#eff0e5" />
            </linearGradient>
          </defs>
          <path d="M42 251h336" stroke="#c9c7bb" strokeWidth="2" />
          {type === "bay" || type === "bow" ? (
            <>
              <path
                d={
                  type === "bay"
                    ? "M55 85 140 52 280 52 365 85 365 242 280 220 140 220 55 242Z"
                    : "M45 85 112 62 177 50 243 50 308 62 375 85 375 238 308 222 243 213 177 213 112 222 45 238Z"
                }
                fill={`url(#glass-${type})`}
                stroke="#37413e"
                strokeWidth="10"
              />
              {(type === "bay" ? [140, 280] : [112, 177, 243, 308]).map((x) => (
                <path
                  key={x}
                  d={`M${x} 57v166`}
                  stroke="#37413e"
                  strokeWidth="7"
                />
              ))}
            </>
          ) : (
            <>
              <rect
                x="100"
                y="32"
                width="220"
                height="212"
                rx="2"
                fill={`url(#glass-${type})`}
                stroke="#35413d"
                strokeWidth="12"
              />
              {horizontal ? (
                <>
                  <path d="M210 39v199" stroke="#35413d" strokeWidth="9" />
                  {open && (
                    <rect
                      x="208"
                      y="43"
                      width="94"
                      height="190"
                      fill="#b94f2620"
                      stroke="#b94f26"
                      strokeWidth="5"
                    />
                  )}
                  <path
                    d={
                      open
                        ? "M147 132h54m-9-8 9 8-9 8"
                        : "M124 132h53m-9-8 9 8-9 8"
                    }
                    stroke="#b94f26"
                    strokeWidth="3"
                    fill="none"
                  />
                </>
              ) : hung ? (
                <>
                  <path d="M106 137h208" stroke="#35413d" strokeWidth="8" />
                  {open && (
                    <>
                      <rect
                        x="111"
                        y="80"
                        width="196"
                        height="98"
                        fill="#b94f2620"
                        stroke="#b94f26"
                        strokeWidth="4"
                      />
                      <path
                        d="M210 207v-28m-7 8 7-8 7 8"
                        fill="none"
                        stroke="#b94f26"
                        strokeWidth="3"
                      />
                    </>
                  )}
                </>
              ) : tilt && open ? (
                <path
                  d={
                    type === "awning"
                      ? "M111 43H308L328 212H92Z"
                      : "M126 66H292L308 234H111Z"
                  }
                  fill="#b94f2610"
                  stroke="#b94f26"
                  strokeWidth="5"
                />
              ) : !fixed && open ? (
                <path
                  d="M111 43 258 71v142l-147 21Z"
                  fill="#b94f2620"
                  stroke="#b94f26"
                  strokeWidth="5"
                />
              ) : (
                <rect
                  x="112"
                  y="44"
                  width="196"
                  height="188"
                  fill="none"
                  stroke="#748078"
                  strokeWidth="2"
                />
              )}
              {!fixed && !hung && !horizontal && (
                <path
                  d="M290 135v22"
                  stroke="#b94f26"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              )}
            </>
          )}
        </svg>
        <figcaption>Schematic illustration · not to scale</figcaption>
      </figure>
    </section>
  );
}
