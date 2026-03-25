import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image src="/commercial-path.png" alt="Commercial landscaping" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 pt-8">
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <Image src="/lawn-stripe.png" alt="Lawn mowing" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <Image src="/astro-decking.png" alt="Decking" fill className="object-cover" />
                </div>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 text-white rounded-2xl p-4 text-center shadow-xl"
              style={{ background: 'linear-gradient(135deg, #2ea84a, #56cfff)' }}>
              <div className="font-display text-2xl font-extrabold">5★</div>
              <div className="text-xs font-semibold mt-0.5">Rated</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>About Us</span>
            <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-2 mb-5 leading-tight" style={{ color: '#0d2b15' }}>
              Trusted. Local.<br />
              <span style={{ color: '#2ea84a' }}>Reliable.</span>
            </h2>
            <div className="divider" />
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                CG Groundcare is a locally run grounds maintenance and landscaping company serving both domestic and commercial clients across Scotlands Central Belt.
              </p>
              <p>
                Whether it&apos;s a one-off garden tidy up, a full landscaping project, or year-round commercial grounds maintenance — we bring the same dedication to every job.
              </p>
              <p>
                When you call Cameron, you get Cameron. No subcontractors, no surprises.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '✓  Free Quotations',
                '✓  Fully Insured',
                '✓  Domestic & Commercial',
                '✓  Winter Maintenance',
                '✓  Quality Guaranteed',
                '✓  Flexible Contracts',
              ].map((point) => (
                <div key={point} className="text-sm font-medium px-4 py-3 rounded-xl"
                  style={{ background: '#f0f4f0', border: '1px solid rgba(46,168,74,0.15)', color: '#0d2b15' }}>
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a href="tel:07715821193" className="btn-primary text-base px-7 py-3.5">
                📞 Call Cameron
              </a>
              <a href="mailto:camerongill09@outlook.com" className="btn-ghost text-base px-7 py-3.5">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
