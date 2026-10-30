import type { Metadata } from "next";

// Child metadata objects replace the inherited Open Graph object in Next.js.
export function socialMetadata(
  path: string,
  title: string,
  description: string,
  image = { url: "/media/windows.webp", alt: "Window displays in the showroom" },
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "en_CA",
      siteName: "Factory Lane Windows & Doors",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
