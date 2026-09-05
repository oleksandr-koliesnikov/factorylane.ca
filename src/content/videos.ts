import type { ContentPage } from "./types";
export const videoItems = [
  {
    path: "/videos/showroom-tour/",
    title: "A look inside the showroom",
    file: "/media/showroom-tour.mp4",
    poster: "/media/hero-poster.webp",
    description:
      "A short walk through full-size window and door displays. Use the visit to compare frame proportions, opening styles and the details you would like to discuss for your home.",
    duration: "PT9S",
    transcript:
      "The camera moves along a showroom aisle between window and door displays. Full-size assemblies show frames, glazing, hardware and different opening layouts. This silent clip introduces the space; it does not demonstrate every window style.",
    related: ["/showroom/", "/windows/", "/doors/"],
  },
  {
    path: "/videos/production-preview/",
    title: "Inside the manufacturing process",
    file: "/media/production-preview.mp4",
    poster: "/media/manufacturing.webp",
    description:
      "A short view of window assemblies and equipment on the manufacturing floor. This is background context for the product conversation, not a complete account of every production stage.",
    duration: "PT8S",
    transcript:
      "The camera moves through a manufacturing area with window assemblies, equipment and workstations. This silent overview shows the setting rather than a step-by-step production tutorial.",
    related: ["/why-factory-lane/", "/windows/series/", "/installation/"],
  },
  {
    path: "/videos/patio-door-operation/",
    title: "A patio door in motion",
    file: "/media/patio-operation.mp4",
    poster: "/media/patio-doors.webp",
    description:
      "A showroom demonstration of an operating patio-door panel. Compare the movement and available space, then confirm the exact system and configuration selected for your opening.",
    duration: "PT10S",
    transcript:
      "A person operates a glazed patio-door panel in the showroom. The view shows how the moving panel changes the opening and how the hardware is used. The demonstrated assembly is a reference and does not establish the specification of every patio system.",
    related: [
      "/doors/patio/",
      "/showroom/",
      "/compare/sliding-vs-garden-doors/",
    ],
  },
];
export const videoPages: ContentPage[] = [
  {
    path: "/videos/",
    title: "Window & door video library",
    description:
      "See real showroom and manufacturing footage, plus a patio-door demonstration. Explore the products with clear written context.",
    eyebrow: "VIDEO LIBRARY / SEE IT IN MOTION",
    intro:
      "Video helps show scale, movement and the details that a still image can miss. Explore the temporary showroom and manufacturing clips while the full product filming is prepared.",
    parent: "/resources/",
    kind: "hub",
    sections: [
      {
        title: "Watch the available films",
        links: videoItems.map((v) => ({ label: v.title, href: v.path })),
      },
      {
        title: "More product demonstrations are being prepared",
        paragraphs: [
          "Individual opening, closing, hardware and profile videos will be added to the relevant window and door pages after filming. We do not reuse one movement clip as proof of how every product operates.",
        ],
      },
    ],
    related: ["/showroom/", "/windows/", "/doors/"],
  },
  ...videoItems.map((v) => ({
    path: v.path,
    title: v.title,
    description: v.description,
    eyebrow: "VIDEO / A CLOSER LOOK",
    intro: v.description,
    parent: "/videos/",
    kind: "guide" as const,
    video: v.file,
    sections: [
      { title: "What the silent video shows", paragraphs: [v.transcript] },
      {
        title: "Use the footage as a starting point",
        paragraphs: [
          "A short demonstration cannot confirm all model options or installation details. Ask to see the relevant display and the product specification before choosing the configuration for your home.",
        ],
      },
    ],
    related: v.related,
  })),
];
