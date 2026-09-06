import type { ContentPage, ContentSection } from "../types";
type Detail = {
  title: string;
  paragraphs: string[];
  rows: string[][];
  faq: [string, string][];
  links: string[];
};
const details: Record<string, Detail> = {
  "/windows/materials/vinyl/": {
    title: "What is inside a vinyl frame?",
    paragraphs: [
      "A vinyl window is built from shaped PVC profiles. Internal chambers, welded corners, reinforcement where required and the paths that carry water out of the frame are all part of the construction. The number of chambers alone does not rank a window: the complete profile, glazing and operating design need to work together.",
      "Inspect the corner, the glass-to-frame transition and the seals on a sample. Ask how the frame is supported at the proposed size, especially with heavier glazing or a dark exterior finish. Reinforcement and approved dimensions are configuration questions, not details to infer from the material name.",
      "A replacement can change the visible glass even if the wall opening remains the same. Compare a drawing of the proposed frame and sash with the existing window, including the retained frame if you are considering an insert installation.",
    ],
    rows: [
      [
        "Profile",
        "Compare frame depth, visible sightline, chamber layout and corner construction.",
      ],
      [
        "Reinforcement",
        "Confirm where it is required for the selected size, colour and glass weight.",
      ],
      [
        "Finish",
        "Review interior and exterior colours separately and use the approved care instructions.",
      ],
      [
        "Water management",
        "Identify drainage outlets and keep the installation and trim clear of them.",
      ],
      [
        "Glazing",
        "Match the insulated glass unit, glazing support and seals to the selected profile.",
      ],
    ],
    faq: [
      [
        "Does a thicker-looking frame always perform better?",
        "No. Visible width is not a substitute for the tested performance of the complete configuration. It also affects the amount of visible glass.",
      ],
      [
        "Can vinyl windows have different colours inside and outside?",
        "Some systems offer separate finishes. Confirm the exact combination, colour sample, dimensional limits and finish warranty for the selected series.",
      ],
      [
        "Should I choose the same profile for every opening?",
        "A coordinated profile can help appearance, but size and operating requirements may call for different configurations. Review adjoining units together.",
      ],
    ],
    links: ["/windows/series/", "/compare/vinyl-vs-aluminum/"],
  },
  "/windows/materials/aluminum/": {
    title: "Thermal breaks, sightlines and larger openings",
    paragraphs: [
      "Aluminum is a conductive material, so an exterior frame serving a heated room needs a carefully designed thermal path. A thermal break separates portions of the metal profile; its construction is part of the system specification. Do not assume a slender architectural frame has the same thermal performance as another slender frame.",
      "Large glass and narrow sightlines are design goals that must be reconciled with support, deflection limits and glazing capacity. Ask for the actual frame section and permitted dimensions. A small display is useful for finish and operation, but cannot approve a much larger opening.",
      "Coordinate the frame finish with adjacent patio doors and exterior trim. Similar colour names can look different across coating systems and substrates. Use physical samples when a continuous elevation or a close colour match matters.",
    ],
    rows: [
      [
        "Heated exterior application",
        "Request whole-window thermal data for the exact frame and glazing.",
      ],
      [
        "Thermal break",
        "Identify its location on the frame section and the system it belongs to.",
      ],
      [
        "Large panes",
        "Check glass support, required thickness, handling route and installation equipment.",
      ],
      [
        "Fixed/operating combination",
        "Compare joint details, frame alignment and hardware access.",
      ],
      [
        "Finish",
        "Confirm coating, colour, cleaning guidance and applicable finish coverage.",
      ],
    ],
    faq: [
      [
        "Can aluminum frames be used for any size?",
        "No. Each system has limits based on its profiles, glass, hardware and design loads.",
      ],
      [
        "Does a thermal break eliminate every cold surface?",
        "It improves the thermal path but does not define the entire window performance or remove the influence of indoor conditions.",
      ],
      [
        "Is aluminum only for commercial buildings?",
        "No. The relevant question is whether the specific system is suitable for the intended residential application and opening.",
      ],
    ],
    links: ["/doors/aluminum/", "/glass-walls/"],
  },
  "/windows/energy-efficiency/": {
    title: "Read the label as a complete specification",
    paragraphs: [
      "For a Canadian comparison, keep the rating system and units consistent. U-factor describes heat transfer; a lower value indicates less transfer. SHGC describes the fraction of solar heat admitted. Energy Rating combines heat-transfer, solar-gain and air-leakage information. Visible transmittance describes visible light. These measures answer different questions.",
      "Ask for a whole-window record matching the frame, operating type and glazing. A centre-of-glass value describes a smaller part of the assembly. A number from a fixed window should not be assigned to a casement simply because the glass package has the same name.",
      "Begin with the room: where you sit, when direct sun reaches the glass and which problems you notice. Lower solar gain can be useful where unwanted sun is a concern, but the best selection also considers orientation, shading and daylight. There is no single glass upgrade that fits every room equally well.",
    ],
    rows: [
      [
        "U-factor",
        "Compare identical units and whole-product records. Do not mix W/m²K with Btu/h·ft²·°F.",
      ],
      [
        "Energy Rating (ER)",
        "Use the rated configuration; it is not a promised percentage reduction in bills.",
      ],
      [
        "SHGC",
        "Consider the room’s sun exposure and shading alongside heat-transfer performance.",
      ],
      [
        "Visible transmittance",
        "Compare daylight and the appearance of the glass on a sample.",
      ],
      [
        "Certification",
        "Match the model and applicable record; annual designations must correspond to the correct year.",
      ],
      [
        "Installation",
        "Assess the frame-to-wall connection independently of the product label.",
      ],
    ],
    faq: [
      [
        "Will a higher rating guarantee lower utility bills?",
        "A rating describes product performance under its test or calculation method. Actual bills also depend on the home, heating system, weather and use.",
      ],
      [
        "Can I compare two U-factors without the units?",
        "No. Confirm the units and whether each value covers the whole product before comparing.",
      ],
      [
        "Is triple glazing automatically the best choice?",
        "Compare the exact ratings, glass weight, approved size, daylight and installed price for the rooms involved.",
      ],
    ],
    links: ["/compare/double-vs-triple-pane/", "/resources/condensation/"],
  },
  "/windows/glass/low-e/": {
    title: "Choose the coating for the room",
    paragraphs: [
      "Low-E is a coating technology, not a complete glass-package specification. The coating, the surface on which it is used, pane arrangement, cavity and gas fill work together. Two products described as Low-E may have different solar gain, visible light and thermal values.",
      "For a sunny living area, compare the timing of glare and unwanted warmth with the proposed SHGC and visible transmittance. For a shaded room, discuss whether a darker-looking glass would reduce light you want to retain. Bring photographs taken at the time the issue occurs.",
      "Compare samples side by side and look through them from inside as well as at their exterior reflection. Existing glazing beside the replacement can make a slight tint or reflection difference more noticeable. A consistent name does not ensure a perfect visual match across different products.",
    ],
    rows: [
      [
        "Thermal priority",
        "Review whole-window U-factor with the selected coating.",
      ],
      [
        "Solar priority",
        "Review SHGC alongside orientation, overhangs and window coverings.",
      ],
      ["Daylight", "Ask for visible transmittance and inspect the sample."],
      ["Appearance", "Check tint and reflection against adjacent windows."],
      [
        "Care",
        "Use the glass-cleaning guidance supplied for the actual glazing; do not add films without compatibility review.",
      ],
    ],
    faq: [
      [
        "Can I see the Low-E coating?",
        "Its appearance depends on the product and lighting. Compare a sample rather than expecting all coated glass to look identical.",
      ],
      [
        "Does Low-E mean the window is tinted?",
        "The coating is a performance feature. Its visible colour and light transmission depend on the specific glass configuration.",
      ],
      [
        "Can I add aftermarket film later?",
        "Confirm compatibility and warranty implications with the glass supplier before applying a film.",
      ],
    ],
    links: ["/windows/energy-efficiency/", "/windows/glass/argon/"],
  },
  "/windows/glass/argon/": {
    title: "The gas fill is one part of a sealed unit",
    paragraphs: [
      "Argon can be used in the sealed cavity between glass panes. The cavity, edge seal and spacer retain the intended assembly. It is not an opening or refill feature for the homeowner and does not change how the sash operates.",
      "A specification should identify the pane arrangement, coating and gas-filled cavities together. Adding the word argon to a quote does not establish the complete window rating, spacer construction or the performance of the installation around the frame.",
      "Persistent fog or droplets between the panes deserve a sealed-unit assessment. That is a different condition from room-side condensation that can be wiped from the glass. Record which surface is affected before requesting service.",
    ],
    rows: [
      [
        "Cavity",
        "Confirm the approved spacing and pane arrangement in the glazing specification.",
      ],
      [
        "Edge seal",
        "Protect the sealed assembly; it is not a homeowner service point.",
      ],
      [
        "Spacer",
        "Separates the panes at the edge and belongs in the full glass construction review.",
      ],
      ["Coating", "Coordinate the Low-E selection with the gas and panes."],
      [
        "Performance",
        "Compare a whole-product record rather than assuming the gas name guarantees a result.",
      ],
    ],
    faq: [
      [
        "Can I top up argon myself?",
        "No. The gas is part of a manufactured sealed glass unit. Ask for a professional assessment if the unit is suspected to have failed.",
      ],
      [
        "Does argon make a window soundproof?",
        "No such claim follows from the gas fill alone. Acoustic performance needs data for the complete glazing and assembly.",
      ],
      [
        "Is room-side condensation proof of a lost gas fill?",
        "No. Surface moisture and moisture between panes have different causes and require different assessments.",
      ],
    ],
    links: ["/resources/condensation/", "/windows/glass/low-e/"],
  },
  "/windows/glass/double-pane/": {
    title: "Build a useful baseline before choosing an upgrade",
    paragraphs: [
      "A double-pane insulated glass unit has two panes separated by a sealed cavity. The panes, coating, gas fill and spacer define the glass package. The frame and operating design then influence the performance of the complete window.",
      "Use an equivalent double-pane configuration as a clear baseline in the quote. Compare an upgrade at the same opening size, finish and installation scope. Otherwise the apparent glazing premium may include unrelated changes in profile, trim or hardware.",
      "There are reasons to evaluate daylight, weight and hardware alongside thermal values. A large operating sash must remain within the approved size and support range. A glazing choice is successful when it suits the room and can be supplied and installed as a compatible assembly.",
    ],
    rows: [
      ["Pane arrangement", "Two panes, one sealed cavity."],
      ["Coating and fill", "Specify the actual Low-E and gas configuration."],
      ["Window size", "Check width, height and area limits together."],
      [
        "Operating hardware",
        "Match sash weight with the approved operator, hinge or balance.",
      ],
      [
        "Comparison price",
        "Keep frame, colour, installation and trim the same when pricing triple glazing.",
      ],
    ],
    faq: [
      [
        "Are all double-pane windows equivalent?",
        "No. Glass, coating, cavity, frame and installation can differ. Use the complete specification.",
      ],
      [
        "Can it be combined with privacy or safety glass?",
        "Available combinations must be confirmed for the selected unit, size and intended application.",
      ],
      [
        "Should every replacement have triple panes instead?",
        "That decision should follow comparable ratings, room priorities and the actual upgrade scope, not pane count alone.",
      ],
    ],
    links: ["/compare/double-vs-triple-pane/", "/pricing/windows/"],
  },
  "/windows/glass/triple-pane/": {
    title: "Account for weight as well as thermal performance",
    paragraphs: [
      "Triple glazing adds a third pane and a second sealed cavity. This changes the assembly’s weight and thickness, so the selected profile and hardware must be designed for it. Approved operating sizes may differ from the double-pane version of the same style.",
      "Compare the exact coating and cavity arrangement. Three panes with one specification can have different light, solar and thermal values from three panes with another. Request the performance record that corresponds to the quoted configuration.",
      "Prioritize the openings where the upgrade addresses a defined concern. A seating area close to large glass may prompt a different discussion from a sheltered utility opening. You can compare room-specific options while keeping the visible finish coordinated throughout the home.",
    ],
    rows: [
      [
        "Construction",
        "Three panes and two cavities in the insulated glass unit.",
      ],
      [
        "Compatibility",
        "Confirm glass thickness, profile capacity and support.",
      ],
      [
        "Moving sash",
        "Review hinge, balance or roller load and the approved dimensions.",
      ],
      [
        "Fixed panes",
        "Include glass handling and installation access in the scope.",
      ],
      [
        "Value comparison",
        "Use the same opening and installation method for the double-pane baseline.",
      ],
    ],
    faq: [
      [
        "Can triple glass fit my existing sash?",
        "Do not assume so. The existing profile, glazing capacity and hardware must be assessed for compatibility.",
      ],
      [
        "Will it eliminate traffic noise?",
        "No blanket acoustic promise can be made from pane count. Ask for tested acoustic data if noise is a main reason for replacement.",
      ],
      [
        "Why can the maximum size be smaller?",
        "Heavier glazing changes the load on a moving sash and its hardware. Use the limits for the actual configuration.",
      ],
    ],
    links: ["/compare/double-vs-triple-pane/", "/windows/energy-efficiency/"],
  },
  "/windows/egress/": {
    title: "Plan the clear opening and the route outside",
    paragraphs: [
      "An egress discussion begins with the intended use of the room and the actual unobstructed opening. The overall frame size, glass size and clear opening are different dimensions. The sash, hardware and permitted opening position determine the space that is available.",
      "The outside route matters too. A window well, deck, landscaping or other obstruction can affect a proposed design. Provide inside and outside photographs and describe the planned room use before choosing a window style or enlarging the wall opening.",
      "A compliant project cannot be confirmed from a product name such as hopper or casement. Have the applicable requirements, design and approvals checked for the actual building. Product selection, structural work, well changes, drainage and finishing should be coordinated before ordering.",
    ],
    rows: [
      [
        "Room use",
        "Describe the existing and proposed use, including any planned conversion.",
      ],
      [
        "Clear opening",
        "Obtain the unobstructed dimensions for the actual operating configuration.",
      ],
      [
        "Operation",
        "Review the opening action and any screens or hardware involved.",
      ],
      [
        "Exterior route",
        "Document the well, grade, deck and nearby obstructions.",
      ],
      [
        "Scope",
        "Identify drawings, approvals, cutting, structure, water management and finishing responsibilities.",
      ],
    ],
    faq: [
      [
        "Can I judge compliance from the frame dimensions?",
        "No. The usable opening differs from the outside frame size and must be checked with the full project requirements.",
      ],
      [
        "Does replacing the window approve a basement bedroom?",
        "No. A room conversion involves requirements beyond the window alone.",
      ],
      [
        "Should I order the window before planning the well?",
        "Coordinate the opening, outside route and required construction before finalizing the product order.",
      ],
    ],
    links: ["/installation/cut-out/", "/windows/hopper/"],
  },
  "/windows/new-construction/": {
    title: "Coordinate the window with the wall before finishes",
    paragraphs: [
      "New-construction window planning connects the opening schedule to the wall assembly. Rough openings, support, installation position and water-management transitions should be resolved with the builder before the exterior and interior finishes conceal those connections.",
      "The approved schedule should show each opening’s location, operating direction, dimensions, profile, glass and finish. Fixed and operable units can be mixed intentionally, but a substitution in one location may change ventilation, sightlines or hardware clearance.",
      "Delivery sequencing also belongs in the plan. Large units need a safe handling route and protected storage. Confirm who measures, who approves drawings and who installs each transition so responsibility is clear when several trades work around the same opening.",
    ],
    rows: [
      [
        "Design stage",
        "Coordinate elevations, opening schedule and room requirements.",
      ],
      [
        "Before production",
        "Approve dimensions, glass, finish, handing and configuration.",
      ],
      [
        "Before delivery",
        "Confirm access, storage and the installation sequence.",
      ],
      [
        "Before cladding",
        "Inspect the relevant frame-to-wall and water-management connections.",
      ],
      [
        "Handover",
        "Keep approved schedules, product records, care guidance and follow-up details.",
      ],
    ],
    faq: [
      [
        "Is a rough opening the same as the ordered frame size?",
        "No. The required relationship depends on the selected system and installation detail.",
      ],
      [
        "Can a builder change window styles after ordering?",
        "A change requires review of dimensions, drawings, performance and the order status. Do not treat it as a cosmetic substitution.",
      ],
      [
        "Who takes final responsibility for measurements?",
        "The project agreement should identify who measures and approves the final schedule before production.",
      ],
    ],
    links: ["/installation/", "/windows/series/"],
  },
  "/windows/low-rise-condos/": {
    title: "Separate the product choice from property approval",
    paragraphs: [
      "A condominium project can involve shared exterior standards and a defined approval process. Before selecting a different frame colour, grille or opening action, ask the responsible property representative which components and specifications must be retained or approved.",
      "Organize the proposal by unit and opening, with photographs and a consistent schedule. Common appearance does not mean every opening has the same dimensions or condition. Access, working hours, protection and communication with occupants need their own plan.",
      "The agreed scope should distinguish work inside the unit from connections to common building elements. Confirm who authorizes the order and who coordinates the installation. An individual owner’s design preference alone may not establish permission to alter the exterior.",
    ],
    rows: [
      [
        "Approval",
        "Obtain the applicable property process and written product requirements.",
      ],
      [
        "Appearance",
        "Confirm frame colour, grille pattern and exterior proportions.",
      ],
      [
        "Site access",
        "Discuss shared entrances, parking, lifts or stairs and working times.",
      ],
      [
        "Scope boundaries",
        "Identify responsibility for common elements and interior repairs.",
      ],
      [
        "Project records",
        "Keep opening schedules, approvals, warranties and service contacts together.",
      ],
    ],
    faq: [
      [
        "Can I choose any exterior colour?",
        "Confirm the property’s requirements and approval process before placing an order.",
      ],
      [
        "Are all windows in the building the same size?",
        "Do not assume so. Final measurements are needed for the actual openings.",
      ],
      [
        "Can several owners coordinate one project?",
        "That can be discussed once scope, authority, access and the required approvals are clear.",
      ],
    ],
    links: ["/installation/window-replacement/", "/resources/buying-guide/"],
  },
};
export function deepenTechnology(pages: ContentPage[]) {
  for (const p of pages) {
    const d = details[p.path];
    if (!d) continue;
    const additions: ContentSection[] = [
      { title: d.title, paragraphs: d.paragraphs },
      {
        title: "Specification checklist",
        table: { headers: ["Decision", "What to establish"], rows: d.rows },
        links: d.links.map((href) => ({
          href,
          label: href.includes("compare")
            ? "Compare the alternatives"
            : href.includes("pricing")
              ? "Explore price references"
              : href.includes("condensation")
                ? "Understand condensation"
                : href.includes("installation")
                  ? "Plan installation"
                  : "Explore the related guide",
        })),
      },
    ];
    if (p.path === "/windows/energy-efficiency/")
      additions[0].links = [
        {
          label: "NRCan: ratings and certification explained",
          href: "https://natural-resources.canada.ca/energy-efficiency/product-energy-ratings/ratings-certification",
        },
      ];
    p.sections.push(...additions);
    p.faq = [...d.faq];
  }
}
