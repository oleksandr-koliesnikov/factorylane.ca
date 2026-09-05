import type { ContentPage } from "./types";
import areas from "./areas.json";
import notes from "./city-notes.json";
export const cityPages: ContentPage[] = areas.map((area) => {
  const n = (notes as Record<string, string[]>)[area.name];
  if (!n) throw new Error(`Missing unique city brief: ${area.name}`);
  const neighbours = areas
    .filter((a) => a.group === area.group && a.path !== area.path)
    .slice(0, 3);
  return {
    path: area.path,
    title: `Windows & doors in ${area.name}`,
    description: `Plan window and door replacement in ${area.name} with Factory Lane. ${n[0]}. Compare products, price ranges and home-estimate options.`,
    eyebrow: `SERVICE AREAS / ${area.group.toUpperCase()}`,
    intro: `Factory Lane serves ${area.name} with window and door project consultations. Start with a free estimate at your home or compare real products in our showroom. Your address and project scope help us confirm the visit arrangements.`,
    parent: "/service-areas/",
    kind: "city",
    city: area.name,
    image: "windows",
    imageAlt:
      "Window display in the showroom, not a completed project in this city",
    sections: [
      { title: n[0], paragraphs: [n[1]] },
      { title: n[2], paragraphs: [n[3]] },
      {
        title: `Window and door choices for your ${area.name} project`,
        paragraphs: [
          "Choose the opening style around the room: casements open outward, sliders stay within the frame, and fixed windows prioritize the view. Entry doors and patio systems have their own clearances and configuration choices.",
          "The showroom helps you compare physical profiles, hardware and finishes. A home assessment connects those choices to existing framing, access and the required finishing work.",
        ],
        links: [
          { label: "Explore window types", href: "/windows/" },
          { label: "Explore doors", href: "/doors/" },
          {
            label: "Compare installation methods",
            href: "/compare/retrofit-vs-full-frame/",
          },
        ],
      },
      {
        title: "Understand the price before comparing quotes",
        paragraphs: [
          "A total is only meaningful when the scope is clear. Review dimensions, glass, colour, hardware, removal, installation and finishing as separate parts of the project. Planning ranges help you start; the measured scope determines your written quote.",
        ],
        links: [
          { label: "Window price ranges", href: "/pricing/windows/" },
          { label: "Door price ranges", href: "/pricing/doors/" },
          { label: "Free blinds offer", href: "/offers/" },
        ],
      },
      {
        title: `Arrange a consultation for ${area.name}`,
        bullets: [
          "Share the postal code and the openings you want to change.",
          "Include photographs of damaged framing or difficult access.",
          "Tell us whether you prefer an in-home estimate or a showroom discussion.",
          "Wait for the agreed meeting confirmation before planning around a visit.",
        ],
      },
    ],
    faq: [
      [
        `Do you serve ${area.name}?`,
        `Yes. ${area.name} is included in Factory Lane’s service area. Share the exact project address to confirm scheduling, travel arrangements and the scope of your home visit.`,
      ],
      [
        `Is there a separate Factory Lane showroom in ${area.name}?`,
        "This page describes a service area, not a separate office or showroom location. Use the showroom page to plan a visit and confirm the current location details before travelling.",
      ],
      [
        `Can I get a price for my ${area.name} project online?`,
        "The price guides provide planning ranges. A final quote depends on the measured openings, selected products, installation method and finishing. Online calculators do not reserve an appointment or place an order.",
      ],
    ],
    related: [
      "/windows/",
      "/doors/",
      "/installation/",
      "/showroom/",
      ...neighbours.map((a) => a.path),
    ],
    review:
      "City-specific completed projects and local proof are pending owner content. Do not index this page until local evidence and service logistics are approved.",
  };
});
