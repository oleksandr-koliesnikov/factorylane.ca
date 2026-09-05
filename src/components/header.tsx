"use client";
import Link from "@/components/site-link";
import { useState, useEffect, useRef } from "react";
import { Icon } from "./icons";
import { navigation } from "@/lib/navigation";
export function Header() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const close = () => {
    setMobile(false);
    setActive(null);
  };
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobile(false);
        setActive(null);
        const toggle =
          root.current?.querySelector<HTMLButtonElement>(".menu-toggle");
        if (toggle && toggle.getClientRects().length) toggle.focus();
        else opener.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) {
        setActive(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="utility">
        <span>DIRECT FROM MANUFACTURING. DESIGNED AROUND YOU.</span>
        <Link href="/appointments/showroom/">
          <Icon name="pin" size={14} /> Visit our showroom
        </Link>
      </div>
      <header ref={root} className="header full-header">
        <Link
          href="/"
          aria-label="Factory Lane home"
          className="logo"
          onClick={close}
        >
          <img
            src="/media/logo-header.webp"
            width="700"
            height="283"
            alt="Factory Lane Windows & Doors"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={`main-nav ${mobile ? "is-open" : ""}`}
        >
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.groups ? (
                <>
                  <button
                    className="nav-disclosure"
                    aria-expanded={active === item.label}
                    aria-controls={`menu-${item.label.toLowerCase()}`}
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setActive(active === item.label ? null : item.label);
                    }}
                  >
                    {item.label}
                    <span aria-hidden="true" className="chevron" />
                  </button>
                  <div
                    className={`mega-menu ${active === item.label ? "is-open" : ""}`}
                    id={`menu-${item.label.toLowerCase()}`}
                    inert={active !== item.label}
                  >
                    <div className="mega-heading">
                      <Link href={item.href} onClick={close}>
                        Explore{" "}
                        {item.label === "Advice"
                          ? "resources"
                          : item.label.toLowerCase()}{" "}
                        <Icon size={19} />
                      </Link>
                      <span>
                        Clear choices. Real products. A place to start.
                      </span>
                    </div>
                    <div className="mega-columns">
                      {item.groups.map((group) => (
                        <div key={group.label}>
                          <p>{group.label}</p>
                          <ul>
                            {group.links.map(([label, href]) => (
                              <li key={href}>
                                <Link href={href} onClick={close}>
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mega-bottom">
                      <Link href="/offers/" onClick={close}>
                        <Icon name="gift" size={18} /> Buy 3+ windows. Get
                        single roll blinds free.
                      </Link>
                      <Link href="/appointments/showroom/" onClick={close}>
                        Compare in the showroom <Icon size={18} />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link className="nav-direct" href={item.href} onClick={close}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/appointments/showroom/"
            className="mobile-appointment"
            onClick={close}
          >
            Book a showroom appointment <Icon size={18} />
          </Link>
        </nav>
        <Link className="header-cta" href="/estimate/" onClick={close}>
          <span>
            Get Free Estimate<small>AT YOUR HOME</small>
          </span>
          <Icon size={18} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="main-navigation"
          onClick={(e) => {
            opener.current = e.currentTarget;
            setMobile(!mobile);
            if (mobile) setActive(null);
          }}
        >
          <Icon name={mobile ? "close" : "menu"} />
        </button>
      </header>
    </>
  );
}
