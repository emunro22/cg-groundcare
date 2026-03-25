import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f0d', borderTop: '1px solid rgba(46,168,74,0.15)' }} className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            {/* Logo image instead of CG badge */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="CG Groundcare"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-white">CG Groundcare</div>
              <div className="text-xs" style={{ color: '#56cfff' }}>camerongill09@outlook.com</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            {['Grounds Maintenance','Landscaping','Winter Maintenance','Fencing & Decking','Domestic','Commercial'].map(s => (
              <span key={s} className="text-xs" style={{ color: '#2d5e38' }}>{s}</span>
            ))}
          </div>
          <a href="tel:07715821193" className="font-semibold text-sm hover:text-green-300 transition-colors" style={{ color: '#2ea84a' }}>
            07715 821193
          </a>
        </div>
        <div className="mt-8 mb-5 h-px" style={{ background: 'linear-gradient(90deg, #2ea84a, #56cfff, transparent)' }} />
        <p className="text-center text-xs" style={{ color: '#2d5e38' }}>
          © {new Date().getFullYear()} CG Groundcare. All rights reserved. Professional Garden Maintenance &amp; Landscaping.
        </p>
      </div>
    </footer>
  )
}