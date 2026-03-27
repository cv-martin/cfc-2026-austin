import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { WhyAttend } from './components/WhyAttend'
import { Talks } from './components/Talks'
import { Experience } from './components/Experience'
import { Creatives } from './components/Creatives'
import { Sponsors } from './components/Sponsors'
import { Letter } from './components/Letter'
import { Venue } from './components/Venue'
import { Faq } from './components/Faq'
import { Registration } from './components/Registration'
import { Footer } from './components/Footer'
import { useScrollRevealAll } from './hooks/useScrollReveal'
import './App.css'

/* Photo gallery strip — exactly like the CFC Summit staggered photo row after hero */
function PhotoGallery() {
  const images = [
    { src: '/cfc-2026-austin/images/gallery-1.png', alt: 'CFC Conference gathering' },
    { src: '/cfc-2026-austin/images/gallery-2.png', alt: 'Worship session' },
    { src: '/cfc-2026-austin/images/gallery-3.png', alt: 'Fellowship dinner' },
    { src: '/cfc-2026-austin/images/gallery-4.png', alt: 'Venue hall' },
    { src: '/cfc-2026-austin/images/gallery-5.png', alt: 'Kids program' },
  ]
  return (
    <div className="gallery-strip">
      {images.map((img, i) => (
        <div className="gallery-item" key={i}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function App() {
  useScrollRevealAll('.scroll-reveal')

  return (
    <div className="app-container">
      {/* Nav — white bar with crimson CTA */}
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav-logo-org">cfc</span>
          <span className="nav-logo-event">NATCON</span>
          <span className="nav-logo-sub">USA | 2026</span>
        </div>
        <div className="nav-links">
          <a href="#talks">Talks</a>
          <a href="#speakers">Speakers</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#venue">Venue</a>
          <a href="#faqs">FAQs</a>
        </div>
        <div className="nav-right">
          <span className="nav-date">July 10-12, 2026<br/>Austin, Texas</span>
          <a href="#registration" className="nav-cta">Register Now</a>
        </div>
      </nav>

      <Hero />
      <PhotoGallery />
      <WhyAttend />
      <Countdown />
      <Talks />
      <Experience />
      <Creatives />
      <Sponsors />
      <Letter />
      <Venue />
      <Faq />
      <Registration />
      <Footer />
    </div>
  )
}

export default App
