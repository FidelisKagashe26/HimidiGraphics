"use client";

import { Moon, Sun } from "lucide-react";

import styles from "./ThemeToggle.module.css";

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  // Both icons are rendered and CSS shows the right one, so server and client markup match.
  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label="Toggle dark mode">
      <Sun size={20} aria-hidden="true" className={styles.sun} />
      <Moon size={20} aria-hidden="true" className={styles.moon} />
    </button>
  );
}
