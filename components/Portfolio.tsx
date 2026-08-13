"use client";
import { motion } from "framer-motion";

const projects = [
  { id: 1, image: "/images/image1.jpg" },
  { id: 2, image: "/images/image2.webp" },
  { id: 3, image: "/images/image3.jpg" },
  { id: 4, image: "/images/image4.jpg" },
  { id: 5, image: "/images/image5.jpg" },
  { id: 6, image: "/images/image6.webp" },
  { id: 7, image: "/images/image7.jpg" },
  { id: 8, image: "/images/image8.webp" },
  { id: 9, image: "/images/image9.jpg" },
  { id: 10, image: "/images/image10.webp" },
];

export default function Portfolio() {
  return (
    <section id="work" style={{ background: 'var(--bg-secondary)', padding: '10rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
        >
          <h2 className="heading-section" style={{ marginBottom: 0 }}>Selected <span style={{ color: 'var(--text-secondary)' }}>Work</span></h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.15, duration: 0.5 }}
              style={{
                aspectRatio: '4 / 5',
                borderRadius: 'var(--border-radius-md)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
              whileHover="hover"
            >
              {/* Image Container */}
              <motion.img 
                src={proj.image} 
                alt={`Portfolio Artwork ${proj.id}`}
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
