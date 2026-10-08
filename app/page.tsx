import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WhatsAppIcon } from "@/components/BrandIcons";
import CtaBand from "@/components/CtaBand";
import ProjectCard from "@/components/ProjectCard";
import { featuredSlugs, getProject, projects } from "@/lib/projects";
import { process, services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import styles from "./home.module.css";

export const metadata = {
  ...pageMetadata({
    title: "Graphic Design & Branding Studio in Tanzania",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} | Graphic Design & Branding Studio in Tanzania` },
};

const clients = [
  "VillaDahl Beach Resort",
  "Arena Lounge",
  "Esari Real Estate",
  "Johnnie's Bar & Restaurant",
  "Q2 Bar Masaki",
  "Ibiza Park Zanzibar",
];

function piece(slug: string, i = 0) {
  const project = getProject(slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project.pieces[i];
}

export default function Home() {
  const featured = featuredSlugs.map((slug) => getProject(slug)!);
  const heroLeft = piece("villadahl-beach-resort", 2);
  const heroCenter = piece("arena-lounge", 0);
  const heroRight = piece("esari-real-estate", 0);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={`eyebrow ${styles.rise}`}>Graphic designer · Tanzania</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className={styles.line}>
                <span>Bold visuals</span>
              </span>{" "}
              <span className={styles.line}>
                <span>
                  that <em className={styles.highlight}>fill rooms</em>
                </span>
              </span>{" "}
              <span className={styles.line}>
                <span>and build brands.</span>
              </span>
            </h1>
            <p className={`lead ${styles.rise} ${styles.delay1}`}>
              Event posters, brand identities, social media campaigns and motion graphics for
              hotels, lounges and businesses across Tanzania.
            </p>
            <div className={`${styles.heroActions} ${styles.rise} ${styles.delay2}`}>
              <Link href="/work" className="btn btn--primary btn--lg">
                See the work <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hello Himidi Graphics, I'd like to talk about a design project.")}
                className="btn btn--ghost btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={22} /> WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={`${styles.poster} ${styles.posterLeft}`}>
              <Image src={heroLeft.image} alt="" sizes="(min-width: 900px) 22vw, 38vw" />
            </div>
            <div className={`${styles.poster} ${styles.posterRight}`}>
              <Image src={heroRight.image} alt="" sizes="(min-width: 900px) 22vw, 38vw" />
            </div>
            <div className={`${styles.poster} ${styles.posterCenter}`}>
              <Image
                src={heroCenter.image}
                alt=""
                sizes="(min-width: 900px) 26vw, 52vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className={styles.clients} aria-labelledby="clients-title">
        <div className="container">
          <h2 id="clients-title" className={styles.clientsTitle}>
            Designed for
          </h2>
          <ul role="list" className={styles.clientList}>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Campaigns people actually notice.</h2>
            </div>
            <Link href="/work" className="text-link">
              All {projects.length} projects <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ul role="list" className={styles.workGrid}>
            {featured.map((project) => (
              <li key={project.slug} data-reveal>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">What I do</p>
              <h2 id="services-title">One designer, every format your brand needs.</h2>
            </div>
            <Link href="/services" className="text-link">
              All services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ol role="list" className={styles.serviceList}>
            {services.map((s, i) => (
              <li key={s.id} className={styles.serviceRow} data-reveal>
                <span className={styles.serviceIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.serviceTitle}>
                  <Link href={`/services#${s.id}`}>{s.title}</Link>
                </h3>
                <p className={styles.serviceText}>{s.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 id="process-title">From brief to final files in four steps.</h2>
            </div>
          </div>
          <ol role="list" className={styles.steps}>
            {process.map((p, i) => (
              <li key={p.title} className={styles.step} data-reveal>
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className={styles.stepTitle}>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
