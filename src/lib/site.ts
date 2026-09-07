export const site = {
  name: "Factory Lane Windows & Doors",
  url: "https://factorylane.ca",
  enquiryEmail: "olexkol44@gmail.com",
  hours: [
    ["Monday–Friday", "9:00 AM – 6:00 PM"],
    ["Saturday", "9:00 AM – 3:00 PM"],
    ["Sunday", "By appointment"],
  ],
  cities: [
    "Toronto",
    "Vaughan",
    "Richmond Hill",
    "Markham",
    "Mississauga",
    "Brampton",
    "Oakville",
    "Aurora",
    "Newmarket",
  ],
};
export const campaign = {
  id: "free-single-roll-blinds",
  title: "A little more comfort. On us.",
  offer: "Buy 3 or more windows and get single roll blinds free.",
  minimumWindows: 3,
};
// Temporary edit: production 0–8, showroom 8–17, illustrative backyard 17–23.
// Replace source and chapter times together after the professional shoot.
export const hero = {
  source: "/media/hero-temporary.mp4",
  mobileSource: "/media/hero-mobile.mp4",
  poster: "/media/hero-poster.webp",
  initialTime: 8,
  chapters: [
    {
      label: "Production",
      start: 0,
      end: 8,
      caption: "A closer look at how it’s made",
    },
    {
      label: "Showroom",
      start: 8,
      end: 17,
      caption: "Step inside. See the difference.",
    },
    {
      label: "Comfort",
      start: 17,
      end: 23,
      caption: "Open to a greener everyday · visual concept",
    },
  ],
};
export const products = [
  {
    id: "windows",
    name: "Windows",
    image: "windows",
    line: "More light. More possibilities.",
    description:
      "Find the right balance of daylight, ventilation and style. Explore opening types, glass options and frame details together.",
    types: [
      "Casement",
      "Awning",
      "Picture & fixed",
      "Sliding",
      "Single & double hung",
      "Bay & bow",
    ],
    detail:
      "Compare how each window opens, the view it frames and how it fits your room. Measurements and the installation method are confirmed at your home.",
  },
  {
    id: "entry-doors",
    name: "Entry doors",
    image: "entry-doors",
    line: "A welcome that feels like you.",
    description:
      "Bring your entrance together with steel and fiberglass doors, decorative glass and complementary sidelites.",
    types: ["Steel", "Fiberglass", "Decorative glass", "Sidelites & transoms"],
    detail:
      "See finishes and glass in person. We’ll help you consider privacy, natural light, swing direction and the space around your entrance.",
  },
  {
    id: "patio-doors",
    name: "Patio doors",
    image: "patio-doors",
    line: "Open up your everyday.",
    description:
      "Connect your living space to the outdoors. Explore sliding and multi-panel configurations in the showroom.",
    types: ["Sliding", "Garden", "Bifold", "Multi-panel"],
    detail:
      "Try the operation, compare the threshold and talk through your opening size. Available configurations depend on the selected system.",
  },
];
export const faqs = [
  [
    "Can I see the windows and doors before I decide?",
    "Yes. Visit our showroom to see full-size displays, compare opening styles, inspect profiles and finishes, and talk through options for your home. You can choose a showroom appointment or start with a free estimate at home.",
  ],
  [
    "What does working directly with manufacturing mean?",
    "Factory Lane works directly with manufacturing to coordinate product selection and ordering. We help you understand what is going into your home, from the profile and glass to the opening style, before your order is placed.",
  ],
  [
    "What affects the cost of replacing my windows?",
    "Window size, opening style, glass package, finish and installation method all affect the price. The condition of the existing opening and any finishing work matter too. Your home estimate is where we confirm the scope and prepare an itemized quote.",
  ],
  [
    "How does the free blinds offer work?",
    campaign.offer +
      " Ask us about the eligible blinds, quantities and installation details when discussing your window project.",
  ],
  [
    "Do I need to visit the showroom first?",
    "You can start either way. Choose a free estimate at your home if you would like to discuss existing openings, or a showroom appointment if you would like to compare products in person.",
  ],
  [
    "Which areas do you serve?",
    "We serve Toronto and the Greater Toronto Area, including Vaughan, Richmond Hill, Markham, Mississauga and Brampton. Share your postal code when arranging a home estimate so we can confirm your location.",
  ],
];
