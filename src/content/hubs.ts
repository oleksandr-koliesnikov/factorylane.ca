import type { ContentPage } from "./types";
import { windowPages, windowTechnologyPages } from "./windows";
import { doorPages } from "./doors";
import { comparisonPages } from "./guides";
import { resourcePages } from "./resources";
import areas from "./areas.json";
const links = (pages: ContentPage[]) =>
  pages.map((p) => ({ label: p.title, href: p.path }));
const hub = (
  path: string,
  title: string,
  intro: string,
  parent = "/",
  image = "windows",
): ContentPage => ({
  path,
  title,
  description: intro,
  eyebrow: "EXPLORE / FACTORY LANE",
  intro,
  parent,
  kind: "hub",
  image,
  imageAlt: "Product display in the showroom",
  sections: [],
  related: [],
});
const windows = hub(
  "/windows/",
  "Windows for the way you live",
  "Compare window styles, profiles and glass for your home. Start with the opening action and the room, then build a specification you can understand.",
);
windows.sections = [
  {
    title: "Choose your opening style",
    paragraphs: [
      "Each type has a different relationship with the room. Some open outward, others slide or tilt, and fixed glass puts the view first. Consider reach, exterior clearance, cleaning and where fresh air is needed.",
    ],
    links: links(windowPages),
  },
  {
    title: "Frame, profile and glass",
    paragraphs: [
      "Once the opening type is clear, compare the visible frame and the glass package. A slimmer sightline changes the look; the complete performance rating and approved dimensions determine which configurations fit.",
    ],
    links: links(
      windowTechnologyPages.filter(
        (p) => p.path.includes("materials/") || p.path.includes("glass/"),
      ),
    ).concat([
      { label: "Window series and profiles", href: "/windows/series/" },
      {
        label: "Energy performance explained",
        href: "/windows/energy-efficiency/",
      },
    ]),
  },
  {
    title: "Match the project, not just the product",
    links: links(
      windowTechnologyPages.filter((p) =>
        ["egress", "new-construction", "low-rise-condos"].some((s) =>
          p.path.includes(s),
        ),
      ),
    ),
  },
  {
    title: "From selection to a complete quote",
    paragraphs: [
      "The existing opening and installation method affect the final scope. Review measurements, configuration, glass, finish, screens, removal, installation and finishing in the written quote.",
    ],
    links: [
      { label: "Window price ranges", href: "/pricing/windows/" },
      { label: "Compare window options", href: "/compare/" },
      {
        label: "Window installation",
        href: "/installation/window-replacement/",
      },
    ],
  },
];
windows.related = [
  "/showroom/",
  "/offers/",
  "/pricing/windows/",
  "/service-areas/",
];
const doors = hub(
  "/doors/",
  "Doors that bring it all together",
  "Explore entry doors, patio systems and design choices for the opening between your home and the outside. Compare appearance and everyday operation together.",
  "/",
  "entry-doors",
);
doors.sections = [
  {
    title: "Your front entrance",
    paragraphs: [
      "The slab, glass, sidelites, transom and threshold form one entry system. Begin with the light, privacy and style you want, then compare materials and finishes.",
    ],
    links: [
      { label: "Entry door options", href: "/doors/entry/" },
      { label: "Steel entry doors", href: "/doors/entry/steel/" },
      { label: "Fiberglass entry doors", href: "/doors/entry/fiberglass/" },
    ],
  },
  {
    title: "Open to the backyard",
    paragraphs: [
      "Sliding, hinged and folding panels use the room differently. Compare the clear passage, screen, threshold and where the panels move when open.",
    ],
    links: links(doorPages.filter((p) => p.path.includes("/patio/"))),
  },
  {
    title: "More door systems",
    links: links(
      doorPages.filter(
        (p) => !p.path.includes("/patio/") && !p.path.includes("/entry/"),
      ),
    ),
  },
  {
    title: "Choose the details with confidence",
    links: [
      { label: "Door design catalogue", href: "/catalog/doors-catalog/" },
      { label: "Door pricing", href: "/pricing/doors/" },
      { label: "Door installation", href: "/installation/doors/" },
    ],
  },
];
doors.related = [
  "/showroom/",
  "/compare/steel-vs-fiberglass/",
  "/pricing/doors/",
  "/service-areas/",
];
const entry = hub(
  "/doors/entry/",
  "Entry doors",
  "Create a considered entrance with steel or fiberglass doors, glass and coordinated surrounding details. Compare the complete assembly before choosing.",
  "/doors/",
  "entry-doors",
);
entry.sections = [
  {
    title: "Start with the material and finish",
    links: links(doorPages.filter((p) => p.path.includes("/entry/"))),
  },
  {
    title: "Light, privacy and proportion",
    paragraphs: [
      "Decorative glass, sidelites and transoms can change the whole entrance. Compare the pattern and sightline from inside and outside, and consider the view through the glass after dark when interior lights are on.",
      "Panel proportions, colour, handle finish and trim should work together. A showroom sample helps make those decisions more tangible than a small image.",
    ],
    links: [
      { label: "Browse entry styles", href: "/catalog/doors-catalog/" },
      { label: "Steel vs fiberglass", href: "/compare/steel-vs-fiberglass/" },
    ],
  },
  {
    title: "Confirm the installed scope",
    paragraphs: [
      "The frame, sill, lock preparation, sealing and finishing should be described in the quote. Changes to the opening or repairs to existing framing are separate items that need an assessment.",
    ],
    links: [
      { label: "Entry door pricing", href: "/pricing/doors/" },
      { label: "Door installation", href: "/installation/doors/" },
    ],
  },
];
entry.related = [
  "/doors/entry/steel/",
  "/doors/entry/fiberglass/",
  "/showroom/",
];
const patio = hub(
  "/doors/patio/",
  "Patio doors & sliding systems",
  "Bring the backyard into everyday life. Compare sliding, hinged, stacking and folding systems around your opening, furniture and outdoor access.",
  "/doors/",
  "patio-doors",
);
patio.sections = [
  {
    title: "Choose how the opening moves",
    links: links(doorPages.filter((p) => p.path.includes("/patio/"))),
  },
  {
    title: "The everyday details",
    paragraphs: [
      "Start with the route through the room. Decide how much clear passage you need with one panel in use, where screens travel and whether a swinging or folding leaf would interfere with furniture.",
      "Check threshold and floor levels early. Drainage, support and weather exposure need to be addressed with the specific system; a photo of a low sill is not a complete installation detail.",
    ],
  },
  {
    title: "Plan the opening as a project",
    paragraphs: [
      "A larger opening can require structural changes and a different delivery plan. Keep product selection, support, handling, installation and finishing in the same discussion.",
    ],
    links: [
      { label: "Patio door planning ranges", href: "/pricing/doors/" },
      {
        label: "Sliding vs garden doors",
        href: "/compare/sliding-vs-garden-doors/",
      },
      { label: "Opening changes", href: "/installation/cut-out/" },
    ],
  },
];
patio.related = [
  "/doors/patio/sliding/",
  "/doors/patio/bifold/",
  "/doors/patio/stacking/",
  "/showroom/",
];
const compare = hub(
  "/compare/",
  "Compare your window & door options",
  "Clear comparisons for practical decisions: opening styles, glass, profiles, materials and installation methods. Understand the differences before comparing prices.",
);
compare.sections = [
  {
    title: "Compare by the question you are asking",
    links: links(comparisonPages),
  },
  {
    title: "Use an equivalent scope",
    paragraphs: [
      "A useful comparison keeps dimensions, glass and installation scope aligned. If several things change at once, it is difficult to tell which choice caused the difference in price or appearance.",
      "Bring your shortlisted options to the showroom and try the operation. The home estimate is where those choices are connected to the existing opening.",
    ],
  },
];
compare.related = ["/windows/", "/doors/", "/pricing/", "/showroom/"];
const resources = hub(
  "/resources/",
  "Helpful information for your next step",
  "Understand product terms, care, comparison and the buying process. These practical reference guides support your project; the blog will be developed separately.",
  "/",
  "profile",
);
resources.sections = [
  { title: "Planning and care guides", links: links(resourcePages) },
  {
    title: "See and compare",
    links: [
      { label: "Product comparisons", href: "/compare/" },
      { label: "Video library", href: "/videos/" },
      { label: "Window price ranges", href: "/pricing/windows/" },
      { label: "Door price ranges", href: "/pricing/doors/" },
    ],
  },
  {
    title: "The Factory Lane blog",
    paragraphs: [
      "Our blog is being prepared. No articles are published yet. In the meantime, use the product and planning pages to answer questions about your project.",
    ],
    links: [{ label: "Blog", href: "/blog/" }],
  },
];
resources.related = [
  "/resources/buying-guide/",
  "/compare/",
  "/videos/",
  "/showroom/",
];
const service = hub(
  "/service-areas/",
  "Window & door service areas",
  "Factory Lane serves Toronto, the GTA and the confirmed surrounding service regions. Find your area, then share the project address to confirm meeting and delivery arrangements.",
);
service.sections = [
  ...Array.from(new Set(areas.map((a) => a.group))).map((group) => ({
    title: group,
    links: areas
      .filter((a) => a.group === group)
      .map((a) => ({ label: a.name, href: a.path })),
  })),
  {
    title: "One showroom, a wider service area",
    paragraphs: [
      "A city page describes where we discuss projects; it does not represent a separate office or showroom. Confirm the current showroom details before travelling.",
      "Project size, exact location, access and visit timing are reviewed when arranging an estimate. Inclusion in the service area does not promise an immediate appointment slot.",
    ],
  },
];
service.related = ["/showroom/", "/estimate/", "/windows/", "/doors/"];
const pricing = hub(
  "/pricing/",
  "Window & door pricing",
  "Understand planning ranges and the details behind a complete quote. Product, configuration and installation method need to be compared together.",
);
pricing.sections = [
  {
    title: "Choose a price guide",
    links: [
      { label: "Window replacement cost", href: "/pricing/windows/" },
      { label: "Door cost and installation ranges", href: "/pricing/doors/" },
    ],
  },
  {
    title: "A complete quote is more than a unit price",
    paragraphs: [
      "Window and door dimensions, material, glass and finish change the product price. Removal, opening condition, installation and finishing define the remaining scope.",
      "The guides contain planning references. Their size groups, taxes and final inclusions must be confirmed for your selected configuration; they are not an order price or a guaranteed total.",
    ],
  },
];
pricing.related = ["/offers/", "/installation/", "/financing/", "/estimate/"];
const priceWindows = hub(
  "/pricing/windows/",
  "Window replacement cost",
  "Compare window price ranges by opening type and size group. Use the calculator as a planning reference, then confirm measurements and the complete installed scope.",
  "/pricing/",
);
priceWindows.sections = [
  {
    title: "How to read these ranges",
    paragraphs: [
      "All figures are very approximate product prices in Canadian dollars. Installation is excluded and quoted separately. Size-group boundaries, taxes and exact inclusions require confirmation.",
      "The large picture-window reference is under review because its range is inconsistent with the neighbouring size groups. It is deliberately excluded from calculator totals until verified.",
    ],
  },
  {
    title: "What changes the quote?",
    bullets: [
      "Opening dimensions and number of operating sections.",
      "Double-pane or triple-pane glass and compatible hardware.",
      "Colour, privacy glass, grilles, screens and trim.",
      "Retained-frame or full-frame replacement.",
      "Repairs, structural changes, access and finishing.",
    ],
  },
  {
    title: "From a reference to your project",
    paragraphs: [
      "An estimate at home allows the opening to be assessed and the scope to be itemized. Ask for all selected options and installation work to appear on the written quote before comparing totals.",
    ],
    links: [
      { label: "Request a free home estimate", href: "/estimate/" },
      {
        label: "Compare installation methods",
        href: "/compare/retrofit-vs-full-frame/",
      },
    ],
  },
];
priceWindows.related = [
  "/windows/",
  "/offers/",
  "/pricing/doors/",
  "/installation/window-replacement/",
];
const priceDoors = hub(
  "/pricing/doors/",
  "Exterior & patio door cost",
  "Compare very approximate product-only prices for entry and patio doors. Installation is excluded and quoted separately for your opening.",
  "/pricing/",
  "entry-doors",
);
priceDoors.sections = [
  {
    title: "Compare the same assembly",
    paragraphs: [
      "All figures are very approximate product prices in Canadian dollars, excluding installation. Installation is quoted separately. Confirm dimensions, glass, model choices, inclusions and taxes in your written quote.",
      "A door slab and a complete entry with sidelites or a transom are different assemblies. Glazing, finish, hardware, opening changes and surrounding repairs can materially change the scope.",
    ],
  },
  {
    title: "Review the complete entrance or patio opening",
    bullets: [
      "Number of leaves or panels and which ones operate.",
      "Material, glass, sidelites and transom.",
      "Frame, threshold, hardware and screen selection.",
      "Removal, support, sealing and finishing.",
      "Any structural or access work beyond a standard replacement.",
    ],
  },
];
priceDoors.related = [
  "/doors/entry/",
  "/doors/patio/",
  "/compare/steel-vs-fiberglass/",
  "/installation/doors/",
];
const series = hub(
  "/windows/series/",
  "Window series & profiles",
  "Compare classic and slim profile proportions, then confirm the product specification that applies to your selected window style.",
  "/windows/",
  "profile",
);
series.sections = [
  {
    title: "Two design directions",
    links: [
      { label: "Classic profile", href: "/windows/series/classic/" },
      { label: "Slim profile", href: "/windows/series/slim-profile/" },
    ],
  },
  {
    title: "Depth and sightline are different",
    paragraphs: [
      "Frame depth describes a dimension through the assembly. Sightline describes the visible framing around the glass. A slimmer visual design does not mean that every frame dimension is smaller.",
      "Compare equal-sized samples, match the glass configuration and ask for the approved product drawing. Public series names and exact Factory Lane product identifiers are pending confirmation.",
    ],
  },
];
series.related = [
  "/compare/classic-vs-slim-profile/",
  "/windows/",
  "/windows/energy-efficiency/",
  "/showroom/",
];
const seriesPages = ["classic", "slim-profile"].map((slug) => {
  const slim = slug === "slim-profile";
  const p = hub(
    `/windows/series/${slug}/`,
    slim ? "Slim-profile windows" : "Classic-profile windows",
    slim
      ? "Explore a flatter, slimmer visual profile that places emphasis on the glass and the view. Confirm the actual sightline and approved configuration on the product sample."
      : "Explore a more defined profile with traditional frame detailing. Compare the visible proportions, trim and opening style as one design.",
    "/windows/series/",
    "profile",
  );
  p.kind = "product";
  p.review =
    "Public series name, exact model identifiers and applicable technical documents need owner approval.";
  p.sections = [
    {
      title: "A design direction, not just a name",
      paragraphs: [
        slim
          ? "A slim appearance can suit a design where minimal framing is important. Compare glass area at equal outside dimensions, then examine the frame and sash details from both sides."
          : "A classic profile can coordinate with established trim and grille arrangements. Review the shape of the moulding, exterior brickmould and alignment with adjacent fixed or opening units.",
        "The researched frame references are 3¼ inches for the classic design and 2⅞ inches for the slimmer profile. These dimensions require product-level confirmation and should not be interpreted as universal visible sightline measurements.",
      ],
    },
    {
      title: "Check the selected configuration",
      bullets: [
        "Opening style and approved dimensions.",
        "Double- or triple-pane glass compatibility.",
        "Operator, hinges and locking components.",
        "Colour, grille, screen and trim options.",
        "Applicable performance and warranty documents.",
      ],
    },
    {
      title: "See the profile and the finished window",
      paragraphs: [
        "A cross-section reveals the construction, while a full display shows the proportions. Use both before deciding. The home estimate then confirms how the selected assembly will meet the existing opening.",
      ],
      links: [
        {
          label: "Compare classic and slim profiles",
          href: "/compare/classic-vs-slim-profile/",
        },
        { label: "View window types", href: "/windows/" },
      ],
    },
  ];
  p.related = [
    "/windows/series/",
    "/windows/casement/",
    "/windows/awning/",
    "/showroom/",
  ];
  return p;
});
const intermediate = [
  [
    "/windows/materials/",
    "Window frame materials",
    "Compare vinyl and aluminum as complete window systems. Consider the profile, thermal design and installation as well as the material.",
    "/windows/",
    windowTechnologyPages.filter((p) => p.path.includes("/materials/")),
  ],
  [
    "/windows/glass/",
    "Window glass options",
    "Understand panes, coatings and gas fills as parts of a sealed glass package. Compare complete window ratings and compatible dimensions.",
    "/windows/",
    windowTechnologyPages.filter((p) => p.path.includes("/glass/")),
  ],
  [
    "/doors/brands/",
    "Door manufacturer collections",
    "Use the manufacturer and collection name to identify the specific product, glass and applicable documents. Final supply and model availability must be confirmed.",
    "/doors/",
    doorPages.filter((p) => p.path.includes("/brands/")),
  ],
] as const;
export const hubPages: ContentPage[] = [
  windows,
  doors,
  entry,
  patio,
  compare,
  resources,
  service,
  pricing,
  priceWindows,
  priceDoors,
  series,
  ...seriesPages,
  ...intermediate.map(([path, title, intro, parent, pages]) => ({
    ...hub(path, title, intro, parent, "profile"),
    sections: [{ title: "Explore the options", links: links([...pages]) }],
    related: pages.map((p) => p.path),
  })),
];
