import { useState } from 'react'
import { schedule, typeEmoji } from '../data/schedule'

export function Talks() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="talks" className="section section-talks">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Schedule</span>
          <h2 className="section-heading"><span>The</span> Talks</h2>
          <p className="section-sub">3 spirit-filled days of worship, learning, fellowship, and celebration.</p>
        </div>

        <div className="day-tabs scroll-reveal">
          {schedule.map((day, i) => (
            <button
              key={i}
              className={`day-tab ${activeDay === i ? 'active' : ''}`}
              onClick={() => setActiveDay(i)}
            >
              <span className="day-tab-num">{day.day}</span>
              <span className="day-tab-label">{day.label}</span>
              <span className="day-tab-date">{day.date}</span>
            </button>
          ))}
        </div>

        <div className="talks-split">
          <div className="talks-featured">
            {(() => {
              const keynote = schedule[activeDay].sessions.find(s => s.type === 'keynote')
              if (!keynote) return null
              return (
                <div className="featured-speaker-card scroll-reveal">
                  <div className="featured-speaker-avatar">
                    <span>{keynote.speaker?.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                  <h3>{keynote.speaker}</h3>
                  <span className="featured-speaker-role">{keynote.role}</span>
                  <div className="featured-speaker-talk">
                    <span className="featured-speaker-time">{keynote.time}</span>
                    <p>{keynote.title}</p>
                  </div>
                  <p className="featured-speaker-desc">{keynote.desc}</p>
                </div>
              )
            })()}
          </div>

          <div className="talks-timeline">
            {schedule[activeDay].sessions.map((s, i) => (
              <div className={`timeline-item scroll-reveal type-${s.type}`} key={i} style={{'--delay': `${i * 60}ms`} as React.CSSProperties}>
                <div className="timeline-left">
                  <span className="timeline-time">{s.time}</span>
                  <span className="timeline-emoji">{typeEmoji[s.type || 'logistics']}</span>
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-right">
                  <h4>{s.title}</h4>
                  {s.desc && <p>{s.desc}</p>}
                  {s.speaker && (
                    <div className="timeline-speaker-badge">
                      <span className="timeline-speaker-initials">{s.speaker.split(' ').map(w => w[0]).join('')}</span>
                      <div>
                        <strong>{s.speaker}</strong>
                        <span>{s.role}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
