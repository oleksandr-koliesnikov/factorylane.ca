import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/common";
import { pageRobots } from "@/lib/indexing";
const sans = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2",
      weight: "600",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Arial"],
});
const serif = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia"],
  adjustFontFallback: "Times New Roman",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://factorylane.ca"),
  title: {
    default:
      "Factory Lane | Factory-Direct Windows & Doors in Toronto & the GTA",
    template: "%s | Factory Lane",
  },
  description:
    "Explore factory-direct windows and doors with Factory Lane. Compare products in our showroom or start with a free estimate at your Toronto or GTA home.",
  // Keep previews out of search until contacts, terms and lead delivery are approved.
  robots: pageRobots(),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Factory Lane Windows & Doors",
    images: [
      {
        url: "/media/windows.webp",
        width: 1600,
        height: 1200,
        alt: "Window displays in the showroom",
      },
    ],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
