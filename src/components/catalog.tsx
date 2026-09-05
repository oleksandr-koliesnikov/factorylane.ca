"use client";
import { MediaImage } from "@/components/media-image";
import { useRef, useState } from "react";
import Link from "@/components/site-link";
import { products } from "@/lib/site";
import { Icon } from "./icons";
import { Actions } from "./common";
export function Catalog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(products[0]);
  return (
    <>
      <div className="product-grid">
        {products.map((p, i) => (
          <button
            className={`product-card product-${i}`}
            key={p.id}
            onClick={() => {
              setSelected(p);
              dialog.current?.showModal();
            }}
          >
            <div className="product-image">
              <MediaImage
                name={p.image}
                sizes="(max-width: 767px) 100vw, 33vw"
                alt={`${p.name} on display in the showroom`}
                loading="lazy"
                width="1000"
                height="1200"
              />
              <span className="image-index">0{i + 1} / COLLECTION</span>
              <span className="product-arrow">
                <Icon />
              </span>
            </div>
            <div className="product-title">
              <h3>{p.name}</h3>
              <p>{p.line}</p>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="product-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close product details"
          onClick={() => dialog.current?.close()}
        >
          <Icon name="close" />
        </button>
        <div className="dialog-grid">
          <MediaImage
            name={selected.image}
            alt={`${selected.name} display`}
            width="1000"
            height="1200"
          />
          <div className="dialog-content">
            <p className="eyebrow">EXPLORE THE COLLECTION</p>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <h3>Find your style</h3>
            <ul className="style-list">
              {selected.types.map((type) => (
                <li key={type}>
                  <Icon name="check" size={16} />
                  {type}
                </li>
              ))}
            </ul>
            <p>{selected.detail}</p>
            <Link
              href={
                selected.id === "windows"
                  ? "/windows/"
                  : selected.id === "entry-doors"
                    ? "/doors/entry/"
                    : "/doors/patio/"
              }
              className="text-link"
            >
              Explore all {selected.name.toLowerCase()} <Icon size={18} />
            </Link>
            <Actions context={selected.name} />
          </div>
        </div>
      </dialog>
    </>
  );
}
