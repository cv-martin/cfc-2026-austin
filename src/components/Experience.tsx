export function Experience() {
  return (
    <>
      <section id="experience" className="section section-experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What to expect</span>
            <h2 className="section-heading">3 Days That Will<br/>Change Your Life</h2>
            <p className="section-sub">A weekend full of salvation, worship, learning, and fellowship for people of all ages — from youth to families.</p>
          </div>

          {/* Community Photo */}
          <div className="community-photo-wrapper">
            <img src="/images/community-gathering.png" alt="CFC Community united in prayer at a conference" className="community-photo" />
            <div className="community-photo-caption">CFC families from across the USA united in worship</div>
          </div>

          <div className="bento-grid">
            <div className="bento-card span-2">
              <span className="bento-icon">🙌</span>
              <h3>Worship & Praise</h3>
              <p>Experience powerful, spirit-filled worship sessions that will uplift your soul and bring you closer to Christ. Live music, collective prayer, and moments of pure divine connection.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">💡</span>
              <h3>Workshops</h3>
              <p>Interactive, hands-on sessions led by inspiring speakers that equip and empower every generation.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">🎤</span>
              <h3>Testimonials</h3>
              <p>Hear real, life-changing stories from brothers and sisters who have experienced God's transformative grace.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">🗣️</span>
              <h3>Group Discussions</h3>
              <p>Connect deeply with small groups, share experiences, ask questions, and grow together in faith.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">🙏</span>
              <h3>Prayer Sessions</h3>
              <p>Dedicated time for deep reflection, spiritual renewal, and powerful communal prayer.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">👼</span>
              <h3>Children's Sunday School</h3>
              <p>Fun, engaging faith sessions for kids so the whole family can attend and grow together.</p>
            </div>
            <div className="bento-card">
              <span className="bento-icon">📝</span>
              <h3>Quizzes & Activities</h3>
              <p>Fun, faith-based quizzes and team activities that bring everyone together through joyful learning.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">50<span className="stat-accent">+</span></div>
          <div className="stat-label">States Represented</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Days</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2</div>
          <div className="stat-label">Nights</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">9</div>
          <div className="stat-label">Meals Included</div>
        </div>
      </div>
    </>
  )
}
