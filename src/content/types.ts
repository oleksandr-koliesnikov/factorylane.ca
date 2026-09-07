export type ContentSection = {
  title: string;
  paragraphs?: string[];
  video?: {
    file: string;
    poster: string;
    title: string;
    description: string;
    transcript: string;
  };
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};
export type ContentPage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  parent: string;
  kind:
    | "product"
    | "hub"
    | "guide"
    | "city"
    | "company"
    | "support"
    | "extension"
    | "catalog";
  sections: ContentSection[];
  faq?: [string, string][];
  related: string[];
  review?: string;
  priceProduct?: string;
  video?: string;
  city?: string;
};
