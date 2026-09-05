import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
export const metadata: Metadata = {
  title: "Book a Showroom Appointment",
  description:
    "Plan a Factory Lane showroom visit to compare full-size windows and doors, profiles, glass and finishes. Choose a preferred day and tell us about your project.",
  alternates: { canonical: "/appointments/showroom/" },
};
export default function Appointment() {
  return <BookingForm mode="showroom" />;
}
