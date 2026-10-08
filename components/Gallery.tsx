"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import type { Piece } from "@/lib/projects";
import styles from "./Gallery.module.css";

export default function Gallery({ pieces, client }: { pieces: Piece[]; client: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const total = pieces.length;
  const current = pieces[index];

  function open(i: number) {
    setIndex(i);
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function step(delta: number) {
    setIndex((i) => (i + delta + total) % total);
  }

  return (
    <>
      <ul role="list" className={`${styles.grid} ${total === 1 ? styles.single : ""}`}>
        {pieces.map((piece, i) => (
          <li key={piece.title} data-reveal={i === 0 ? undefined : ""}>
            <figure className={styles.figure}>
              <button
                type="button"
                className={styles.trigger}
                onClick={() => open(i)}
                aria-label={`View larger: ${piece.title}`}
                data-cursor="Zoom"
              >
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  sizes={
                    // An odd-count gallery shows its first piece full-row, capped at 720px.
                    i === 0 && total % 2 === 1 ? "(min-width: 760px) 720px, 100vw" : "(min-width: 700px) 45vw, 100vw"
                  }
                  className={styles.image}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
                <span className={styles.zoom} aria-hidden="true">
                  <Maximize2 size={18} />
                </span>
              </button>
              <figcaption className={styles.caption}>{piece.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={`${client}: ${current.title}`}
        onClose={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (total < 2) return;
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className={styles.stage}>
          {/* Only mounted while open, so the large image is not downloaded up front. */}
          {isOpen && (
            <Image
              key={current.title}
              src={current.image}
              alt={current.alt}
              sizes="(min-width: 900px) 70vw, 100vw"
              loading="eager"
              className={styles.full}
            />
          )}
        </div>
        <div className={styles.bar}>
          <p className={styles.barTitle}>
            {current.title}
            {total > 1 && (
              <span className={styles.counter}>
                {index + 1} / {total}
              </span>
            )}
          </p>
          <div className={styles.controls}>
            {total > 1 && (
              <>
                <button type="button" className={styles.control} onClick={() => step(-1)} aria-label="Previous image">
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button type="button" className={styles.control} onClick={() => step(1)} aria-label="Next image">
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </>
            )}
            <button
              type="button"
              className={styles.control}
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              autoFocus
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
