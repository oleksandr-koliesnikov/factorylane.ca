import type { ContentPage } from "./types";
const extensions = [
  [
    "blinds",
    "Window blinds",
    "Coordinate light, privacy and the finished look of the room. Window coverings should be considered alongside the new opening style and interior trim.",
    "Compare the mounting position with handles, inward-opening sashes and door panels. A blind must fit the moving system as well as the glass area. Inside and outside mounting arrangements require different measurements.",
    "Single roll blinds are the named gift in the three-or-more-windows offer. The exact eligible model, quantity, dimensions, colours and installation terms will be confirmed before launch.",
    [
      "Light and privacy priorities",
      "Mounting position",
      "Handle and sash clearance",
      "Fabric, operation and final dimensions",
    ],
  ],
  [
    "gutters",
    "Gutters & eavestroughs",
    "A gutter project concerns the roof-edge drainage path, including collection, downspouts and discharge. It is a separate scope from window or door replacement.",
    "Document the areas where water overflows or drains poorly, and show the roof edge, downspouts and discharge points. The final plan should consider the complete path rather than replacing a short section without assessment.",
    "Factory Lane’s material range, profiles, installation scope and service terms for gutters are being finalized. Bring the project details to a consultation; no specific capacity, lifespan or price is promised in this preview.",
    [
      "Existing drainage concerns",
      "Roof-edge and downspout layout",
      "Discharge location",
      "Material and installation scope",
    ],
  ],
  [
    "gazebos",
    "Gazebos & backyard structures",
    "A gazebo creates a defined outdoor space. It should be planned around the yard, the intended use and the structure’s support and location.",
    "Start with the footprint, access route and the way you want to use the space. A gazebo and a pergola are not automatically the same product; roof, enclosure and structural arrangements need to be identified precisely.",
    "The product range and installation scope are being finalized. Foundation, structure, location and any required approvals must be reviewed for the particular project before a system is ordered.",
    [
      "Intended use and footprint",
      "Roof and enclosure type",
      "Support and location review",
      "Delivery and installation access",
    ],
  ],
  [
    "glass-walls",
    "Architectural glass walls",
    "Larger glazed assemblies connect spaces with broad views and daylight. The system, support and glass specification have to suit the opening and intended use.",
    "Distinguish a fixed glazed wall from a movable patio system. Panel movement, structural span, frame depth and threshold details make these different projects even when they look similar in an image.",
    "Confirm the system, product availability, applicable performance documents and installation responsibilities. Architectural glazing is not selected safely from a photograph and a rough width alone.",
    [
      "Fixed or movable system",
      "Support and opening dimensions",
      "Glass and frame specification",
      "Threshold, drainage and access",
    ],
  ],
  [
    "porch-enclosures",
    "Porch enclosures",
    "A porch enclosure changes how an existing entrance space is sheltered and used. Its walls, doors, roof connection and drainage require a coordinated review.",
    "Describe the intended use and whether the enclosure is to remain an unconditioned space. Existing support, clearances, ventilation and the relationship with the main entrance should be assessed before selecting the glazing.",
    "Available systems and installation scope will be confirmed for the project. An enclosure does not automatically become a conditioned room, and any necessary design or approval process should be addressed before ordering.",
    [
      "Existing porch structure",
      "Intended use and ventilation",
      "Door and access clearances",
      "Connections and drainage",
    ],
  ],
] as const;
export const extensionPages: ContentPage[] = extensions.map(
  ([slug, title, intro, p1, p2, checks]) => ({
    path: `/${slug}/`,
    title,
    description: `Plan ${title.toLowerCase()} with Factory Lane: design questions, site information and the details to confirm for your project.`,
    eyebrow: "MORE FOR YOUR HOME",
    intro,
    parent: "/",
    kind: "extension",
    image: slug === "blinds" ? "comfort-backyard" : undefined,
    imageAlt: "Illustrative home setting, not a completed Factory Lane project",
    sections: [
      { title: "Plan the details together", paragraphs: [p1, p2] },
      { title: "What to bring to the conversation", bullets: [...checks] },
      {
        title: "Start with the project",
        paragraphs: [
          "Photographs, approximate dimensions and a description of the intended result make an initial consultation useful. The final configuration, dimensions and installation scope must be confirmed before an order is placed.",
        ],
        links: [
          { label: "Discuss your project", href: "/estimate/" },
          { label: "Visit the showroom", href: "/showroom/" },
        ],
      },
    ],
    related:
      slug === "blinds"
        ? ["/offers/", "/windows/", "/doors/patio/"]
        : ["/contact/", "/installation/", "/service-areas/"],
    review:
      slug === "blinds"
        ? "Final blind models, gift quantities and offer conditions pending."
        : "Product range, installation scope and project-specific requirements pending confirmation.",
  }),
);
