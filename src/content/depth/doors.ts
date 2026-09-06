import type { ContentPage } from "../types";
type DoorDetail = {
  configurations: string[][];
  construction: string[];
  installation: string[];
  questions: [string, string][];
};
const details: Record<string, DoorDetail> = {
  "entry/steel": {
    configurations: [
      [
        "Single entrance",
        "One operating leaf; select the slab design, frame, handing and lock preparation as a complete assembly.",
      ],
      [
        "Door with sidelites",
        "One or two fixed glazed side sections add daylight and width. Their frames, glass and privacy treatment belong on the same drawing.",
      ],
      [
        "Door with transom",
        "A glazed portion above the entrance changes the height and daylight. Confirm the total opening and supporting construction.",
      ],
      [
        "Double entrance",
        "Confirm active and secondary leaves, clear passage, meeting detail and how the secondary leaf is secured.",
      ],
    ],
    construction: [
      "The steel skin, insulated core, perimeter frame, weatherstripping and sill perform different functions. A panel design does not describe the core, the edge construction or the quality of the installation. Compare these items before treating two visually similar doors as equivalent.",
      "Handle and deadbolt preparation must suit the selected hardware. A multi-point arrangement is a different system from adding another ordinary lock: the leaf, frame and engagement points must be designed to work together. Review the entire locking specification, including any smart-lock compatibility.",
      "A painted steel finish should be chosen using an approved sample. Ask how scratches and edges are repaired and which cleaning products are allowed. A storm door in front of the entrance can change the exposure of the primary door and needs compatibility review.",
    ],
    installation: [
      "Record the full frame opening, the exterior brick or siding transition, the interior trim and the finished floor levels. The old slab width is only one measurement; the complete replacement assembly must fit and be supported.",
      "At completion, check the reveal around the leaf, latch and deadbolt engagement, sill contact and sweep. The leaf should move smoothly without relying on excessive force to compress the seals. Include any painting or trim repair in the written scope.",
    ],
    questions: [
      [
        "Can I keep my existing handles?",
        "Sometimes, if their preparation, backset, thickness range and locking arrangement match the new assembly. Bring the hardware information before the door is ordered.",
      ],
      [
        "Is a steel door maintenance-free?",
        "The finish and exposed edges need the care specified for the chosen system. Address coating damage promptly according to the manufacturer’s instructions.",
      ],
      [
        "Do sidelites make the door itself wider?",
        "They increase the total entrance assembly, not necessarily the clear width through the operating leaf. Compare both measurements.",
      ],
      [
        "Can I change the swing direction?",
        "It may be possible with a correctly specified replacement assembly. Check steps, landing, furniture, security hardware and the usable clearances before choosing.",
      ],
    ],
  },
  "entry/fiberglass": {
    configurations: [
      [
        "Smooth skin",
        "A restrained surface for painted contemporary designs; review the panel layout and finish sample together.",
      ],
      [
        "Woodgrain skin",
        "A textured surface with a compatible stain or finish system; inspect both the grain and the colour in person.",
      ],
      [
        "Decorative glass entrance",
        "Select the insert size, privacy treatment and visual pattern before choosing complementary sidelites.",
      ],
      [
        "Wider entrance assembly",
        "Single or double leaves, sidelites and a transom create different layouts and clear passage dimensions.",
      ],
    ],
    construction: [
      "A fiberglass skin can create a smooth or textured face, but the completed door also includes its core, edges, frame, sill and hardware. Compare those components rather than using the skin material as the only quality measure.",
      "A wood-look surface is most convincing when the grain, panel profile and finish are considered together. A catalogue photograph under studio lighting cannot establish the exact appearance at a shaded front porch. Take the sample toward daylight when comparing colours.",
      "Decorative glass is selected for more than its pattern. Review privacy from both sides, the size of the transparent areas and how the insert relates to the panel design. A door with matching sidelites should be approved as one composition.",
    ],
    installation: [
      "Inspect the existing sill support, the transition to the interior floor and the exterior landing. A new leaf cannot compensate for a poorly supported or incorrectly fitted frame. The frame, threshold and perimeter seals should be installed as one system.",
      "Request a demonstration of the locking sequence, secondary-leaf hardware where present and the recommended cleaning approach. Keep the exact finishing instructions and warranty documents; care requirements can differ between painted and stained surfaces.",
    ],
    questions: [
      [
        "Does fiberglass always look like wood?",
        "No. Smooth and textured designs are different options. The final appearance depends on the selected skin, panel pattern and finishing system.",
      ],
      [
        "Can I paint or stain every fiberglass door?",
        "Use only the process approved for the selected model and its existing finish. A product designed for paint may not accept the same treatment as a stainable woodgrain skin.",
      ],
      [
        "How do I compare a fiberglass and steel quote?",
        "Match the opening, glass, frame, hardware, sidelites, finish and installation scope. Otherwise the price difference may describe two different assemblies.",
      ],
      [
        "Can I add a smart lock?",
        "Confirm the lock’s preparation and compatibility with the door hardware before ordering. A conventional deadbolt and a multi-point system may require different solutions.",
      ],
    ],
  },
  "patio/sliding": {
    configurations: [
      [
        "Two-panel layout",
        "An operating panel moves past a fixed panel. Confirm which side opens when viewed from the specified side.",
      ],
      [
        "Wider multi-panel layout",
        "The number of fixed and moving panels changes the clear opening, frame depth and operation.",
      ],
      [
        "Screen arrangement",
        "A separate sliding screen needs track space and an accessible handle. Verify its parking position.",
      ],
      [
        "Finish and glazing",
        "Coordinate interior/exterior frame colours and the glass package with the adjacent windows.",
      ],
    ],
    construction: [
      "The rollers or other support components carry the moving panel while the track guides it. The lock engages at the meeting stile or frame according to the system. Smooth movement depends on the support, alignment and hardware working together.",
      "The sill is also a water-management detail. Its channels and outlets should remain accessible after finishing, and the transition to the patio or deck must not cover the drainage path. A low-looking threshold should be evaluated for the actual weather exposure.",
      "A larger glass area can make solar gain and shading noticeable in the adjoining room. Compare the coating, pane arrangement and full-door performance record rather than selecting only by frame colour or pane count.",
    ],
    installation: [
      "Measure the usable passage as well as the total frame width. For a backyard used frequently for dining, think about carrying trays, moving furniture and operating the screen with one hand.",
      "After installation, slide the panel through its full travel, test the lock and screen, and inspect the threshold transition. Ask how adjustments are made and which track maintenance is recommended.",
    ],
    questions: [
      [
        "Does a two-panel slider open halfway?",
        "The clear passage is less than the full frame width and depends on the panel overlap and frame design. Use the dimension shown on the drawing.",
      ],
      [
        "Can the opening side be reversed later?",
        "Do not assume so. Handing and fixed-panel arrangement should be approved before the assembly is ordered.",
      ],
      [
        "Why does a new slider feel heavy?",
        "Panel size and glass weight affect the feel, but alignment and roller adjustment also matter. Have difficult movement assessed rather than forcing the panel.",
      ],
      [
        "Is the screen included?",
        "The quote should identify the screen, its frame and operation. Do not assume every system or price reference includes the same screen package.",
      ],
    ],
  },
  "patio/stacking": {
    configurations: [
      [
        "Two-panel reference",
        "Confirm whether one panel stacks past another and how much of the opening becomes clear.",
      ],
      [
        "Three-panel arrangement",
        "Additional tracks or panel overlap change frame depth and the final parked stack.",
      ],
      [
        "Multiple panels",
        "Specify the number of moving and fixed leaves, the opening direction and the stack location.",
      ],
      [
        "Split opening",
        "Where offered, panels can collect toward different sides; identify the central meeting and locking arrangement.",
      ],
    ],
    construction: [
      "A stacking system increases the movable portion of a wide opening by collecting panels together. It should be chosen with a plan view showing every track and the final parked position, not only an elevation of the closed glass.",
      "More moving panels add hardware, seals and coordination points. The panel sequence, interlocks and handle positions determine how convenient the system is for a quick trip outside as well as for a fully open gathering.",
      "Track depth, threshold weather management and screen integration can differ substantially between stacking systems. A photograph of a wide opening does not establish whether the example uses a pocket, a surface stack or another configuration.",
    ],
    installation: [
      "Start with the structural opening and the intended opening width. Review support above, support below, floor transitions, water management and delivery access for the panels. Structural modification should be priced separately from the door supply.",
      "Practise the full opening and closing sequence during handover, including each lock and the screen. Confirm where panels must be parked and whether nearby furniture can remain in place during operation.",
    ],
    questions: [
      [
        "Do the panels disappear into the wall?",
        "Only a system specifically designed with a suitable pocket does that. A stacking door can collect panels in front of another section without entering the wall.",
      ],
      [
        "How many panels can I have?",
        "The available configuration depends on the selected system, dimensions, glazing and structural conditions. Confirm it on an approved drawing.",
      ],
      [
        "Will a wider door need a deeper threshold?",
        "Multiple tracks can increase frame depth, but the actual measurement is system-specific. Compare the section drawing with the floor and deck detail.",
      ],
      [
        "Why is there no universal installed price?",
        "Panel count, span, glass, support work, threshold detail and access vary too much to treat every stacking arrangement as one product. The quote needs a defined layout.",
      ],
    ],
  },
  "patio/tilt-and-turn": {
    configurations: [
      [
        "Two-panel composition",
        "Identify which leaf tilts or turns and which portion is fixed; a two-panel description does not define the movement.",
      ],
      [
        "Three- or four-panel composition",
        "Review every operating leaf, intermediate frame and opening direction on a plan.",
      ],
      [
        "Ventilation mode",
        "The restricted opening should have a clear operating sequence and compatible hardware.",
      ],
      [
        "Full access mode",
        "Confirm the inward swing or other exact movement; a tilt-and-slide product is a separate mechanism.",
      ],
    ],
    construction: [
      "The ventilation and full-opening modes place different demands on the hardware. The handle position, locking gear and hinges must coordinate, particularly with larger glazed leaves. Try the actual mechanism before comparing it with a conventional patio slider.",
      "Reinforcement and hardware capacity must suit the selected glass weight. The phrase multi-point locking describes an arrangement of engagement points, not a universal security rating for every available panel size.",
      "An inward-turning leaf uses room-side space. Furniture, curtains, blinds and the approach to the door need to be drawn into the layout. The main daily-use position should be convenient without rearranging the room.",
    ],
    installation: [
      "Agree on the precise system name and the movement shown by its drawing. For a large patio opening, review the hinge support, level threshold and alignment throughout the complete assembly.",
      "The handover should demonstrate a safe, repeatable handle sequence and how the leaf is closed before another mode is selected. Keep the operating instructions near the door until household members are familiar with it.",
    ],
    questions: [
      [
        "Is this a tilt-and-slide door?",
        "Not necessarily. Tilt-and-turn and tilt-and-slide describe different movements. The quote and drawing must identify the exact system.",
      ],
      [
        "Can a large glazed leaf tilt?",
        "Only within the approved size, weight and hardware limits of the selected configuration. Do not infer approval from a smaller display.",
      ],
      [
        "Can I fit roller blinds inside the opening?",
        "Check the full inward movement and handle clearance. A covering that fits the closed frame may obstruct the turning leaf.",
      ],
      [
        "Does laminated glass make every configuration available?",
        "No. Laminated glazing changes weight and thickness and must be matched to the approved hardware and frame.",
      ],
    ],
  },
  "patio/bifold": {
    configurations: [
      [
        "Two-panel fold",
        "A compact folding arrangement; compare the folded stack with the passage remaining beside it.",
      ],
      [
        "Three-panel layout",
        "Can create different daily-access options depending on the approved hinge and locking design.",
      ],
      [
        "Four-panel or larger layout",
        "Review fold direction, stack location and support requirements for the full span.",
      ],
      [
        "One-sided or split stack",
        "Panels may collect at one end or both; the system drawing defines the actual option.",
      ],
    ],
    construction: [
      "Bifold panels are linked by hinges and guided by the system’s track arrangement. The stack has a physical depth and width when open, so its position matters next to furniture, planting and the walking route.",
      "A daily-access leaf, where available, can let you use the opening without folding every panel. The convenience depends on the panel count and approved layout. Do not assume that any panel in the row can function as an independent door.",
      "Screen and threshold choices deserve early attention. A fully open summer photograph rarely shows how insect screening, drainage, locks and winter sealing work in normal use. Compare the complete closed and open arrangements.",
    ],
    installation: [
      "The support above and below a wide folding system must meet its installation requirements. Uneven support or movement in the opening can affect several linked panels, so opening preparation should be part of the quote.",
      "Check each locking point, the everyday leaf and the full folding sequence after installation. Identify the finger-clearance areas and ask how the track and hinges should be maintained without altering the system adjustment.",
    ],
    questions: [
      [
        "Can I use one leaf as an everyday door?",
        "That depends on the panel arrangement and system. Request a drawing that identifies the daily-access leaf rather than assuming it is included.",
      ],
      [
        "Do bifold panels fold inside or outside?",
        "Both directions may exist across different systems. Confirm the approved fold direction and the space occupied by the stack.",
      ],
      [
        "Is a flush threshold suitable for every backyard?",
        "No. Exposure, drainage, floor levels and the system’s performance requirements determine the appropriate sill detail.",
      ],
      [
        "How do I compare bifold with stacking?",
        "Compare clear passage, parked panels, operating sequence, screen, threshold depth, structural work and the closed appearance at the same opening size.",
      ],
    ],
  },
  "patio/garden": {
    configurations: [
      [
        "One active leaf with fixed companion",
        "One side provides daily passage while the other creates a matching glazed composition.",
      ],
      [
        "Two operating leaves",
        "Confirm the active and secondary leaf, secondary bolts and the clear passage with both open.",
      ],
      [
        "Inward or outward swing",
        "Choose around the landing, steps and room furniture, subject to the approved assembly.",
      ],
      [
        "Screen solution",
        "A compatible screen may be separate from the primary leaves; compare its use and storage.",
      ],
    ],
    construction: [
      "Garden doors create a hinged connection to the outdoors. The appearance can resemble a pair of French doors, but the operating arrangement needs to be stated: two visible leaves do not prove that both are active.",
      "The secondary leaf, where present, has its own securing arrangement. Ask how it is released, how it closes against the threshold and how the primary leaf locks to it. The meeting detail is part of the weather seal as well as the appearance.",
      "Glass proportion, grille pattern and the relationship to adjacent windows can make a garden entrance feel integrated with a traditional room. Consider the frame and hardware finish on the interior elevation rather than choosing only from the exterior view.",
    ],
    installation: [
      "Mark the swing arc on a plan with the dining table, steps and outdoor furniture. A door can provide a broad clear opening when both leaves are open while still needing a practical everyday route through one leaf.",
      "Inspect the threshold support, leaf alignment and meeting seals. Operate the primary and secondary hardware, test the screen and check that the door does not strike nearby trim or furniture.",
    ],
    questions: [
      [
        "Are garden doors and French doors identical?",
        "The names can overlap in everyday use. The important specification is the number of active leaves, swing direction, glazing and locking arrangement.",
      ],
      [
        "Can I replace a slider with garden doors?",
        "The existing opening may be adaptable, but the swing zones, frame dimensions, sill and installation details need assessment.",
      ],
      [
        "Do both leaves always open?",
        "No. Some compositions combine one active leaf with a fixed companion. Confirm the configuration in writing.",
      ],
      [
        "Will the door catch my curtains?",
        "It can if the covering sits within the swing path or handle clearance. Include curtain and blind placement in the layout review.",
      ],
    ],
  },
  "patio/vinyl": {
    configurations: [
      [
        "Standard sliding use",
        "Compare the fixed and moving panel arrangement, not just the frame material.",
      ],
      [
        "Glazing package",
        "Pane count, coating and spacer must match the approved vinyl door model.",
      ],
      [
        "Frame finish",
        "Select room-side and exterior treatment from supported options and review colour-specific care.",
      ],
      [
        "Screen and hardware",
        "Identify the roller/support system, lock and screen as part of the quotation.",
      ],
    ],
    construction: [
      "Vinyl describes the frame material, while sliding describes the movement. A vinyl patio door should therefore be compared with another complete vinyl system at the same panel size, glass specification and installation scope.",
      "The profile chambers, reinforcement and joining construction contribute to the frame design. The sill must support the moving panel and manage water; a frame material alone cannot describe the performance of the finished opening.",
      "A patio door can carry substantially more glass than a small window. Compare the full-door rating and operating hardware instead of applying a window specification to a similar-looking profile.",
    ],
    installation: [
      "Review the existing frame condition and floor transition before assuming the replacement fits the old trim. Changes in frame depth can affect casing, flooring edges and the relationship to a deck.",
      "At handover, verify the moving panel, lock, screen and drainage access. Keep the model and glass information so a future service enquiry can identify the actual assembly.",
    ],
    questions: [
      [
        "Is every vinyl patio door a two-panel slider?",
        "No. Material and configuration are separate choices. Confirm the panel arrangement offered by the selected system.",
      ],
      [
        "Can I choose different colours inside and outside?",
        "Where supported by the model and finishing process. Approve the actual finish specification rather than assuming every combination is available.",
      ],
      [
        "Is a vinyl frame automatically more efficient?",
        "The complete product rating matters. Glass, profile design, seals and installation must be considered with the material.",
      ],
      [
        "What belongs in a vinyl patio quote?",
        "The model, panel size and movement, glazing, finish, screen, lock, threshold and complete installation scope should be identified.",
      ],
    ],
  },
  aluminum: {
    configurations: [
      [
        "Glazed entrance or patio system",
        "Identify the intended residential application and exact opening mechanism first.",
      ],
      [
        "Frame thermal design",
        "A thermally broken frame is a different specification from an unbroken metal profile.",
      ],
      [
        "Architectural glazing",
        "Larger panes and narrow-looking sightlines require system-specific dimensions and support details.",
      ],
      [
        "Surface finish",
        "Compare the approved finish, colour consistency and maintenance requirements.",
      ],
    ],
    construction: [
      "Aluminum can provide a defined architectural frame appearance. Its thermal design is important where the assembly separates a heated home from outdoor conditions. A narrow visible profile does not, on its own, establish good energy performance.",
      "Review the frame section and the exact glass, seals and hardware. Residential exterior use, an interior partition and a sheltered enclosure can require different specifications even when the frames look similar.",
      "Large glazed panels bring handling and support considerations. The selected system must be assessed at the intended dimensions rather than assuming that a smaller showroom display can be enlarged without changes.",
    ],
    installation: [
      "Confirm the intended location, heating boundary, opening dimensions and weather exposure. Coordinate the threshold, drainage and structural support before a final product is ordered.",
      "The quote should identify the actual model, performance documentation and installation responsibility. Factory Lane’s final aluminum model range is still being matched to approved product records.",
    ],
    questions: [
      [
        "Does aluminum mean the frame has a thermal break?",
        "No. The frame section and system documentation must identify its thermal construction.",
      ],
      [
        "Can an interior glass partition be used outside?",
        "Only if the selected system is approved for that exterior application. Similar appearance does not establish weather or thermal suitability.",
      ],
      [
        "Are all slim metal frames the same?",
        "No. Profile design, reinforcement, glass support and thermal performance can differ substantially.",
      ],
      [
        "Can I order from a photograph?",
        "A photograph can communicate the design direction, but the actual opening and system specification must be confirmed before ordering.",
      ],
    ],
  },
  storm: {
    configurations: [
      [
        "Full-view storm door",
        "Prioritizes a glazed view of the entrance; compare ventilation and glass/screen changeover.",
      ],
      [
        "Ventilating arrangement",
        "Check how the screen and glazed portions operate and whether parts must be stored.",
      ],
      [
        "Handing and handle",
        "Match the exterior approach and clear the primary door handle.",
      ],
      [
        "Closer and restraint",
        "Select and adjust the closing arrangement for the approved door and exposure.",
      ],
    ],
    construction: [
      "A storm door sits outside the primary entry and creates another operating layer. Its benefit depends on how that layer is used for weather protection, ventilation and access, and whether it is compatible with the main entrance.",
      "Check the mounting surface, jamb condition and handle clearance. The closer, latch and hinge support must fit the available space. A storm door can also change the exposure and heat conditions at the primary door, so review both products’ instructions.",
      "A retractable screen and an interchangeable panel require different routines. Compare how screens are protected and cleaned, where removable parts are stored and whether the changeover is practical for the household.",
    ],
    installation: [
      "Measure the outer mounting opening as well as the primary frame. Look at steps, landings, railings and the direction of the exterior approach before selecting handing.",
      "The final check should include the closer speed, latch engagement, full swing clearance and the interaction with the primary door. Avoid treating an added outer layer as a repair for a poorly fitted main entry.",
    ],
    questions: [
      [
        "Can any entry door have a storm door?",
        "Compatibility depends on the primary door, mounting conditions and exposure. Check the product instructions before adding one.",
      ],
      [
        "Will it replace a damaged primary door?",
        "No. It is a separate outer assembly and does not repair deterioration or alignment problems in the main entrance.",
      ],
      [
        "Do I need storage for glass or screen panels?",
        "Some designs use removable panels while others integrate their screen. Compare the actual changeover method.",
      ],
      [
        "Can both handles interfere?",
        "Yes. Handle projection and mounting depth must be measured so both doors can close and operate properly.",
      ],
    ],
  },
  garage: {
    configurations: [
      [
        "Short raised-panel direction",
        "A repeated compact panel pattern; model identification is required before ordering.",
      ],
      [
        "Long raised-panel direction",
        "A wider panel rhythm that changes the exterior appearance.",
      ],
      [
        "Carriage-inspired direction",
        "Decorative proportions and hardware can create a different style without defining the opening mechanism.",
      ],
      [
        "Glazed top sections",
        "Review daylight, privacy, glass position and the selected door’s approved construction.",
      ],
    ],
    construction: [
      "Garage-door design should be considered with its opening mechanism, tracks, support and operating equipment. A panel-style name describes the appearance, not the spring system, insulation or compatible opener.",
      "Headroom, side room and backroom affect which track and operating arrangement fits the garage. Photograph obstructions, ceiling features and the existing equipment instead of measuring only the vehicle opening.",
      "A section R-value is not a whole-door performance claim. The panel construction, perimeter seals, joints and installation all influence the finished enclosure. Keep any performance figure tied to the exact product description.",
    ],
    installation: [
      "Garage-door springs and related hardware store substantial energy. Selection, installation and adjustment should be handled by qualified personnel with the correct equipment; this page does not provide spring-adjustment instructions.",
      "The scope should identify the door, tracks, hardware, opener compatibility, removal and final operating checks. The Factory Lane model range and installation terms must be confirmed before a quote is represented as available.",
    ],
    questions: [
      [
        "Do decorative carriage panels change how the door opens?",
        "Not necessarily. Appearance and operating mechanism are separate specifications.",
      ],
      [
        "Can I keep my existing opener?",
        "Only after compatibility, condition and installation requirements have been checked for the selected door.",
      ],
      [
        "Which measurements are needed besides width and height?",
        "Headroom, side clearances, backroom, floor condition and the location of ceiling obstructions can affect the system.",
      ],
      [
        "Can I adjust the springs myself?",
        "Use qualified service personnel. Spring systems can create serious injury risks if handled or adjusted incorrectly.",
      ],
    ],
  },
  "brands/novatech": {
    configurations: [
      [
        "Door glass selection",
        "Match the glass design and size to a compatible door slab and frame system.",
      ],
      [
        "Coordinated sidelites",
        "A related pattern may be offered in another size; verify the actual composition and privacy level.",
      ],
      [
        "Decorative direction",
        "Compare clear areas, texture and any decorative elements under realistic light.",
      ],
      [
        "Complete assembly",
        "A named glass component does not establish the specifications of the slab, frame, hardware or installation.",
      ],
    ],
    construction: [
      "A component brand can help identify a glass or door option, but the customer buys a complete installed entrance. The quote should distinguish the selected branded component from the other parts of the assembly.",
      "Compare the current product code, dimensions and compatible door construction. Two images with a similar decorative pattern can represent different insert sizes or levels of privacy.",
      "Factory Lane’s exact model and component availability must be matched to the approved catalogue. No specific catalogue illustration should be treated as a stocked or compatible item without that matching step.",
    ],
    installation: [
      "Bring the preferred design reference and a photograph of the complete existing entrance. Establish whether the project concerns an insert, a door leaf or a full frame replacement; these are different scopes.",
      "Keep the product code and approved assembly drawing with the quote. The finished entrance should be reviewed for both the glass appearance and the operation of the door system around it.",
    ],
    questions: [
      [
        "Does selecting a glass brand define the whole door?",
        "No. The door skin, frame, sill, hardware and installation remain separate parts of the specification.",
      ],
      [
        "Can a decorative insert fit any door?",
        "Compatibility depends on the insert dimensions and the approved door construction. Do not assume a decorative image identifies a universal replacement.",
      ],
      [
        "Can I match sidelites to the door glass?",
        "Where compatible matching or coordinated pieces are available. Approve the actual sizes and layout together.",
      ],
      [
        "Are all catalogue models available through Factory Lane?",
        "The range is being matched to approved records. Confirm the exact code and configuration before treating a catalogue item as available.",
      ],
    ],
  },
};
export function deepenDoors(pages: ContentPage[]) {
  for (const p of pages) {
    const d = details[p.path.replace(/^\/doors\//, "").replace(/\/$/, "")];
    if (!d) continue;
    p.sections = p.sections.filter(
      (s) => s.title !== "From measurements to the installed entrance",
    );
    p.sections.splice(
      1,
      0,
      {
        title: "Configurations and the complete opening",
        table: {
          headers: ["Design choice", "What the drawing should establish"],
          rows: d.configurations,
        },
      },
      {
        title: "Construction, glazing and hardware",
        paragraphs: d.construction,
      },
    );
    p.sections.push({
      title: "Installation details for this system",
      paragraphs: d.installation,
      links: [
        {
          label: "Door installation and finishing",
          href: "/installation/doors/",
        },
        { label: "Compare door budgets", href: "/pricing/doors/" },
      ],
    });
    if (!p.priceProduct)
      p.sections.push({
        title: "What the project price needs to include",
        paragraphs: [
          `For ${p.title.toLowerCase()}, the estimate starts with an approved configuration rather than an unqualified starting price. List overall dimensions, the fixed and moving elements, glass, finish, hardware, installation access and any work to the surrounding opening.`,
          "Ask for supply, installation, structural or repair work, finishing and taxes to be distinguished. That gives you a useful basis for comparing alternatives without treating a different-size display or another system’s price as your quote.",
        ],
        links: [
          {
            label: "Understand door price references",
            href: "/pricing/doors/",
          },
        ],
      });
    p.faq = [...d.questions, ...(p.faq ?? []).slice(0, 1)];
    p.related = [
      ...new Set([
        ...p.related,
        "/resources/care-guide/",
        "/resources/buying-guide/",
        "/blinds/",
      ]),
    ];
  }
}
