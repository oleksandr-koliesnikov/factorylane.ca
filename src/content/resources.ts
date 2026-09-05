import type { ContentPage } from "./types";
export const resourcePages: ContentPage[] = [
  {
    path: "/resources/buying-guide/",
    title: "A practical window & door buying guide",
    description:
      "Plan your window and door project with an opening schedule, useful comparisons and a complete written quote.",
    eyebrow: "RESOURCES / BEFORE YOU CHOOSE",
    intro:
      "Start with the home, not a list of upgrades. A good buying process connects the problem you want to solve with the product and installation that address it.",
    parent: "/resources/",
    kind: "guide",
    image: "profile",
    sections: [
      {
        title: "1. Write down what needs to change",
        paragraphs: [
          "List each opening and the room it belongs to. Note whether the concern is operation, ventilation, privacy, appearance or condition. Photographs from inside and outside help make the discussion specific.",
          "Keep a separate list of details you want to retain, such as trim, grille patterns or an existing façade arrangement. Replacing the product does not mean every visual choice must change.",
        ],
      },
      {
        title: "2. Compare the right product details",
        paragraphs: [
          "Select an opening type before finalizing the profile, glass and finish. Each choice affects the next: heavier glazing can change the approved size of an operating sash, and an inward-opening design needs space for blinds and furniture.",
        ],
        links: [
          { label: "Window comparisons", href: "/compare/" },
          { label: "Door design options", href: "/catalog/doors-catalog/" },
        ],
      },
      {
        title: "3. Make the quote comparable",
        bullets: [
          "Opening dimensions and product configuration.",
          "Glass package and relevant performance documents.",
          "Colour, screens, hardware and trim.",
          "Removal, repairs, installation and finishing.",
          "Taxes, payment terms, schedule and warranty documents.",
        ],
      },
      {
        title: "4. Keep the approved specification",
        paragraphs: [
          "Before an order is placed, review the final schedule and ask about anything that has changed since the first estimate. Save the approval with the written quote so the installation and later service enquiries can refer to the same information.",
        ],
      },
    ],
    related: ["/windows/", "/doors/", "/pricing/", "/installation/"],
  },
  {
    path: "/resources/condensation/",
    title: "Understanding window condensation",
    description:
      "Distinguish room-side moisture, outside condensation and fogging between panes before asking for a window assessment.",
    eyebrow: "RESOURCES / UNDERSTAND WHAT YOU SEE",
    intro:
      "Where moisture appears matters. Condensation on the indoor surface, outdoor surface and between panes points to different questions about the glass, indoor conditions and sealed unit.",
    parent: "/resources/",
    kind: "guide",
    image: "window-detail",
    sections: [
      {
        title: "Locate the moisture first",
        table: {
          headers: ["Location", "What to document"],
          rows: [
            [
              "Room-facing glass",
              "Room conditions, coverings and when the moisture appears.",
            ],
            [
              "Outside surface",
              "Weather, time of day and whether the moisture clears.",
            ],
            [
              "Between panes",
              "Photographs showing moisture inside the sealed unit.",
            ],
          ],
        },
      },
      {
        title: "Record the circumstances",
        paragraphs: [
          "Note whether one opening or several are affected, whether blinds or curtains are closed and whether the issue changes through the day. These observations help the assessor distinguish a glass-unit concern from surface condensation.",
          "A photograph alone does not establish the cause. Product configuration, ventilation and room conditions may need review. Avoid assuming that a different pane count will automatically resolve the problem.",
        ],
      },
      {
        title: "When asking for support",
        paragraphs: [
          "Identify the opening and provide the order details if available. Show the moisture and the surrounding frame, and explain whether you also see staining or water entering around the assembly.",
          "Use the care instructions for cleaning and avoid applying treatments that could affect the glass or finish without guidance.",
        ],
        links: [
          { label: "Prepare a service enquiry", href: "/support/" },
          {
            label: "Understand sealed glass units",
            href: "/windows/glass/argon/",
          },
        ],
      },
    ],
    related: ["/support/", "/windows/energy-efficiency/", "/warranty/"],
  },
  {
    path: "/resources/care-guide/",
    title: "Window & door care guide",
    description:
      "A practical care checklist for tracks, finishes, glass, weather seals and operating hardware, with product-specific instructions taking priority.",
    eyebrow: "RESOURCES / LOOK AFTER THE DETAILS",
    intro:
      "Use the care instructions supplied with your product. Routine cleaning and observation help you keep the assembly usable without making unsupported adjustments.",
    parent: "/resources/",
    kind: "guide",
    sections: [
      {
        title: "Glass and finishes",
        paragraphs: [
          "Use the approved cleaning method for the glass and frame finish. A coating, painted surface or decorative glass can require different treatment. Avoid abrasive tools and unapproved solvents.",
          "Address surface damage according to the finish instructions. Do not assume that a repair method for one material is suitable for another.",
        ],
      },
      {
        title: "Tracks, drainage and hardware",
        paragraphs: [
          "Remove loose dirt from accessible tracks and leave designed drainage paths open. Inspect operation and note changes in resistance, alignment or the closing action.",
          "Do not cover drainage outlets with sealant or force a sticking sash. Lubrication and adjustment instructions are hardware-specific, so ask for the correct guidance rather than applying a generic product everywhere.",
        ],
      },
      {
        title: "A simple record for service",
        bullets: [
          "Opening location and order reference.",
          "Photographs of the product and affected detail.",
          "Description of when the issue appears.",
          "Any cleaning, repair or adjustment already attempted.",
        ],
      },
    ],
    related: ["/support/", "/warranty/", "/resources/condensation/"],
  },
  {
    path: "/resources/window-rebates/",
    title: "Window rebates: what to verify first",
    description:
      "Check current program rules, timing, product eligibility and documentation before relying on a window rebate in your project budget.",
    eyebrow: "RESOURCES / CHECK BEFORE YOU COUNT ON IT",
    intro:
      "A rebate is a program-specific benefit, not an automatic feature of a new window. Confirm the current operator rules before placing an order or scheduling work.",
    parent: "/resources/",
    kind: "guide",
    review:
      "No rebate amount or guaranteed eligibility is advertised. Current operator rules and project eligibility must be verified.",
    sections: [
      {
        title: "Questions for the program operator",
        bullets: [
          "Is the program accepting applications for this property and location?",
          "Are assessments or approvals required before work begins?",
          "Which exact product ratings and identifiers are eligible?",
          "What dates, invoices and installation records are required?",
          "Can the benefit be combined with other programs?",
        ],
      },
      {
        title: "Keep the quote and program requirements separate",
        paragraphs: [
          "A product may have useful energy-performance features without qualifying for a particular program. Likewise, an eligible product does not establish that the property, applicant or installation sequence meets the rules.",
          "Do not subtract a prospective rebate from the project price as if it were guaranteed. Keep the approved product documents, invoices and any assessment records required by the program.",
        ],
      },
      {
        title: "Start with an official source",
        links: [
          {
            label: "Natural Resources Canada: home energy programs",
            href: "https://natural-resources.canada.ca/energy-efficiency/home-energy-efficiency/canada-greener-homes-initiative/canada-greener-homes-initiative",
          },
        ],
      },
    ],
    related: [
      "/windows/energy-efficiency/",
      "/pricing/windows/",
      "/resources/buying-guide/",
    ],
  },
  {
    path: "/resources/glossary/",
    title: "Window & door glossary",
    description:
      "Understand common terms including sash, frame, sightline, Low-E, argon, threshold, U-factor and full-frame replacement.",
    eyebrow: "RESOURCES / THE WORDS BEHIND THE CHOICES",
    intro:
      "A clear specification starts with shared language. These terms help connect the showroom sample, the written quote and the installed result.",
    parent: "/resources/",
    kind: "guide",
    sections: [
      {
        title: "The window assembly",
        table: {
          headers: ["Term", "Plain-language meaning"],
          rows: [
            ["Frame", "The outer assembly secured within the opening."],
            ["Sash", "The framed glass section; it may be fixed or operable."],
            [
              "Sightline",
              "The visible width or alignment of frame and sash elements.",
            ],
            [
              "Insulating glass unit",
              "Panes assembled with sealed cavities, spacers and edge seals.",
            ],
            ["Low-E", "A glass coating used to control radiant heat transfer."],
            [
              "Argon fill",
              "Gas specified within a sealed cavity between panes.",
            ],
            ["U-factor", "A measure of heat transfer for the rated product."],
            [
              "SHGC",
              "Solar heat gain coefficient; a measure of admitted solar heat.",
            ],
          ],
        },
      },
      {
        title: "Installation and doors",
        table: {
          headers: ["Term", "Plain-language meaning"],
          rows: [
            [
              "Retrofit / insert",
              "Replacement that retains suitable existing framing.",
            ],
            [
              "Full frame",
              "Removal of the old frame and installation of a new assembly.",
            ],
            [
              "Brickmould",
              "Exterior trim profile at the perimeter of the frame.",
            ],
            [
              "Jamb extension",
              "A component extending the frame finish toward the room surface.",
            ],
            [
              "Threshold",
              "The lower part of a door opening that forms the floor transition.",
            ],
            ["Sidelite", "Glazed section alongside an entrance door."],
            ["Transom", "Glazed section above a door or window."],
            [
              "Egress opening",
              "An opening assessed for the required emergency-exit function.",
            ],
          ],
        },
      },
    ],
    related: ["/windows/", "/doors/", "/installation/", "/compare/"],
  },
];
