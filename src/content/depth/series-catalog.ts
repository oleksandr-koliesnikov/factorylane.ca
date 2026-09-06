import type { ContentPage } from "../types";
export function deepenSeries(pages: ContentPage[]) {
  for (const p of pages) {
    if (
      !["/windows/series/classic/", "/windows/series/slim-profile/"].includes(
        p.path,
      )
    )
      continue;
    const slim = p.path.includes("slim");
    p.sections.push(
      {
        title: slim
          ? "Read the slim profile in section"
          : "Read the classic profile in section",
        paragraphs: slim
          ? [
              "A slim-profile direction emphasizes cleaner visible proportions around the glass. The 2⅞-inch reference describes a profile dimension that must be matched to the actual series drawing. It does not by itself tell you the finished glass area, the jamb extension required or the sightline of every fixed and operating combination.",
              "For a contemporary elevation, compare how frame divisions align across a picture window, a moving sash and a nearby patio door. A slimmer-looking sample is only useful if the selected systems can preserve the intended proportions at the actual opening sizes.",
            ]
          : [
              "A classic-profile direction uses a more defined frame appearance that can coordinate with traditional casing, grilles and exterior mouldings. The 3¼-inch frame reference is a starting point for reviewing the section, not a universal measurement for every component in the family.",
              "Look at the frame and sash as separate parts. The section shows how the glass sits in the sash, where seals meet and how the unit relates to the wall. The front elevation shows the visible framing. Both views are needed when you want to retain familiar proportions while replacing the old assembly.",
            ],
      },
      {
        title: "Profile anatomy: the details to compare",
        table: {
          headers: ["Part of the assembly", "What it does", "What to ask"],
          rows: [
            [
              "Frame and internal chambers",
              "Form the perimeter around the opening.",
              "Which section and depth apply to this configuration?",
            ],
            [
              "Sash",
              "Carries glass in an operating window.",
              "How does its sightline align with fixed units?",
            ],
            [
              "Corner construction",
              "Connects the profile members.",
              "Review the corner sample and finish quality.",
            ],
            [
              "Reinforcement",
              "Supports configurations that require additional stiffness.",
              "Where is it specified for this size, colour and glazing?",
            ],
            [
              "Weather seals",
              "Meet at the sash and frame closing surfaces.",
              "Where are the contact points and how are seals serviced?",
            ],
            [
              "Glazing support and spacer",
              "Support the glass unit and separate its panes.",
              "Which glass thickness and edge construction are approved?",
            ],
            [
              "Drainage path",
              "Directs collected water toward designated outlets.",
              "Which outlets must remain clear after installation?",
            ],
          ],
        },
      },
      {
        title: "Confirm compatibility before selecting a series",
        paragraphs: [
          slim
            ? "A slim appearance should not be obtained by substituting an incompatible profile into a larger or heavier assembly. Fixed glass, crank-operated windows and sliding systems can use different frame and hardware arrangements. Confirm the actual series offered for each opening."
            : "A matching exterior finish does not mean every operating style uses the same frame. Hung, sliding and tilt-and-turn windows have different movement and hardware requirements from a casement. Build the opening schedule around approved configurations rather than assuming one sample represents every product.",
        ],
        table: {
          headers: ["Configuration", "Compatibility review"],
          rows: [
            [
              "Casement and awning",
              "Approved operator, hinges, locking points and sash weight.",
            ],
            [
              "Fixed picture or fixed casement",
              "Glass support, maximum dimensions and visual alignment with operating units.",
            ],
            [
              "Double or triple glazing",
              "Glazing thickness, weight and the relevant size/performance record.",
            ],
            [
              "Dark or dual finishes",
              "Approved finish combination and any related restrictions.",
            ],
            [
              "Combined openings",
              "Joining detail, support and continuous sightlines.",
            ],
          ],
        },
        links: [
          { label: "Explore all window types", href: "/windows/" },
          {
            label: "Compare classic and slim",
            href: "/compare/classic-vs-slim-profile/",
          },
        ],
      },
      {
        title: slim
          ? "Keep the surrounding finish visually quiet"
          : "Coordinate the profile with the home",
        paragraphs: slim
          ? [
              "A flat casing, restrained grille layout and carefully positioned blind can reinforce a simple frame design. Compare the finished depth at the sill and the projection of handles before committing to a shallow inside-mounted covering.",
              "Use the same exterior finish sample across adjacent openings, then check the actual glass appearance. A consistent colour cannot hide a mismatch in grille alignment or coating reflection.",
            ]
          : [
              "Review Colonial, flat or other approved casing directions alongside the profile sample. The casing, jamb extension and exterior brickmould affect the result as much as the narrow edge visible around the glass. Identify each finishing component in the quote.",
              "For a phased replacement, retain the approved profile drawing, finish reference and grille layout. These records make a later order easier to coordinate without relying on a photograph or an approximate colour name.",
            ],
      },
      {
        title: "What belongs in the approved product record",
        bullets: [
          "The series and model identifier for each opening.",
          "A dimensioned configuration drawing showing fixed and moving sections.",
          "Approved glass, hardware, screen and finish selections.",
          "Applicable whole-product performance and certification records.",
          "Installation requirements, care guidance and warranty documents.",
        ],
        links: [
          {
            label: "Understand energy-performance records",
            href: "/windows/energy-efficiency/",
          },
          {
            label: "Compare installation methods",
            href: "/compare/retrofit-vs-full-frame/",
          },
        ],
      },
    );
    p.faq = [
      [
        "Will this profile fit every wall depth?",
        "The frame and the required jamb extension are different parts of the installation. Measure the actual wall and finishing conditions.",
      ],
      [
        slim
          ? "Does slim always mean more glass?"
          : "Will a classic profile match my old windows exactly?",
        slim
          ? "Compare glass dimensions at the same outside frame size. The operating sash, retained frame and installation method also affect the visible area."
          : "An exact match is not established by the style name. Compare a drawing and sample with the existing casing, grilles and frame proportions.",
      ],
      [
        "Where can I see the internal details?",
        "Ask to inspect a profile section and the corresponding complete display in the showroom. Match what you see to the specified model before ordering.",
      ],
      [
        "Can the glass package change the permitted size?",
        "Yes. Weight, support and glazing capacity must be checked for the selected configuration.",
      ],
    ];
  }
}
const styleDetails: Record<
  string,
  { paragraphs: string[]; rows: string[][]; faq: [string, string][] }
