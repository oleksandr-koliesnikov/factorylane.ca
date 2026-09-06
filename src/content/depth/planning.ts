import type { ContentPage, ContentSection } from "../types";
const additions: Record<string, ContentSection[]> = {
  "/installation/": [
    {
      title: "A clear sequence from survey to handover",
      table: {
        headers: ["Stage", "Decisions and records"],
        rows: [
          [
            "Assessment",
            "Opening condition, project goals, access and the suitable replacement method.",
          ],
          [
            "Specification",
            "Product, dimensions, glass, finish, hardware and screen for each opening.",
          ],
          [
            "Scope agreement",
            "Removal, repairs, support, water management, insulation, trim and cleanup.",
          ],
          [
            "Installation planning",
            "Delivery route, room preparation, work sequence and surrounding-trade responsibilities.",
          ],
          [
            "Completion",
            "Operation, finish review, care instructions, documents and any follow-up list.",
          ],
        ],
      },
    },
    {
      title: "Agree how unexpected conditions will be handled",
      paragraphs: [
        "Some conditions only become visible after the old assembly is removed. The original assessment should identify visible concerns, and the agreement should explain how additional work is documented and approved if hidden deterioration is found. A lower initial total is not helpful if the repair boundary remains undefined.",
        "Keep the project scope and the opening schedule together. If a product or installation detail changes, record which opening is affected and whether the dimensions, finish or price also change. This reduces ambiguity when several rooms or trades are involved.",
      ],
    },
    {
      title: "Prepare for an occupied-home installation",
      paragraphs: [
        "Move fragile items away from the work route and discuss floor and furniture protection. Let the team know about pets, young children, home-office hours and any rooms that need coordinated access. The practical sequence should be agreed for the actual project rather than assumed from the number of windows.",
        "Ask which coverings should be removed beforehand and who handles alarms, sensors or other connected equipment. After the work, operate every selected function and note any finishing item that needs follow-up while the opening is easy to identify.",
      ],
    },
  ],
  "/installation/window-replacement/": [
    {
      title: "What changes around the frame?",
      table: {
        headers: ["Part of the opening", "Scope to establish"],
        rows: [
          [
            "Existing frame",
            "Which parts remain and what condition makes retention appropriate.",
          ],
          [
            "Rough opening",
            "Assessment and responsibility for any necessary repair.",
          ],
          [
            "Perimeter connection",
            "Support, fastening, insulation and sealing for the selected unit and wall.",
          ],
          [
            "Exterior transition",
            "Flashing, trim and water paths coordinated with cladding.",
          ],
          [
            "Interior finish",
            "Jamb depth, casing, sill and any painting or wall repair.",
          ],
        ],
      },
    },
    {
      title: "Compare before-and-after dimensions",
      paragraphs: [
        "An insert can introduce a new frame inside retained framing, changing the clear glass and visible proportions. A full-frame approach can change the surrounding trim. Ask for those differences to be explained before ordering, especially where new and existing windows sit close together.",
        "Record opening direction and handle reach as part of the replacement schedule. A window that fits the wall can still interfere with a tap, blind or walkway. Changing the operating style should resolve those everyday details while preserving any required opening function.",
      ],
    },
    {
      title: "Use an opening-by-opening handover",
      bullets: [
        "Identify each room and window on the approved schedule.",
        "Test full travel, locking and any permitted tilt or cleaning position.",
        "Review screens, handles, sill finish and perimeter trim.",
        "Keep drainage openings visible and ask about routine cleaning.",
        "Record follow-up items with photographs and an opening number.",
      ],
    },
  ],
  "/installation/doors/": [
    {
      title: "Threshold, support and the daily walking route",
      paragraphs: [
        "The threshold joins the inside floor, the door frame and the exterior landing. Compare their levels before selecting the system. A low-profile detail in a display does not establish the appropriate weather-management or access detail at your home.",
        "For a hinged door, draw the full swing and check handles against walls, railings and a secondary storm door. For a slider, include the track, screen and panel parking position. A wider frame does not always produce the wider usable passage you expect.",
      ],
    },
    {
      title: "Include the complete entrance assembly",
      table: {
        headers: ["Selection", "Installation consequence"],
        rows: [
          [
            "Sidelites and transom",
            "Total frame size, supporting construction and finishing all change.",
          ],
          [
            "Single or double leaf",
            "Handing, secondary-leaf hardware and clear passage need confirmation.",
          ],
          [
            "Smart or multi-point lock",
            "Preparation and compatibility must be agreed before ordering.",
          ],
          [
            "Patio track",
            "Continuous support, level installation and clear drainage are important.",
          ],
          [
            "Replacement or enlargement",
            "A structural opening change needs its own scope and review.",
          ],
        ],
      },
    },
    {
      title: "What to check before the crew leaves",
      paragraphs: [
        "Open and close the door using the normal handle, then test each locking function. Review the screen and the secondary leaf if present. Ask how the sill should be cleaned and which adjustment or service instructions apply.",
        "Check the agreed finish on both sides of the assembly. Product operation and surrounding trim are separate completion items, so document either one clearly if it needs further attention.",
      ],
    },
  ],
  "/installation/cut-out/": [
    {
      title: "A scope map for a new or enlarged opening",
      table: {
        headers: ["Workstream", "Information needed before ordering"],
        rows: [
          [
            "Design",
            "Intended room use, desired opening and the actual wall construction.",
          ],
          [
            "Structure",
            "Responsible professional’s support detail and any required drawings.",
          ],
          [
            "Services",
            "Identification and coordination of affected electrical, plumbing or other services.",
          ],
          [
            "Exterior",
            "Grade, drainage, window well or landing and cladding transitions.",
          ],
          [
            "Approval",
            "Applicable project review and who obtains the necessary authorization.",
          ],
          [
            "Finish",
            "Interior wall repair, casing, exterior finish and cleanup boundaries.",
          ],
        ],
      },
    },
    {
      title: "Avoid separating the window from the construction plan",
      paragraphs: [
        "A new basement opening and a living-room conversion to patio doors have different surrounding work. In both cases, the product dimensions should follow the approved construction detail. Ordering first can constrain the design before the opening, support and exterior route have been resolved.",
        "Ask for a drawing that relates the frame to the wall and the finished levels. If the scope changes, coordinate the structural, water-management and finishing details together. A larger hole with a well-made window is not a complete construction specification.",
      ],
    },
  ],
  "/resources/buying-guide/": [
    {
      title: "Build an opening schedule before comparing totals",
      table: {
        headers: ["Record", "Why it helps"],
        rows: [
          [
            "Room and opening number",
            "Connects photographs, measurements and quote lines.",
          ],
          [
            "Existing concern",
            "Distinguishes difficult operation, moisture, appearance and comfort goals.",
          ],
          [
            "Proposed style",
            "Identifies fixed, opening and combined sections.",
          ],
          [
            "Glass and profile",
            "Keeps the exact package visible when comparing alternatives.",
          ],
          [
            "Finish and coverings",
            "Coordinates colour, grilles, trim and blind clearance.",
          ],
          [
            "Installation",
            "Shows retained frame, full frame or structural changes separately.",
          ],
        ],
      },
    },
    {
      title: "Make three decisions in the right order",
      paragraphs: [
        "First identify what the project needs to solve. A sticking sash, room-side condensation and a desire for wider backyard access do not point to the same scope. Photograph the existing condition and explain how you use the room.",
        "Then compare suitable product configurations. Try the opening action, inspect a profile section and view the glass and finish under realistic lighting. Finally, connect the preferred configuration to measured dimensions and the complete installation scope.",
        "Keep optional upgrades visible. Ask which price difference comes from glazing, a different profile, colour, hardware or extra finishing. That lets you phase the project or adjust the specification without accidentally removing essential work.",
      ],
    },
    {
      title: "Questions to bring to the showroom",
      bullets: [
        "Can I operate the style being proposed for this room?",
        "Which frame section, glass and hardware would my order use?",
        "What are the approved size limits for that combination?",
        "How will the blind, screen and handle fit together?",
        "Which product and installation records will I receive?",
        "What needs to be measured at the home before the order is final?",
      ],
    },
  ],
  "/resources/condensation/": [
    {
      title: "Locate the moisture before choosing a remedy",
      table: {
        headers: ["Where you see it", "Useful next step"],
        rows: [
          [
            "Room-facing glass",
            "Record indoor conditions, airflow around the window and whether coverings are closed.",
          ],
          [
            "Between the panes",
            "Photograph the persistent fog or droplets for a sealed-unit assessment.",
          ],
          [
            "Exterior glass",
            "Record when it appears and the outdoor conditions; it is distinct from indoor surface moisture.",
          ],
          [
            "Frame or surrounding wall",
            "Document staining, softness or recurring water paths for an opening assessment.",
          ],
        ],
      },
    },
    {
      title: "Keep observations specific",
      paragraphs: [
        "Take a photograph before wiping the surface, then note which side you can reach. Record the time, room and whether the condition is temporary or persistent. Closed blinds, furniture and deep sills can influence local air movement, so include the surrounding space in one photograph.",
        "Moisture on the room side is not automatically proof that the sealed glass unit has failed. Likewise, a replacement window alone does not resolve every indoor humidity or wall-water problem. Identify the location and cause before deciding what work is needed.",
      ],
    },
    {
      title: "When to request an assessment",
      paragraphs: [
        "Recurring water around the frame, visible deterioration or persistent moisture between panes should be documented for review. Give the opening number, approximate installation date if known and any product information you have. Avoid dismantling sealed glazing or covering drainage outlets in an attempt to stop the symptom.",
      ],
    },
  ],
  "/resources/care-guide/": [
    {
      title: "Care follows the operating mechanism",
      table: {
        headers: ["Window or door", "Routine areas to inspect"],
        rows: [
          [
            "Casement / awning",
            "Operator, hinges, locking points and compression-seal contact surfaces.",
          ],
          [
            "Hung window",
            "Balance behaviour, meeting rails and permitted tilt components.",
          ],
          [
            "Sliding window / patio door",
            "Tracks, rollers, locks, screen travel and drainage outlets.",
          ],
          [
            "Tilt-and-turn",
            "Handle sequence, perimeter hardware and unobstructed inward movement.",
          ],
          [
            "Fixed glass",
            "Glass condition, perimeter seals and surrounding finish.",
          ],
          [
            "Entry door",
            "Hinges, latch, sweep, threshold and the approved painted or stained finish.",
          ],
        ],
      },
    },
    {
      title: "Clean without changing the designed water path",
      paragraphs: [
        "Use the cleaner and method approved for the actual glass, frame and finish. Start gently, remove loose debris and avoid treating every surface with the same abrasive product. Coated glass, painted frames and textured door skins can have different instructions.",
        "Keep designated drainage outlets clear. Do not caulk over openings because they appear to be gaps. If you are unsure whether a detail is a drain or an installation concern, photograph it and ask for guidance before modifying it.",
      ],
    },
    {
      title: "Record a developing problem early",
      paragraphs: [
        "A panel that becomes harder to move, a lock that requires force or a seal that no longer sits correctly deserves assessment. Describe what changed and whether it happens through the full movement or only near closing. Do not remove restraints or force unfamiliar hardware.",
        "Retain the order schedule and care documents so the relevant model and components can be identified. A short video of the operation can help a service team understand the symptom, provided it can be recorded safely.",
      ],
    },
  ],
  "/resources/glossary/": [
    {
      title: "Measurements that should not be confused",
      table: {
        headers: ["Term", "Meaning in the project"],
        rows: [
          [
            "Rough opening",
            "The building opening prepared to receive the assembly.",
          ],
          ["Frame size", "The outside dimensions of the supplied frame."],
          [
            "Clear opening",
            "The unobstructed space available when the selected configuration is open.",
          ],
          ["Sightline", "The visible framing around or between glass areas."],
          [
            "Frame depth",
            "The dimension through the profile toward the inside and outside.",
          ],
          [
            "Jamb extension",
            "A finishing component extending toward the interior wall surface.",
          ],
          [
            "Mullion / joining detail",
            "The division or connection between adjacent units, with system-specific support requirements.",
          ],
        ],
      },
    },
    {
      title: "Glass and entrance terminology",
      table: {
        headers: ["Term", "How to use it"],
        rows: [
          [
            "Insulated glass unit (IGU)",
            "A sealed multi-pane assembly, distinct from the complete window.",
          ],
          [
            "Spacer",
            "The component separating panes around the edge of the sealed unit.",
          ],
          [
            "Low-E",
            "A coating feature that must be specified with the full glass package.",
          ],
          ["Sidelite", "A glazed section beside an entry door."],
          ["Transom", "A section above the door or window."],
          ["Active leaf", "The door leaf normally used for everyday passage."],
          [
            "Handing",
            "The agreed opening orientation, described from a specified viewing side.",
          ],
          [
            "Threshold",
            "The lower entrance transition that coordinates support, access and water management.",
          ],
        ],
      },
    },
    {
      title: "Use the terms on the quote",
      paragraphs: [
        "If two estimates use different words, ask what physical components and work each one includes. A clear drawing and opening schedule are more reliable than assuming that insert, retrofit or complete replacement means exactly the same scope to every provider.",
      ],
    },
  ],
  "/support/": [
    {
      title: "Send a useful service description",
      table: {
        headers: ["Information", "Example of what to record"],
        rows: [
          [
            "Opening",
            "Kitchen window 2 or rear patio door, matching your project schedule.",
          ],
          [
            "Symptom",
            "The lock catches only when the sash is pushed, or the moving panel binds near one end.",
          ],
          [
            "Timing",
            "When it started and whether it is constant or intermittent.",
          ],
          [
            "Evidence",
            "A full view, close-up and a short safe operation video if useful.",
          ],
          [
            "Product record",
            "Order reference, model information and installation date if available.",
          ],
        ],
      },
    },
    {
      title: "Separate product care from an adjustment",
      paragraphs: [
        "Cleaning a track or accessible seal surface is different from adjusting hardware. Follow the product instructions and avoid experimenting with unfamiliar screws, restraints or glazing components. Describe the issue before altering the assembly.",
        "If the concern involves water, photograph where it appears and the surrounding frame, wall and outdoor condition. That helps distinguish a glass, operation, perimeter or drainage assessment and identify the appropriate next step.",
      ],
    },
  ],
  "/warranty/": [
    {
      title: "Read coverage by component and responsibility",
      table: {
        headers: [
          "Coverage item",
          "What to confirm in the applicable document",
        ],
        rows: [
          [
            "Frame and sash",
            "Covered defects, term and conditions for the specified product.",
          ],
          [
            "Sealed glass",
            "The defined glass-unit coverage and any exclusions.",
          ],
          [
            "Hardware and screens",
            "Component coverage and service arrangements.",
          ],
          [
            "Finish",
            "Paint or coating conditions, permitted care and exposure limitations.",
          ],
          [
            "Installation labour",
            "Who provides it, what is covered and how a claim is assessed.",
          ],
          [
            "Transfer or registration",
            "Any required process and deadlines stated in the actual warranty.",
          ],
        ],
      },
    },
    {
      title: "Keep the evidence needed for future service",
      paragraphs: [
        "Store the approved product schedule, invoice, warranty document and any registration confirmation together. A generic claim such as lifetime does not explain which components, labour or conditions are included. Read the specific supplied documents before treating two offers as equivalent.",
        "Record later modifications, such as aftermarket films or hardware changes, and check compatibility before proceeding. If you request service, provide the relevant opening and a clear description of the concern so coverage and responsibility can be assessed.",
      ],
    },
  ],
  "/financing/": [
    {
      title: "Phase the work without losing the specification",
      paragraphs: [
        "Begin with openings that need condition or operation assessment, then list desired comfort and appearance upgrades. A phased project is easier to coordinate when the profile, finish and grille choices are recorded before the first order.",
        "Separate necessary opening repairs from optional glazing or design changes. Request clear alternatives rather than a lower total with an unclear scope. The same opening schedule can help compare doing the work together with completing it in stages.",
      ],
    },
    {
      title: "Build a complete budget",
      table: {
        headers: ["Budget line", "What to identify"],
        rows: [
          [
            "Products",
            "Quantity, measured dimensions and selected configurations.",
          ],
          [
            "Options",
            "Glass, colour, hardware, screens and surrounding entrance sections.",
          ],
          ["Installation", "Removal method, access, repairs and finishing."],
          [
            "Other work",
            "Structural changes, related trades and scope outside the product installation.",
          ],
          [
            "Offer or payment terms",
            "Written eligibility, payment schedule and any applicable charges.",
          ],
        ],
      },
    },
    {
      title: "Review payment details in writing",
      paragraphs: [
        "If a payment or financing option is offered, compare the actual written terms and the total amount payable. This preview does not advertise a lender, approval, interest rate or monthly payment. A product price reference should not be presented as a confirmed credit offer.",
      ],
    },
  ],
  "/about/": [
    {
      title: "The conversation connects the product to your home",
      paragraphs: [
        "Factory Lane brings the product discussion, showroom comparison and home project planning together. The aim is a clear path from the window or door you can inspect to the configuration that is specified for your opening.",
        "A showroom visit lets you compare scale, finishes and movement. An in-home assessment reveals the frame condition, installation access and surrounding finish. These are complementary steps: seeing a display helps you choose, while measurement and assessment establish the scope.",
      ],
    },
    {
      title: "What a transparent specification looks like",
      bullets: [
        "A named opening and an approved configuration for each room.",
        "A clear record of glass, frame, hardware and finish selections.",
        "An installation scope that describes removal and surrounding work.",
        "Documents that match the supplied products and responsibilities.",
      ],
      links: [
        { label: "How to compare products in person", href: "/showroom/" },
        { label: "Our factory-direct approach", href: "/why-factory-lane/" },
      ],
    },
  ],
  "/why-factory-lane/": [
    {
      title: "Direct access should produce clearer answers",
      paragraphs: [
        "Working directly with production should help connect a design choice to an actual configuration. The useful questions are practical: which profile is being supplied, what glass it can take, which hardware supports the chosen sash and which record describes its performance.",
        "Factory Lane’s approach combines that product conversation with a place to inspect full-size displays. You can compare the appearance and operation before the final measured scope is agreed, instead of selecting every detail from a small photograph.",
      ],
    },
    {
      title: "Compare the evidence behind an offer",
      table: {
        headers: ["What matters", "What you should be able to review"],
        rows: [
          [
            "Product identity",
            "The actual series, model or component specification.",
          ],
          [
            "Configuration",
            "Dimensions, glass, finish, hardware and screen arrangement.",
          ],
          [
            "Physical comparison",
            "A relevant display, sample or documented product detail.",
          ],
          ["Installation", "Existing-condition assessment and written scope."],
          ["Aftercare", "Applicable care, warranty and service information."],
        ],
      },
    },
    {
      title: "Choose the consultation that suits your next decision",
      paragraphs: [
        "If your main question is how a system feels, start with the showroom. If your main concern is the condition of the existing opening or the installation scope, begin with the home-estimate route. Final ordering connects the selected product to confirmed measurements in either case.",
      ],
    },
  ],
  "/showroom/": [
    {
      title: "What to compare during your visit",
      table: {
        headers: ["Display or sample", "Try this"],
        rows: [
          [
            "Opening window",
            "Reach the handle, operate the locks and compare the moving sash.",
          ],
          [
            "Profile section",
            "Find the glass, seals, frame chambers and visible sightline.",
          ],
          [
            "Entry door",
            "Compare panel detail, privacy glass and the closing action.",
          ],
          [
            "Patio system",
            "Test daily access, full movement, screen and threshold.",
          ],
          [
            "Finishes",
            "View interior and exterior samples near natural light.",
          ],
          [
            "Blinds",
            "Check how brackets and fabric clear handles and moving panels.",
          ],
        ],
      },
    },
    {
      title: "Bring the room into the conversation",
      paragraphs: [
        "A full photograph of the opening is more useful than a close-up of the glass alone. Include the counter, furniture, curtains, sill and the outside conditions that could affect movement. Bring approximate dimensions for discussion; final ordering still requires confirmed measurements.",
        "For an entrance, include the sidelites, transom, steps and nearby windows. For a patio door, show the route to the backyard and the outside landing. These details help compare a display with the way your own home is used.",
      ],
    },
    {
      title: "Leave with a clear next step",
      paragraphs: [
        "Record the systems and finishes you prefer, any questions that need a model-specific answer and the openings that require an in-home assessment. A productive showroom discussion narrows the selection and makes the later measured quote easier to understand.",
      ],
    },
  ],
  "/contact/": [
    {
      title: "Choose the right starting point",
      table: {
        headers: ["Your main question", "Useful information to include"],
        rows: [
          [
            "Replacement estimate",
            "Project address, opening list, photographs and existing concerns.",
          ],
          [
            "Showroom visit",
            "Product types, design priorities and preferred visit times.",
          ],
          [
            "Existing product support",
            "Opening reference, symptom and available order information.",
          ],
          [
            "Larger architectural project",
            "Drawings, approximate scope, intended use and coordination contacts.",
          ],
        ],
      },
    },
    {
      title: "From enquiry to a confirmed arrangement",
      paragraphs: [
        "Describe whether you want a home assessment or an in-person product discussion. Include the location and scope so the appropriate visit can be coordinated. A preferred time is a request until the appointment is confirmed.",
        "Avoid sending unnecessary sensitive documents. Product questions usually begin with the opening, design goals and relevant photographs. The final order and appointment details can be completed through the agreed process.",
      ],
    },
  ],
};
export function deepenPlanning(pages: ContentPage[]) {
  for (const p of pages) {
    const extra = additions[p.path];
    if (extra) p.sections.push(...extra);
  }
}
