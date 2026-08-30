'use client'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) setVisible(true)
  }, [])

  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', value)
    window.dispatchEvent(new Event('cookie-consent-change'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-5"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-2xl"
        style={{ background: '#0d2b15', border: '1px solid rgba(46,168,74,0.3)' }}
      >
        <p className="text-green-100/80 text-sm leading-relaxed flex-1">
          We use cookies for basic site analytics to understand how visitors use this site. See our{' '}
          <a href="/privacy-policy" className="underline" style={{ color: '#56cfff' }}>Privacy Policy</a> for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => choose('declined')} className="btn-ghost text-sm px-5 py-2.5" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            Decline
          </button>
          <button onClick={() => choose('accepted')} className="btn-primary text-sm px-5 py-2.5">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
