const speakers = [
  { name: 'Fr. Thomas Mathew', role: 'Keynote Speaker', ministry: 'CFC National Spiritual Director', bio: 'A dynamic preacher with 20+ years of ministry, leading CFC communities worldwide.' },
  { name: 'Dr. Sarah Abraham', role: 'Workshop Lead', ministry: 'Family Life Ministry', bio: 'Expert in marriage counseling and family spiritual formation.' },
  { name: 'Bro. David Varghese', role: 'Youth Speaker', ministry: 'CFC Youth For Christ', bio: 'Passionate about igniting the next generation for Christ.' },
  { name: 'Sr. Mary Philip', role: 'Prayer Session Lead', ministry: 'Intercessory Prayer Ministry', bio: 'Dedicated prayer warrior leading powerful intercession sessions.' },
  { name: 'Pr. James Kurian', role: 'Teaching Session', ministry: 'CFC Bible Study', bio: 'In-depth biblical scholar bringing scripture to life for everyday faith.' },
  { name: 'Sis. Reena George', role: 'Worship Leader', ministry: 'CFC Praise & Worship', bio: 'Leading hearts to worship through powerful music and song.' },
]

export function Speakers() {
  return (
    <section id="speakers" className="section section-speakers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Meet the Speakers</span>
          <h2 className="section-heading">Anointed Voices</h2>
          <p className="section-sub">Hear from powerful men and women of God who will inspire, teach, and lead us deeper into faith.</p>
        </div>

        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div className="speaker-card" key={i}>
              <div className="speaker-avatar">
                <div className="speaker-initials">{s.name.split(' ').map(w => w[0]).join('')}</div>
              </div>
              <h3>{s.name}</h3>
              <span className="speaker-role">{s.role}</span>
              <span className="speaker-ministry">{s.ministry}</span>
              <p>{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
