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
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">CFC NATCON 2026</div>
        <div className="nav-links">
          <a href="#talks">Talks</a>
          <a href="#speakers">Speakers</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#venue">Venue</a>
          <a href="#faqs">FAQs</a>
        </div>
        <div className="nav-right">
          <span className="nav-date">JULY 2026 · Austin | USA</span>
          <a href="#registration" className="nav-cta">Register</a>
        </div>
      </nav>

      <Hero />
      <Countdown />
      <WhyAttend />
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
