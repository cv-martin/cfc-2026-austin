export function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-image"></div>
      <div className="hero-overlay"></div>

      {/* Floating orbs — like CFC Summit 3D decorative elements */}
      <div className="particles" aria-hidden="true">
        {Array.from({length: 15}).map((_, i) => (
          <span className="particle" key={i}></span>
        ))}
      </div>

      <div className="hero-inner">
        {/* LEFT COLUMN — text content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Registration Open — Limited Spots
          </div>

          <h1 className="hero-title">
            <span>Faith.</span> Family. <span>Fellowship.</span>
          </h1>

          <p className="hero-subtitle">
            CFC USA <strong>NATCON 2026</strong> — The national gathering of Indian Christian families in America.
          </p>

          <p className="hero-date">July 10 – 12, 2026 · Austin, Texas</p>

          <div className="hero-actions">
            <a href="#registration" className="btn-primary">Register Now</a>
            <a href="#letter" className="btn-outline">Read Invitation</a>
          </div>
        </div>

        {/* RIGHT COLUMN — decorative (orbs are absolute, this balances layout) */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orb hero-orb--1"></div>
          <div className="hero-orb hero-orb--2"></div>
          <div className="hero-orb hero-orb--3"></div>
        </div>
      </div>
    </header>
  )
}
