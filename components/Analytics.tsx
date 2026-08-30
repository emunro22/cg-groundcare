'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function Analytics() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('cookie-consent')
    setConsent(stored === 'accepted')

    const onConsent = () => {
      setConsent(localStorage.getItem('cookie-consent') === 'accepted')
    }
    window.addEventListener('cookie-consent-change', onConsent)
    return () => window.removeEventListener('cookie-consent-change', onConsent)
  }, [])

  if (!GA_ID || !consent) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
