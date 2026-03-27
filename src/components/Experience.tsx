import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

export function Experience() {
  const states = useAnimatedCounter(50)
  const days = useAnimatedCounter(3)
  const nights = useAnimatedCounter(2)
  const meals = useAnimatedCounter(9)

  return (
    <>
      <section id="experience" className="section section-experience">
        <div className="container">
          <div className="section-header scroll-reveal">
            <span className="section-tag">What to expect</span>
            <h2 className="section-heading"><span>3 Days</span> That Will<br/>Change Your Life</h2>
            <p className="section-sub">A weekend full of salvation, worship, learning, and fellowship for people of all ages — from youth to families.</p>
          </div>

          <div className="community-photo-wrapper scroll-reveal">
            <img src="/cfc-2026-austin/images/community-gathering.png" alt="CFC Community united in prayer at a conference" className="community-photo" loading="lazy" />
            <div className="community-photo-caption">CFC families from across the USA united in worship</div>
          </div>

          <div className="bento-grid">
            <div className="bento-card span-2 scroll-reveal">
              <span className="bento-icon">🙌</span>
              <h3>Worship & Praise</h3>
              <p>Experience powerful, spirit-filled worship sessions that will uplift your soul and bring you closer to Christ. Live music, collective prayer, and moments of pure divine connection.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">💡</span>
              <h3>Workshops</h3>
              <p>Interactive, hands-on sessions led by inspiring speakers that equip and empower every generation.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">🎤</span>
              <h3>Testimonials</h3>
              <p>Hear real, life-changing stories from brothers and sisters who have experienced God's transformative grace.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">🗣️</span>
              <h3>Group Discussions</h3>
              <p>Connect deeply with small groups, share experiences, ask questions, and grow together in faith.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">🙏</span>
              <h3>Prayer Sessions</h3>
              <p>Dedicated time for deep reflection, spiritual renewal, and powerful communal prayer.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">👼</span>
              <h3>Children's Sunday School</h3>
              <p>Fun, engaging faith sessions for kids so the whole family can attend and grow together.</p>
            </div>
            <div className="bento-card scroll-reveal">
              <span className="bento-icon">📝</span>
              <h3>Quizzes & Activities</h3>
              <p>Fun, faith-based quizzes and team activities that bring everyone together through joyful learning.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="container">
          <div className="stat-item" ref={states.ref}>
            <div className="stat-number">{states.count}<span className="stat-accent">+</span></div>
            <div className="stat-label">States Represented</div>
          </div>
          <div className="stat-item" ref={days.ref}>
            <div className="stat-number">{days.count}</div>
            <div className="stat-label">Days</div>
          </div>
          <div className="stat-item" ref={nights.ref}>
            <div className="stat-number">{nights.count}</div>
            <div className="stat-label">Nights</div>
          </div>
          <div className="stat-item" ref={meals.ref}>
            <div className="stat-number">{meals.count}</div>
            <div className="stat-label">Meals Included</div>
          </div>
        </div>
      </div>
    </>
  )
}
