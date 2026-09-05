import type { ContentPage } from "./types";
const styles: Record<string, [string, string]> = {
  traditional: [
    "Traditional",
    "Raised or defined panels, balanced proportions and decorative glass can create a more traditional entrance. Coordinate grille patterns and trim rather than judging the door leaf alone.",
  ],
  modern: [
    "Modern",
    "A modern direction often begins with restrained panel detail, clean lines and a considered glass layout. Compare handle proportions, privacy and the relationship between the door and adjacent glazing.",
  ],
  contemporary: [
    "Contemporary",
    "A contemporary entrance can combine a simple panel with an expressive glass or hardware choice. Focus on the complete assembly and how it relates to the current home, rather than treating the style name as a fixed product specification.",
  ],
  craftsman: [
    "Craftsman",
    "A Craftsman-inspired direction typically emphasizes distinct panel proportions and an upper glass arrangement. Review the actual design drawing, glass privacy and the relationship to the surrounding trim.",
  ],
  shaped: [
    "Shaped",
    "A shaped or arched opening requires an exact drawing and measurement process. Shape is a configuration requirement as well as a design choice, and available models must be checked against the existing structure.",
  ],
};
export const catalogPages: ContentPage[] = [];
for (const material of ["steel", "fiberglass"]) {
  for (const style of [
    "",
    ...Object.keys(styles).filter(
      (s) => s !== "shaped" || material === "fiberglass",
    ),
  ]) {
    const display = material === "steel" ? "Steel" : "Fiberglass";
    const label = style ? styles[style][0] + " " + material : display;
    catalogPages.push({
      path: `/catalog/${material}${style ? "-" + style : ""}-doors/`,
      title: `${label} door designs`,
      description: `Explore ${label.toLowerCase()} door design considerations, glass, privacy and finishing. Confirm the selected model and configuration in the showroom.`,
      eyebrow: "DOOR CATALOGUE / FIND YOUR DIRECTION",
      intro: style
        ? styles[style][1]
        : `Compare ${material} door design directions before selecting a model. Panel style, glass, sidelites, transom and finish determine the complete entrance.`,
      parent: "/catalog/doors-catalog/",
      kind: "catalog",
      image: "entry-doors",
      imageAlt:
        "Door display used to discuss design; not a confirmed model in this collection",
      review:
        "Factory Lane model identifiers, collection images and exact configurations are pending matching to the approved catalogue.",
      sections: [
        {
          title: "From style to a specific door",
          paragraphs: [
            `Use ${label.toLowerCase()} as the start of the design conversation, not a substitute for an exact model. Compare the door drawing, panel dimensions and glazing arrangement at the size proposed for your opening.`,
            `The ${material === "steel" ? "steel skin and finish" : "fiberglass skin, texture and finish"} should be reviewed with the frame, threshold, weather seals and hardware. A matching name does not establish that two quoted assemblies have the same components.`,
          ],
        },
        {
          title: "Build the entrance around your priorities",
          bullets: [
            "Privacy and the amount of daylight you want.",
            "Panel proportions and glass placement.",
            "Sidelites, transom and overall opening dimensions.",
            "Interior and exterior finish, handle and lock selection.",
            "Installation, surrounding trim and approved warranty documents.",
          ],
        },
        {
          title: "See the details in person",
          paragraphs: [
            "Bring a design reference and a photograph of the existing entrance. We can discuss the direction in the showroom, then confirm model availability and the measured configuration before ordering.",
            "Individual model cards and downloadable manufacturer documents will be added after matching to the actual products. The preview does not invent model numbers or present display photographs as verified catalogue matches.",
          ],
          links: [
            {
              label: `${display} entry doors`,
              href: `/doors/entry/${material}/`,
            },
            { label: "Door price guide", href: "/pricing/doors/" },
            {
              label: "Book a showroom appointment",
              href: "/appointments/showroom/",
            },
          ],
        },
      ],
      related: [
        `/doors/entry/${material}/`,
        "/compare/steel-vs-fiberglass/",
        "/pricing/doors/",
        "/catalog/doors-catalog/",
      ],
    });
  }
}
catalogPages.unshift({
  path: "/catalog/doors-catalog/",
  title: "Entry door design catalogue",
  description:
    "Explore steel and fiberglass entry door design directions, including traditional, modern, contemporary and Craftsman styles.",
  eyebrow: "THE CATALOGUE / MAKE IT YOURS",
  intro:
    "Begin with the design direction, then choose the exact door, glass and surrounding assembly. Explore the collections below or use the filters to narrow your starting point.",
  parent: "/doors/entry/",
  kind: "catalog",
  image: "entry-doors",
  sections: [
    {
      title: "Steel door design directions",
      links: catalogPages
        .filter((p) => p.path.includes("/steel"))
        .map((p) => ({ label: p.title, href: p.path })),
    },
    {
      title: "Fiberglass door design directions",
      links: catalogPages
        .filter((p) => p.path.includes("/fiberglass"))
        .map((p) => ({ label: p.title, href: p.path })),
    },
    {
      title: "A design direction is not a model number",
      paragraphs: [
        "The style collections help organize the conversation. Exact model cards, product images and approved combinations will be connected to the confirmed inventory. Until then, no display image is claimed to represent a specific verified catalogue SKU.",
        "A complete entrance quote includes the configuration around the door as well as the leaf itself. Compare glass, sidelites, transom, hardware and installation on an equivalent basis.",
      ],
    },
  ],
  related: [
    "/doors/entry/steel/",
    "/doors/entry/fiberglass/",
    "/pricing/doors/",
    "/showroom/",
  ],
});
