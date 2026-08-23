import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'CGG Groundcare Limited',
  alternateName: 'CG Groundcare',
  legalName: 'CGG Groundcare Limited',
  image: 'https://cg-groundcare.co.uk/logo.png',
  logo: 'https://cg-groundcare.co.uk/logo.png',
  url: 'https://cg-groundcare.co.uk',
  telephone: '+447715821193',
  email: 'enquiries@cg-groundcare.co.uk',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat 2, 29 Freelands Crescent',
    addressLocality: 'Old Kilpatrick',
    postalCode: 'G60 5DZ',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Newton Mearns' },
    { '@type': 'City', name: 'Glasgow' },
    { '@type': 'City', name: 'Edinburgh' },
  ],
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

export const metadata: Metadata = {
  metadataBase: new URL('https://cg-groundcare.co.uk'),
  title: 'CG Groundcare | Garden Maintenance Glasgow & Edinburgh',
  description: 'Professional garden maintenance, landscaping and winter maintenance for domestic and commercial clients. Call Cameron on 07715 821193.',
  keywords: 'garden maintenance, landscaping, winter maintenance, grass cutting, hedge cutting, fencing, decking, CG Groundcare, Cameron Gill',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        {children}
      </body>
    </html>
  )
}
