export function Registration() {
  return (
    <section id="registration" className="section section-registration">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Join Us</span>
          <h2 className="section-heading">Save Your Spot</h2>
          <p className="section-sub">Join believers from across the USA and India for a life-changing experience. All ages welcome!</p>
        </div>

        <div className="reg-card">
          <div className="reg-price">$296</div>
          <p className="reg-per">per person</p>

          <div className="reg-features">
            <span className="reg-feature"><span className="check">✓</span> 3-Day Conference</span>
            <span className="reg-feature"><span className="check">✓</span> 2 Nights Stay</span>
            <span className="reg-feature"><span className="check">✓</span> Breakfast</span>
            <span className="reg-feature"><span className="check">✓</span> Lunch</span>
            <span className="reg-feature"><span className="check">✓</span> Dinner</span>
            <span className="reg-feature"><span className="check">✓</span> All Sessions</span>
          </div>

          <button className="btn-primary btn-block">Register Now</button>

          <p className="reg-note">
            Credit Card • ACH • Apple Pay • Google Pay<br/>
            Room reservations confirmed after payment.
          </p>
          <p className="reg-note" style={{color: '#6366f1', fontWeight: 600, marginTop: '8px'}}>
            Powered by Zeffy — 100% goes to our mission!
          </p>
        </div>
      </div>
    </section>
  )
}
