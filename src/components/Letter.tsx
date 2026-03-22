export function Letter() {
  return (
    <section id="letter" className="section section-letter">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Invitation</span>
          <h2 className="section-heading">A Letter to You</h2>
        </div>

        {/* Prayer Circle Photo */}
        <div className="prayer-photo-wrapper">
          <img src="/images/prayer-circle.png" alt="Brothers and sisters in a prayer circle" className="prayer-photo" />
        </div>

        <div className="letter-wrapper">
          <div className="verse-block">
            "Then, they went away quickly from the tomb, fearful yet overjoyed, and ran to announce this to his disciples... Then Jesus said to them, 'Do not be afraid. Go, tell my brothers to go to Galilee, and there they will see me."
            <span className="verse-ref">— Matthew 28:8-10</span>
          </div>

          <div className="letter-body">
            <p><strong>Greetings, brothers and sisters in Christ!</strong></p>
            <p>
              This year, as the <strong>CFC NATCON in Austin, Texas — July 10-16, 2026</strong> approaches, we are called to be <em>anchored</em> in Christ! We give thanks for opportunities to praise God through the many talents He has blessed us with. With joyful hearts, we prepare to glorify Him through the NATCON Creatives!
            </p>
            <p>
              This is the biggest CFC gathering in the USA, bringing together <strong>Indian Christian families from all states and delegates from India</strong>. Over 3 days and 2 nights, experience a life-changing weekend full of salvation, worship, workshops, prayer sessions, children's Sunday School, quizzes, group discussions, testimonials, and so much more!
            </p>
            <p>
              In the spirit of the upcoming NATCON, let us not forget that we do this not for ourselves but for the one we love, Our Lord. The creatives are showcases of the gifts that God has given us — no placings or rankings. This is a great opportunity to demonstrate the creativity and joy of a Christian.
            </p>
            <p>
              Through prayer, let us include Christ in all practices and preparation in order to bring the glory back to our Almighty King. Have fun and let's create!
            </p>
          </div>
          <p className="letter-sig">In Christ,<br/>CFC Sports and Creatives Committee</p>
        </div>
      </div>
    </section>
  )
}
