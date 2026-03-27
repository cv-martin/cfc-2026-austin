import { useState } from 'react'
import { faqs } from '../data/faqs'

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="section section-faq">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-tag">Need Answers?</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item scroll-reveal ${open === i ? 'open' : ''}`}
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{'--delay': `${i * 60}ms`} as React.CSSProperties}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
