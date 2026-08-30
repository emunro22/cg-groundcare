import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { services, getServiceBySlug } from '@/lib/services-data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  const title = `${service.title} | CG Groundcare`
  const description = `${service.shortDesc} Serving Glasgow, Edinburgh and Newton Mearns. Call Cameron for a free quote.`

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title, description, url: `/services/${service.slug}` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: `${service.title} | CG Groundcare`,
    description: service.longDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'CGG Groundcare Limited',
      telephone: '+447715821193',
      email: 'enquiries@cg-groundcare.co.uk',
    },
    areaServed: [
      { '@type': 'City', name: 'Newton Mearns' },
      { '@type': 'City', name: 'Glasgow' },
      { '@type': 'City', name: 'Edinburgh' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section className="pt-40 pb-20"
          style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
              style={{ background: 'rgba(46,168,74,0.15)', border: '1px solid rgba(46,168,74,0.3)' }}>
              {service.icon}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              {service.title}
            </h1>
            <p className="text-green-100/80 text-lg leading-relaxed max-w-2xl mb-8">
              {service.longDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07715821193" className="btn-primary text-base px-8 py-4">📞 07715 821193</a>
              <a href="/#contact" className="btn-ghost text-base px-8 py-4">Get a Free Quote →</a>
            </div>
          </div>
        </section>

        <section className="py-20 section-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: '#0d2b15' }}>What&apos;s included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.points.map((point) => (
                <div key={point} className="text-sm font-medium px-4 py-3 rounded-xl"
                  style={{ background: '#f0f4f0', border: '1px solid rgba(46,168,74,0.15)', color: '#0d2b15' }}>
                  ✓  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
