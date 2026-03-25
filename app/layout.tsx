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

export const metadata: Metadata = {
  title: 'CG Groundcare | Garden Maintenance, Landscaping & Winter Maintenance',
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
        {children}
      </body>
    </html>
  )
}
