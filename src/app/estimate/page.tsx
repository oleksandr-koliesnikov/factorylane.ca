import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
export const metadata: Metadata = {
  title: "Free In-Home Estimate",
  description:
    "Plan your Factory Lane window and door project with a free estimate at home. Share your openings, postal code and priorities for a detailed consultation.",
  alternates: { canonical: "/estimate/" },
};
export default function Estimate() {
  return <BookingForm mode="home" />;
}
