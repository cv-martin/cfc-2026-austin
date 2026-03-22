export function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-image" style={{backgroundImage: 'url(/images/hero-worship.png)'}}></div>
      <div className="hero-overlay"></div>
      <div className="hero-mesh"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Registration Open — Limited Spots
        </div>
        <h1 className="hero-title">
          CFC USA<br/><span className="highlight">NATCON 2026</span>
        </h1>
        <p className="hero-sub">The biggest CFC prayer conference in the USA. Austin, Texas.</p>
        <p className="hero-date">JULY 10 — 16, 2026</p>
        <div className="hero-actions">
          <a href="#registration" className="btn-primary">Register Now</a>
          <a href="#letter" className="btn-outline">Read Invitation</a>
        </div>
      </div>
    </header>
  )
}
