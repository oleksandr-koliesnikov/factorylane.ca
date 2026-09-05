import type { ContentPage } from "./types";
const doors = [
  [
    "entry/steel",
    "Steel entry doors",
    "A steel entry door pairs a steel exterior skin with an insulated construction. It is a starting point for a defined entrance, with panel, glass and finish choices that change the final appearance.",
    "Compare the entire entry system: slab, frame, threshold, weather seals, hinges and lock preparation. Adding sidelites or a transom changes the assembly, daylight and budget, not just the look of the door.",
    "Paint finish protects the surface. Scratches, dents and exposed edges need attention according to the product’s care instructions. Ask how the selected colour is finished and what maintenance the warranty requires.",
    "Steel skin and insulated construction|Panel and decorative glass options|Matching frame and threshold|Finish care matters",
    "Steel entry",
    "fiberglass",
  ],
  [
    "entry/fiberglass",
    "Fiberglass entry doors",
    "Fiberglass entry doors use a moulded composite skin and can have a smooth or woodgrain appearance. The selected finish can create a contemporary entrance or a more traditional, wood-like character.",
    "Look at the texture in person and compare the panel proportions with your entrance. Decorative glass, privacy treatments, sidelites and transoms can introduce light while changing how much of the interior is visible.",
    "Confirm the finishing system, edge details and care instructions. Material choice does not replace checking the frame, sill, locking hardware and installation; those components all contribute to the completed entrance.",
    "Smooth or textured skin|Decorative and privacy glass choices|Finish-specific care|Coordinate sidelites and transoms",
    "Fiberglass entry",
    "steel",
  ],
  [
    "patio/sliding",
    "Sliding patio doors",
    "Sliding patio doors move along a track so the operating panel stays within the frame. They connect indoor and outdoor space without an inward or outward door swing.",
    "Consider the clear walk-through opening, screen operation and how the handle feels. A two-panel assembly opens differently from a larger multi-panel layout, even when both are described as sliding doors.",
    "Track drainage, roller adjustment and frame alignment affect everyday use. Keep the sill clear and confirm how the door is locked, adjusted and serviced. Floor levels and access requirements should be reviewed before choosing a threshold.",
    "Track-based movement|No swinging door leaf|Roller and screen options|Threshold and drainage planning",
    "Vinyl patio",
    "garden",
  ],
  [
    "patio/stacking",
    "Stacking patio doors",
    "Stacking systems use several moving panels that gather together when opened. They can open up a larger connection to the backyard than a conventional two-panel slider.",
    "Choose the opening direction and panel parking position around the furniture and outdoor layout. Multiple tracks affect frame depth, while the number of moving panels affects the clear opening and operating routine.",
    "A larger opening can involve structural work and handling constraints. Confirm the support, rough opening, sill drainage and installation access. The design should make sense when all panels are closed as well as open.",
    "Multiple sliding panels|Panels gather to one side or both|Frame depth depends on tracks|Structural opening review",
    "",
    "sliding",
  ],
  [
    "patio/tilt-and-turn",
    "Tilt-and-turn patio doors",
    "Tilt-and-turn patio systems combine a ventilation position with a full opening mode. The operation and clearances depend on the specific door system selected.",
    "Try the sequence on a display and ask which panel moves in each mode. Understand the difference between an inward-turning leaf and a tilt-and-slide mechanism before comparing quotes; the names alone are not enough.",
    "Consider curtains, blinds, nearby furniture and the threshold. Hardware must be matched to panel dimensions and glass weight. Ask for the system drawing and operating instructions before finalizing the order.",
    "Two operating modes|System-specific panel movement|Hardware and glass compatibility|Interior clearance review",
    "",
    "bifold",
  ],
  [
    "patio/bifold",
    "Bifold patio doors",
    "Bifold doors use hinged panels that fold together. Their appeal is the way an opening changes when the panels are collected at one or both ends.",
    "Review the everyday access panel, fold direction, panel stack and space taken up inside or outside. A design that looks open in a photograph still needs a practical route through the door for daily use.",
    "Tracks, hinges and support must work as one system. Large glass panels bring weight and installation demands, while the threshold detail must address weather exposure and drainage. A low threshold is not automatically appropriate everywhere.",
    "Hinged folding panels|One-side or split stacking layouts|Everyday access panel options|Support and threshold coordination",
    "",
    "stacking",
  ],
  [
    "patio/garden",
    "Garden doors",
    "Garden doors use hinged leaves to connect a room to a patio or garden. The fixed and operating arrangement varies, so confirm exactly which leaves open.",
    "A hinged arrangement can suit a more traditional room or entry. Choose the swing direction around seating, steps and planters, and compare the clear passage with a sliding door in the same opening.",
    "The door needs a usable swing zone and appropriate support at the sill. Confirm screens, lock operation and how the secondary leaf is secured. Door furniture and blinds should be reviewed together.",
    "Hinged door arrangement|Fixed and operating combinations|Interior or exterior swing clearance|Coordinated screen and lock choices",
    "French",
    "sliding",
  ],
  [
    "patio/vinyl",
    "Vinyl patio doors",
    "Vinyl patio doors combine PVC framing with a glazed door system. Compare the frame, operating panels and glass as an assembly rather than selecting the material on its own.",
    "A sliding vinyl configuration can provide backyard access while keeping furniture clear of a swing path. Look at visible frame proportions, handle location, screen travel and the amount of opening space.",
    "The chosen glass package, finish and panel dimensions must be compatible. Ask for the applicable performance data and confirm what is included in the installation and finishing around the existing opening.",
    "Vinyl frame system|Glazed sliding configurations|Colour and glass compatibility|Panel size and rating review",
    "Vinyl patio",
    "sliding",
  ],
  [
    "aluminum",
    "Aluminum doors",
    "Aluminum door systems offer architectural profiles for glazed entrances and patio openings. The frame’s thermal design and compatible glass are important in a conditioned home.",
    "Compare the thermal break, seals and threshold along with the appearance. A narrow visual profile, panel span and glass thickness have to be supported by the actual system specification.",
    "Review weight, opening type, access and drainage with the installer. Avoid comparing a residential thermally broken system with an uninsulated door on price alone. Confirm the precise system offered for your opening.",
    "Metal framing|Thermal-break specification|System-dependent size limits|Threshold and glazing coordination",
    "",
    "",
  ],
  [
    "storm",
    "Storm doors",
    "A storm door sits outside the main entrance door as a separate exterior layer. Depending on the model, glass and screen arrangements can support seasonal ventilation.",
    "Measure the existing frame and check the relationship between handles, closers and the main door. The available mounting surface, entrance depth and swing clearance can determine whether a particular unit fits.",
    "Direct sun and trapped heat can affect an entrance assembly. Confirm compatibility with the primary door manufacturer before adding a storm door, and review drainage and closer adjustment after installation.",
    "Secondary exterior door|Glass and screen arrangements|Primary-door compatibility|Closer and handle clearance",
    "Storm",
    "",
  ],
  [
    "garage",
    "Garage doors",
    "A garage door is a separate product system, with its own panel design, tracks, seals and operating equipment. Selection should begin with the opening and the way the garage is used.",
    "Review headroom, side room, backroom and any opener arrangement with the responsible installer. Panel finish, glazing and insulation are separate choices and should be written into the specification.",
    "Model selection and installation scope for this category are being finalized. Springs and operating equipment require qualified service; this page is for planning a project, not adjustment instructions.",
    "Opening and track clearance|Panel and glazing design|Insulation specification|Opener and safety system review",
    "",
    "",
  ],
  [
    "brands/novatech",
    "Novatech door options",
    "A manufacturer’s collection can include several products and glass designs. Confirm the exact collection, model and compatible assembly before treating a brand name as a full specification.",
    "Bring the design or brochure reference you have in mind. We can use it to discuss panel style, glass, privacy and the configuration of the surrounding entrance.",
    "Availability, authorized supply, model identifiers and applicable warranty documents must be confirmed for Factory Lane’s final offer. No manufacturer endorsement or dealer status is claimed in this preview.",
    "Exact collection and model|Glass and privacy selection|Assembly compatibility|Current availability confirmation",
    "",
    "",
  ],
];
export const doorPages: ContentPage[] = doors.map(
  ([
    slug,
    title,
    intro,
    selection,
    limitation,
    features,
    price,
    alternative,
  ]) => ({
    path: `/doors/${slug}/`,
    title,
    description: `Compare ${title.toLowerCase()} for your home: operation, design options, installation scope and what to confirm before ordering.`,
    eyebrow: "DOORS / MAKE AN ENTRANCE",
    intro,
    parent: slug.startsWith("entry/")
      ? "/doors/entry/"
      : slug.startsWith("patio/")
        ? "/doors/patio/"
        : "/doors/",
    kind: "product",
    image: slug.startsWith("entry/") ? "entry-doors" : "patio-doors",
    imageAlt:
      "Door display in the showroom; exact configurations are selected in consultation",
    priceProduct: price || undefined,
    sections: [
      {
        title: "Choose around the way you live",
        paragraphs: [selection, limitation],
      },
      {
        title: "Details to compare",
        table: {
          headers: ["Consideration", "Planning point"],
          rows: features
            .split("|")
            .map((f, i) => [
              [
                "Construction",
                "Configuration",
                "Compatibility",
                "Installation",
              ][i],
              f,
            ]),
        },
      },
      {
        title: "Glass, privacy and finishing",
        paragraphs: [
          "Door glazing changes both the appearance and the view into your home. Compare clear, textured and decorative options under light, and consider the position of sidelites and transoms at different times of day.",
          "Choose finishes and hardware together. Ask which interior and exterior colours, handles, locks and screen options are supported by the selected system. Product drawings and physical samples help resolve details that a small catalogue image cannot show.",
        ],
        links: [
          {
            label: "Explore the door design catalogue",
            href: "/catalog/doors-catalog/",
          },
          {
            label: "Compare entry door materials",
            href: "/compare/steel-vs-fiberglass/",
          },
        ],
      },
      {
        title: "From measurements to the installed entrance",
        paragraphs: [
          "The estimate should describe the complete opening: existing frame condition, removal, new assembly, sealing, insulation, trim, exterior finish and disposal. Enlarging an opening or changing the structure is a separate scope.",
          "Before installation, agree on access and protection of the surrounding space. After installation, walk through opening, closing, locking, screen use and care with the team. Keep the approved product specification and service documents.",
        ],
        links: [
          {
            label: "Door installation explained",
            href: "/installation/doors/",
          },
          { label: "Door price ranges", href: "/pricing/doors/" },
        ],
      },
    ],
    faq: [
      [
        "Can I see a door before choosing it?",
        "Yes. Use the showroom to compare operation, finishes and glass. The displayed configuration is a reference; your order is confirmed against the selected model and measured opening.",
      ],
      [
        "What changes the installed door price?",
        "Size, material, number of panels, glass, sidelites, hardware and installation method all affect the scope. Structural changes and repairs should be identified separately.",
      ],
    ],
    related: [
      ...(alternative
        ? [
            `/doors/${slug.startsWith("entry/") ? "entry" : "patio"}/${alternative}/`,
          ]
        : ["/doors/entry/", "/doors/patio/"]),
      "/pricing/doors/",
      "/installation/doors/",
      "/showroom/",
    ],
    ...(["garage", "brands/novatech", "storm", "aluminum"].includes(slug)
      ? {
          review:
            "Final model availability and Factory Lane-specific terms require confirmation.",
        }
      : {}),
  }),
);
