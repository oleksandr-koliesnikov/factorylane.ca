import { socialMetadata } from "@/lib/social-metadata";
import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
export const metadata: Metadata = {
  title: "Free In-Home Estimate",
  description:
    "Plan your Factory Lane window and door project with a free estimate at home. Share your openings, postal code and priorities for a detailed consultation.",
  alternates: { canonical: "/estimate/" },
  ...socialMetadata("/estimate/", "Free In-Home Estimate", "Plan your Factory Lane window and door project with a free estimate at home. Share your openings, postal code and priorities for a detailed consultation."),
};
export default function Estimate() {
  return <BookingForm mode="home" />;
}
