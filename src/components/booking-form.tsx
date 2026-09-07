"use client";
import { useState, useEffect, useRef } from "react";
import Link from "@/components/site-link";
import { Icon } from "./icons";
import { site } from "@/lib/site";
type Mode = "home" | "showroom";
export function BookingForm({ mode }: { mode: Mode }) {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [offer, setOffer] = useState(false);
  const [data, setData] = useState({
    products: "Windows",
    quantity: "3–5",
    postal: "",
    name: "",
    email: "",
    phone: "",
    day: "",
    message: "",
  });
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setOffer(params.get("offer") === "free-single-roll-blinds");
    const selected = params.get("interest")?.slice(0, 180) ?? "";
    setInterest(selected);
    const category = /patio|sliding|bifold|garden door|lift.and.slide/i.test(
      selected,
    )
      ? "Patio doors"
      : /door/i.test(selected)
        ? "Entry doors"
        : /blind/i.test(selected)
          ? "Blinds"
          : /gutter/i.test(selected)
            ? "Gutters"
            : /gazebo/i.test(selected)
              ? "Gazebos"
              : "Windows";
    setData((previous) => ({ ...previous, products: category }));
  }, []);
  const alternateQuery = new URLSearchParams();
  if (interest) alternateQuery.set("interest", interest);
  if (offer) alternateQuery.set("offer", "free-single-roll-blinds");
  const alternatePath =
    (mode === "home" ? "/appointments/showroom/" : "/estimate/") +
    (alternateQuery.size ? "?" + alternateQuery.toString() : "");
  const emailBody = [
    mode === "home"
      ? "Request: Free estimate at home"
      : "Request: Showroom appointment",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not supplied"}`,
    `Postal code: ${data.postal.toUpperCase()}`,
    `Products: ${data.products}`,
    ...(data.products.includes("Windows") ? [`Windows: ${data.quantity}`] : []),
    ...(interest ? [`Interest: ${interest}`] : []),
    ...(offer ? ["Offer: Free single roll blinds with 3+ windows"] : []),
    `Preferred day: ${data.day || "Flexible"}`,
    "",
    data.message,
    "",
    "Please confirm the meeting time and location by reply.",
  ].join("\r\n");
  const emailHref = `mailto:${site.enquiryEmail}?subject=${encodeURIComponent(mode === "home" ? "Factory Lane — free home estimate request" : "Factory Lane — showroom appointment request")}&body=${encodeURIComponent(emailBody)}`;
  function update(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function next(e: React.FormEvent) {
    e.preventDefault();
    setStep(step + 1);
    setTimeout(() => heading.current?.focus(), 0);
  }
  return (
    <main id="main" className="booking-page container">
      <Link href="/" className="breadcrumb">
        Home / {mode === "home" ? "Free home estimate" : "Showroom appointment"}
      </Link>
      <div className="booking-grid">
        <aside>
          <p className="eyebrow">
            {mode === "home"
              ? "LET’S START AT YOUR HOME"
              : "LET’S MEET IN THE SHOWROOM"}
          </p>
          <h1>
            {mode === "home" ? (
              <>
                Your home.
                <br />
                <em>Your possibilities.</em>
              </>
            ) : (
              <>
                See it. Feel it.
                <br />
                <em>Find your fit.</em>
              </>
            )}
          </h1>
          <p>
            {mode === "home"
              ? "Tell us a little about your project. A home visit helps us understand your openings and prepare a detailed estimate."
              : "Compare full-size displays, feel the hardware and get answers to your questions in person."}
          </p>
          <div className="booking-benefits">
            {(mode === "home"
              ? [
                  "Discuss your goals",
                  "Review your existing openings",
                  "Understand your options",
                ]
              : [
                  "Explore full-size displays",
                  "Compare profiles and finishes",
                  "Talk through your project",
                ]
            ).map((t) => (
              <p key={t}>
                <Icon name="check" size={19} />
                {t}
              </p>
            ))}
          </div>
          {mode === "showroom" && (
            <div className="booking-hours">
              {site.hours.map(([d, t]) => (
                <p key={d}>
                  <span>{d}</span>
                  <strong>{t}</strong>
                </p>
              ))}
            </div>
          )}
          <Link href={alternatePath} className="text-link">
            {mode === "home"
              ? "Prefer to visit the showroom?"
              : "Prefer an estimate at home?"}
            <Icon size={19} />
          </Link>
        </aside>
        <section className="booking-panel">
          <div className="preview-notice">
            <Icon name="ruler" size={18} />
            <span>
              Send your request by email after reviewing the details. We will
              confirm the appointment by reply.
            </span>
          </div>
          <div className="form-progress" aria-label={`Step ${step} of 3`}>
            {["Your project", "Your details", "Review"].map((s, i) => (
              <span className={step >= i + 1 ? "done" : ""} key={s}>
                {i + 1}. {s}
              </span>
            ))}
          </div>
          <h2 ref={heading} tabIndex={-1}>
            {step === 1
              ? "Tell us what you have in mind."
              : step === 2
                ? "How would we reach you?"
                : "Your project at a glance."}
          </h2>
          {interest && (
            <p className="interest-note">Your interest: {interest}</p>
          )}
          {offer && (
            <div className="campaign-note">
              <Icon name="gift" size={18} /> Free single roll blinds offer
              selected
            </div>
          )}
          {step < 3 ? (
            <form onSubmit={next}>
              {step === 1 ? (
                <>
                  <label>
                    What are you interested in?
                    <select
                      name="products"
                      value={data.products}
                      onChange={update}
                    >
                      {[
                        "Windows",
                        "Entry doors",
                        "Patio doors",
                        "Windows & doors",
                        "Blinds",
                        "Gutters",
                        "Gazebos",
                      ].map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </label>
                  {data.products.includes("Windows") && (
                    <label>
                      How many windows?
                      <select
                        name="quantity"
                        value={data.quantity}
                        onChange={update}
                      >
                        {["1–2", "3–5", "6–10", "11+", "Not sure yet"].map(
                          (q) => (
                            <option key={q}>{q}</option>
                          ),
                        )}
                      </select>
                    </label>
                  )}
                  <label>
                    Postal code
                    <input
                      name="postal"
                      value={data.postal}
                      onChange={update}
                      autoComplete="postal-code"
                      placeholder="A1A 1A1"
                      required
                      pattern="[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]"
                      title="Enter a Canadian postal code, such as M5V 2T6"
                      maxLength={7}
                    />
                  </label>
                  <label>
                    Anything you’d like us to know?{" "}
                    <span className="optional">Optional</span>
                    <textarea
                      name="message"
                      value={data.message}
                      onChange={update}
                      maxLength={2000}
                      rows={3}
                      placeholder="Your ideas, questions or project timeline…"
                    />
                  </label>
                </>
              ) : (
                <>
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      value={data.name}
                      onChange={update}
                      required
                      maxLength={100}
                    />
                  </label>
                  <div className="form-row">
                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={update}
                        required
                        maxLength={200}
                      />
                    </label>
                    <label>
                      Phone <span className="optional">Optional</span>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={data.phone}
                        onChange={update}
                        maxLength={30}
                      />
                    </label>
                  </div>
                  <label>
                    Preferred day <span className="optional">Optional</span>
                    <select name="day" value={data.day} onChange={update}>
                      <option value="">Choose a day</option>
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday by appointment",
                        "Flexible",
                      ].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                  <p className="form-help">
                    A preference only. We will confirm the time and meeting
                    details by email.
                  </p>
                </>
              )}
              <div className="form-actions">
                {step === 2 && (
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                )}
                <button className="button primary" type="submit">
                  {step === 1 ? "Continue" : "Review details"}
                  <Icon size={19} />
                </button>
              </div>
            </form>
          ) : (
            <>
              <dl className="review-list">
                {[
                  [
                    "Meeting",
                    mode === "home"
                      ? "Free estimate at your home"
                      : "Showroom appointment",
                  ],
                  ["Products", data.products],
                  ...(interest ? [["Interest", interest]] : []),
                  ...(offer
                    ? [["Offer", "Free single roll blinds with 3+ windows"]]
                    : []),
                  ...(data.products.includes("Windows")
                    ? [["Windows", data.quantity]]
                    : []),
                  ["Postal code", data.postal.toUpperCase()],
                  ["Name", data.name],
                  ["Email", data.email],
                  ...(data.phone ? [["Phone", data.phone]] : []),
                  ...(data.day ? [["Preferred day", data.day]] : []),
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              {data.message && <p className="review-message">{data.message}</p>}
              <p className="form-help" role="status">
                The button opens a prepared email. Press Send in your email app
                to deliver your request; an appointment is confirmed only after
                our reply.
              </p>
              <a className="button primary" href={emailHref}>
                Open email to send request <Icon size={18} />
              </a>
              <p className="form-help">
                No email app configured? Write to{" "}
                <a href={`mailto:${site.enquiryEmail}`}>{site.enquiryEmail}</a>{" "}
                with the details above.
              </p>
              <button
                className="text-link edit-details"
                onClick={() => setStep(1)}
              >
                Edit details <Icon size={18} />
              </button>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
