"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { nav, site, whatsappLink } from "@/lib/site";
import logo from "@/public/HGLogo.png";
import styles from "./SiteHeader.module.css";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);

  // Close the mobile menu after navigating.
  useEffect(() => {
    menuRef.current?.close();
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name}, home`}>
          <Image src={logo} alt="" width={40} height={40} className={styles.logo} />
          <span className={styles.wordmark}>
            Himidi<span aria-hidden="true">.</span>
          </span>
        </Link>

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul role="list" className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/contact" className={`btn btn--primary ${styles.cta}`}>
            Start a project
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-haspopup="dialog"
            onClick={() => menuRef.current?.showModal()}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      <dialog
        ref={menuRef}
        className={styles.menu}
        aria-label="Menu"
        onClick={(e) => {
          // Close on backdrop click, or when any link inside is followed.
          const target = e.target as HTMLElement;
          if (target === e.currentTarget || target.closest("a")) e.currentTarget.close();
        }}
      >
        <div className={styles.menuInner}>
          <div className={styles.menuTop}>
            <span className={styles.wordmark}>
              Himidi<span aria-hidden="true">.</span>
            </span>
            <button
              type="button"
              className={styles.menuButton}
              aria-label="Close menu"
              onClick={() => menuRef.current?.close()}
              autoFocus
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul role="list" className={styles.menuList}>
              <li>
                <Link href="/" className={styles.menuLink} aria-current={pathname === "/" ? "page" : undefined}>
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.menuLink}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.menuFoot}>
            <a href={whatsappLink()} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
            <a href={`tel:${site.phoneE164}`} className={styles.menuContact}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}
