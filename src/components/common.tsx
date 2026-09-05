import Link from "@/components/site-link";
import { Icon } from "./icons";
import { site } from "@/lib/site";
export function Actions({
  light = false,
  campaign = false,
  context,
}: {
  light?: boolean;
  campaign?: boolean;
  context?: string;
}) {
  const params = new URLSearchParams();
  if (campaign) params.set("offer", "free-single-roll-blinds");
  if (context) params.set("interest", context);
  const query = params.size ? "?" + params.toString() : "";
  return (
    <div className={`actions ${light ? "on-dark" : ""}`}>
      <Link className="button primary" href={"/estimate/" + query}>
        <span>
          Get Free Estimate<small>AT YOUR HOME</small>
        </span>
        <Icon size={21} />
      </Link>
      <Link
        className="button secondary"
        href={"/appointments/showroom/" + query}
      >
        <span>
          Book Appointment<small>AT OUR SHOWROOM</small>
        </span>
        <Icon size={21} />
      </Link>
    </div>
  );
}
const footerGroups = [
  [
    "Windows",
    [
      ["All window types", "/windows/"],
      ["Casement", "/windows/casement/"],
      ["Awning", "/windows/awning/"],
      ["Sliding", "/windows/sliding/"],
      ["Picture & fixed", "/windows/picture/"],
      ["Double hung", "/windows/double-hung/"],
      ["Bay & bow", "/compare/bay-vs-bow/"],
      ["Series & profiles", "/windows/series/"],
    ],
  ],
  [
    "Doors",
    [
      ["Entry doors", "/doors/entry/"],
      ["Steel doors", "/doors/entry/steel/"],
      ["Fiberglass doors", "/doors/entry/fiberglass/"],
      ["Patio doors", "/doors/patio/"],
      ["Sliding systems", "/doors/patio/sliding/"],
      ["Bifold doors", "/doors/patio/bifold/"],
      ["Door catalogue", "/catalog/doors-catalog/"],
    ],
  ],
  [
    "Plan your project",
    [
      ["Window prices", "/pricing/windows/"],
      ["Door prices", "/pricing/doors/"],
      ["Installation", "/installation/"],
      ["Compare products", "/compare/"],
      ["Free blinds offer", "/offers/"],
      ["Buying guide", "/resources/buying-guide/"],
      ["Product videos", "/videos/"],
    ],
  ],
  [
    "Factory Lane",
    [
      ["Our difference", "/why-factory-lane/"],
      ["About us", "/about/"],
      ["Showroom", "/showroom/"],
      ["Our projects", "/projects/"],
      ["Contact", "/contact/"],
      ["Warranty", "/warranty/"],
      ["Care & support", "/support/"],
    ],
  ],
] as const;
export function Footer() {
  return (
    <footer className="footer site-footer">
      <div className="container footer-identity">
        <div>
          <Link href="/" className="logo">
            <img
              src="/media/logo-footer.webp"
              alt="Factory Lane Windows & Doors"
              width="700"
              height="284"
            />
          </Link>
          <p>
            Factory-direct windows and doors.
            <br />A real showroom. A more considered choice.
          </p>
        </div>
        <div className="footer-appointment">
          <h3>Start where you’re comfortable.</h3>
          <Link href="/estimate/">
            Free estimate at your home <Icon size={17} />
          </Link>
          <Link href="/appointments/showroom/">
            Appointment in our showroom <Icon size={17} />
          </Link>
        </div>
        <div className="hours">
          <h3>Showroom hours</h3>
          {site.hours.map(([day, time]) => (
            <p key={day}>
              <span>{day}</span>
              <span>{time}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="container footer-links">
        {footerGroups.map(([heading, links]) => (
          <nav aria-label={heading + " footer links"} key={heading}>
            <h3>{heading}</h3>
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="container footer-areas">
        <div>
          <h3>Serving Toronto, the GTA & surrounding areas</h3>
          <p>Choose your location to plan a window or door project.</p>
        </div>
        <nav aria-label="Service areas">
          {[
            ["Toronto", "toronto"],
            ["Vaughan", "vaughan"],
            ["Richmond Hill", "richmond-hill"],
            ["Markham", "markham"],
            ["Mississauga", "mississauga"],
            ["Brampton", "brampton"],
            ["Oakville", "oakville"],
            ["Barrie", "barrie"],
          ].map(([city, slug]) => (
            <Link href={"/service-areas/" + slug + "/"} key={slug}>
              {city}
            </Link>
          ))}
          <Link className="all-areas" href="/service-areas/">
            All service areas <Icon size={16} />
          </Link>
        </nav>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Factory Lane Windows & Doors.</span>
        <nav aria-label="Website policies">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/cookies/">Cookies</Link>
          <Link href="/sitemap/">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}
