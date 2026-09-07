import references from "./window-references.json";
import type { ContentPage, ContentSection } from "./types";
const definitions = [
  [
    "casement",
    "Casement windows",
    "Side-hinged windows that open outward with a crank. A casement gives you an open passage for air and a sash that presses against the frame when locked.",
    "A practical place to start when you want an opening window with a broad view. A crank can be easier to reach over a kitchen counter than a sliding sash, but check the handle position against your sink and backsplash.",
    "The sash swings outside. Leave clearance from paths, planting, decks and neighbouring openings. Large or heavier glass packages change the load on the hinges and operator, so size limits must be checked for the actual configuration.",
    "Multi-point locking draws the sash into the seals. Look at the closing action as well as the handle: the sash should settle evenly without needing to be pushed by hand. A profile sample helps show where the weather seals sit.",
    "Single Casement Window",
    "Side hinged, outward swing|Crank operator|Compression seals|Kitchen, living area and bedroom openings",
    "awning",
    "picture",
  ],
  [
    "awning",
    "Awning windows",
    "Top-hinged windows that open outward at the bottom. They bring controlled ventilation to a wider, shorter opening and can be paired with fixed glass.",
    "Useful above a counter, in a bathroom or as an opening section alongside a larger fixed window. The horizontal shape lets you introduce ventilation without using the full height of the wall.",
    "The projecting sash needs exterior clearance. Its overhang does not make an open window rainproof, particularly in wind-driven rain. Close and lock it when leaving the home or when weather requires it.",
    "A crank pulls the lower edge back toward the frame. Inspect the operator reach, locking points and compression seals together. Wider units and triple-pane glass may call for different hardware.",
    "Awning Window",
    "Top hinged, outward opening|Crank operator|Compression seals|Bathrooms, kitchens and paired layouts",
    "casement",
    "hopper",
  ],
  [
    "single-hung",
    "Single-hung windows",
    "Vertical sliding windows with a moving lower sash and a fixed upper sash. They keep the opening action within the frame rather than projecting outdoors.",
    "A straightforward choice for a traditional vertical layout, especially where a swing-out sash could interfere with a walkway or porch. Open the lower sash for ventilation while the upper section stays in place.",
    "Only the lower sash opens. If you want airflow from the top of the window or easier access to both exterior panes, compare a double-hung configuration before choosing.",
    "Balance hardware helps the lower sash stay in the selected position. Sliding seals and clear drainage paths matter as much as the latch. Confirm whether the selected sash tilts in for cleaning.",
    "Single-hung Window",
    "Lower sash moves vertically|Upper sash stays fixed|No outward sash projection|Traditional vertical openings",
    "double-hung",
    "sliding",
  ],
  [
    "double-hung",
    "Double-hung windows",
    "Vertical sliding windows with two movable sashes. The upper and lower sections can be positioned independently, giving you more ways to manage airflow.",
    "Consider double hung when you like a traditional window shape but want ventilation from the upper section as well as the lower one. Tilt-in sash options can simplify exterior glass cleaning from indoors.",
    "Both sashes and their balances need room to move correctly. Compare the clear glass area and meeting rail with a casement or fixed layout, and confirm the exact tilt and removal instructions for the chosen unit.",
    "Level meeting rails, calibrated balances and an aligned frame help the lock engage and the sashes travel smoothly. Keep tracks and weep paths clear; forcing a sticking sash can conceal an installation or balance issue.",
    "Double-hung Window",
    "Two vertically moving sashes|Independent top and bottom opening|Tilt-in options vary by model|Bedrooms and traditional façades",
    "single-hung",
    "casement",
  ],
  [
    "sliding",
    "Sliding windows",
    "Windows whose sash moves horizontally along a track. Single sliders have one moving section; double sliders let both sections move. Neither layout needs an outward swing zone.",
    "A useful option for wide openings beside patios or narrow side passages. Compare the opening width with the amount of ventilation you want, rather than judging only the total size of the window.",
    "One sash generally overlaps another, so the full frame width is not an open passage. Track layout, screen access and sash removal differ between systems; try the actual display before deciding.",
    "Straight tracks, drainage and sliding seals support operation. Check how the sash lifts or tilts for cleaning and how the lock brings the meeting rails together. A level installation helps avoid unwanted rolling or binding.",
    "Single Sliding Window",
    "Horizontal sash travel|Single and double slider layouts|No outward projection|Wide openings and side passages",
    "single-hung",
    "awning",
  ],
  [
    "picture",
    "Picture windows",
    "Fixed windows designed around daylight and the view. They have no operating sash, so they do not provide ventilation or an emergency opening.",
    "Start here for a view you want to frame with uninterrupted glass. Combine a picture window with a casement or awning when a room also needs an opening section.",
    "A larger pane is not automatically suitable for every opening. Glass thickness, support, orientation and handling access affect the design. Compare usable glass area after allowing for the frame and installation method.",
    "With no moving hardware, the discussion centres on the frame, sealed glass unit and perimeter installation. Ask how the glass is supported and replaced, and choose the glass package for the room’s exposure rather than pane count alone.",
    "Fixed Picture Window",
    "No opening sash|Broad uninterrupted view|No ventilation through the unit|Feature views and combined layouts",
    "fixed-casement",
    "casement",
  ],
  [
    "fixed-casement",
    "Fixed casement windows",
    "Non-opening windows styled to coordinate with operating casements. They provide fixed glass while keeping a similar sash appearance across a combined layout.",
    "Useful beside a casement where a matching profile matters more than maximizing every inch of glass. A consistent sightline can make a group of different-sized windows feel considered.",
    "A fixed casement cannot be opened, even though it resembles an operating window. Compare it with a picture window: frame proportions and glass area can differ, so the choice is visual as well as practical.",
    "Ask to see fixed and operating samples side by side. Check the visible frame width, grille alignment and exterior trim instead of assuming that two windows with similar names will look identical.",
    "Fixed Casement Window",
    "Non-operating configuration|Casement-style appearance|Coordinates with operable units|Matched window groups",
    "picture",
    "casement",
  ],
  [
    "tilt-and-turn",
    "Tilt-and-turn windows",
    "Windows with two operating modes: an inward tilt for a smaller ventilation opening and an inward swing for fuller access. The handle selects the mode.",
    "A flexible choice when you want to change the amount of airflow or reach the outside glass from inside. Try the handle sequence and sash weight in the showroom to see how the operation feels.",
    "The inward swing needs clear room around blinds, curtains, furniture and deep sills. This is especially relevant when combining new windows with roller blinds. Opening dimensions and safety requirements must be checked for the selected system.",
    "The locking gear works around the sash perimeter. Correct alignment is important because one mechanism controls two movements. Follow the operating sequence and ask how to adjust or service the hardware.",
    "Tilt and Turn Window",
    "Inward tilt and inward turn|Handle-controlled operating modes|Interior swing clearance needed|Rooms needing flexible access",
    "casement",
    "double-hung",
  ],
  [
    "hopper",
    "Hopper windows",
    "Bottom-hinged windows that tilt inward at the top. The compact opening brings ventilation to smaller spaces while keeping a simple horizontal form.",
    "Often considered for basement or utility openings where a limited ventilation position is useful. Compare where the tilted sash sits relative to shelves, blinds and the interior sill.",
    "A hopper is not automatically an egress window. The actual unobstructed opening, hardware and surrounding space determine whether a specific window can serve the intended use. Interior clearance remains important even with a small sash.",
    "Check the latch, hinge support and any opening restrictor on the sample. The sash should settle consistently into its seals; frame alignment and clean contact surfaces help maintain that fit.",
    "Hopper Window",
    "Bottom hinged, inward tilt|Compact ventilation opening|Interior clearance required|Basements and utility rooms",
    "awning",
    "egress",
  ],
  [
    "bay",
    "Bay windows",
    "Projecting window arrangements, commonly built with a central pane and angled side sections. A bay adds depth to the wall and opens the view in more than one direction.",
    "Choose the centre and side sections separately: a fixed centre can frame the view while operable sides supply air. Projection depth also affects the interior ledge and how the window relates to the room.",
    "Support, roof or cap details, insulation and exterior drainage need to be included in the design. Replacing a flat window with a projecting bay is a different scope from replacing an existing bay in the same opening.",
    "The finished result depends on the assembly around the glass. Ask about seat-board insulation, support below the projection and how flashing connects to the wall. Compare the complete installed scope, not three individual window prices.",
    "Bay Window",
    "Angled projecting arrangement|Fixed or opening side sections|Support and roof details matter|Living and dining room features",
    "bow",
    "picture",
  ],
  [
    "bow",
    "Bow windows",
    "Multi-panel windows arranged in a gentler curve. A bow spreads the view across several sections and creates a different rhythm from the more angular shape of a bay.",
    "A good starting point when you want a wide architectural feature with repeated glass sections. Decide where opening panels are needed so ventilation works with the appearance of the curved arrangement.",
    "More sections mean more frame divisions. Review the inside view, overall span and projection depth together. The design also needs a suitable support, weatherproofing and finishing plan.",
    "Panel alignment helps the curve read consistently inside and out. The roof or cap, lower support and joints between sections deserve attention alongside glass performance. Ask for a complete assembly quote.",
    "Bow Window",
    "Curved multi-panel arrangement|Fixed and opening combinations|Several frame divisions|Wide architectural features",
    "bay",
    "picture",
  ],
];
export const windowPages: ContentPage[] = definitions.map(
  ([slug, title, intro, use, limit, detail, price, features, a, b]) => ({
    path: `/windows/${slug}/`,
    title,
    description: `Explore ${title.toLowerCase()}: operation, suitable rooms, glass and profile choices, installation details and pricing with Factory Lane.`,
    eyebrow: "WINDOWS / FIND YOUR OPENING",
    intro,
    parent: "/windows/",
    kind: "product",
    image:
      slug === "casement" || slug === "hopper" ? "window-detail" : "windows",
    imageAlt: "Window configurations on display in the showroom",
    priceProduct: price,
    sections: [
      {
        title: "Is this the right window for your room?",
        paragraphs: [use, limit],
      },
      {
        title: "How the design works",
        paragraphs: [detail],
        table: {
          headers: ["Detail", "What to know"],
          rows: features
            .split("|")
            .map((t, i) => [
              [
                "Operation",
                "Configuration",
                "Planning detail",
                "Typical application",
              ][i],
              t,
            ]),
        },
      },
      {
        title: "Choose the frame, then the glass",
        paragraphs: [
          "The opening style is one part of the specification. Profile proportions change the appearance, while the glass package affects thermal performance, light and solar gain. Compare a classic profile with a slimmer sightline on a physical sample.",
          "Double-pane and triple-pane configurations can use Low-E coatings and argon-filled cavities. The complete window rating, approved size and hardware compatibility matter more than any single feature. We will confirm the specification selected for your order.",
        ],
        links: [
          {
            label: "Compare window profiles",
            href: "/compare/classic-vs-slim-profile/",
          },
          {
            label: "Understand glass packages",
            href: "/windows/energy-efficiency/",
          },
        ],
      },
      {
        title: "Installation and the complete quote",
        paragraphs: [
          "An insert replacement can retain suitable existing framing. Full-frame replacement removes the old frame and allows a closer assessment of the opening. The condition of the existing assembly determines which approach is appropriate; a new opening is a separate scope.",
          "Your written estimate should identify dimensions, configuration, glass, colour, screens, interior trim, exterior finishing and installation. Tell us about access restrictions and any damage or condensation before measurement.",
        ],
        links: [
          {
            label: "Compare replacement methods",
            href: "/compare/retrofit-vs-full-frame/",
          },
          { label: "See window pricing", href: "/pricing/windows/" },
        ],
      },
      ...(slug === "casement"
        ? [
            {
              title: "Casement size reference",
              paragraphs: [
                "The researched configuration has the following size limits. These are a planning reference, not approval for an individual opening; confirm the ordered series, hardware and glass thickness. Width, height and area limits apply together.",
              ],
              table: {
                headers: [
                  "Glass",
                  "Min. width",
                  "Min. height",
                  "Max. width",
                  "Max. height",
                  "Max. area",
                ],
                rows: [
                  [
                    "Double pane",
                    "16 in",
                    "15 in",
                    "36 in",
                    "70 in",
                    "17 sq ft",
                  ],
                  [
                    "Triple pane",
                    "16 in",
                    "15 in",
                    "30 in",
                    "65 in",
                    "14.5 sq ft",
                  ],
                ],
              },
            },
          ]
        : []),
    ],
    faq: [
      [`${title}: what should I compare in person?`, detail],
      [
        `Can I include ${title.toLowerCase()} in a home estimate?`,
        "Yes. Start with the openings you would like to change. Final measurements, product compatibility and installation scope are confirmed before an order is placed.",
      ],
    ],
    related: [
      `/windows/${a}/`,
      `/windows/${b}/`,
      "/pricing/windows/",
      "/showroom/",
    ],
  }),
);
const tech: [string, string, string, string, string, string[]][] = [
  [
    "materials/vinyl",
    "Vinyl windows",
    "Vinyl window frames use PVC profiles that can contain several internal chambers. Their proportions, reinforcement and assembly determine how the finished unit fits the opening.",
    "A material choice is also a design choice. Compare frame depth, visible sightlines and corner details. Vinyl does not need the same repainting routine as a wood exterior, but surfaces, seals and drainage paths still need routine care.",
    "Check that the selected colour, glass weight and dimensions are approved together. A dark exterior finish and a very large opening should be reviewed as a complete configuration rather than added independently.",
    [
      "Classic or slim profile appearance",
      "Opening style and sightline",
      "Approved colour and glazing combination",
      "Care and drainage access",
    ],
  ],
  [
    "materials/aluminum",
    "Aluminum windows",
    "Aluminum window systems use metal profiles and can support a defined architectural appearance. For a heated home, the frame’s thermal design is central to the discussion.",
    "Ask where the thermal break sits and how the full window performs, including its glass edges and frame. A metal material description by itself does not tell you how warm the interior surface will remain.",
    "System choice, glass weight, size and installation requirements need to be reviewed together. Compare aluminum and vinyl using complete product ratings and equivalent glass packages, not only photographs.",
    [
      "Thermal-break construction",
      "Whole-window performance",
      "Glazing and structural limits",
      "Interior and exterior finish options",
    ],
  ],
  [
    "energy-efficiency",
    "Energy-efficient windows",
    "Window efficiency depends on the complete assembly: frame, sash, glass, spacer, seals and installation. Pane count alone cannot describe the performance of a finished window.",
    "U-factor describes heat transfer; a lower figure indicates less heat passing through under the rating conditions. Solar heat gain and visible transmittance address different questions, so orientation and desired daylight still matter.",
    "Ask for the certification or rating record that applies to your exact configuration. Do not assume that every size and glass combination has the same rating. Energy savings also depend on the existing windows, the home and how it is used.",
    [
      "Frame and glass working together",
      "Applicable whole-window ratings",
      "Room orientation and comfort goals",
      "Air sealing at installation",
    ],
  ],
  [
    "glass/low-e",
    "Low-E glass",
    "Low-emissivity coatings are thin layers applied to glass to control radiant heat transfer. They can be part of either a double-pane or triple-pane sealed unit.",
    "Different coating selections manage solar gain differently. A large sun-facing window and a shaded room may call for different conversations about light, summer heat and winter comfort.",
    "The coating, pane arrangement, gas fill and spacer are specified as one sealed glass unit. Ask to compare the completed package and its ratings; Low-E is not a promise of a particular energy-bill reduction.",
    [
      "Coating specification",
      "Solar heat gain",
      "Visible light transmission",
      "Double- or triple-pane compatibility",
    ],
  ],
  [
    "glass/argon",
    "Argon-filled windows",
    "Argon is used in the sealed space between panes as part of an insulating glass unit. It works alongside the panes, coating, spacer and edge seals.",
    "A gas fill is one component of performance. Compare it within an equivalent window configuration rather than treating the word argon as a complete quality measure.",
    "Fogging between panes can indicate a sealed-unit problem and is different from moisture on the room-facing glass. Record where condensation appears and ask for a service assessment before assuming the cause.",
    [
      "Sealed cavity between panes",
      "Low-E and spacer specification",
      "Whole-window rating",
      "Sealed-unit service terms",
    ],
  ],
  [
    "glass/double-pane",
    "Double-pane windows",
    "Double-pane glazing uses two panes with a sealed cavity between them. Low-E coatings and an argon fill can be specified within that construction.",
    "This is a useful baseline for comparing the cost, weight and performance of a window package. Match the frame, opening size and coating when comparing it with a triple-pane option.",
    "Look at the complete window rating, not just the glass-centre figure. The edge spacer, frame and installation also influence the experience beside the window.",
    [
      "Two panes",
      "One sealed cavity",
      "Coating and gas options",
      "Compare equivalent frame configurations",
    ],
  ],
  [
    "glass/triple-pane",
    "Triple-pane windows",
    "Triple-pane glazing places three panes in a sealed unit, creating two cavities. It can improve thermal performance in an appropriately specified assembly.",
    "The additional pane adds weight. Hinges, operators and frame dimensions must support the chosen glass package, and maximum operating sizes may differ from a double-pane configuration.",
    "An upgrade should respond to the room’s exposure, comfort goals and budget. Do not assume that three panes alone guarantee a particular noise reduction or energy saving; ask for applicable performance data.",
    [
      "Three panes",
      "Two sealed cavities",
      "Higher glass weight",
      "Size and hardware compatibility",
    ],
  ],
  [
    "egress",
    "Egress windows",
    "An egress window is selected for its usable emergency opening and location, rather than its appearance or overall frame dimensions. Not every opening window qualifies.",
    "Begin with the intended room use, the actual clear opening and any window well or obstruction outside. A basement bedroom proposal requires a more detailed assessment than replacing a window for ventilation alone.",
    "Requirements depend on the applicable rules and project. Have the responsible professional and municipality confirm the design before ordering or changing a structural opening. This page does not certify a window or a room as compliant.",
    [
      "Unobstructed clear opening",
      "Operation and access",
      "Window well and outside obstructions",
      "Project-specific review before ordering",
    ],
  ],
  [
    "new-construction",
    "New-construction windows",
    "Windows for a new build or addition are coordinated with wall construction, rough openings and the project’s overall design. The installation detail should be considered before the opening is finished.",
    "Share drawings, elevations, wall sections and the intended opening schedule. Confirm frame depth, sill support, flashing and the transition between the window and wall control layers with the project team.",
    "An early product selection does not replace final dimensional review. Coordinate delivery access, storage and installation sequencing so completed units are protected as other trades finish the work.",
    [
      "Drawing and opening schedule review",
      "Wall and flashing coordination",
      "Final dimension approval",
      "Delivery and trade sequencing",
    ],
  ],
  [
    "low-rise-condos",
    "Windows for low-rise condos",
    "A condo window project involves the unit, the exterior of the building and the condominium’s approval process. Ownership and maintenance responsibilities must be understood before choosing replacements.",
    "Obtain the corporation’s requirements for appearance, specifications, access and permitted work. Photographs and an existing-window schedule help identify what needs to match across the building.",
    "Discuss responsibility for approvals, site access, protection of shared areas and work hours before committing to a scope. Product selection must reflect both the opening and the building’s accepted design.",
    [
      "Condominium approval process",
      "Exterior matching requirements",
      "Shared access and work hours",
      "Written scope and responsibilities",
    ],
  ],
];
export const windowTechnologyPages: ContentPage[] = tech.map(
  ([slug, title, intro, first, second, checks]) => ({
    path: `/windows/${slug}/`,
    title,
    description: `Understand ${title.toLowerCase()} with practical guidance on specification, compatibility and choosing products for your home.`,
    eyebrow: "WINDOWS / A CLOSER LOOK",
    intro,
    image: slug.startsWith("glass/") ? "window-detail" : "profile",
    imageAlt: "Window profile samples and display details",
    parent: "/windows/",
    kind: "guide",
    sections: [
      { title: "What to consider for your home", paragraphs: [first, second] },
      { title: "Your specification checklist", bullets: checks },
      {
        title: "Turn the information into a practical choice",
        paragraphs: [
          "Bring room photographs, approximate opening dimensions and the questions that prompted your project. In the showroom, compare physical samples rather than judging the product from a screen alone.",
          "The home estimate connects those choices to the existing opening. A complete quote identifies the selected configuration, installation method and finishing, so you can compare like with like.",
        ],
        links: [
          { label: "Window opening styles", href: "/windows/" },
          { label: "What affects the price?", href: "/pricing/windows/" },
        ],
      },
    ],
    faq: [
      [
        "Can I compare options before ordering?",
        "Yes. A showroom appointment lets you look at profiles and glass options. Final compatibility is checked against the chosen system and measurements.",
      ],
      [
        "What information belongs on my quote?",
        "The window style, dimensions, profile, glass package, finish, hardware and installation scope should be clear. Confirm any performance rating against that exact configuration.",
      ],
    ],
    related: [
      "/compare/double-vs-triple-pane/",
      "/compare/vinyl-vs-aluminum/",
      "/installation/window-replacement/",
      "/showroom/",
    ],
    ...(slug === "egress"
      ? {
          review:
            "Opening requirements and permits must be reviewed for the specific project.",
        }
      : {}),
  }),
);