> = {
  traditional: {
    paragraphs: [
      "A traditional entrance often relies on balanced panel proportions and a clear relationship between the door and the surrounding trim. Start by deciding whether the glass should be a small accent or the dominant feature. A decorative insert can change both the visual weight and the amount of privacy.",
      "Look at the complete composition from the street and from the hallway. Sidelites can repeat the main glass pattern, while a transom may introduce another line that needs to align with the home. Too many unrelated patterns can make a small entrance feel busy.",
    ],
    rows: [
      [
        "Panel layout",
        "Compare defined or raised-panel proportions at the actual slab size.",
      ],
      [
        "Glass placement",
        "Choose the insert area before selecting a decorative pattern.",
      ],
      [
        "Sidelites",
        "Coordinate the height and rhythm of the glass with the main leaf.",
      ],
      [
        "Hardware",
        "Check scale and finish against the panel detail and casing.",
      ],
    ],
    faq: [
      [
        "Can a traditional door have simple clear glass?",
        "Yes, where the chosen model supports it. Traditional proportions do not require an ornate glass pattern.",
      ],
      [
        "Should the sidelites use the same design?",
        "They should be reviewed as one composition; the exact matching options depend on the approved glass collection.",
      ],
    ],
  },
  modern: {
    paragraphs: [
      "A modern entrance can begin with a flush or restrained panel and a deliberate vertical or horizontal glass line. The fewer details there are, the more noticeable alignment becomes. Review the handle, insert and adjacent frame divisions on a dimensioned drawing.",
      "Privacy is especially important when a tall clear lite faces the street. Compare textured or obscured glass in real lighting, and check whether a person can see directly into the hallway at night. The modern appearance should still work for everyday use.",
    ],
    rows: [
      [
        "Panel surface",
        "Compare a flat or minimally detailed face using the actual model.",
      ],
      ["Glass geometry", "Check alignment with handle height and sidelites."],
      [
        "Long pulls or handles",
        "Confirm compatible lock preparation and comfortable operation.",
      ],
      ["Frame and trim", "Choose their proportions together with the slab."],
    ],
    faq: [
      [
        "Does a modern door have to be black?",
        "No. The design is about proportion and detail; use an approved finish that works with the home.",
      ],
      [
        "Can a long pull work with a smart lock?",
        "The hardware arrangement and preparation must be checked together before the door is ordered.",
      ],
    ],
  },
  contemporary: {
    paragraphs: [
      "A contemporary direction gives room to combine clean construction with a distinctive glass, colour or hardware choice. Select one leading element, then make the other parts support it. A strong glass pattern may call for quieter panel detail and trim.",
      "Judge the design beside the existing windows and exterior materials. A door that looks balanced in a catalogue can feel oversized or visually disconnected in a narrow porch. Bring a full entrance photograph, including the overhead and side conditions.",
    ],
    rows: [
      [
        "Main design feature",
        "Choose whether colour, glass or hardware leads the composition.",
      ],
      [
        "Surrounding façade",
        "Compare the proposed finish with nearby windows and cladding.",
      ],
      [
        "Day/night privacy",
        "View the glass from both sides under different lighting.",
      ],
      [
        "Interior face",
        "Coordinate with the hallway rather than considering only curb appeal.",
      ],
    ],
    faq: [
      [
        "How is contemporary different from modern?",
        "The categories overlap. Use them to narrow design direction, then judge the exact panel, glass and hardware rather than relying on a label.",
      ],
      [
        "Can the inside and outside finishes differ?",
        "Some products allow separate finishes. Confirm the exact combination and coverage for the selected model.",
      ],
    ],
  },
  craftsman: {
    paragraphs: [
      "A Craftsman-inspired entrance often concentrates glazing toward the upper part of the leaf, with defined panels below. Compare the width and height of those parts at the actual door size. A smaller glass area changes daylight and sightlines differently from a full-height insert.",
      "Decorative ledges, grille patterns or contrasting hardware should be considered only when supported by the chosen model. Check how each detail relates to the surrounding columns, casing or porch. The style should be coherent without depending on an invented collection name.",
    ],
    rows: [
      [
        "Upper glazing",
        "Review light, privacy and the height of the view through the glass.",
      ],
      ["Lower panels", "Compare their spacing and proportions on the drawing."],
      [
        "Grilles or decorative detail",
        "Confirm the actual model supports the selected arrangement.",
      ],
      [
        "Porch composition",
        "Coordinate casing and sidelites with the door’s horizontal lines.",
      ],
    ],
    faq: [
      [
        "Do all Craftsman doors include a shelf or dentil detail?",
        "No. Those are model-specific features and must be identified in the approved design.",
      ],
      [
        "Will upper glass provide enough hallway light?",
        "Compare the glass area and nearby sidelites or transom with the existing entrance and your daylight priorities.",
      ],
    ],
  },
  shaped: {
    paragraphs: [
      "A shaped entrance needs a measured profile of the opening, not just a width and height. An arched top can describe the door leaf itself or a separate transom above a rectangular leaf. These are different configurations with different frame and fabrication requirements.",
      "Start with drawings showing the shape, the operating portion and the surrounding structure. Check hardware location, weather seals, glazing and replacement access. Custom shape should be treated as a product and installation specification rather than a decorative option added at the end.",
    ],
    rows: [
      [
        "Shape definition",
        "Distinguish a shaped leaf from a rectangular door with shaped glazing above.",
      ],
      [
        "Measurement",
        "Use the required template or approved dimensioned drawing.",
      ],
      ["Operating clearance", "Review the actual swing and frame geometry."],
      [
        "Scope",
        "Include custom finishing and the connection to the existing opening.",
      ],
    ],
    faq: [
      [
        "Can I order an arch from a photograph?",
        "A photograph communicates appearance, but final ordering needs the required measured shape and approved drawing.",
      ],
      [
        "Could a rectangular door sit below an arched transom?",
        "That is one possible design direction if the opening and selected system support it. Confirm the full assembly.",
      ],
    ],
  },
};
export function deepenCatalogue(pages: ContentPage[]) {
  for (const p of pages) {
    const style = Object.keys(styleDetails).find((k) =>
      p.path.includes(`-${k}-`),
    );
    const fiberglass = p.path.includes("fiberglass");
    if (!style) {
      p.sections.push({
        title: "Compare the complete entrance, not isolated designs",
        paragraphs: [
          "Narrow the selection in three stages: choose the material and surface, compare the panel and glass layout, then resolve the frame, sidelites, transom and hardware. This keeps a style preference connected to an orderable assembly.",
          "Bring the opening photograph, the desired privacy level and a finish reference to the showroom. The final design should be approved at the measured dimensions with the exact model and component selections recorded.",
        ],
        table: {
          headers: ["Decision", "Selection to record"],
          rows: [
            [
              "Material",
              "Steel or fiberglass, including the actual surface treatment.",
            ],
            [
              "Design",
              "Panel, glass position and matching surrounding sections.",
            ],
            ["Operation", "Handing, active leaf and clear passage."],
            [
              "Completion",
              "Frame, threshold, trim, installation and care documents.",
            ],
          ],
        },
      });
      continue;
    }
    const d = styleDetails[style];
    p.sections = p.sections.filter(
      (s) => s.title !== "Build the entrance around your priorities",
    );
    p.sections.splice(
      1,
      0,
      { title: `Refine the ${style} design`, paragraphs: d.paragraphs },
      {
        title: "Design details to approve",
        table: { headers: ["Element", "Decision"], rows: d.rows },
      },
      {
        title: fiberglass
          ? "Texture, grain and finish"
          : "Painted steel and panel definition",
        paragraphs: fiberglass
          ? [
              "For a textured fiberglass design, compare the grain direction and finish on the actual panel sample. The stain or coating system should suit the supplied surface. A colour on a screen is not a reliable representation of a textured door in natural light.",
              "For a smooth design, check how reflections reveal the panel lines and how the finish coordinates with the frame. Keep the approved cleaning and touch-up instructions with the product record.",
            ]
          : [
              "For a steel design, inspect the panel definition and approved painted finish. The skin, core, edges and frame should be specified alongside the appearance. Hardware and glass preparations need to be settled before production.",
              "Discuss how coating damage is addressed and whether a proposed storm door is compatible with the primary entrance. The finish and exposure conditions belong in the decision as well as the selected colour.",
            ],
      },
    );
    p.faq = d.faq;
  }
}
