import { MediaImage } from "@/components/media-image";
import type { Metadata } from "next";
import Link from "@/components/site-link";
import { Hero } from "@/components/hero";
import { Actions } from "@/components/common";
import { Catalog } from "@/components/catalog";
import { Icon } from "@/components/icons";
import { campaign, faqs, site } from "@/lib/site";
export const metadata: Metadata = { alternates: { canonical: "/" } };
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": site.url + "/#organization",
      name: site.name,
      url: site.url,
      logo: site.url + "/media/logo-header.webp",
      areaServed: ["Toronto", "Greater Toronto Area"],
    },
    {
      "@type": "WebSite",
      "@id": site.url + "/#website",
      url: site.url,
      name: site.name,
      publisher: { "@id": site.url + "/#organization" },
      inLanguage: "en-CA",
    },
    {
      "@type": "WebPage",
      "@id": site.url + "/#webpage",
      url: site.url,
      name: "Factory-Direct Windows & Doors in Toronto & the GTA",
      isPartOf: { "@id": site.url + "/#website" },
      about: { "@id": site.url + "/#organization" },
    },
  ],
};
export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section
        className="homepage-offer"
        aria-label="Free blinds with 3 or more windows"
      >
        <Link href="/offers/" className="homepage-offer-inner container">
          <span className="homepage-offer-gift" aria-hidden="true">
            <Icon name="gift" size={30} />
          </span>
          <span className="homepage-offer-copy">
            <span className="homepage-offer-label">A LITTLE EXTRA, ON US</span>
            <span className="homepage-offer-title">
              Buy <strong>3+ windows.</strong> Get single roll blinds{" "}
              <strong>FREE.</strong>
            </span>
          </span>
          <span className="homepage-offer-link">
            View offer <Icon size={20} />
          </span>
        </Link>
      </section>
      <Hero />
      <div className="promise-strip container">
        {[
          ["factory", "Direct from manufacturing"],
          ["window", "Real products. Real showroom."],
          ["ruler", "Advice that fits your home"],
          ["shield", "Professional installation"],
        ].map(([icon, text]) => (
          <div key={text}>
            <Icon name={icon} size={25} />
            <span>{text}</span>
          </div>
        ))}
      </div>
      <section id="products" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MADE FOR YOUR EVERYDAY</p>
            <h2>
              A better home starts
              <br />
              with the <em>right details.</em>
            </h2>
          </div>
          <p>
            Windows that welcome the light. Doors that bring it all together.
            Find your style, then see it for yourself.
          </p>
        </div>
        <Catalog />
        <div className="collection-foot">
          <span>Every home is different. Let’s find what fits yours.</span>
          <a href="#compare" className="text-link">
            Start with the details <Icon size={18} />
          </a>
        </div>
      </section>
      <section id="showroom" className="showroom-section">
        <div className="showroom-photo">
          <MediaImage
            name="showroom"
            alt="Full-size window displays in the showroom"
            width="1200"
            height="1600"
            loading="lazy"
          />
          <span className="photo-caption">
            <span className="live-dot" /> A REAL PLACE TO EXPLORE YOUR OPTIONS
          </span>
        </div>
        <div className="showroom-copy">
          <p className="eyebrow">COME ON IN</p>
          <h2>
            See the quality.
            <br />
            <em>Feel the difference.</em>
          </h2>
          <p>
            A window is more than a picture on a screen. Open it. Feel the
            hardware. Compare the profiles. Get to know what you’re bringing
            home.
          </p>
          <div className="showroom-features">
            {[
              ["window", "Full-size displays"],
              ["ruler", "Profiles, glass & finishes"],
              ["chat", "A conversation, not a sales pitch"],
            ].map(([icon, label]) => (
              <div key={label}>
                <Icon name={icon} size={23} />
                {label}
              </div>
            ))}
          </div>
          <Link className="button primary" href="/appointments/showroom/">
            <span>
              Book Appointment<small>AT OUR SHOWROOM</small>
            </span>
            <Icon />
          </Link>
          <div className="showroom-hours">
            <Icon name="clock" size={19} />
            <p>
              Mon–Fri 9–6 <span>·</span> Sat 9–3
              <br />
              <small>Sunday by appointment</small>
            </p>
          </div>
        </div>
      </section>
      <section id="difference" className="difference-section section container">
        <div className="difference-copy">
          <p className="eyebrow">THE FACTORY LANE DIFFERENCE</p>
          <h2>
            Closer to the source.
            <br />
            <em>Closer to your vision.</em>
          </h2>
          <p>
            We work directly with manufacturing, so the conversation about your
            home starts with the product itself.
          </p>
          <p>
            From choosing your windows to coordinating your order and
            installation, we help connect the details. You get a place to
            explore, a clear explanation of your options and a team to guide the
            next step.
          </p>
          <a href="#process" className="text-link">
            How it comes together <Icon size={19} />
          </a>
        </div>
        <div className="manufacturing-photo">
          <MediaImage
            name="manufacturing"
            alt="Window assemblies and equipment on the manufacturing floor"
            width="1600"
            height="1200"
            loading="lazy"
          />
          <div className="photo-note">
            <Icon name="factory" size={29} />
            <span>
              Direct from manufacturing.
              <br />
              <strong>Considered from the start.</strong>
            </span>
          </div>
        </div>
      </section>
      <section id="compare" className="detail-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GOOD CHOICES START WITH UNDERSTANDING</p>
              <h2>
                Beauty you can see.
                <br />
                <em>Details you can compare.</em>
              </h2>
            </div>
            <p>
              Go beyond the finish. Compare the opening, frame and glass to find
              what makes sense for each room.
            </p>
          </div>
          <div className="details-grid">
            <figure className="profile-photo">
              <MediaImage
                name="profile"
                alt="Physical window frame and profile cross-section samples"
                width="1600"
                height="1200"
                loading="lazy"
              />
              <figcaption>
                Real profile samples. A closer look at what’s inside.
              </figcaption>
            </figure>
            <div className="comparison">
              <h3>Which opening suits your space?</h3>
              <div className="table-scroll">
                <table>
                  <caption className="sr-only">
                    Compare three common window opening styles
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Window style</th>
                      <th scope="col">How it works</th>
                      <th scope="col">Consider it for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Casement</th>
                      <td>Hinges at the side; opens outward</td>
                      <td>Ventilation with a clear view</td>
                    </tr>
                    <tr>
                      <th scope="row">Awning</th>
                      <td>Hinges at the top; opens outward</td>
                      <td>Wider, shorter openings</td>
                    </tr>
                    <tr>
                      <th scope="row">Picture / fixed</th>
                      <td>Does not open</td>
                      <td>Daylight and uninterrupted views</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-note">
                Opening size, room use and installation requirements guide the
                final selection.
              </p>
              <Link href="/appointments/showroom/" className="text-link">
                Compare them in the showroom <Icon size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR HOME. A CLEAR WAY FORWARD.</p>
            <h2>
              From the first hello
              <br />
              to the <em>finishing touch.</em>
            </h2>
          </div>
          <Link href="/estimate/" className="text-link">
            Let’s talk about your home <Icon size={20} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "chat",
              "Start with a conversation",
              "Meet us in the showroom or invite us to your home. Tell us what you’d like to change.",
            ],
            [
              "ruler",
              "Measure & make it yours",
              "Review the options, confirm measurements and get a detailed quote for your project.",
            ],
            [
              "factory",
              "Made for your project",
              "Your selected products move into manufacturing, with specifications agreed beforehand.",
            ],
            [
              "house",
              "Installed. Ready to enjoy.",
              "We coordinate installation and walk through the finished work with you.",
            ],
          ].map(([icon, title, copy], i) => (
            <article key={title}>
              <div className="process-top">
                <span>0{i + 1}</span>
                <Icon name={icon} size={31} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="answers" className="answers-section section">
        <div className="container answers-grid">
          <div>
            <p className="eyebrow">A LITTLE CLARITY GOES A LONG WAY</p>
            <h2>
              Good questions.
              <br />
              <em>Honest answers.</em>
            </h2>
            <p>
              Choosing windows and doors is a big decision. Start with the
              things that matter.
            </p>
            <Link href="/estimate/" className="text-link">
              Talk through your project <Icon size={19} />
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => (
              <details key={question} name="home-faq">
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  {question}
                  <Icon name="plus" size={19} />
                </summary>
                <p>
                  {answer}{" "}
                  {i === 3 && <Link href="/offers/">View the offer.</Link>}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="service-section container">
        <div className="service-intro">
          <Icon name="pin" size={32} />
          <div>
            <p className="eyebrow">NEAR YOUR HOME</p>
            <h2>Toronto & the GTA.</h2>
          </div>
        </div>
        <div className="service-cities">
          {site.cities.map((city) => (
            <span key={city}>{city}</span>
          ))}
          <Link href="/estimate/" className="text-link">
            Check your location <Icon size={17} />
          </Link>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-inner">
          <div>
            <p className="eyebrow light">
              LET’S MAKE YOUR HOME FEEL MORE LIKE YOU
            </p>
            <h2>
              Your next chapter
              <br />
              starts <em>right here.</em>
            </h2>
          </div>
          <div>
            <Actions light />
            <p>
              At your home or in our showroom. Start where you’re comfortable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
