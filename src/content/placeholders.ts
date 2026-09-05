import type { ContentPage } from "./types";
export const evidencePages: ContentPage[] = [
  {
    path: "/projects/",
    title: "Our window & door projects",
    description:
      "Factory Lane project stories will document the opening, selected products, installation and finished result with our own photographs.",
    eyebrow: "PROJECTS / REAL HOMES, TOLD PROPERLY",
    intro:
      "Every project has a reason behind it. Our case studies will show the starting point, the chosen products and the finished work, using our own project photographs.",
    parent: "/",
    kind: "hub",
    review:
      "Own projects and permission-cleared photography are required. No partner projects are presented as Factory Lane work.",
    sections: [
      {
        title: "What you will find in each project story",
        bullets: [
          "The homeowner’s brief and the existing openings.",
          "Selected window or door types, profile, glass and finish.",
          "Installation method and any opening changes.",
          "Before-and-after photographs and finishing details.",
          "Confirmed scope and budget context where approved.",
        ],
      },
      {
        title: "Our first project stories are being prepared",
        paragraphs: [
          "The project library will be organized by windows, entry doors and patio systems, with location and product links where appropriate. The first approved stories will appear here once their photographs and details are ready.",
          "In the meantime, explore real showroom displays and the product information to plan your own project.",
        ],
        links: [
          { label: "Visit the showroom", href: "/showroom/" },
          { label: "Explore window types", href: "/windows/" },
          { label: "Explore door systems", href: "/doors/" },
        ],
      },
    ],
    related: ["/windows/", "/doors/", "/service-areas/", "/estimate/"],
  },
  {
    path: "/reviews/",
    title: "Customer reviews",
    description:
      "Verified Factory Lane customer feedback will be published with its source and permission, without importing reviews from another business.",
    eyebrow: "REVIEWS / EXPERIENCES THAT BELONG HERE",
    intro:
      "Customer feedback should describe real Factory Lane experiences. Our review section will be populated with verified feedback and its source.",
    parent: "/about/",
    kind: "company",
    review:
      "No verified Factory Lane review feed or aggregate rating has been supplied.",
    sections: [
      {
        title: "Our review collection is being prepared",
        paragraphs: [
          "We will publish the customer’s approved feedback and a clear source where available. This preview does not display borrowed reviews, a sample star rating or an invented project count.",
        ],
      },
      {
        title: "Get to know the approach",
        paragraphs: [
          "You can already explore how we help homeowners compare products, understand the specification and choose between a showroom appointment and a home estimate.",
        ],
        links: [
          { label: "Why Factory Lane", href: "/why-factory-lane/" },
          { label: "Our showroom", href: "/showroom/" },
        ],
      },
    ],
    related: ["/about/", "/projects/", "/showroom/"],
  },
  {
    path: "/blog/",
    title: "The Factory Lane blog",
    description:
      "The Factory Lane blog is being prepared. Explore product guides and comparisons while future articles are developed.",
    eyebrow: "JOURNAL / COMING LATER",
    intro:
      "Stories, inspiration and practical ideas for your home are on their way. No blog articles are published yet.",
    parent: "/resources/",
    kind: "hub",
    review: "Blog content deliberately deferred by the owner.",
    sections: [
      {
        title: "Useful reading right now",
        links: [
          {
            label: "Window and door buying guide",
            href: "/resources/buying-guide/",
          },
          { label: "Compare products", href: "/compare/" },
          { label: "Care and support", href: "/support/" },
        ],
      },
    ],
    related: ["/resources/", "/windows/", "/doors/"],
  },
  ...[
    [
      "privacy",
      "Privacy information",
      "The current preview keeps form entries in the page state while you review them. It does not submit those entries to a server, CRM or calendar. Reloading the page clears the draft.",
      "Before live forms are enabled, this page will identify the business contact, purposes of collection, providers involved, retention approach and how a person can make a privacy enquiry.",
    ],
    [
      "cookies",
      "Cookies & website storage",
      "This preview does not include advertising tags or an analytics integration. Form drafts are not written to browser storage by the application.",
      "Any analytics, booking or CRM integration will be reviewed for its cookies, storage and consent requirements before launch, and this page will be updated to describe the actual setup.",
    ],
    [
      "terms",
      "Website & quotation terms",
      "The current site is a project preview. Price ranges are planning references, and form review does not create an order, a binding quote or a confirmed appointment.",
      "The final business terms, contracting entity, payment conditions and applicable product and installation documents must be confirmed before public launch.",
    ],
  ].map(([slug, title, intro, detail]): ContentPage => ({
    path: `/${slug}/`,
    title,
    description: `${title} for the current Factory Lane website preview and the information to be confirmed before live services are enabled.`,
    eyebrow: "WEBSITE INFORMATION",
    intro,
    parent: "/",
    kind: "support",
    review:
      "Final policy must reflect the approved business details and live integrations.",
    sections: [
      { title: "Current preview", paragraphs: [intro] },
      {
        title: "Before public launch",
        paragraphs: [
          detail,
          "Use the contact page to see the available enquiry routes. Live contact and delivery details will be added once confirmed.",
        ],
      },
    ],
    related: ["/contact/", "/privacy/", "/terms/", "/cookies/"].filter(
      (p) => p !== `/${slug}/`,
    ),
  })),
];
