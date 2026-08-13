"use client";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="bg-glow" style={{ top: '50%', left: '-20vw', right: 'auto', opacity: 0.5 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>
            Let's <span className="text-accent-gradient">Talk</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to elevate your brand? Drop a message below and let's start creating something amazing together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.8rem', marginBottom: '2rem' }}>Contact Info</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Mail size={24} color="var(--accent-gold)" />
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Email</p>
                  <p style={{ fontWeight: 500 }}>hello@himidigraphics.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Phone size={24} color="var(--accent-gold)" />
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Phone</p>
                  <p style={{ fontWeight: 500 }}>+255 (Call / WhatsApp)</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <MapPin size={24} color="var(--accent-gold)" />
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Location</p>
                  <p style={{ fontWeight: 500 }}>Tanzania 🇹🇿</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass"
            style={{ padding: '3rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <label htmlFor="name" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your Name</label>
              <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-inter)', outline: 'none' }} />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-inter)', outline: 'none' }} />
            </div>
            <div>
              <label htmlFor="message" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your project..." style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-inter)', resize: 'none', outline: 'none' }} />
            </div>
            <button type="button" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', border: 'none', fontFamily: 'var(--font-inter)' }}>
              Send Message <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
