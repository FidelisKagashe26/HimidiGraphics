"use client";
import { motion } from "framer-motion";

const images = [
  "/images/image1.jpg",
  "/images/image2.webp",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.webp",
  "/images/image7.jpg",
  "/images/image8.webp",
  "/images/image9.jpg",
  "/images/image10.webp",
];

export default function HomeGallery() {
  return (
    <section style={{ 
      width: '100%', 
      maxWidth: '100vw', 
      overflow: 'hidden', 
      background: 'var(--bg-primary)'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '4px', // small, clean gap
        width: '100%'
      }}>
        {images.map((src, idx) => {
          // Alternating slide-in animation from left (-100) and right (100)
          const direction = idx % 2 === 0 ? -150 : 150;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: (idx % 5) * 0.1 }}
              style={{
                aspectRatio: '4 / 5',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0a0a0a' // dark placeholder while loading
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                transition: { duration: 0.3 } 
              }}
            >
              <img 
                src={src} 
                alt={`Himidi Graphics Poster ${idx + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  pointerEvents: 'none' // lets custom cursor pass smoothly
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
