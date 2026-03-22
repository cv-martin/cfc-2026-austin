import { useState } from 'react'

export function WhyAttend() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="about" className="section section-why">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why You Should Attend</span>
          <h2 className="section-heading">About the Event</h2>
        </div>

        <div className="why-content">
          <p className="why-lead">
            <strong>CFC NATCON 2026</strong> brings together hundreds of believers from across the United States and India for the largest annual Couples For Christ gathering in the nation.
          </p>
          <p>
            This isn't just a conference — it's a <strong>life-changing encounter with the living God</strong>. Over three powerful days in Austin, Texas, you'll experience spirit-filled worship that moves hearts, anointed teaching that transforms minds, and deep fellowship that builds lasting bonds in Christ.
          </p>
          <p>
            Whether you're a seasoned CFC member or a first-time visitor, NATCON is where families are restored, faith is renewed, and communities are united under one purpose — to know Jesus and make Him known. Come be part of a movement that has touched thousands of lives across generations.
          </p>
          <div className="why-highlights">
            <div className="why-pill">🙌 Spirit-filled Worship</div>
            <div className="why-pill">📖 Anointed Teaching</div>
            <div className="why-pill">🤝 Deep Fellowship</div>
            <div className="why-pill">🎨 Creative Showcases</div>
            <div className="why-pill">👨‍👩‍👧‍👦 All-Ages Welcome</div>
            <div className="why-pill">🍽️ 9 Meals Included</div>
          </div>
          <button className="btn-video" onClick={() => setShowVideo(true)}>
            <span className="play-icon">▶</span> Watch 2025 Highlights
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-close" onClick={() => setShowVideo(false)}>✕</button>
            <div className="video-placeholder">
              <div className="video-placeholder-inner">
                <span className="play-icon-large">▶</span>
                <p>2025 NATCON Highlights</p>
                <p className="video-note">Video coming soon — check back for the official 2025 recap!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
