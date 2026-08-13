import Hero from "@/components/Hero";
import HomeGallery from "@/components/HomeGallery";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeGallery />
      <section style={{ padding: '8rem 0 8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to see what we can do?</h2>
          <Link href="/work" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Explore All Work
          </Link>
        </div>
      </section>
    </main>
  );
}
