"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLightMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '1rem 0' : '2rem 0',
        transition: 'padding 0.3s ease',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', zIndex: 60 }}>
          <img src="/logo.png" alt="Himidi Graphics" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--accent-gold)' }} />
          <span>Himidi<span style={{ color: 'var(--accent-gold)' }}>.</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Home</Link>
          <Link href="/work" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Work</Link>
          <Link href="/services" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Services</Link>
          <button 
            onClick={toggleTheme}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Toggle Light/Dark Mode"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="mobile-menu-btn" style={{ display: 'none', alignItems: 'center', gap: '1rem', zIndex: 60 }}>
          <button 
            onClick={toggleTheme}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
          >
            {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100vh',
                background: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                zIndex: 55
              }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Home</Link>
              <Link href="/work" onClick={() => setMenuOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Work</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Services</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', marginTop: '1rem' }}>
                Let's Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .mobile-menu-btn {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
