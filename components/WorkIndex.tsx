"use client";

import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projects, sectors, type Sector } from "@/lib/projects";
import styles from "./WorkIndex.module.css";

type Filter = "All" | Sector;

const filters: Filter[] = ["All", ...sectors];

export default function WorkIndex() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.sector === active);

  return (
    <>
      <div className={styles.toolbar}>
        <div role="group" aria-label="Filter projects by sector" className={styles.filters}>
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.sector === f).length;
            return (
              <button
                key={f}
                type="button"
                className={styles.filter}
                aria-pressed={active === f}
                onClick={() => setActive(f)}
              >
                {f}
                <span className={styles.filterCount} aria-hidden="true">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className={styles.status} role="status">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
          {active !== "All" && ` in ${active}`}
        </p>
      </div>

      <ul role="list" className={styles.grid}>
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw" />
          </li>
        ))}
      </ul>
    </>
  );
}
