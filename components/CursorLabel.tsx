"use client";

import { useEffect, useRef } from "react";

import styles from "./CursorLabel.module.css";

/**
 * A small label that follows the pointer over elements marked with
 * `data-cursor="Label"`. The native cursor is never hidden, and the effect is
 * skipped for touch devices and for people who prefer reduced motion.
 */
export default function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!query.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        el.textContent = target.dataset.cursor ?? "";
        el.dataset.visible = "true";
      } else {
        el.dataset.visible = "false";
      }
      if (!frame) {
        frame = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          frame = 0;
        });
      }
    };
    const onLeave = () => {
      el.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className={styles.label} data-visible="false" aria-hidden="true" />;
}
