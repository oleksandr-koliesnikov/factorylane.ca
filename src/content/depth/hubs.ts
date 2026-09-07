import type { ContentPage, ContentSection } from "../types";
const content: Record<string, ContentSection[]> = {
  "/windows/": [
    {
      title: "Find the opening that fits your room",
      table: {
        headers: ["Priority", "Start by comparing", "Detail to check"],
        rows: [
          [
            "Reach over a counter",
            "Casement and awning",
            "Operator position and exterior sash clearance.",
          ],
          [
            "Keep a side passage clear",
            "Sliding, single-hung and double-hung",
            "Usable opening and cleaning access.",
          ],
          [
            "Frame a broad view",
            "Picture and fixed casement",
            "Visible glass, adjoining ventilation and handling.",
          ],
          [
            "Flexible inward opening",
            "Tilt-and-turn",
            "Handle sequence and interior blind/furniture clearance.",
          ],
          [
            "Compact basement ventilation",
            "Hopper and other suitable layouts",
            "Room use, well conditions and any required clear opening.",
          ],
          [
            "Add projection",
            "Bay and bow",
            "Support, head, seat, insulation and complete assembly scope.",
          ],
        ],
      },
    },
    {
      title: "Choose the configuration behind the style",
      paragraphs: [
        "After selecting the movement, decide which sections open and which remain fixed. Then compare the profile, glazing and finish at the proposed dimensions. The same type name can cover several configurations with different hardware, glass area and permitted sizes.",
        "Use the individual type pages for construction, size references where available, energy-performance context, hardware, finishes and installation questions. Keep the selected options on one opening schedule so the final quote can be checked against the rooms in your home.",
      ],
    },
  ],
  "/doors/": [
    {
      title: "Choose by entrance function",
      table: {
        headers: ["Location", "Systems to explore", "First question"],
        rows: [
          [
            "Front entrance",
            "Steel and fiberglass",
            "How much privacy, daylight and clear passage do you want?",
          ],
          [
            "Backyard access",
            "Sliding, garden, stacking and bifold",
            "Where do panels move and which opening is used every day?",
          ],
          [
            "Architectural glazing",
            "Aluminum and larger glazed systems",
            "What support, thermal design and threshold are required?",
          ],
          [
            "Outer entry layer",
            "Storm doors",
            "Is the system compatible with the primary entrance?",
          ],
          [
            "Garage opening",
            "Sectional door options",
            "What clearances, track and opener arrangement fit?",
          ],
        ],
      },
    },
    {
      title: "Specify more than the visible panel",
      paragraphs: [
        "The door leaf or glass panel is only one part of the assembly. The frame, sill, seals, hinges or rollers, locking arrangement and installation establish how the entrance works. Sidelites and a transom add daylight but also change the total dimensions and scope.",
        "Compare the complete closed appearance with the fully open movement. Try the normal daily route as well as the maximum opening, including the screen. These practical checks connect the design you like to a door you will use comfortably.",
      ],
    },
  ],
  "/doors/entry/": [
    {
      title: "Build the entrance in four layers",
      table: {
        headers: ["Layer", "Selection"],
        rows: [
          [
            "Door construction",
            "Steel or fiberglass, with the actual panel and surface.",
          ],
          [
            "Light and privacy",
            "Insert size, decorative or privacy glass, sidelites and transom.",
          ],
          [
            "Operation and security hardware",
            "Handing, active leaf, compatible lock and handle preparation.",
          ],
          [
            "Frame and installation",
            "Sill, seals, trim and connection to the existing opening.",
          ],
        ],
      },
    },
    {
      title: "Compare privacy under realistic conditions",
      paragraphs: [
        "A glass sample viewed against a bright showroom wall may look different from glass in a lit hallway after dark. Inspect the transparent areas and the height at which someone outside could see through them. A privacy pattern should be judged as installed in the full entrance.",
        "If the door is part of a broader exterior update, compare the frame finish with nearby windows and trim. The interior face, hardware and swing should work with the hallway as carefully as the outside face works with the façade.",
      ],
    },
  ],
  "/doors/patio/": [
    {
      title: "Compare how the panels move",
      table: {
        headers: ["System", "Movement to understand", "Space to plan"],
        rows: [
          [
            "Sliding",
            "Panel moves alongside another section.",
            "Track, screen and less-than-total-width passage.",
          ],
          [
            "Stacking",
            "Moving panels collect together.",
            "Track depth and parked stack.",
          ],
          [
            "Bifold",
            "Panels fold into a group.",
            "Folded projection, threshold and daily access leaf.",
          ],
          [
            "Garden",
            "One or more hinged leaves swing.",
            "Full swing zone and screen arrangement.",
          ],
          [
            "Tilt-and-turn",
            "Selected inward ventilation and swing modes.",
            "Interior clearance and correct operating sequence.",
          ],
        ],
      },
    },
    {
      title: "Make the home-to-backyard transition the design brief",
      paragraphs: [
        "Start with the route people use, the furniture near the opening and the outdoor landing. Decide whether you need a convenient everyday passage, a wider occasional opening or both. The largest assembly is not automatically the most practical layout.",
        "Compare the threshold and weather-management detail before finalizing floor finishes. Identify the screen, locks and panel parking positions on the drawing. For larger systems, confirm structural support and handling access as part of the project scope.",
      ],
    },
  ],
  "/windows/materials/": [
    {
      title: "Material is the beginning of the comparison",
      table: {
        headers: ["Selection", "Compare at the product level"],
        rows: [
          [
            "Vinyl",
            "Profile geometry, reinforcement, corners, seals and approved finishes.",
          ],
          [
            "Aluminum",
            "Thermal-break construction, glazing support, finish and application.",
          ],
          [
            "Both",
            "Whole-window data, permitted dimensions, hardware and frame-to-wall installation.",
          ],
        ],
      },
    },
    {
      title: "Keep appearance and performance as separate checks",
      paragraphs: [
        "First compare equal-size drawings for visible framing and glass area. Then compare applicable performance records for equivalent glass and operation. A preferred look and a suitable technical specification should be established together rather than allowing one material label to stand in for both.",
      ],
    },
  ],
  "/windows/glass/": [
    {
      title: "A glass package has several independent choices",
      table: {
        headers: ["Choice", "What it changes"],
        rows: [
          [
            "Two or three panes",
            "Cavities, assembly thickness and glass weight.",
          ],
          [
            "Low-E coating",
            "Thermal, solar and visible-light characteristics of the selected package.",
          ],
          ["Gas fill", "Part of the sealed cavity specification."],
          [
            "Spacer and edge seal",
            "The construction around the perimeter of the insulated unit.",
          ],
          [
            "Privacy or safety glazing",
            "Application and appearance, subject to approved combinations.",
          ],
          [
            "Whole-window configuration",
            "The frame and operation that determine the applicable product record.",
          ],
        ],
      },
    },
    {
      title: "Do not substitute one number for the complete decision",
      paragraphs: [
        "Compare U-factor with its units, SHGC for solar gain and visible transmittance for daylight. Request the record matching the quoted window rather than only a centre-of-glass value. If noise is a priority, ask for applicable acoustic data; pane count alone does not establish sound reduction.",
      ],
    },
  ],
  "/windows/series/": [
    {
      title: "Use the sample and the drawing together",
      paragraphs: [
        "A section sample explains the frame construction, while an elevation explains the visible proportions. Compare the frame depth, sash sightline and clear glass as separate dimensions. Check the same configuration and size when judging classic and slim-profile options.",
        "The final opening schedule should identify the series and all compatible components. A showroom sample does not automatically cover every opening style, glass thickness or colour. Use the individual series pages to organize those questions before ordering.",
      ],
      table: {
        headers: ["View", "What it helps establish"],
        rows: [
          [
            "Section through the frame",
            "Depth, chambers, glass position, seals and wall relationship.",
          ],
          [
            "Front elevation",
            "Visible frame divisions, glass area and grille alignment.",
          ],
          [
            "Operating display",
            "Handle reach, lock sequence and full sash movement.",
          ],
          [
            "Product record",
            "The approved configuration and applicable performance documents.",
          ],
        ],
      },
    },
  ],
  "/pricing/": [
    {
      title: "Three different numbers to keep separate",
      table: {
        headers: ["Price type", "How to use it"],
        rows: [
          [
            "Base reference",
            "A starting product comparison for the named configuration.",
          ],
          [
            "Separate installation quote",
            "Removal, installation, repairs and finishing priced for the actual opening.",
          ],
          [
            "Measured written estimate",
            "The actual selected products and agreed project work.",
          ],
        ],
      },
    },
    {
      title: "Compare like-for-like before comparing totals",
      paragraphs: [
        "A larger quote can include a different glass package, more surrounding work or a different entrance configuration. Identify those differences before treating the total as a measure of value. Keep optional upgrades separate from necessary repairs and installation work.",
        "The guides below retain the available price references and explain their limits. They are not a substitute for measured dimensions, an existing-condition assessment and the written order scope.",
      ],
    },
  ],
  "/pricing/windows/": [
    {
      title: "Approximate product prices, with installation quoted separately",
      paragraphs: [
        "The calculator uses very approximate product-only ranges for the selected window type and size group. Installation is not included. Small, medium and large are planning labels, not approved measurement bands.",
        "Your final product price depends on measured dimensions, glass, frame, finish and hardware. Removal, installation, repairs and finishing are assessed and quoted separately. Ask for a written breakdown and confirmation of applicable taxes.",
      ],
      links: [
        { label: "Compare window types and dimensions", href: "/windows/" },
        {
          label: "Understand installation scope",
          href: "/installation/window-replacement/",
        },
      ],
    },
  ],
  "/pricing/doors/": [
    {
      title: "Separate the leaf from the complete door assembly",
      table: {
        headers: ["Change", "Why the scope can increase"],
        rows: [
          [
            "Sidelites or transom",
            "Additional glass, frames, size and finishing.",
          ],
          [
            "Double entrance",
            "Secondary leaf, meeting detail and additional hardware.",
          ],
          [
            "Larger patio system",
            "More panels, tracks or hinges, handling and support.",
          ],
          [
            "Finish and decorative glass",
            "Different component selections within the same overall size.",
          ],
          [
            "Opening alteration",
            "Structural and surrounding work beyond like-for-like replacement.",
          ],
        ],
      },
    },
    {
      title: "When a system needs an individual quote",
      paragraphs: [
        "Stacking, bifold and architectural systems should be priced against a defined configuration and installation detail. Where no approved reference is available, a conventional slider price is not a valid stand-in. Identify the desired clear opening and panel arrangement first.",
        "Keep the material, glass, lock preparation, frame, threshold and finishing consistent when comparing steel and fiberglass entrances. A slab price and a complete installed entrance represent different scopes even if the product photograph looks similar.",
      ],
    },
  ],
  "/compare/": [
    {
      title: "Choose the comparison that resolves your next decision",
      paragraphs: [
        "If the uncertainty is how a window moves, begin with opening-style comparisons. If it is room comfort or glazing weight, compare the glass packages and their actual ratings. If it is appearance, use the material and profile guides alongside a sample.",
        "Installation-method comparisons answer a different question: what remains around the opening and what is replaced. Resolve that scope before drawing conclusions from price differences between product options.",
      ],
    },
  ],
  "/resources/": [
    {
      title: "Use the guides at each stage of the project",
      table: {
        headers: ["Stage", "Helpful material"],
        rows: [
          [
            "Before choosing",
            "Buying guide, glossary and product comparisons.",
          ],
          [
            "Before ordering",
            "Sizes, performance records, installation scope and prices.",
          ],
          [
            "Before the visit",
            "Opening list, photographs and showroom planning.",
          ],
          [
            "After installation",
            "Care guidance, condensation information and service records.",
          ],
        ],
      },
    },
    {
      title: "A clear answer should lead to a useful next step",
      paragraphs: [
        "The guides connect general explanations to the relevant product and service pages. Use them to prepare specific questions rather than applying one recommendation to every opening. The final product and installation decisions should still match your home’s measured conditions.",
      ],
    },
  ],
  "/service-areas/": [
    {
      title: "A service area is a project location",
      paragraphs: [
        "The area pages help you prepare a project conversation for the property you want to improve. They do not identify separate Factory Lane branches or imply that every area contains a showroom. Confirm the current showroom details before travelling.",
        "Provide the exact address and scope when requesting a home estimate. Visit arrangements, access and delivery planning need that information, particularly for larger systems or projects farther from the showroom.",
      ],
      table: {
        headers: ["Prepare", "Include"],
        rows: [
          ["Location", "Project address and postal code."],
          [
            "Scope",
            "Number and type of openings, including planned enlargements.",
          ],
          [
            "Access",
            "Delivery route and any building or property coordination.",
          ],
          [
            "Meeting preference",
            "In-home assessment or showroom product discussion.",
          ],
        ],
      },
    },
  ],
  "/doors/brands/": [
    {
      title: "Match the manufacturer component to the complete entrance",
      paragraphs: [
        "A manufacturer or collection name helps identify a component, but it does not describe the entire installed door. The frame, slab, glass, finish, sill and hardware should be recorded together in the selected configuration.",
        "Before ordering, match the model, approved combinations and applicable documents. Display photographs can help explain design direction; exact model imagery and specifications are needed to confirm what will be supplied.",
      ],
    },
  ],
};
export function deepenHubs(pages: ContentPage[]) {
  for (const p of pages) {
    if (content[p.path]) p.sections.push(...content[p.path]);
  }
}
