import type { ContentPage } from "./types";
/** Temporary generated illustrations, deliberately separate from real showroom/project media. */
export const productIllustrations: Record<
  string,
  { image: string; alt: string; detail: string }
> = {
  "/windows/casement/": {
    image: "window-casement",
    alt: "Illustrated casement window with one sash swinging outward on side hinges",
    detail: "Side-hinged · opens outward",
  },
  "/windows/awning/": {
    image: "window-awning",
    alt: "Illustrated awning window with its top edge hinged and bottom edge projecting outward",
    detail: "Top-hinged · opens outward at the bottom",
  },
  "/windows/hopper/": {
    image: "window-hopper",
    alt: "Illustrated hopper window with bottom hinges and the top edge tilted inward",
    detail: "Bottom-hinged · tilts inward at the top",
  },
  "/windows/single-hung/": {
    image: "window-single-hung",
    alt: "Illustrated single-hung window with a fixed upper sash and a raised lower sash",
    detail: "Fixed upper sash · lower sash slides up",
  },
  "/windows/double-hung/": {
    image: "window-double-hung",
    alt: "Illustrated double-hung window shown closed, with separate upper and lower movable sashes",
    detail:
      "Shown closed · both sashes slide vertically; see the opening diagram below",
  },
  "/windows/sliding/": {
    image: "window-sliding",
    alt: "Illustrated sliding window shown closed with side-by-side sashes on horizontal tracks",
    detail:
      "Shown closed · sash slides horizontally; see the opening diagram below",
  },
  "/windows/picture/": {
    image: "window-picture",
    alt: "Illustrated fixed picture window with a broad uninterrupted pane and no opening hardware",
    detail: "Fixed glass · no opening sash",
  },
  "/windows/fixed-casement/": {
    image: "window-fixed-casement",
    alt: "Illustrated fixed casement with a substantial sash-style border and no opening hardware",
    detail: "Fixed glass · casement-style frame proportions",
  },
  "/windows/tilt-and-turn/": {
    image: "window-tilt-and-turn",
    alt: "Two illustrated positions of a tilt-and-turn window: inward tilt and inward side swing",
    detail: "Two alternative positions · tilt inward or turn inward",
  },
  "/windows/bay/": {
    image: "window-bay",
    alt: "Illustrated three-section bay window with a wide centre and two angled sides projecting from the wall",
    detail: "Three-section angular projection",
  },
  "/windows/bow/": {
    image: "window-bow",
    alt: "Illustrated five-section bow window with repeated narrow panes arranged in a gentle projecting curve",
    detail: "Multi-section curved projection",
  },
  "/doors/entry/steel/": {
    image: "door-steel-traditional",
    alt: "Illustrative painted steel entry-door design with raised panels",
    detail: "Painted steel entry-door design",
  },
  "/doors/entry/fiberglass/": {
    image: "door-fiberglass-traditional",
    alt: "Illustrative woodgrain fiberglass entry-door design with an upper glass insert",
    detail: "Woodgrain fiberglass design · other finishes available by model",
  },
  "/doors/patio/sliding/": {
    image: "door-sliding",
    alt: "Illustrated two-panel sliding patio door with a panel moving along its track",
    detail: "Sliding panels · no hinged swing",
  },
  "/doors/patio/stacking/": {
    image: "door-stacking",
    alt: "Illustrated multi-track patio door with parallel panels collected to one side",
    detail: "Parallel sliding panels · collected to one side",
  },
  "/doors/patio/tilt-and-turn/": {
    image: "door-tilt-and-turn",
    alt: "Two illustrated positions of a glazed patio door: inward tilt and inward side swing",
    detail: "Two alternative positions · tilt and inward turn",
  },
  "/doors/patio/bifold/": {
    image: "door-bifold",
    alt: "Illustrated bifold patio door with hinged glass panels folded into a zig-zag stack",
    detail: "Hinged panels · accordion-style fold",
  },
  "/doors/patio/garden/": {
    image: "door-garden",
    alt: "Illustrated garden-door pair with two glazed hinged leaves and a central passage",
    detail: "Hinged glazed leaves · swing clearance required",
  },
  "/doors/patio/vinyl/": {
    image: "door-vinyl",
    alt: "Illustrative two-panel vinyl patio door with substantial white PVC framing",
    detail: "White vinyl-framed sliding configuration",
  },
  "/doors/aluminum/": {
    image: "door-aluminum",
    alt: "Illustrative glazed aluminum door with a slim dark metal frame",
    detail: "Glazed aluminum entrance design",
  },
  "/doors/storm/": {
    image: "door-storm",
    alt: "Illustrated thin glazed storm door opening outside a separate closed solid entry door",
    detail: "Separate outer door · primary entry behind it",
  },
  "/doors/garage/": {
    image: "door-garage",
    alt: "Illustrated sectional garage door with horizontal panels and an overhead track arrangement",
    detail: "Sectional garage door · overhead movement",
  },
};
export function applyProductIllustrations(pages: ContentPage[]) {
  const aliases: Record<string, string> = {
    "/windows/": "/windows/casement/",
    "/doors/": "/doors/entry/steel/",
    "/doors/entry/": "/doors/entry/steel/",
    "/doors/patio/": "/doors/patio/sliding/",
    "/catalog/doors-catalog/": "/doors/entry/steel/",
    "/catalog/steel-doors/": "/doors/entry/steel/",
    "/catalog/fiberglass-doors/": "/doors/entry/fiberglass/",
  };
  for (const p of pages) {
    let illustration =
      productIllustrations[p.path] ?? productIllustrations[aliases[p.path]];
    const style = p.path.match(
      /^\/catalog\/(steel|fiberglass)-(traditional|modern|contemporary|craftsman|shaped)-doors\/$/,
    );
    if (style)
      illustration = {
        image: `door-${style[1]}-${style[2]}`,
        alt: `Illustrative ${style[2]} ${style[1]} entry-door design`,
        detail: `${style[2][0].toUpperCase() + style[2].slice(1)} ${style[1]} design direction`,
      };
    if (illustration) {
      p.image = `illustrations/${illustration.image}`;
      p.imageAlt = illustration.alt;
      p.imageCaption = `${illustration.detail}. AI-generated illustration · not a specific supplied model.`;
    }
    // A generic render cannot represent an identified manufacturer's model.
    if (p.path === "/doors/brands/novatech/" || p.path === "/doors/brands/") {
      p.image = "entry-doors";
      p.imageAlt =
        "Entry-door displays for discussing glass and design options; not an identified Novatech model";
      p.imageCaption =
        "Showroom reference · exact collection and model to be confirmed.";
    }
  }
}
