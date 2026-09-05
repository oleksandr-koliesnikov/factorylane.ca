import type { NextConfig } from "next";

// The first stage is exported for Cloudflare Pages. Booking is connected in the next stage.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
};
export default config;
