const tiers = [
  {
    level: 'Platinum',
    sponsors: ['Grace Foundation', 'Emmanuel Ministries'],
  },
  {
    level: 'Gold',
    sponsors: ['Bethel Community Church', 'Indian Christian Network', 'Faith & Hope Trust'],
  },
  {
    level: 'Silver',
    sponsors: ['Austin Indian Fellowship', 'Cornerstone Publishers', 'Agape Foods', 'Kingdom Builders Inc.'],
  }
]

export function Sponsors() {
  return (
    <section id="sponsors" className="section section-sponsors">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Sponsors</span>
          <h2 className="section-heading">Partnering for God's Glory</h2>
          <p className="section-sub">We are grateful to our sponsors who make this event possible through their generous support.</p>
        </div>

        {tiers.map((tier, i) => (
          <div className="sponsor-tier" key={i}>
            <h3 className="tier-label">{tier.level} Sponsors</h3>
            <div className="sponsor-logos">
              {tier.sponsors.map((name, j) => (
                <div className="sponsor-logo-card" key={j}>
                  <span className="sponsor-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="sponsor-cta">
          <p>Interested in sponsoring the 2026 CFC NATCON?</p>
          <a href="mailto:sponsors@acfi.cc" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
