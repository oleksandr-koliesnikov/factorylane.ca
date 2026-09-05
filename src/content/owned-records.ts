import type { ContentPage } from "./types";

// Populate with approved Factory Lane records. Never seed with another firm's work.
export type ProjectRecord = {
  slug: string;
  approved: boolean;
  title: string;
  description: string;
  cityPath: string;
  brief: string;
  solution: string[];
  installation: string[];
  outcome: string;
  products: string[];
  photos: { src: string; alt: string; caption: string }[];
};
export type DoorModelRecord = {
  slug: string;
  approved: boolean;
  title: string;
  description: string;
  collectionPath: string;
  modelCode: string;
  specifications: [string, string][];
  options: string[];
  photos: { src: string; alt: string; caption: string }[];
  related: string[];
};
export const projects: ProjectRecord[] = [];
export const doorModels: DoorModelRecord[] = [];

export const ownedPages: ContentPage[] = [
  ...projects
    .filter((p) => p.approved)
    .map((p): ContentPage => ({
      path: `/projects/${p.slug}/`,
      title: p.title,
      description: p.description,
      eyebrow: "OUR PROJECTS / A CLOSER LOOK",
      intro: p.brief,
      parent: "/projects/",
      kind: "guide",
      gallery: p.photos,
      sections: [
        { title: "The homeowner’s brief", paragraphs: [p.brief] },
        {
          title: "The selected solution",
          paragraphs: p.solution,
          links: p.products.map((href) => ({
            href,
            label: href.split("/").filter(Boolean).at(-1)!.replaceAll("-", " "),
          })),
        },
        { title: "Installation & finishing", paragraphs: p.installation },
        { title: "The finished result", paragraphs: [p.outcome] },
      ],
      related: [...new Set([...p.products, p.cityPath, "/installation/"])],
    })),
  ...doorModels
    .filter((p) => p.approved)
    .map((p): ContentPage => ({
      path: `/catalog/models/${p.slug}/`,
      title: p.title,
      description: p.description,
      eyebrow: `DOOR CATALOGUE / ${p.modelCode}`,
      intro: p.description,
      parent: p.collectionPath,
      kind: "product",
      gallery: p.photos,
      sections: [
        {
          title: "Model specifications",
          table: {
            headers: ["Detail", "Specification"],
            rows: p.specifications,
          },
        },
        { title: "Available configurations", bullets: p.options },
        {
          title: "Confirm your complete entrance",
          paragraphs: [
            "Your quotation identifies the selected model, opening dimensions, frame, glass, finish, hardware and installation scope. Review that complete specification before ordering.",
          ],
          links: [
            {
              label: "Compare in the showroom",
              href: "/appointments/showroom/",
            },
          ],
        },
      ],
      related: [...new Set([p.collectionPath, ...p.related])],
    })),
];
