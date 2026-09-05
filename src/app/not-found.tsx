import Link from "@/components/site-link";
export default function NotFound() {
  return (
    <main id="main" className="container section">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>
        Let’s get you
        <br />
        <em>back home.</em>
      </h1>
      <p>
        That page isn’t available. You can explore our windows and doors from
        the homepage.
      </p>
      <Link href="/" className="button primary">
        Back to home →
      </Link>
    </main>
  );
}
