export function Venue() {
  return (
    <section id="venue" className="section section-venue">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Venue</span>
          <h2 className="section-heading">Welcome to Austin, Texas</h2>
          <p className="section-sub">The Live Music Capital of the World welcomes CFC families from across the nation.</p>
        </div>

        <div className="venue-split">
          <div className="venue-info">
            <div className="venue-detail-card scroll-reveal">
              <h3>📍 Conference Venue</h3>
              <p className="venue-name">Austin Convention Center</p>
              <p className="venue-address">500 E Cesar Chavez St, Austin, TX 78701</p>
            </div>

            <div className="venue-detail-card scroll-reveal">
              <h3>🛏️ Accommodation</h3>
              <p>Campus-style accommodation is <strong>included</strong> in your $296 registration. 2 nights stay with all amenities provided.</p>
            </div>

            <div className="venue-detail-card scroll-reveal">
              <h3>✈️ Getting There</h3>
              <p><strong>Austin-Bergstrom International Airport (AUS)</strong> — 15 min drive to the venue. Free parking available on-site.</p>
            </div>

            <div className="venue-detail-card scroll-reveal">
              <h3>🌡️ Weather</h3>
              <p>July in Austin is warm! Expect temperatures around <strong>95°F (35°C)</strong>. All conference areas are air-conditioned. Bring light, comfortable clothing.</p>
            </div>
          </div>

          <div className="venue-map scroll-reveal">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8!2d-97.7405!3d30.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a7a7a7a7a7%3A0x0!2sAustin%20Convention%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="venue-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
