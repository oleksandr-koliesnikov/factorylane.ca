import type { ContentPage, ContentSection } from "../types";
const extra: Record<string, ContentSection[]> = {
  "/blinds/": [
    {
      title: "Choose light control before choosing the fabric",
      paragraphs: [
        "Start with the room’s use through the day. A living area may need glare control while preserving daylight; a bedroom may prioritize darkness and privacy. Fabric appearance in daylight does not establish how much a lit room can be seen from outside after dark.",
        "A single roll blind uses one roller arrangement. The fabric, operating method and mounting position still need to be selected. The name alone does not establish blackout performance, motorization, the number of gifted blinds or installation inclusion.",
      ],
    },
    {
      title: "Inside mount or outside mount?",
      table: {
        headers: ["Detail", "Inside mount", "Outside mount"],
        rows: [
          [
            "Location",
            "Fits within a suitable recess.",
            "Fixes beyond the recess on an approved mounting surface.",
          ],
          [
            "Measurement",
            "Recess dimensions and usable depth are essential.",
            "Coverage and mounting position need to be specified.",
          ],
          [
            "Clearance",
            "Check handle, sash and bracket space.",
            "Check nearby trim, walls and opening movement.",
          ],
          [
            "Light at edges",
            "Review the gaps required for the actual blind.",
            "Wider coverage may help, but does not establish a universal blackout result.",
          ],
          [
            "Appearance",
            "Keeps surrounding trim more visible.",
            "Can cover part of the trim and alter the visual proportions.",
          ],
        ],
      },
    },
    {
      title: "Coordinate with the moving window or door",
      paragraphs: [
        "Tilt-and-turn windows and inward-opening doors need space for their full movement, not only the closed handle. A blind that looks well fitted when the window is shut can block its turn mode. Try the complete movement before approving the mounting position.",
        "For patio doors, consider the everyday walking route, panel stack and screen as well as the glass width. A covering should remain practical when people are moving between the room and backyard. Confirm the available operating arrangements and follow the supplied safety instructions.",
      ],
    },
    {
      title: "The three-window offer",
      paragraphs: [
        "Purchase three or more windows and receive single roll blinds as a gift. The eligible products, gift quantity, final dimensions, colour choices and installation terms must be stated in the written offer before the order is confirmed.",
      ],
      links: [
        { label: "See the free blinds offer", href: "/offers/" },
        {
          label: "Check window and blind compatibility",
          href: "/windows/tilt-and-turn/",
        },
      ],
    },
  ],
  "/gutters/": [
    {
      title: "Assess the complete roof-edge drainage route",
      paragraphs: [
        "An overflow at one corner can involve the gutter section, an outlet, a downspout or the discharge route. Photograph the system from the ground during or after rain when it is safe to do so. Note whether water crosses the edge, escapes a joint or collects near the building.",
        "A useful scope describes more than replacement length. It should identify the roof-edge sections, corners, outlets, downspouts, mounting surfaces and discharge connections that are included. Existing fascia or other damaged surrounding material needs a separate condition assessment.",
      ],
    },
    {
      title: "What belongs in a gutter proposal?",
      table: {
        headers: ["Element", "Decision to document"],
        rows: [
          [
            "Material and profile",
            "The actual proposed product, size and finish.",
          ],
          ["Roof collection", "Which roof areas feed the included sections."],
          ["Outlets and downspouts", "Number, placement and complete route."],
          [
            "Mounting",
            "Existing surface condition and required support or repairs.",
          ],
          [
            "Discharge",
            "Where water is directed and any project-specific requirements.",
          ],
          [
            "Access and cleanup",
            "Working route, protection and removal of old materials.",
          ],
        ],
      },
    },
    {
      title: "Compare options by the problem they solve",
      paragraphs: [
        "A leaf-protection option, if offered, should be evaluated against surrounding debris, cleaning access and the selected gutter system. It does not remove the need to review outlets and discharge. Product capacity and compatibility must come from the specified system rather than a generic claim.",
        "The final Factory Lane range and installation offering are being confirmed. Keep roof drainage separate from window replacement in the estimate so neither scope is hidden inside a single unexplained total.",
      ],
    },
  ],
  "/gazebos/": [
    {
      title: "Define the outdoor space you want to use",
      paragraphs: [
        "A dining shelter, a quiet sitting area and a structure intended to take screens or glazing have different requirements. Begin with the furniture layout and the route from the house. The usable area inside posts can differ from the overall roof footprint.",
        "Distinguish a gazebo with its specified roof from a pergola or another open-roof structure. Those labels should not replace drawings of the actual product. Confirm whether optional screens, curtains or enclosure panels are part of the designed system.",
      ],
    },
    {
      title: "Plan the site and structure together",
      table: {
        headers: ["Project detail", "Information to review"],
        rows: [
          ["Footprint", "Roof size, post positions and useful internal space."],
          [
            "Support",
            "The required foundation or anchoring arrangement for the selected structure.",
          ],
          [
            "Location",
            "Property constraints, overhead conditions and relevant approvals.",
          ],
          [
            "Weather design",
            "Applicable structural documentation for the product and site.",
          ],
          [
            "Water management",
            "Roof drainage and its effect on the surrounding yard.",
          ],
          ["Delivery", "Access width, storage and installation route."],
        ],
      },
    },
    {
      title: "Coordinate the backyard as one project",
      paragraphs: [
        "If you also plan a new patio opening, compare the door’s passage and threshold with the path to the outdoor structure. Furniture delivery and daily access should work in both spaces. A larger glazed door and a gazebo remain separate product and installation scopes.",
        "Do not assume an existing deck or pad is suitable support simply because the structure fits its surface. The selected system, anchoring and site conditions need review before ordering. Models and final installation availability will be confirmed for the project.",
      ],
      links: [{ label: "Explore patio door systems", href: "/doors/patio/" }],
    },
  ],
  "/glass-walls/": [
    {
      title: "Choose between fixed glazing and an opening system",
      paragraphs: [
        "A fixed glass wall prioritizes the view and light. A movable system adds tracks or hinges, locks, moving clearances and an opening sequence. Both can look similar when closed, so the first design decision is whether and how the wall should open.",
        "Establish the heating boundary. An interior partition, a sheltered seasonal enclosure and an exterior wall to a heated room need different specifications. Frame thermal design and weather-management requirements cannot be inferred from an architectural photograph.",
      ],
    },
    {
      title: "The specification for a larger glazed assembly",
      table: {
        headers: ["Area", "What to establish"],
        rows: [
          ["Structure", "Span, support and the approved connection details."],
          [
            "Glass",
            "Dimensions, weight and the required safety/performance specification.",
          ],
          ["Frames", "Sightlines, joining details and thermal construction."],
          ["Movement", "Fixed, sliding, stacking or folding arrangement."],
          ["Threshold", "Floor transition, weather exposure and drainage."],
          [
            "Installation",
            "Handling route, lifting plan and coordination with other trades.",
          ],
        ],
      },
    },
    {
      title: "Preserve a practical everyday entrance",
      paragraphs: [
        "A broad opening can be impressive when every panel is moved, but most use may be through a smaller daily access route. Test that movement, the lock and the screen before choosing the system. The parked panels should not obstruct furniture or the outside path.",
        "The final product drawing should show both closed and fully open positions. Request the applicable performance records for the actual size and configuration, then connect the supply scope to the structural and finishing work.",
      ],
      links: [
        { label: "Stacking patio systems", href: "/doors/patio/stacking/" },
        { label: "Bifold patio systems", href: "/doors/patio/bifold/" },
      ],
    },
  ],
  "/porch-enclosures/": [
    {
      title: "Decide how the enclosed porch will be used",
      paragraphs: [
        "A sheltered entrance buffer is different from a room intended for year-round conditioned use. Describe whether the aim is to reduce direct weather at the entry, create a sitting space or change the building’s occupied area. That decision guides the required design review.",
        "The existing porch floor, roof and supports need assessment along with the new walls and doors. Enclosing the perimeter can change ventilation, water exposure and the way the main entrance is approached. Do not choose panels before checking those connections.",
      ],
    },
    {
      title: "Review the enclosure as a complete assembly",
      table: {
        headers: ["Part", "Planning question"],
        rows: [
          [
            "Base",
            "What supports the enclosure and how is water managed at the floor?",
          ],
          [
            "Roof connection",
            "How will the new assembly meet the existing overhead construction?",
          ],
          [
            "Glazing",
            "Is the system suitable for the intended seasonal or conditioned use?",
          ],
          [
            "Ventilation",
            "Which sections open and how are screens integrated?",
          ],
          [
            "Entrance",
            "Do both the enclosure door and main door have usable clearances?",
          ],
          [
            "Approvals",
            "Which project-specific design or authorization steps apply?",
          ],
        ],
      },
    },
    {
      title: "Make the circulation work",
      paragraphs: [
        "Draw the route from the outside step through the enclosure to the primary door. Include both door swings, handles and any furniture or storage. The enclosure should not create a difficult sequence of doors in a narrow space.",
        "Ask for the exact system and the full installation scope before comparing prices. Floor repairs, roof work, drainage and changes to the main entrance should be identified separately from the supplied enclosure panels.",
      ],
      links: [
        {
          label: "Plan exterior door installation",
          href: "/installation/doors/",
        },
      ],
    },
  ],
};
export function deepenExtensions(pages: ContentPage[]) {
  for (const p of pages) {
    if (extra[p.path]) p.sections.push(...extra[p.path]);
  }
}
