export function About() {
  return (
    <>
      {/* ─── SECTION: GREETING (Burgundy/Wine) ─── */}
      <section id="about" className="section-greeting">
        <div className="container">
          <h2 className="section-title fade-in-up">Greetings in Christ!</h2>
          
          <div className="intro-letter fade-in-up delay-1">
            <div className="verse-block">
              "Then, they went away quickly from the tomb, fearful yet overjoyed, and ran to announce this to his disciples... Then Jesus said to them, 'Do not be afraid. Go, tell my brothers to go to Galilee, and there they will see me."
              <span className="verse-ref">— Matthew 28:8-10</span>
            </div>
            
            <p className="letter-greeting">Greetings, brothers and sisters in Christ!</p>
            <p className="letter-body">
              This year, as the <strong style={{color: '#fff'}}>CFC NATCON in Austin, Texas — July 10-16, 2026</strong> approaches, we are called to be <em>anchored</em> in Christ! We give thanks for opportunities to praise God through the many talents He has blessed us with. Therefore, with joyful hearts, we prepare to glorify Him through the NATCON Creatives! As we brainstorm for ideas, prepare with our teams, or practice our parts, let us prepare our hearts and spirits in preparation for the conference.
            </p>
            <p className="letter-body">
              This is the biggest CFC gathering in the USA, bringing together Indian Christian families from all states and delegates from India. Over 3 days and 2 nights, experience a life-changing weekend full of salvation, worship, workshops, prayer sessions, children's Sunday School, quizzes, group discussions, testimonials, and so much more!
            </p>
            <p className="letter-body">
              In the spirit of the upcoming NATCON, let us not forget that we do this not for ourselves but for the one we love, Our Lord. The creatives are not based on competition; they are deemed as showcases of the gifts that God has given us. This is a great opportunity to demonstrate the creativity and joy of a Christian.
            </p>
            <p className="letter-closing">
              Through prayer, let us include Christ in all practices and preparation in order to bring the glory back to our Almighty King. Have fun and let's create!
            </p>
            <p className="signature">
              In Christ,<br/>CFC Sports and Creatives Committee
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION: CREATIVES (Deep Teal/Emerald) ─── */}
      <section id="creatives" className="section-creatives">
        <div className="container">
          <h2 className="section-title">The Creatives</h2>
          <p className="section-desc">
            A showcase of the gifts God has given us. All delegates are invited to participate. No placings, no rankings — just pure joyful creation for His glory.
          </p>
          
          <div className="creatives-grid">
            <div className="creative-card">
              <h3>🎬 Shortfilm</h3>
              <p>Tell a profound story through the lens of faith to inspire your brothers and sisters.</p>
            </div>
            <div className="creative-card">
              <h3>🎙️ Spoken Word</h3>
              <p>Share your heartfelt poetry and testaments of grace with the community.</p>
            </div>
            <div className="creative-card">
              <h3>🎸 Band</h3>
              <p>Lift His name high through united and energetic musical worship.</p>
            </div>
            <div className="creative-card">
              <h3>💃 Dance</h3>
              <p>Glorify the Lord through joyful, spirit-filled movement and expression.</p>
            </div>
            <div className="creative-card">
              <h3>🎶 Chorale</h3>
              <p>Unite voices in beautiful harmony to sing His eternal praises together.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
