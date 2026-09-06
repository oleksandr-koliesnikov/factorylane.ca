import type { ContentPage } from "../types";
type Decision = {
  scenario: string;
  tradeoff: string;
  checks: string[][];
  faq: [string, string][];
};
const decisions: Record<string, Decision> = {
  "double-vs-triple-pane": {
    scenario:
      "For a living room with seating close to a large window, price the same opening with both glass packages. Compare the whole-window values, visible light and any difference in approved dimensions. Then repeat the exercise for a smaller opening before deciding whether the same upgrade belongs everywhere.",
    tradeoff:
      "A glazing upgrade can be worthwhile for a defined comfort priority, but it should not consume the budget needed to address damaged framing or incomplete installation work. Separate those parts of the estimate so you can evaluate the product and the surrounding construction independently.",
    checks: [
      ["Same opening", "Use identical frame dimensions and operating style."],
      [
        "Same glass options",
        "Identify differences in coating, privacy or safety glazing.",
      ],
      [
        "Same scope",
        "Keep colour, trim, removal and replacement method constant.",
      ],
      ["Different weight", "Confirm whether hardware or size limits change."],
    ],
    faq: [
      [
        "Can I mix double and triple glazing in one project?",
        "A room-by-room mix can be considered, subject to compatible products and an acceptable visual match. Record the package for every opening.",
      ],
      [
        "Which package is quieter?",
        "Pane count alone is not an acoustic specification. Compare tested data if sound reduction is a priority.",
      ],
    ],
  },
  "vinyl-vs-aluminum": {
    scenario:
      "For an architectural living-space opening, compare a section drawing and a same-size elevation for each system. Look at the actual glass area, mullions and the transition to adjacent doors. The material you prefer visually still needs to meet the project’s thermal and dimensional requirements.",
    tradeoff:
      "A material choice changes more than appearance: it can change the frame-to-wall detail, finish options, glazing capacity and service parts. An aluminum system intended for an interior partition is not an equivalent alternative to a thermally designed exterior window.",
    checks: [
      ["Exterior use", "Verify the intended application and thermal design."],
      ["Sightline", "Measure visible framing separately from frame depth."],
      ["Complete ratings", "Match frame, glazing and operating arrangement."],
      [
        "Finishing",
        "Compare approved colours and the actual coating or surface treatment.",
      ],
    ],
    faq: [
      [
        "Is aluminum always slimmer?",
        "No. Compare the actual profile and structural requirements at the proposed size.",
      ],
      [
        "Is vinyl always warmer?",
        "A material name cannot replace comparable whole-window performance data.",
      ],
    ],
  },
  "classic-vs-slim-profile": {
    scenario:
      "When replacing a group of front-elevation windows, compare the proposed sightlines with the existing casing, grilles and brickmould. A flatter profile may suit a simpler composition, while a more defined frame can coordinate with traditional trim. View fixed and opening sections together.",
    tradeoff:
      "Frame depth and visible frame width are different measurements. A quoted depth does not reveal how much daylight you gain. Ask for glass dimensions at the same outside frame size, and check the replacement method before drawing a conclusion about the finished view.",
    checks: [
      ["View from inside", "Compare actual glass width and height."],
      ["View from outside", "Check frame detail and grille alignment."],
      ["Wall fit", "Review depth, jamb extensions and trim."],
      [
        "Compatibility",
        "Confirm opening style, glass weight and hardware in the chosen series.",
      ],
    ],
    faq: [
      [
        "Can I choose a profile only by its depth?",
        "No. Depth describes the section through the wall; sightline describes the visible framing around the glass.",
      ],
      [
        "Will a slim frame fit every window type?",
        "Compatibility is specific to the series and configuration. Check the actual order schedule.",
      ],
    ],
  },
  "steel-vs-fiberglass": {
    scenario:
      "For a front entrance with sidelites, compare two complete assemblies with the same glass layout and hardware. Inspect the painted steel sample beside the chosen smooth or textured fiberglass finish. Include the inside face, which may be seen more often than the exterior.",
    tradeoff:
      "A modest slab with elaborate decorative glass can cost differently from a textured slab with a small upper lite. Separate material, design and installation in the comparison. The lower quote may simply omit the frame, sill or surrounding work that the other includes.",
    checks: [
      ["Surface", "Compare paint, texture or stain using samples."],
      [
        "Glass",
        "Keep insert area, privacy treatment and sidelites equivalent.",
      ],
      ["Hardware", "Match locking arrangement, preparation and finish."],
      ["Assembly", "Identify frame, threshold, seals and installation."],
    ],
    faq: [
      [
        "Is fiberglass automatically a premium specification?",
        "The complete construction and configuration determine the offering. A skin material alone does not establish the full quality or scope.",
      ],
      [
        "Which door needs less care?",
        "Compare the maintenance instructions for the actual finishes, hardware and seals offered.",
      ],
    ],
  },
  "casement-vs-awning": {
    scenario:
      "Above a kitchen sink, test the reach to the crank and locks from the normal standing position. A horizontal opening may suit an awning layout, while a taller opening may suit a casement. Outside, trace the moving sash against the path, deck or planting.",
    tradeoff:
      "Both systems use a projecting sash, but the direction of that projection differs. The overhang of an awning is not permission to leave it open in every weather condition. Decide how the window will be used and reached, then compare compatible hardware and glass.",
    checks: [
      ["Proportions", "Review the available width and height."],
      ["Reach", "Try the operator and every lock."],
      ["Exterior clearance", "Trace the full sash movement."],
      [
        "Heavy glazing",
        "Check the limits and hardware for the chosen glass package.",
      ],
    ],
    faq: [
      [
        "Can I use both styles on one elevation?",
        "Yes, where the selected series allows a coordinated layout. Align visible profiles and grilles intentionally.",
      ],
      [
        "Which supplies more air?",
        "Compare the actual opening dimensions and positions, not just the style names.",
      ],
    ],
  },
  "single-hung-vs-double-hung": {
    scenario:
      "For a bedroom where you want to ventilate from the upper section, try a double-hung display with the lower sash closed. If you normally use only the lower opening, compare a single-hung unit with the same glass, finish and installation scope.",
    tradeoff:
      "A second moving sash adds another operating position and another set of balance and seal details. That flexibility is useful when you will use it. Cleaning features also vary: confirm which sashes tilt, how they are supported and which instructions apply.",
    checks: [
      ["Airflow", "Decide whether upper-sash opening is useful."],
      ["Cleaning", "Verify the actual tilt and removal arrangement."],
      ["Meeting rails", "Review alignment and lock engagement."],
      ["Operation", "Try the sash weight and balance on the selected display."],
    ],
    faq: [
      [
        "Does double-hung mean two panes of glass?",
        "No. It describes two movable sashes. Double-pane describes the glass construction.",
      ],
      [
        "Can the upper sash stay open while the lower stays closed?",
        "That is a normal selection question for a double-hung design; follow the permitted operating arrangement of the selected unit.",
      ],
    ],
  },
  "bay-vs-bow": {
    scenario:
      "For a dining-room feature, look at the proposed assembly in plan and elevation. A bay creates more distinct angles; a bow repeats sections through a gentler curve. Sit where the table or sofa will be and consider how frame divisions interrupt the view.",
    tradeoff:
      "Both are projecting enclosures. The visible window selection is only part of the cost: support, head or roof, seat insulation and wall connections also matter. Converting a flat opening is a different project from replacing an existing projection.",
    checks: [
      ["Shape", "Compare angle or curve and projection depth."],
      ["Panel layout", "Mark fixed and operating sections."],
      ["Interior use", "Review seat depth, furnishings and coverings."],
      [
        "Construction",
        "Price support, head, seat, flashing and finish together.",
      ],
    ],
    faq: [
      [
        "Is a bow always bigger than a bay?",
        "No. Compare the actual overall dimensions and projection. The names describe arrangements, not one fixed size.",
      ],
      [
        "Can I compare prices by counting panels?",
        "Panel count alone omits size, glass, support and enclosure work. Compare the complete assembly.",
      ],
    ],
  },
  "picture-vs-fixed-casement": {
    scenario:
      "Beside an operating casement, a fixed casement may provide a closer visual rhythm. For a standalone view, compare a picture window’s clear glass with the fixed-casement alternative at identical outside dimensions. Use the drawing rather than assuming one is always narrower.",
    tradeoff:
      "Neither option opens. If the room needs ventilation, include a separate operating section in the design. The choice between the fixed styles is primarily about profile proportions, visual coordination and the selected assembly’s capabilities.",
    checks: [
      ["Glass area", "Compare actual visible dimensions."],
      ["Adjacent units", "Check fixed-to-operating sightlines."],
      ["Ventilation", "Identify where the room gets its opening section."],
      ["Large glass", "Review approved size and handling access."],
    ],
    faq: [
      [
        "Can a fixed casement be opened later?",
        "No. It is a fixed assembly, despite resembling a casement. A future change requires a suitable replacement.",
      ],
      [
        "Is a picture window frameless?",
        "No. It has a supporting frame even when the view is the main design feature.",
      ],
    ],
  },
  "sliding-vs-casement": {
    scenario:
      "Next to a narrow side path, a slider avoids an outward swing. Over a counter, a casement crank may be easier to reach than the moving edge of a slider. Test the handle position and available air opening in the actual room layout.",
    tradeoff:
      "A slider overlaps its other panel; a casement projects beyond the wall. Those movements affect clear opening, screens and cleaning access. Compare the complete window ratings instead of assuming movement alone gives a universal performance ranking.",
    checks: [
      [
        "Outside space",
        "Check whether a projecting sash conflicts with the path.",
      ],
      ["Clear opening", "Use the actual unobstructed dimensions."],
      ["Reach", "Try the crank or sliding handle from the working position."],
      ["Care", "Compare track cleaning with hinge and operator access."],
    ],
    faq: [
      [
        "Does a slider open across its full width?",
        "Usually the panels overlap, so total frame width is not clear opening width. Verify the drawing.",
      ],
      [
        "Can either style serve an emergency-opening requirement?",
        "Only the actual configuration and surrounding route can establish suitability for the project.",
      ],
    ],
  },
  "sliding-vs-garden-doors": {
    scenario:
      "For a furnished family room leading to a deck, draw the walking route and furniture positions with the door fully open. A slider keeps its movement in the frame. A garden-door arrangement needs a swing zone and a clear daily-use leaf.",
    tradeoff:
      "A wide closed assembly may provide a surprisingly different passage in the open position. Include screen operation, carrying items outside and the threshold in the decision. If you want a much wider opening, compare stacking or bifold systems as separate designs.",
    checks: [
      ["Daily access", "Try the normal opening and locking sequence."],
      ["Swing/track", "Mark the full moving envelope."],
      ["Screen", "Confirm travel, storage or swing position."],
      ["Threshold", "Review indoor flooring, drainage and outdoor landing."],
    ],
    faq: [
      [
        "Which works better in a small room?",
        "A slider avoids a leaf swinging into the room, but layout, clear passage and the outside conditions still need review.",
      ],
      [
        "Can both garden-door leaves open?",
        "It depends on the arrangement. Identify active, secondary and fixed sections on the drawing.",
      ],
    ],
  },
  "retrofit-vs-full-frame": {
    scenario:
      "For a window with sound surrounding trim, ask which existing frame components could remain and how much glass area the insert would leave. For an opening with recurring staining or damaged framing, have the condition assessed before accepting a retained-frame approach.",
    tradeoff:
      "Full-frame replacement exposes more of the opening, but does not automatically include structural enlargement or every hidden repair. Retrofit can reduce disturbance where retained components are suitable. The written scope should state what remains, what is removed and how unexpected conditions are handled.",
    checks: [
      ["Existing condition", "Record moisture, distortion and deterioration."],
      ["Retained components", "List the frame and trim that stay."],
      ["Glass area", "Compare finished sightlines and clear glass."],
      [
        "Finishing",
        "Identify jambs, casing, exterior trim and repair boundaries.",
      ],
    ],
    faq: [
      [
        "Does full-frame always mean changing the wall opening?",
        "No. Removing the old frame and enlarging the structure are separate scopes.",
      ],
      [
        "Can a retrofit hide a damaged frame?",
        "Damaged or unsuitable components need assessment and an appropriate repair or replacement scope; covering them is not a solution.",
      ],
    ],
  },
};
export function deepenComparisons(pages: ContentPage[]) {
  for (const p of pages) {
    const d = decisions[p.path.split("/").filter(Boolean).at(-1)!];
    if (!d) continue;
    p.sections.push(
      {
        title: "Apply the comparison to a real room",
        paragraphs: [d.scenario, d.tradeoff],
      },
      {
        title: "Make the two quotes comparable",
        table: { headers: ["Check", "How to compare"], rows: d.checks },
        links: [
          {
            label: "Build your opening schedule",
            href: "/resources/buying-guide/",
          },
          { label: "Review installation scope", href: "/installation/" },
        ],
      },
    );
    p.faq = [...d.faq, ...(p.faq ?? [])];
  }
}