// Publish product-only prices; installation is quoted separately. Keep researched dimensions.
for (const page of windowPages) {
  const ref = (
    references as Record<
      string,
      {
        installed: { label: string; min: number; max: number; plus: boolean }[];
        dimensions: string[][];
      }
    >
  )[page.path];
  if (!ref) continue;
  if (ref.dimensions.length && page.path !== "/windows/casement/")
    page.sections.push({
      title: "Configuration size reference",
      paragraphs: [
        "These researched limits are a planning reference for the described configuration. Width, height and area limits apply together; do not combine all maxima into an order. The actual series, glass thickness, hardware and structural requirements must be approved for your opening.",
      ],
      table: {
        headers: [
          "Glazing",
          "Min. width",
          "Min. height",
          "Max. width",
          "Max. height",
          "Max. area",
        ],
        rows: ref.dimensions,
      },
    });
  page.sections.push({
    title: "Watch and compare in person",
    paragraphs: [
      "Explore the showroom overview to see the scale of the displays, then try the relevant opening style during your visit. Individual product-operation footage will be added after the dedicated filming; a showroom overview is not a demonstration of this exact configuration.",
    ],
    links: [
      { label: "Watch the showroom tour", href: "/videos/showroom-tour/" },
      { label: "Plan your showroom visit", href: "/showroom/" },
    ],
  });
}
