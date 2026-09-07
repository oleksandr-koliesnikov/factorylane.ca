import type { ContentPage } from "./types";
const pages: ContentPage[] = [
  {
    path: "/installation/",
    title: "Window & door installation",
    description:
      "Understand the complete installation process, from opening assessment and measurement to sealing, finishing and the final walkthrough.",
    eyebrow: "INSTALLATION / THE DETAILS MATTER",
    intro:
      "A good product needs an installation that suits the opening. We begin with the existing conditions, define what will be removed and replaced, and connect the selected product to a clear finishing scope.",
    parent: "/",
    kind: "guide",
    image: "manufacturing",
    sections: [
      {
        title: "Start with what is already there",
        paragraphs: [
          "Measurements are part of the assessment, but the frame condition, surrounding wall, signs of moisture and access all matter. Share photographs of any damage and tell us about previous repairs before the scope is agreed.",
          "Replacing a unit within a sound retained frame is different from removing the entire frame. Creating or enlarging an opening adds another level of work. These methods should not be compared as if they were the same installation.",
        ],
        links: [
          {
            label: "Window replacement methods",
            href: "/installation/window-replacement/",
          },
          {
            label: "Cut-out and opening changes",
            href: "/installation/cut-out/",
          },
        ],
      },
      {
        title: "What the quote should describe",
        bullets: [
          "The exact product configuration and measured opening.",
          "Removal and disposal of the old assembly.",
          "Any identified repair work or opening changes.",
          "Support, fastening, sealing and insulation around the new frame.",
          "Interior jambs and casing, exterior finishing and cleanup.",
        ],
      },
      {
        title: "The final walkthrough",
        paragraphs: [
          "Review opening, closing, locking and screen operation with the team. Look at the finishing and ask how drainage paths should be kept clear. Keep the product specifications and warranty documents with your project records.",
          "If something needs follow-up, describe the opening and the issue with photographs. A service request is easier to assess when the product and installation details can be identified.",
        ],
        links: [
          { label: "Product care and service", href: "/support/" },
          { label: "Warranty information", href: "/warranty/" },
        ],
      },
    ],
    related: [
      "/installation/window-replacement/",
      "/installation/doors/",
      "/compare/retrofit-vs-full-frame/",
      "/pricing/windows/",
    ],
  },
  {
    path: "/installation/window-replacement/",
    title: "Window replacement & installation",
    description:
      "Compare retained-frame and full-frame window replacement, understand the work around the opening and prepare for installation.",
    eyebrow: "INSTALLATION / WINDOWS",
    intro:
      "Window replacement starts by deciding what can remain and what needs to be removed. The condition of the existing frame and wall determines the suitable method, while the selected window defines the new assembly.",
    parent: "/installation/",
    kind: "guide",
    image: "window-detail",
    sections: [
      {
        title: "Retained-frame replacement",
        paragraphs: [
          "An insert or retrofit approach places the replacement into suitable existing framing. It may preserve some surrounding trim, but the retained components must be sound and correctly assessed. The resulting glass area and frame proportions should be reviewed before ordering.",
          "Do not treat retained framing as a way to cover damage. Water entry, distortion or deterioration can change the appropriate scope. Ask the assessor to explain what remains and why it is suitable.",
        ],
      },
      {
        title: "Full-frame replacement",
        paragraphs: [
          "Full-frame work removes the old frame and allows a closer assessment of the rough opening. The new assembly, insulation, seals and interior and exterior finishes are then coordinated with the wall.",
          "The term does not automatically mean changing the opening size or removing surrounding masonry. Structural enlargement is separate work. A detailed quote should make this distinction clear.",
        ],
      },
      {
        title: "Prepare the space",
        bullets: [
          "Clear furniture and window coverings from the work area.",
          "Arrange access through gates, stairs or shared areas.",
          "Discuss protection for flooring and nearby surfaces.",
          "Tell the team about alarms or other devices connected to the opening.",
          "Confirm who handles repairs and finishing outside the quoted scope.",
        ],
      },
      {
        title: "Check the finished window",
        paragraphs: [
          "Operate the sash, lock and screen, then review the surrounding finish. Ask for the care guidance and the applicable product documents. Report any concern with the opening location, photographs and a description of what happens when you use it.",
        ],
      },
    ],
    related: [
      "/compare/retrofit-vs-full-frame/",
      "/installation/cut-out/",
      "/pricing/windows/",
      "/windows/",
    ],
  },
  {
    path: "/installation/doors/",
    title: "Exterior door installation",
    description:
      "Plan door replacement with a complete scope: frame, threshold, hardware, sealing, trim and the space around the opening.",
    eyebrow: "INSTALLATION / DOORS",
    intro:
      "An exterior door installation brings the slab or panels, frame, sill, hardware and wall connection together. Start with the full opening rather than choosing the door leaf in isolation.",
    parent: "/installation/",
    kind: "guide",
    image: "entry-doors",
    sections: [
      {
        title: "Measure more than the slab",
        paragraphs: [
          "The frame, sidelites, transom and threshold determine the size of the assembly. Check the rough opening, finished floor levels, step or landing and the direction in which the door or panels move.",
          "An outward swing, inward swing and sliding track use space differently. Window coverings, furniture, handrails and screen operation all belong in the same discussion.",
        ],
      },
      {
        title: "Make the installation scope explicit",
        paragraphs: [
          "Ask which existing components are removed, how the new frame is supported and sealed, and what interior and exterior finishing is included. Damaged framing or an enlarged opening may require additional work that must be identified separately.",
          "Hardware preparation should match the lock and handle selected. Confirm responsibility for any access-control or alarm equipment before installation.",
        ],
      },
      {
        title: "A practical handover",
        bullets: [
          "Open, close and lock every operating leaf or panel.",
          "Check the screen arrangement and daily access path.",
          "Review threshold care, drainage and any adjustment guidance.",
          "Keep the approved configuration and applicable warranty documents.",
        ],
      },
    ],
    related: ["/doors/entry/", "/doors/patio/", "/pricing/doors/", "/support/"],
  },
  {
    path: "/installation/cut-out/",
    title: "Window cut-outs & opening changes",
    description:
      "Understand the planning behind a new or enlarged opening: structure, drawings, approvals, drainage and complete finishing.",
    eyebrow: "INSTALLATION / CHANGING THE OPENING",
    intro:
      "Creating or enlarging a window or door opening is a building project as well as a product order. Support, wall construction, location and approvals must be addressed before dimensions are finalized.",
    parent: "/installation/",
    kind: "guide",
    image: "manufacturing",
    review:
      "Project-specific structural and municipal requirements must be confirmed before work is authorized.",
    sections: [
      {
        title: "Start with the reason for the change",
        paragraphs: [
          "A larger view, new backyard access and an intended basement bedroom lead to different design questions. Explain the desired use first, then review the opening size, location and operating requirements.",
          "Do not order a larger unit based only on an interior wall measurement. Structure, utilities and exterior conditions can limit what is feasible.",
        ],
      },
      {
        title: "Coordinate design and approvals",
        paragraphs: [
          "The responsible professionals should establish support, required drawings and the applicable approval process. A bedroom or emergency-opening proposal also needs a review of clear opening and exterior access conditions.",
          "Confirm who obtains approvals and who is responsible for each part of the work. Product supply, cutting, structural changes, waterproofing and finishing should be distinguishable in the quote.",
        ],
      },
      {
        title: "Include the surrounding work",
        bullets: [
          "New support and framing where required.",
          "Interior wall and trim finishing.",
          "Exterior wall, flashing and drainage details.",
          "Changes to grades, wells, steps or landings if applicable.",
          "Safe access, protection and removal of debris.",
        ],
      },
    ],
    related: [
      "/windows/egress/",
      "/windows/new-construction/",
      "/doors/patio/",
      "/installation/",
    ],
  },
  {
    path: "/about/",
    title: "About Factory Lane",
    description:
      "Meet the idea behind Factory Lane: direct manufacturing relationships, a real showroom and a considered path from selection to installation.",
    eyebrow: "ABOUT / A MORE PERSONAL WAY TO CHOOSE",
    intro:
      "Factory Lane brings product knowledge, a real showroom and direct manufacturing coordination into one conversation about your home.",
    parent: "/",
    kind: "company",
    image: "showroom",
    sections: [
      {
        title: "A place to make a considered choice",
        paragraphs: [
          "Windows and doors are easier to understand when you can stand beside them. The showroom lets you see full-size displays, feel operating hardware and compare profiles rather than relying on a product thumbnail.",
          "Start with the questions that matter to you. Perhaps a room needs more light, a door no longer suits the entrance or a window is difficult to use. We help turn those observations into a specification you can review.",
        ],
      },
      {
        title: "Direct from manufacturing",
        paragraphs: [
          "We work directly with manufacturing to coordinate the selected products and order details. That connection supports a clear discussion of profile, glass, finish and compatible configurations before your order is placed.",
          "The point is to make the product understandable. We do not ask you to choose from a photograph and hope the details will work out later.",
        ],
      },
      {
        title: "Choose how the conversation begins",
        paragraphs: [
          "Visit the showroom to compare options in person, or start with a free estimate at home to discuss the existing openings. The two paths meet in the same place: a clearly defined project and a written scope.",
        ],
        links: [
          { label: "Visit the showroom", href: "/showroom/" },
          { label: "Get a free home estimate", href: "/estimate/" },
        ],
      },
    ],
    related: [
      "/why-factory-lane/",
      "/showroom/",
      "/installation/",
      "/contact/",
    ],
  },
  {
    path: "/why-factory-lane/",
    title: "Why Factory Lane",
    description:
      "Compare real displays, understand the specification and work with a team connected directly to manufacturing for your window and door project.",
    eyebrow: "OUR DIFFERENCE / KNOW WHAT YOU’RE BRINGING HOME",
    intro:
      "A real showroom. Direct manufacturing coordination. Clear product choices. Factory Lane is built around helping you understand the windows and doors you choose.",
    parent: "/about/",
    kind: "company",
    image: "manufacturing",
    sections: [
      {
        title: "Try the product before deciding",
        paragraphs: [
          "Open the sash, work the lock and compare the frame. A physical display reveals proportions and operating details that are easy to miss online. It also gives you a place to ask specific questions about your own home.",
        ],
      },
      {
        title: "Connect the specification to the order",
        paragraphs: [
          "The opening style, profile, glass, colour and hardware need to work together. Direct coordination with manufacturing helps us review the configuration as a complete product instead of a collection of unrelated upgrades.",
        ],
      },
      {
        title: "Compare a complete scope",
        paragraphs: [
          "Product selection is only part of a replacement project. Measurements, removal, installation and finishing should all be visible in the quote. That clarity lets you compare options and understand how a change affects the scope.",
        ],
      },
      {
        title: "Start where you are comfortable",
        paragraphs: [
          "Some homeowners want to see the products first. Others want to discuss the existing windows at home. Choose the first meeting that helps you move forward, without needing to decide the entire project in advance.",
        ],
      },
    ],
    related: ["/showroom/", "/windows/", "/doors/", "/installation/"],
  },
  {
    path: "/showroom/",
    title: "Visit our windows & doors showroom",
    description:
      "See full-size window and door displays, compare profiles and finishes, and plan your Factory Lane showroom appointment.",
    eyebrow: "SHOWROOM / SEE THE DIFFERENCE IN PERSON",
    intro:
      "Open a window. Try the handle. Look at the profile up close. Our showroom gives you a practical place to compare products before making a decision about your home.",
    parent: "/",
    kind: "company",
    image: "showroom",
    sections: [
      {
        title: "What you can compare",
        bullets: [
          "Window opening styles and the way each sash moves.",
          "Frame and profile samples, including internal sections.",
          "Door operation, thresholds and hardware.",
          "Glass, privacy, finish and trim options for discussion.",
        ],
      },
      {
        title: "Bring your home into the conversation",
        paragraphs: [
          "Photographs, approximate dimensions and a short list of priorities are enough to make a first visit useful. You do not need to arrive with a finished specification. Tell us what you want to improve and which details you would like to keep.",
          "If you already have drawings or a proposed opening schedule, bring them along. We can use the displays to explain options, then confirm final dimensions and compatibility as the project develops.",
        ],
      },
      {
        title: "Plan your visit",
        table: {
          headers: ["Day", "Hours"],
          rows: [
            ["Monday–Friday", "9:00 AM – 6:00 PM"],
            ["Saturday", "9:00 AM – 3:00 PM"],
            ["Sunday", "By appointment"],
          ],
        },
        paragraphs: [
          "Choose a showroom appointment to discuss your preferred meeting time. The full street address, entrance and parking instructions will be added once confirmed; do not travel based on an illustrative address.",
        ],
      },
      {
        title: "Prefer to begin at home?",
        paragraphs: [
          "A free home estimate is useful when existing conditions or installation scope are the main concern. You can still visit the showroom to compare the shortlisted products afterwards.",
        ],
        links: [
          { label: "Arrange an estimate at your home", href: "/estimate/" },
        ],
      },
    ],
    related: ["/appointments/showroom/", "/windows/", "/doors/", "/videos/"],
  },
  {
    path: "/contact/",
    title: "Contact Factory Lane",
    description:
      "Choose a free estimate at home or a showroom appointment to discuss windows and doors for your Toronto and GTA project.",
    eyebrow: "CONTACT / LET’S TALK ABOUT YOUR HOME",
    intro:
      "Tell us where your project is and what you would like to change. Start with an in-home estimate or a showroom conversation, whichever helps you most.",
    parent: "/",
    kind: "company",
    image: "showroom",
    sections: [
      {
        title: "A free estimate at your home",
        paragraphs: [
          "Use the home-estimate form to describe your openings, location and priorities. This is the route for discussing existing conditions, measurements and the proposed installation scope.",
        ],
        links: [{ label: "Start a home estimate", href: "/estimate/" }],
      },
      {
        title: "An appointment in the showroom",
        paragraphs: [
          "Choose this route to compare full-size displays, profiles and finishes. Bring room photographs or drawings if you have them. Meeting times need to be confirmed before you plan the visit.",
        ],
        links: [
          {
            label: "Plan a showroom appointment",
            href: "/appointments/showroom/",
          },
        ],
      },
      {
        title: "Hours and contact details",
        table: {
          headers: ["Day", "Showroom hours"],
          rows: [
            ["Monday–Friday", "9:00 AM – 6:00 PM"],
            ["Saturday", "9:00 AM – 3:00 PM"],
            ["Sunday", "By appointment"],
          ],
        },
        paragraphs: [
          "Email olexkol44@gmail.com to discuss your project. Our forms prepare an email for you to send; appointments are confirmed by reply. Ask for the confirmed showroom address and arrival details before travelling.",
        ],
      },
    ],
    related: ["/showroom/", "/service-areas/", "/support/", "/about/"],
  },
  {
    path: "/warranty/",
    title: "Window & door warranty information",
    description:
      "Understand which warranty documents to request for your windows, glass, hardware, finish and installation, and how to prepare a service enquiry.",
    eyebrow: "SUPPORT / KEEP THE DETAILS TOGETHER",
    intro:
      "Warranty coverage depends on the product, component and installation terms agreed for your order. Keep the actual documents with your approved specification and invoice.",
    parent: "/support/",
    kind: "support",
    sections: [
      {
        title: "Separate the parts of the coverage",
        bullets: [
          "The frame and sash or door assembly.",
          "The sealed glass unit and any applicable seal-failure terms.",
          "Hardware, screens and operating components.",
          "Paint, coating or decorative finishes.",
          "Installation workmanship and agreed finishing.",
        ],
      },
      {
        title: "Questions to settle before ordering",
        paragraphs: [
          "Ask who provides each warranty, when coverage starts, how long it applies and whether labour or service travel is included. Conditions, exclusions and transferability must come from the applicable documents, not a general marketing phrase.",
          "Factory Lane’s final warranty wording and product-specific documents are pending confirmation. This preview does not promise a lifetime warranty, universal free repairs or coverage copied from another company.",
        ],
      },
      {
        title: "Prepare a useful service request",
        paragraphs: [
          "Identify the opening, order reference and component involved. Add photographs and explain whether the issue is constant or happens during a particular movement or weather condition. Avoid forcing hardware or modifying the unit before receiving appropriate guidance.",
        ],
        links: [{ label: "Service and care guidance", href: "/support/" }],
      },
    ],
    related: ["/support/", "/installation/", "/contact/"],
    review:
      "Final Factory Lane warranty documents, issuers, durations and exclusions are required before launch.",
  },
  {
    path: "/support/",
    title: "Window & door care and support",
    description:
      "Keep drainage paths clear, care for finishes and collect the right details when asking for help with a window or door.",
    eyebrow: "SUPPORT / HERE FOR THE DETAILS",
    intro:
      "Good care starts with the instructions for your actual product. Keep the approved specification and warranty documents so the right opening and component can be identified when you need help.",
    parent: "/",
    kind: "support",
    sections: [
      {
        title: "Routine care without guesswork",
        paragraphs: [
          "Remove loose dirt from accessible tracks and keep designed drainage outlets unobstructed. Use the cleaning products and methods allowed by the manufacturer for the finish and glazing.",
          "Inspect the operation and note any change. If a sash or door begins to bind, forcing the handle can make diagnosis harder. Ask for the appropriate guidance rather than adjusting unfamiliar hardware.",
        ],
      },
      {
        title: "Describe the symptom precisely",
        table: {
          headers: ["What you notice", "Useful information to record"],
          rows: [
            [
              "Condensation",
              "Which surface is wet: indoors, outdoors or between panes?",
            ],
            [
              "Difficult operation",
              "Which sash or panel, and at what part of the movement?",
            ],
            [
              "Water entry",
              "Where it appears and the weather or event associated with it.",
            ],
            [
              "Finish concern",
              "Location, photographs and the cleaning products used.",
            ],
          ],
        },
      },
      {
        title: "Requesting assistance",
        paragraphs: [
          "Email olexkol44@gmail.com with your order or installation reference, photographs and a short description of the issue. We will review the details and discuss the next step.",
        ],
        links: [
          { label: "Contact options", href: "/contact/" },
          { label: "Understand warranty documents", href: "/warranty/" },
        ],
      },
    ],
    related: [
      "/warranty/",
      "/resources/condensation/",
      "/resources/care-guide/",
      "/contact/",
    ],
  },
  {
    path: "/financing/",
    title: "Planning your window & door budget",
    description:
      "Understand the project scope before comparing payment options. Factory Lane financing details will be published only when a program is confirmed.",
    eyebrow: "BUDGET / START WITH A CLEAR SCOPE",
    intro:
      "Define the products, installation and finishing first. A clear project price is the basis for discussing any payment arrangement.",
    parent: "/pricing/",
    kind: "support",
    review:
      "No financing program, lender, rate or approval promise has been confirmed.",
    sections: [
      {
        title: "Build the project budget",
        paragraphs: [
          "Separate the openings that need attention from optional changes, then review the specification and installation method for each. This makes it easier to understand the effect of a different glass package, finish or project phase.",
        ],
      },
      {
        title: "Current financing status",
        paragraphs: [
          "A Factory Lane financing program has not yet been confirmed. This page does not advertise a lender, interest rate, deferred-payment offer or guaranteed approval. Program terms will be published when the provider and applicable details are approved.",
        ],
      },
      {
        title: "Useful next steps",
        links: [
          { label: "Window planning ranges", href: "/pricing/windows/" },
          { label: "Door planning ranges", href: "/pricing/doors/" },
          { label: "Request a detailed estimate", href: "/estimate/" },
        ],
      },
    ],
    related: ["/pricing/", "/offers/", "/estimate/"],
  },
];
export const businessPages = pages;
