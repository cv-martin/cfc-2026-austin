import { useState } from 'react'

const faqs = [
  { q: 'Who can attend the CFC NATCON 2026?', a: 'Everyone is welcome! Families, youth, children, singles — people of all ages from all CFC chapters across the USA and delegates from India.' },
  { q: 'What is included in the $296 registration fee?', a: 'Your registration covers the full 3-day conference experience, 2 nights of campus accommodation, and all 9 meals (3 breakfasts, 3 lunches, 3 dinners). It also includes access to all sessions, workshops, creatives showcases, and prayer sessions.' },
  { q: 'What should I bring?', a: 'Comfortable clothing (July in Austin is ~95°F!), your Bible, a notebook, personal toiletries, and a heart ready to worship. All conference areas are air-conditioned.' },
  { q: 'Is childcare or Sunday School available?', a: 'Yes! We have a dedicated Children\'s Sunday School program with fun, faith-based activities so the entire family can attend and grow together.' },
  { q: 'How do I pay for registration?', a: 'We accept Credit Card, ACH bank transfer, Apple Pay, and Google Pay through our Zeffy platform. 100% of your payment goes directly to our mission — Zeffy charges no platform fees.' },
  { q: 'Can I get a refund if I can\'t attend?', a: 'Refund policies will be communicated upon registration. Please contact the registration secretariat for specific cases.' },
  { q: 'Where exactly is the venue?', a: 'The Austin Convention Center, located at 500 E Cesar Chavez St, Austin, TX 78701. It\'s a 15-minute drive from Austin-Bergstrom International Airport (AUS). Free parking is available.' },
  { q: 'Will room reservations be confirmed immediately?', a: 'Room reservations will not be confirmed until payment is received. You will receive a confirmation email once your payment is processed.' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="section section-faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Need Answers?</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${open === i ? 'open' : ''}`}
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              {open === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
