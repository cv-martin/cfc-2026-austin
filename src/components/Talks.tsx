import { useState } from 'react'

const schedule = [
  {
    day: 'Day 1',
    label: 'Friday',
    date: 'July 10, 2026',
    sessions: [
      { time: '2:00 PM', title: 'Registration & Check-in', desc: 'Arrive at the venue, collect your welcome pack, and settle into your rooms.', type: 'logistics' },
      { time: '4:00 PM', title: 'Opening Worship Set', desc: 'Come together as one body for the opening praise and worship session.', speaker: 'CFC Worship Team', role: 'Praise & Worship', type: 'worship' },
      { time: '6:00 PM', title: 'Dinner', desc: 'Community dinner — fellowship and food.', type: 'meal' },
      { time: '7:30 PM', title: 'Keynote: Anchored in Christ', desc: 'The opening keynote setting the tone for our NATCON theme — what it means to be truly anchored in Jesus in a rapidly changing world.', speaker: 'Fr. Thomas Mathew', role: 'CFC National Spiritual Director', type: 'keynote' },
      { time: '9:00 PM', title: 'Evening Prayer & Reflection', desc: 'End the day in communal prayer and personal reflection.', type: 'prayer' },
    ]
  },
  {
    day: 'Day 2',
    label: 'Saturday',
    date: 'July 11, 2026',
    sessions: [
      { time: '7:00 AM', title: 'Morning Prayer', desc: 'Start the day anchored in Christ through morning devotion.', type: 'prayer' },
      { time: '8:00 AM', title: 'Breakfast', type: 'meal' },
      { time: '9:00 AM', title: 'Teaching: Walking in Faith', desc: 'An empowering session on living out our faith in modern times — practical steps for families and individuals.', speaker: 'Pr. James Kurian', role: 'CFC Bible Study Lead', type: 'talk' },
      { time: '10:30 AM', title: 'Workshop Block A', desc: 'Choose from: Marriage & Family, Youth in Christ, or Parenting with Purpose.', speaker: 'Dr. Sarah Abraham', role: 'Family Life Ministry', type: 'workshop' },
      { time: '12:00 PM', title: 'Lunch', type: 'meal' },
      { time: '1:30 PM', title: 'Group Discussions', desc: 'Small group breakouts for deeper fellowship and conversation.', type: 'discussion' },
      { time: '3:00 PM', title: 'NATCON Creatives Showcase', desc: 'Shortfilm, Spoken Word, Band, Dance, and Chorale performances — a celebration of God-given talents.', type: 'creatives' },
      { time: '5:00 PM', title: 'Children\'s Sunday School & Quiz', desc: 'Fun, faith-based activities for the kids!', type: 'kids' },
      { time: '6:00 PM', title: 'Dinner', type: 'meal' },
      { time: '7:30 PM', title: 'Testimonials & Praise Night', desc: 'Hear powerful testimonies of faith and worship together into the evening.', speaker: 'Sis. Reena George', role: 'Worship Leader', type: 'worship' },
    ]
  },
  {
    day: 'Day 3',
    label: 'Sunday',
    date: 'July 12, 2026',
    sessions: [
      { time: '7:00 AM', title: 'Morning Devotion', desc: 'Final morning prayer — preparing hearts for the closing.', type: 'prayer' },
      { time: '8:00 AM', title: 'Breakfast', type: 'meal' },
      { time: '9:30 AM', title: 'Sunday Worship Service', desc: 'A powerful, unified worship service for all delegates.', speaker: 'CFC Worship Team', role: 'Praise & Worship', type: 'worship' },
      { time: '11:00 AM', title: 'Closing Keynote: Go and Tell', desc: 'The sending-off message — go forth anchored and empowered to share the Gospel wherever you go.', speaker: 'Bro. David Varghese', role: 'CFC Youth For Christ', type: 'keynote' },
      { time: '12:30 PM', title: 'Farewell Lunch & Departure', desc: 'Final fellowship over a meal before heading home blessed.', type: 'meal' },
    ]
  }
]

const typeEmoji: Record<string, string> = {
  logistics: '📋', worship: '🙌', meal: '🍽️', keynote: '🎤', prayer: '🙏',
  talk: '📖', workshop: '💡', discussion: '🗣️', creatives: '🎨', kids: '👼'
}

export function Talks() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="talks" className="section section-talks">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Schedule</span>
          <h2 className="section-heading">The Talks</h2>
          <p className="section-sub">3 spirit-filled days of worship, learning, fellowship, and celebration.</p>
        </div>

        <div className="day-tabs">
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
          {/* Left: Featured speaker for the day */}
          <div className="talks-featured">
            {(() => {
              const keynote = schedule[activeDay].sessions.find(s => s.type === 'keynote')
              if (!keynote) return null
              return (
                <div className="featured-speaker-card">
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

          {/* Right: Timeline */}
          <div className="talks-timeline">
            {schedule[activeDay].sessions.map((s, i) => (
              <div className={`timeline-item type-${s.type}`} key={i}>
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
