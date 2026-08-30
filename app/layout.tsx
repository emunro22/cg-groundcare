import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Flat 2, 29 Freelands Crescent',
  addressLocality: 'Old Kilpatrick',
  postalCode: 'G60 5DZ',
  addressCountry: 'GB',
}

const areaServed = [
  { '@type': 'City', name: 'Newton Mearns' },
  { '@type': 'City', name: 'Glasgow' },
  { '@type': 'City', name: 'Edinburgh' },
]

// Kept as a single-string @type (rather than an array) plus additionalType,
// since some schema scanners only match a plain string on @type.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/HomeAndConstructionBusiness',
  name: 'CGG Groundcare Limited',
  alternateName: 'CG Groundcare',
  legalName: 'CGG Groundcare Limited',
  image: 'https://cg-groundcare.co.uk/logo.png',
  logo: 'https://cg-groundcare.co.uk/logo.png',
  url: 'https://cg-groundcare.co.uk',
  telephone: '+447715821193',
  email: 'enquiries@cg-groundcare.co.uk',
  priceRange: '££',
  address,
  areaServed,
  founder: {
    '@type': 'Person',
    name: 'Cameron Gill',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Groundcare Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Garden Maintenance' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Landscaping' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Winter Maintenance' },
      },
    ],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CGG Groundcare Limited',
  alternateName: 'CG Groundcare',
  url: 'https://cg-groundcare.co.uk',
  logo: 'https://cg-groundcare.co.uk/logo.png',
  address,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+447715821193',
    email: 'enquiries@cg-groundcare.co.uk',
    contactType: 'customer service',
    areaServed: 'GB',
  },
}

const title = 'CG Groundcare | Garden Maintenance Glasgow & Edinburgh'
const description = 'Professional garden maintenance, landscaping and winter maintenance for domestic and commercial clients. Call Cameron on 07715 821193.'

export const metadata: Metadata = {
  metadataBase: new URL('https://cg-groundcare.co.uk'),
  title,
  description,
  keywords: 'garden maintenance, landscaping, winter maintenance, grass cutting, hedge cutting, fencing, decking, CG Groundcare, Cameron Gill',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    url: 'https://cg-groundcare.co.uk',
    siteName: 'CG Groundcare',
    images: [{ url: '/logo-card.png', width: 960, height: 960, alt: 'CG Groundcare' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/logo-card.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
