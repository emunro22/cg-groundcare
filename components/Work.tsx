import Image from 'next/image'

const domestic = [
  { src: '/lawn-stripe.png',         label: 'Lawn Mowing',           desc: 'Striped finish on large domestic lawn' },
  { src: '/astro-decking.png',       label: 'Artificial Turf & Decking', desc: 'Full garden transformation with astro and deck' },
  { src: '/fence-new-1.png',         label: 'Close-Board Fencing',   desc: 'New full perimeter fence installed' },
  { src: '/fence-new-3.png',         label: 'Fencing',               desc: 'Curved fence line neatly installed' },
  { src: '/garden-after.png',        label: 'Garden Tidy Up',        desc: 'Overgrown garden cleared and shaped' },
  { src: '/grass-cutting1.jpg',      label: 'Full Lawn Cut',        desc: 'A Recent Lawn Cut Job in the Area' },
  { src: '/back-garden.jpg',         label: 'Full Garden Renovation',        desc: 'Complete Garden Renovation' },
  { src: '/back-garden1.jpg',        label: 'Full Garden Renovation',        desc: 'Another Fully Complete Garden Renovation' },
  { src: '/decking-2.jpg',           label: 'Decking Restoration',        desc: 'Fully Complete Decking Job' },
  { src: '/decking-3.jpg',           label: 'Decking Restoration',        desc: 'Another Fully Complete Recent Decking Job' },
  { src: '/front-garden.jpg',        label: 'Front Garden Restoration',        desc: 'Fully Complete Garden Restoration' },
  { src: '/garden-makeover2.jpg',    label: 'Garden Makeover',        desc: 'A full Garden Makeover Recently Completed' },




]

const commercial = [
  { src: '/commercial-lawn.png',     label: 'Care Home Grounds',     desc: 'Manicured grounds at local care home' },
  { src: '/commercial-path.png',     label: 'Commercial Landscaping', desc: 'Tarmac path, lawn and planting for commercial site' },
  { src: '/hedge-after.png',         label: 'Commercial Hedges',     desc: 'Large leylandii hedge maintained to uniform height' },
  { src: '/fence-new-2.png',         label: 'Commercial Fencing',    desc: 'Long run of new close-board fencing' },
  { src: '/commercial-fence.jpg',    label: 'Commercial Fencing',    desc: 'Another Long run of new close-board fencing' },
]

function Grid({ items, dark }: { items: typeof domestic, dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((p) => (
        <div key={p.src} className="gallery-wrap relative rounded-2xl overflow-hidden border"
          style={{ aspectRatio: '4/3', borderColor: dark ? 'rgba(46,168,74,0.2)' : 'rgba(46,168,74,0.1)' }}>
          <Image src={p.src} alt={p.label} fill className="gallery-img object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(13,43,21,0.88) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }} />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#56cfff' }}>Completed</div>
            <h4 className="font-display text-base font-bold text-white">{p.label}</h4>
            <p className="text-green-200 text-xs mt-0.5">{p.desc}</p>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full text-white"
            style={{ background: 'rgba(46,168,74,0.85)' }}>✓ Done</div>
        </div>
      ))}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      {/* Domestic */}
      <div className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'linear-gradient(135deg, #2ea84a, #1a8a38)' }}>🏠</div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>Domestic Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#0d2b15' }}>
                Residential Projects
              </h2>
            </div>
          </div>
          <div className="divider mb-8" />
          <Grid items={domestic} />
        </div>
      </div>

      {/* Commercial */}
      <div className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'linear-gradient(135deg, #56cfff, #2ea84a)' }}>🏢</div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#56cfff' }}>Commercial Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Commercial Projects
              </h2>
            </div>
          </div>
          <div className="divider mb-8" />
          <p className="text-green-200/70 text-base mb-10 max-w-xl">
            We work with care homes, businesses and commercial landlords across the area — providing reliable, scheduled maintenance year-round.
          </p>
          <Grid items={commercial} dark />
        </div>
      </div>
    </section>
  )
}
