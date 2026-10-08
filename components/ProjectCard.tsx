import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  sizes?: string;
  headingLevel?: "h2" | "h3";
};

export default function ProjectCard({
  project,
  sizes = "(min-width: 900px) 45vw, 100vw",
  headingLevel: Heading = "h3",
}: Props) {
  const cover = project.pieces[0];
  const count = project.pieces.length;

  return (
    <article className={styles.card}>
      <Link href={`/work/${project.slug}`} className={styles.link} data-cursor="View">
        <div className={styles.media}>
          <Image
            src={cover.image}
            alt=""
            sizes={sizes}
            className={styles.image}
          />
          {count > 1 && (
            <span className={styles.count}>
              {count} pieces
            </span>
          )}
        </div>
        <div className={styles.body}>
          <p className={styles.meta}>
            {project.sector} · {project.location}
          </p>
          <Heading className={styles.title}>
            {project.client}
            <ArrowUpRight size={22} aria-hidden="true" className={styles.arrow} />
          </Heading>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
