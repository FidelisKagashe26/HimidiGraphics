// Footer
export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 0 3rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Himidi Graphics" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--accent-gold)' }} />
              <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2.5rem', fontWeight: 700 }}>Let's work together.</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Available for freelance opportunities.</p>
          </div>
          <a href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Say Hello
          </a>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>© {new Date().getFullYear()} Himidi Graphics. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://instagram.com/himid_graphix" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Instagram</a>
            <a href="https://www.facebook.com/search/top?q=himid%20graphx" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Facebook</a>
            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
