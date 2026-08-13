"use client";
import { motion } from "framer-motion";
import { PenTool, Monitor, Layers, Aperture } from "lucide-react";

const services = [
  { icon: PenTool, title: "Brand Designer ⚡️", desc: "Crafting memorable logos and cohesive brand systems that tell your unique story." },
  { icon: Monitor, title: "Graphic Design", desc: "Designing visually stunning graphics that elevate your brand's presence across all platforms." },
  { icon: Aperture, title: "Content Strategist 💡", desc: "Developing powerful content strategies that engage audiences, tell a story, and drive real growth." },
  { icon: Layers, title: "Social Media Manager", desc: "Managing and expanding your online presence with targeted, creative digital campaigns." }
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-section"
        >
          What I <span style={{ color: 'var(--text-secondary)' }}>Do</span>
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass"
              style={{ padding: '3rem 2rem', borderRadius: 'var(--border-radius-lg)' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <srv.icon size={28} color="var(--accent-gold)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{srv.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
