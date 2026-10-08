import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import { getProject, projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./project.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const cover = project.pieces[0];
  return pageMetadata({
    title: `${project.client}: ${project.headline}`,
    description: `${project.summary} ${project.sector} design for ${project.client}, ${project.location}.`,
    path: `/work/${project.slug}`,
    // Link previews (WhatsApp in particular) don't reliably render WebP, so only JPEG covers are used.
    image: /\.jpe?g$/i.test(cover.image.src)
      ? { url: cover.image.src, width: cover.image.width, height: cover.image.height, alt: cover.alt }
      : undefined,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.client}: ${project.headline}`,
    description: project.summary,
    creator: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/work/${project.slug}`,
    image: project.pieces.map((p) => `${site.url}${p.image.src}`),
    keywords: [project.sector, ...project.deliverables].join(", "),
  };

  return (
    <article>
      <header className={styles.header}>
        <div className="container">
          <Link href="/work" className={styles.back}>
            <ArrowLeft size={18} aria-hidden="true" /> All work
          </Link>
          <p className="eyebrow">
            {project.sector} · {project.location}
          </p>
          <h1 className={styles.title}>{project.client}</h1>
          <p className={`lead ${styles.lead}`}>{project.headline}</p>

          <dl className={styles.facts}>
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Sector</dt>
              <dd>{project.sector}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Deliverables</dt>
              <dd>{project.deliverables.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="section--tight" aria-label="Project images">
        <div className="container">
          <Gallery pieces={project.pieces} client={project.client} />
        </div>
      </section>

      <section className="section--tight" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <h2 id="story-title" className="visually-hidden">
            About the project
          </h2>
          <div data-reveal>
            <h3 className={styles.storyHeading}>The brief</h3>
            <p className={styles.storyText}>{project.brief}</p>
          </div>
          <div data-reveal>
            <h3 className={styles.storyHeading}>The approach</h3>
            <ul className={styles.approach}>
              {project.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <nav aria-label="Next project" className="section--tight">
        <div className="container">
          <Link href={`/work/${next.slug}`} className={styles.next} data-cursor="Next">
            <div className={styles.nextText}>
              <span className={styles.nextLabel}>Next project</span>
              <span className={styles.nextTitle}>
                {next.client} <ArrowRight size={32} aria-hidden="true" />
              </span>
            </div>
            <div className={styles.nextThumb}>
              <Image src={next.pieces[0].image} alt="" sizes="200px" />
            </div>
          </Link>
        </div>
      </nav>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
