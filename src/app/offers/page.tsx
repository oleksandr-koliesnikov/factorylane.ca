import type { Metadata } from "next";
import Link from "@/components/site-link";
import { Actions } from "@/components/common";
import { Icon } from "@/components/icons";
import { campaign } from "@/lib/site";
export const metadata: Metadata = {
  title: "Free Single Roll Blinds Offer",
  description: campaign.offer,
  alternates: { canonical: "/offers/" },
};
export default function Offers() {
  return (
    <main id="main" className="offer-page container">
      <Link href="/" className="breadcrumb">
        Home / Offers
      </Link>
      <div className="offer-page-grid">
        <div>
          <p className="eyebrow">THE FACTORY LANE OFFER</p>
          <h1>
            A little more comfort.
            <br />
            <em>On us.</em>
          </h1>
          <p className="offer-statement">{campaign.offer}</p>
          <p>
            Bring your window project and finishing touches together. Start with
            a free estimate at home or explore your options in our showroom.
          </p>
          <Actions campaign />
          <details className="offer-terms" open>
            <summary>Offer details</summary>
            <p>
              The minimum purchase is three windows. Gift quantities, eligible
              blinds, size and colour options, installation and combination with
              other offers are confirmed with our team before you place an
              order.
            </p>
            <p>
              Ask us to include the offer in your free estimate. Sending an
              enquiry does not place an order or confirm an appointment.
            </p>
          </details>
        </div>
        <div
          className="offer-graphic"
          aria-label="Three windows and single roll blinds"
        >
          <div className="blinds-illustration">
            {[0, 1, 2].map((i) => (
              <div className="illustrated-window" key={i}>
                <div className="roller-blind" />
                <div className="window-divider" />
              </div>
            ))}
          </div>
          <div className="gift-card">
            <Icon name="gift" size={32} />
            <span>
              3+ WINDOWS
              <br />
              <strong>Single roll blinds. Free.</strong>
            </span>
          </div>
          <small>Illustration · gift style to be confirmed</small>
        </div>
      </div>
    </main>
  );
}
