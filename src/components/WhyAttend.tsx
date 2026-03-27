import { useState } from 'react'

export function WhyAttend() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="about" className="section section-why">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Why You Should Attend</span>
          <h2 className="section-heading"><span>Why</span> Attend?</h2>
        </div>

        <div className="why-content scroll-reveal">
          <p className="why-lead">
            <strong>Whether you're a family rooted in faith or someone searching for hope — this is your gathering.</strong>
          </p>
          <p>
            <strong>CFC NATCON 2026</strong> brings together Indian Christian families from every corner of the USA and delegates from India. For 3 days in Austin, Texas, God-centered families, young professionals, children, the brokenhearted, and the hopeful will come together as <strong>one family in Christ</strong>.
          </p>
          <p>
            This is more than a conference. It's where marriages are restored, broken hearts find healing, lonely souls find community, and every generation — from grandparents to grandchildren — experiences the living presence of God together. Come as you are.
          </p>
          <div className="why-highlights">
            <div className="why-pill">🙌 Spirit-filled Worship</div>
            <div className="why-pill">📖 Anointed Teaching</div>
            <div className="why-pill">🤝 Deep Fellowship</div>
            <div className="why-pill">🎨 Creative Showcases</div>
            <div className="why-pill">👨‍👩‍👧‍👦 All Ages Welcome</div>
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
