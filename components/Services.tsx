const services = [
  { icon: '🌿', title: 'Grounds Maintenance',  desc: 'Grass cutting, hedge trimming, edging, weeding and seasonal garden care for all property types.' },
  { icon: '🏡', title: 'Landscaping',           desc: 'Full garden transformations - fencing, decking, composite decking, artificial grass, decorative gravel, bark, planting' },
  { icon: '❄️', title: 'Winter Maintenance',    desc: 'Gritting, snow clearance and de-icing to keep your property safe and accessible all winter long.' },
  { icon: '🏠', title: 'Domestic Work',         desc: 'Residential garden care tailored to homeowners — one-off tidy ups to regular maintenance contracts.' },
  { icon: '🏢', title: 'Commercial Work',       desc: 'Reliable scheduled maintenance for businesses, care homes, schools and commercial premises.' },
  { icon: '🪵', title: 'Fencing & Decking',     desc: 'Quality different styles of fencing, treated timber decking, composite decking' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 section-light">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14 max-w-xl">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>What We Do</span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-2 mb-2 leading-tight" style={{ color: '#0d2b15' }}>
            Our Services
          </h2>
          <div className="divider" />
          <p className="text-gray-600 text-base leading-relaxed">
            From a single lawn cut to a full commercial grounds contract — we cover it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="card p-7">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(46,168,74,0.12), rgba(86,207,255,0.12))', border: '1px solid rgba(46,168,74,0.2)' }}>
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#0d2b15' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-px" style={{ background: 'linear-gradient(90deg, rgba(46,168,74,0.3), transparent)' }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl p-10 md:p-14 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>
          <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-3">Need a free quote?</h3>
          <p className="text-green-200 mb-8 text-lg">Domestic or commercial — we&apos;ll come out and assess your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07715821193" className="btn-primary text-lg px-9 py-4">📞 07715 821193</a>
            <a href="mailto:camerongill09@outlook.com" className="btn-white text-lg px-9 py-4">✉️ Email Cameron</a>
          </div>
        </div>
      </div>
    </section>
  )
}
