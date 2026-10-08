import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1.5rem", justifyItems: "start" }}>
        <p className="eyebrow">Error 404</p>
        <h1 style={{ fontSize: "var(--step-5)", maxWidth: "14ch" }}>This page took the night off.</h1>
        <p className="lead">The link may be broken or the page may have moved. Try one of these instead.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Link href="/" className="btn btn--primary btn--lg">
            Go home
          </Link>
          <Link href="/work" className="btn btn--ghost btn--lg">
            See the work <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
