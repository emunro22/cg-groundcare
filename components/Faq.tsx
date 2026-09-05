'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What areas do you cover?',
    a: 'We cover Glasgow, Edinburgh, Newton Mearns and the surrounding Central Belt of Scotland, for both domestic and commercial clients.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes, every quote is free and no-obligation. Call or fill in the contact form and we\'ll arrange a time to assess the work.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes, CG Groundcare is fully insured for both domestic and commercial grounds maintenance and landscaping work.',
  },
  {
    q: 'Do you work with both homeowners and businesses?',
    a: 'Yes, we take on one-off domestic tidy ups through to regular commercial contracts for businesses, care homes and schools.',
  },
  {
    q: 'Do you provide winter maintenance and gritting?',
    a: 'Yes, we offer gritting, snow clearance and de-icing to keep driveways, paths and car parks safe and accessible through winter.',
  },
  {
    q: 'How do I book a job or get a quote?',
    a: 'Call Cameron directly on 07715 821193, or fill in the contact form on this site and we\'ll get back to you to arrange a free quote.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 section-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 max-w-xl">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 mb-2 leading-tight" style={{ color: '#0d2b15' }}>
            Common Questions
          </h2>
          <div className="divider" />
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="card p-6">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-base" style={{ color: '#0d2b15' }}>{f.q}</span>
                <span className="text-xl flex-shrink-0" style={{ color: '#2ea84a' }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
