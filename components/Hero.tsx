"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Spring animations for smooth parallax
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for different layers
  const x1 = useTransform(smoothX, [-1, 1], [-50, 50]);
  const y1 = useTransform(smoothY, [-1, 1], [-50, 50]);
  
  const x2 = useTransform(smoothX, [-1, 1], [40, -40]);
  const y2 = useTransform(smoothY, [-1, 1], [40, -40]);
  
  const x3 = useTransform(smoothX, [-1, 1], [-80, 80]);
  const y3 = useTransform(smoothY, [-1, 1], [80, -80]);

  // Split text for word-by-word animation
  const titleWords = "Elevating brands with creative designs.".split(" ");

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      padding: '8rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden' // Important for parallax bounds
    }}>
      
      {/* Background Glow Aura */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(17,85,165,0.4) 0%, rgba(245,169,0,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: x3,
          y: y3,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Image 1 (Top Left) */}
      <motion.div className="desktop-only" style={{ position: 'absolute', top: '15%', left: '10%', width: '220px', height: '280px', rotate: -12, x: x1, y: y1, zIndex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <Image src="/images/image1.jpg" alt="Work 1" fill sizes="(max-width: 768px) 100vw, 220px" priority style={{ objectFit: 'cover' }} />
      </motion.div>

      {/* Floating Image 2 (Bottom Right) */}
      <motion.div className="desktop-only" style={{ position: 'absolute', bottom: '15%', right: '15%', width: '250px', height: '320px', rotate: 8, x: x2, y: y2, zIndex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <Image src="/images/image2.webp" alt="Work 2" fill sizes="(max-width: 768px) 100vw, 250px" priority style={{ objectFit: 'cover' }} />
      </motion.div>
      
      {/* Floating Image 3 (Top Right - Small) */}
      <motion.div className="desktop-only" style={{ position: 'absolute', top: '25%', right: '8%', width: '150px', height: '200px', rotate: 20, x: x1, y: y2, zIndex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
        <Image src="/images/image3.jpg" alt="Work 3" fill sizes="(max-width: 768px) 100vw, 150px" priority style={{ objectFit: 'cover' }} />
      </motion.div>

      {/* Floating Image 4 (Bottom Left - Blurry/Background) */}
      <motion.div className="desktop-only" style={{ position: 'absolute', bottom: '10%', left: '8%', width: '300px', height: '400px', rotate: -5, x: x3, y: y1, zIndex: 0, opacity: 0.3, filter: 'blur(8px)', borderRadius: '16px', overflow: 'hidden' }}>
        <Image src="/images/image4.jpg" alt="Work 4" fill sizes="(max-width: 768px) 100vw, 300px" priority style={{ objectFit: 'cover' }} />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ 
              color: 'var(--accent-gold)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              pointerEvents: 'auto'
            }}>
              Award-Winning Creative Designer 🇹🇿
            </p>
          </motion.div>
          
          <h1 className="heading-hero" style={{ 
            pointerEvents: 'auto',
            textShadow: '0 10px 30px rgba(0,0,0,0.8)' 
          }}>
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word === "creative" || word === "designs." ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginTop: '2rem',
              maxWidth: '600px',
              textShadow: '0 4px 10px rgba(0,0,0,0.8)',
              pointerEvents: 'auto'
            }}
          >
            I am a passionate Graphic Designer, Content Strategist, and Social Media Manager dedicated to crafting visual identities that stand out and connect with audiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '3rem', pointerEvents: 'auto', flexWrap: 'wrap' }}
          >
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="https://instagram.com/himid_graphix" target="_blank" rel="noreferrer" className="btn btn-secondary">Follow on Instagram</a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
