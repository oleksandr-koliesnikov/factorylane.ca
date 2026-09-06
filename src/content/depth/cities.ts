import type { ContentPage } from "../types";
type Topic = {
  title: string;
  rows: string[][];
  links: [string, string][];
  question: string;
  answer: string;
};
const topics: Record<string, Topic> = {
  access: {
    title: "Plan access before choosing the largest unit",
    rows: [
      ["Unloading route", "Identify the path from the vehicle to the opening."],
      ["Obstructions", "Photograph gates, stairs, decks and tight turns."],
      [
        "Large units",
        "Review weight, handling and support with the selected dimensions.",
      ],
      [
        "Visit coordination",
        "Confirm the exact address and agreed meeting arrangements.",
      ],
    ],
    links: [
      ["Large fixed windows", "/windows/picture/"],
      ["Architectural glass walls", "/glass-walls/"],
    ],
    question: "What information helps plan a larger-window project?",
    answer:
      "Include width and height for initial discussion, photographs of the opening and the delivery route, and whether the existing wall opening changes. Final measurements and handling arrangements must be confirmed for the selected assembly.",
  },
  scope: {
    title: "Turn the opening list into comparable prices",
    rows: [
      [
        "Each opening",
        "Room, photograph and proposed fixed or operating arrangement.",
      ],
      [
        "Product options",
        "Glass, finish, hardware and screens listed separately.",
      ],
      [
        "Installation",
        "Retained frame, full frame or opening change identified.",
      ],
      [
        "Completion",
        "Trim, repairs, disposal and follow-up responsibilities described.",
      ],
    ],
    links: [
      ["Window price references", "/pricing/windows/"],
      ["Replacement scope", "/installation/window-replacement/"],
    ],
    question: "Can a whole-home price hide different installation scopes?",
    answer:
      "Yes. Compare opening-by-opening specifications and identify what stays, what is removed and which finishing is included. A total without that detail may describe a different project.",
  },
  phased: {
    title: "Keep the first phase compatible with the next",
    rows: [
      [
        "Priorities",
        "Separate urgent condition concerns from optional changes.",
      ],
      [
        "Shared appearance",
        "Record profile, exterior finish and grille layout.",
      ],
      ["Opening schedule", "Mark completed, current and later phases."],
      [
        "Future orders",
        "Retain model, finish and glazing records rather than relying on memory.",
      ],
    ],
    links: [
      ["Budget and phasing", "/financing/"],
      ["Window profiles", "/windows/series/"],
    ],
    question: "How can I coordinate windows replaced in different stages?",
    answer:
      "Keep the approved profile, finish, grille and glass details for each opening. Before a later phase, confirm current availability and compare samples where a close visual match matters.",
  },
  patio: {
    title: "Compare the usable backyard opening",
    rows: [
      [
        "Movement",
        "Draw the slider, swing or panel stack in the open position.",
      ],
      ["Daily use", "Check the passage used for ordinary trips outside."],
      ["Screen", "Include its track, swing or parking position."],
      [
        "Transition",
        "Review interior floor, sill, drainage and exterior landing.",
      ],
    ],
    links: [
      ["Patio systems", "/doors/patio/"],
      ["Sliding versus garden doors", "/compare/sliding-vs-garden-doors/"],
    ],
    question: "Should I compare patio doors by total width?",
    answer:
      "Also compare the clear passage, screen and full moving envelope. Equal frame widths can provide different usable openings and need different space around them.",
  },
  entry: {
    title: "Specify the whole entrance",
    rows: [
      ["Leaf", "Material, panel design, handing and active opening."],
      ["Glass", "Insert, privacy, sidelites and transom coordinated."],
      ["Hardware", "Lock preparation, handle and secondary-leaf details."],
      ["Surroundings", "Threshold, landing, frame and interior/exterior trim."],
    ],
    links: [
      ["Steel and fiberglass comparison", "/compare/steel-vs-fiberglass/"],
      ["Entry design catalogue", "/catalog/doors-catalog/"],
    ],
    question: "What should I bring when choosing an entry door?",
    answer:
      "Bring a full entrance photograph, a view of the hallway, a design reference and your privacy priorities. Include sidelites, transom and steps so the assembly can be discussed as a whole.",
  },
  comfort: {
    title: "Connect the symptom to the specification",
    rows: [
      [
        "Draft or movement",
        "Note the location and whether it changes when locked.",
      ],
      ["Cold or glare", "Identify the room, seating position and time of day."],
      ["Moisture", "Record whether it is inside, outside or between panes."],
      [
        "Glass choice",
        "Compare the exact whole-product rating and room priorities.",
      ],
    ],
    links: [
      ["Energy-performance guide", "/windows/energy-efficiency/"],
      ["Condensation guide", "/resources/condensation/"],
    ],
    question: "Does condensation mean I need a different glass package?",
    answer:
      "First identify where the moisture appears. Room-side surface moisture, fog between panes and water around the frame require different questions; the remedy should follow the assessment.",
  },
  design: {
    title: "Keep the elevation and room use connected",
    rows: [
      ["Profiles", "Compare visible sightlines and wall-depth details."],
      [
        "Fixed/opening mix",
        "Put ventilation where it is useful and preserve intended views.",
      ],
      [
        "Glass appearance",
        "Review coating, privacy and adjacent panes together.",
      ],
      ["Finish", "Coordinate colour, grilles, casing and window coverings."],
    ],
    links: [
      ["Classic versus slim profiles", "/compare/classic-vs-slim-profile/"],
      ["Picture versus fixed casement", "/compare/picture-vs-fixed-casement/"],
    ],
    question: "Do all windows need the same operating style?",
    answer:
      "No. Fixed and opening units can be coordinated where the selected systems support the design. Review ventilation, appearance and required functions room by room.",
  },
  condition: {
    title: "Establish what can remain around the opening",
    rows: [
      [
        "Visible condition",
        "Photograph staining, distortion and damaged trim.",
      ],
      [
        "Retained frame",
        "Ask which components remain and why they are suitable.",
      ],
      ["Removal", "Identify the extent of frame and trim replacement."],
      [
        "Additional work",
        "Agree how hidden repairs are documented and scoped.",
      ],
    ],
    links: [
      ["Retrofit versus full frame", "/compare/retrofit-vs-full-frame/"],
      ["Installation planning", "/installation/"],
    ],
    question: "Can a lower-cost insert solve every existing-frame problem?",
    answer:
      "No. Retained components must be suitable. Moisture, deterioration or distortion may require a different scope, so assessment comes before choosing the method.",
  },
  clearance: {
    title: "Test movement with the room furnished",
    rows: [
      ["Reach", "Try the handle from the normal standing position."],
      ["Inside space", "Include blinds, curtains, counters and furniture."],
      ["Outside space", "Check paths, planting, screens and landings."],
      [
        "Full movement",
        "Test the complete opening, not only the first few inches.",
      ],
    ],
    links: [
      ["Casement versus awning", "/compare/casement-vs-awning/"],
      ["Blinds and mounting", "/blinds/"],
    ],
    question: "When should I choose blinds for the replacement?",
    answer:
      "Plan the covering while selecting the opening style, then confirm final dimensions and mounting after the window and trim specification are known. Handles and inward-moving sashes need clearance.",
  },
  basement: {
    title: "Review the basement opening and its outside conditions",
    rows: [
      [
        "Intended use",
        "Identify ventilation, storage or a proposed room conversion.",
      ],
      ["Clear opening", "Use the actual unobstructed operating dimensions."],
      ["Outside route", "Document the well, grade and nearby obstructions."],
      [
        "Construction",
        "Coordinate any enlargement, drainage, support and approvals.",
      ],
    ],
    links: [
      ["Egress planning", "/windows/egress/"],
      ["Opening changes", "/installation/cut-out/"],
    ],
    question: "Is a basement window automatically suitable for a bedroom?",
    answer:
      "No. The actual clear opening, exterior route and the full room-conversion requirements must be reviewed for the property. A style name alone cannot establish suitability.",
  },
  coordination: {
    title: "Coordinate windows with the surrounding renovation",
    rows: [
      ["Schedule", "Set decision points before flooring, casing and cladding."],
      [
        "Authority",
        "Identify who approves the product and any exterior changes.",
      ],
      [
        "Scope boundaries",
        "Confirm responsibility for repairs and surrounding finishes.",
      ],
      ["Records", "Use one approved schedule for products and openings."],
    ],
    links: [
      ["New-construction coordination", "/windows/new-construction/"],
      ["Low-rise condo projects", "/windows/low-rise-condos/"],
    ],
    question: "What should be settled before adjacent finishes are installed?",
    answer:
      "Confirm frame depth, jambs, casing, threshold levels and the frame-to-wall details. Record who handles the surrounding work so the product and other trades remain coordinated.",
  },
  hung: {
    title: "Choose how the vertical opening will work",
    rows: [
      ["Lower sash", "Try the normal lift and balance feel."],
      ["Upper sash", "Decide whether upper ventilation is useful."],
      ["Cleaning", "Confirm the permitted tilt or removal arrangement."],
      ["Layout", "Check meeting-rail appearance and covering clearance."],
    ],
    links: [
      ["Single versus double hung", "/compare/single-hung-vs-double-hung/"],
      ["Window care", "/resources/care-guide/"],
    ],
    question:
      "What is the practical difference between single and double hung?",
    answer:
      "A single-hung unit normally has one moving lower sash. A double-hung unit has two moving sashes. Compare the actual cleaning features, opening positions and specification.",
  },
  property: {
    title: "Plan around how the property is occupied",
    rows: [
      ["Use", "Describe year-round or intermittent occupation and room needs."],
      ["Access", "Confirm who can provide entry for assessment and work."],
      [
        "Delivery",
        "Review the exact route and any location-specific constraints.",
      ],
      [
        "Handover",
        "Arrange product demonstration and documentation for the responsible person.",
      ],
    ],
    links: [
      ["Glass and room comfort", "/windows/energy-efficiency/"],
      ["Installation sequence", "/installation/"],
    ],
    question: "Can a project be planned while I am away from the property?",
    answer:
      "Initial photographs and a schedule help, but access for required assessment, final measurement, work and handover must be agreed with the responsible person. Preferred dates need confirmation.",
  },
};
const briefs: Record<string, [string, string]> = {
  toronto: [
    "coordination",
    "For a Toronto project involving a managed property or a change to the exterior, settle the approval route before selecting a different colour or opening action. Then use the same opening schedule for the owner, installer and any surrounding trades so the final specification remains consistent.",
  ],
  etobicoke: [
    "design",
    "For an Etobicoke window group facing the same room, compare the view from the seating position as well as the outside elevation. A fixed centre and opening side sections can serve different functions, but the frame divisions and grille heights should be reviewed on one drawing.",
  ],
  "north-york": [
    "scope",
    "For a North York project that combines windows and an entrance, keep the two installation scopes visible. Window trim and a door threshold involve different finishing details. An itemized schedule helps you compare the combined project without losing the specific work around each opening.",
  ],
  scarborough: [
    "basement",
    "For a Scarborough basement proposal, photograph both the room and the exterior well before discussing a larger window. A ventilation upgrade and a room conversion are different starting points. The proposed use should guide the design and any review needed for the complete project.",
  ],
  thornhill: [
    "entry",
    "For a Thornhill entrance with glass beside the door, decide the privacy level for the leaf and sidelites together. A decorative pattern can have clear areas at eye level. Inspect the complete composition rather than choosing the central door and assuming the surrounding glass will match.",
  ],
  aurora: [
    "phased",
    "For an Aurora replacement completed over time, compare the first group with the windows that will stay. Keep a record of the existing and proposed sightlines so a later phase does not introduce an accidental change in grille spacing, finish or visible frame proportions.",
  ],
  "east-gwillimbury": [
    "coordination",
    "For an East Gwillimbury addition or renovation, identify which openings are new and which are replacements. The exterior can be coordinated while the installation details remain different. Resolve who supplies the final dimensions and who connects the frame to each wall assembly.",
  ],
  georgina: [
    "property",
    "For a Georgina property used on a changing schedule, explain which rooms are heated and occupied through the year. That helps frame the glass and ventilation discussion. Agree how assessment, delivery and the final operation walkthrough will be arranged at the actual address.",
  ],
  keswick: [
    "comfort",
    "For a Keswick seating area affected by glare, record when the direct sun reaches the glass and how the blinds are used. Compare solar control and visible light as separate decisions. The aim is to address the room’s discomfort while retaining the daylight you want.",
  ],
  "king-city": [
    "access",
    "For a King City feature window, compare the full frame dimensions with the route to the opening before finalizing a large pane. A broad view can be arranged in more than one way. Joining lines, glass handling and support should all be part of that design discussion.",
  ],
  maple: [
    "clearance",
    "For a Maple kitchen window, include the tap, counter and backsplash in the photograph. Try the operator at a similar reach in the showroom. A wider opening is not an improvement if the handle becomes difficult to use or the sash conflicts with the outside path.",
  ],
  markham: [
    "design",
    "For a Markham elevation with a pattern you want to retain, mark the grille lines and visible frame proportions on the existing photograph. Compare those elements with the proposed fixed and moving sections. A change in operation can be useful without abandoning the overall composition.",
  ],
  newmarket: [
    "phased",
    "For a Newmarket phased project, decide how the first order relates to a later patio or entrance change. A shared finish reference and complete opening list help keep those decisions connected. Confirm availability again when the later phase is ready to order.",
  ],
  "richmond-hill": [
    "comfort",
    "For a Richmond Hill room with a cold-feeling window, describe where you sit and what you notice when the sash is locked. A surface-comfort concern and an air-leakage symptom should be distinguished. That makes the glass, hardware and installation discussion more precise.",
  ],
  vaughan: [
    "scope",
    "For a Vaughan whole-home comparison, ask for optional upgrades to be shown against a stable baseline. If one alternative changes both the glazing and the replacement method, split those differences. Otherwise a larger total gives little information about which decision is driving the price.",
  ],
  woodbridge: [
    "entry",
    "For a Woodbridge front door, bring a hallway view as well as the exterior photograph. The inside finish, glass privacy and leaf swing can influence daily use more than the street view suggests. Include the surrounding window frames when comparing a new finish.",
  ],
  bradford: [
    "condition",
    "For a Bradford opening with staining or soft trim, describe whether the issue returns after rain or is connected to interior surface moisture. The assessment should establish the affected parts before deciding what can remain. Keep any repair allowance separate from the selected window price.",
  ],
  ajax: [
    "patio",
    "For an Ajax backyard entrance used for dining, test the ordinary opening while imagining carrying a tray and moving the screen. The full-open display position is only one use case. Compare the clear passage and threshold on the route your household will use most often.",
  ],
  courtice: [
    "phased",
    "For a Courtice renovation with several stages, record which openings belong to each stage and which visible details must stay consistent. If the first phase changes interior casing, note that choice for the remaining rooms. A written specification is more useful than an approximate remembered colour.",
  ],
  oshawa: [
    "scope",
    "For an Oshawa estimate, number the photographs and put one priority beside each opening. A fixed window chosen for the view and a bedroom unit chosen for ventilation should not receive an unexplained identical specification. The schedule lets you see those differences in the quote.",
  ],
  pickering: [
    "patio",
    "For a Pickering rear-elevation update, compare the patio frame and nearby window sections at the same time. Check visible divisions, glass appearance and the room’s furniture layout. A coordinated closed view still needs an opening arrangement that works when the backyard is in use.",
  ],
  uxbridge: [
    "access",
    "For an Uxbridge large-glass project, include height, proposed panel arrangement and delivery access with the initial width. Two designs spanning the same wall can have different panel weights and handling needs. Review those differences before settling on a fixed, stacking or folding arrangement.",
  ],
  whitby: [
    "hung",
    "For a Whitby vertical-window replacement, try the upper sash if upper ventilation is one of your goals. Also compare the meeting rail and the cleaning method. Choosing double hung for a feature you never use is a different decision from choosing it to solve a daily access problem.",
  ],
  peterborough: [
    "access",
    "For a Peterborough initial consultation, prepare enough information to identify both the product question and the installation question. Include the opening list, any proposed size changes and the exact location. Travel and final visit arrangements should be confirmed against that actual scope.",
  ],
  brampton: [
    "clearance",
    "For a Brampton room needing more privacy, choose the glass and blind mounting together with the opening action. An inward-moving sash uses space differently from a crank window. Compare the complete movement before placing shelves, coverings or furniture close to the new frame.",
  ],
  mississauga: [
    "coordination",
    "For a Mississauga project involving a condominium representative, obtain the required exterior specification before final selection. Keep product approval separate from scheduling access. Both need to be resolved, but approval of a colour does not automatically settle the installation route or finishing responsibility.",
  ],
  bolton: [
    "clearance",
    "For a Bolton patio-door change, draw the blind or curtain in both its open and closed positions. Include the handle and the screen route. A covering that fits the glazing width can still interfere with the daily opening if its mounting location is chosen too late.",
  ],
  caledon: [
    "access",
    "For a Caledon installation, photograph the route through gates and around landscaping as well as the opening itself. Discuss large panes before finalizing dimensions. The scope should distinguish ordinary fitting work from any special handling or access arrangement needed for the selected units.",
  ],
  georgetown: [
    "design",
    "For a Georgetown replacement intended to preserve existing trim, compare the proposed profile depth and visible framing separately. Retaining a familiar casing does not guarantee the glass area will stay the same. Ask for the finished proportions to be explained before approving the order.",
  ],
  "halton-hills": [
    "coordination",
    "For a Halton Hills project combining old and new walls, use one design schedule but retain installation details for each condition. A shared colour can unify the result while different jamb depths or exterior transitions require different finishing. Record those differences before the surrounding work begins.",
  ],
  orangeville: [
    "condition",
    "For an Orangeville opening that has become difficult to operate, note whether the resistance occurs throughout movement or only near closing. Include the existing frame condition in the photographs. Hardware symptoms should be assessed together with alignment rather than automatically treated as a glass-package problem.",
  ],
  burlington: [
    "patio",
    "For a Burlington patio transition, compare the threshold against the actual interior flooring and outside landing. A flush-looking inspiration image may use a different system or weather detail. Ask for the proposed section and the usable passage, including the screen, before approving the design.",
  ],
  milton: [
    "design",
    "For a Milton room with several openings, decide which pane should preserve the view and where ventilation is most useful. The whole group does not need to operate identically. Check that the selected mix coordinates in profile, grille pattern and glass appearance.",
  ],
  oakville: [
    "entry",
    "For an Oakville entrance replacement, look at the space available when the door is fully open. A wider leaf can affect a nearby wall, stair or furniture position. Sidelites may add daylight without widening the everyday leaf, but change the total assembly and installation scope.",
  ],
  brantford: [
    "phased",
    "For a Brantford project, rank condition concerns separately from design wishes. This makes it easier to define a first phase while preserving a plan for later rooms. Record any temporary visual mismatch you accept so it is understood before the first installation.",
  ],
  cambridge: [
    "entry",
    "For a Cambridge door selection, compare the glass insert with the hardware and panel proportions on one drawing. Adding a transom or sidelites changes the whole entrance. Include the surrounding frame and sill in the price comparison instead of comparing leaf prices alone.",
  ],
  guelph: [
    "design",
    "For a Guelph façade with different room functions behind it, compare a coordinated mix of fixed and opening units. Review the elevation for alignment and the interior for handle access. The same outward appearance can still require different decisions about ventilation and cleaning.",
  ],
  hamilton: [
    "condition",
    "For a Hamilton project where an opening has been altered previously, share any known history and visible repairs. The assessor needs to understand what is present before selecting a retained-frame approach. If you now want enlargement, treat that as a separate design and construction scope.",
  ],
  kitchener: [
    "coordination",
    "For a Kitchener renovation, settle the patio threshold and window jamb details before final flooring and casing decisions. The schedule should show who finishes each transition. That coordination is especially useful when the product installation and interior work are handled by different teams.",
  ],
  london: [
    "access",
    "For a London consultation, distinguish straightforward replacements from openings whose width, height or use will change. Provide the exact project location with the photographs and schedule. That allows the visit discussion to consider the scope and access together rather than relying on a city name alone.",
  ],
  "niagara-falls": [
    "comfort",
    "For a Niagara Falls glass comparison, give each room a primary goal such as daylight, glare control or comfort near the window. Compare the actual coating and whole-window record for those priorities. A single premium label does not explain how the proposed package addresses each room.",
  ],
  "st-catharines": [
    "condition",
    "For a St. Catharines replacement, ask the quote to identify retained frame components and the resulting glass area. Compare that with the full-frame alternative and its finishing scope. The method should follow the opening’s condition rather than simply the lowest initial total.",
  ],
  welland: [
    "basement",
    "For a Welland basement project, show the well and surrounding grade along with the inside opening. State whether the room’s use is changing. A larger product alone does not establish a suitable exterior route or resolve water accumulating outside the window.",
  ],
  barrie: [
    "comfort",
    "For a Barrie comfort assessment, record the symptom at each opening rather than applying one diagnosis to the whole house. A sticking sash, interior droplets and glare are different observations. The resulting quote should connect each proposed change with the condition being addressed.",
  ],
  bracebridge: [
    "access",
    "For a Bracebridge feature opening, review the delivery route before selecting the largest individual pane. Stairs, a deck or a tight turn can affect handling. Ask how the proposed glass divisions and support relate to that route and to the finished view.",
  ],
  collingwood: [
    "property",
    "For a Collingwood home used on a particular schedule, identify who can provide access and attend the final demonstration. Discuss the product decisions and installation sequence around that plan. An agreed contact and opening schedule help keep the work clear when the owner is not always on site.",
  ],
  innisfil: [
    "comfort",
    "For an Innisfil triple-glazing comparison, check the hardware and approved operating size along with the thermal values. Heavier glass can change the compatible configuration. Compare the same opening and finish so the price difference reflects the upgrade you actually want to evaluate.",
  ],
  kawartha: [
    "patio",
    "For a Kawartha backyard opening, describe the route between the room and the outdoor space and provide the exact property address. Compare the everyday passage before the fully open arrangement. Regional coverage does not by itself establish the access conditions or the final visit schedule.",
  ],
  muskoka: [
    "property",
    "For a Muskoka property, describe its actual use rather than assuming the same specification for every seasonal or year-round space. Include heating, occupation and delivery access in the discussion. Large glazing and patio systems should be coordinated with the specific opening and handling route.",
  ],
  orillia: [
    "design",
    "For an Orillia view-focused room, compare a broad fixed pane with a coordinated fixed-and-opening group. Decide where air is needed and where frame divisions would interrupt the preferred view. The final layout should serve both the scenery and the room’s daily use.",
  ],
  belleville: [
    "access",
    "For a Belleville opening schedule, include both windows and doors and mark any planned enlargement clearly. Initial photographs help identify the questions for the visit, while final measurements establish the order. Confirm the location, access and proposed work together when arranging the assessment.",
  ],
};
export function deepenCities(pages: ContentPage[]) {
  for (const p of pages) {
    const slug = p.path.split("/").filter(Boolean).at(-1)!;
    const brief = briefs[slug];
    if (!brief) throw new Error(`Missing city depth: ${slug}`);
    const t = topics[brief[0]];
    const genericProducts = p.sections.find((s) =>
      s.title.startsWith("Window and door choices for"),
    );
    if (genericProducts) delete genericProducts.paragraphs;
    p.sections.splice(
      2,
      0,
      {
        title: `A practical planning scenario for ${p.city}`,
        paragraphs: [brief[1]],
      },
      {
        title: t.title,
        table: {
          headers: ["Planning item", "What to establish"],
          rows: t.rows,
        },
        links: t.links.map(([label, href]) => ({ label, href })),
      },
    );
    p.faq = [...(p.faq ?? []), [t.question, t.answer]];
    p.related = [...new Set([...t.links.map((x) => x[1]), ...p.related])];
  }
}
