import { useState, useEffect } from 'react'

export function Countdown() {
  const target = new Date('2026-07-10T00:00:00').getTime()
  const [time, setTime] = useState(getTime())

  function getTime() {
    const now = Date.now()
    const diff = Math.max(target - now, 0)
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown-strip">
      <p className="countdown-label">Event starts in</p>
      <div className="countdown-grid">
        <div className="countdown-unit">
          <span className="countdown-number">{time.days}</span>
          <span className="countdown-text">Days</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-number">{String(time.hours).padStart(2,'0')}</span>
          <span className="countdown-text">Hours</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-number">{String(time.minutes).padStart(2,'0')}</span>
          <span className="countdown-text">Minutes</span>
        </div>
        <div className="countdown-unit">
          <span className="countdown-number">{String(time.seconds).padStart(2,'0')}</span>
          <span className="countdown-text">Seconds</span>
        </div>
      </div>
    </div>
  )
}
