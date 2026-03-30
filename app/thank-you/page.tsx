import Link from 'next/link'

export default function ThankYou() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}
    >
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div
          className="mx-auto mb-8 flex items-center justify-center"
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            background: 'rgba(46,168,74,0.15)',
            border: '2px solid rgba(46,168,74,0.3)',
          }}
        >
          <span style={{ fontSize: 44 }}>✅</span>
        </div>

        {/* Heading */}
        <span
          className="text-sm font-bold tracking-widest uppercase block mb-3"
          style={{ color: '#56cfff' }}
        >
          Message Received
        </span>
        <h1
          className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5"
        >
          Thanks for getting in touch!
        </h1>
        <p className="text-green-200/70 text-lg mb-10 leading-relaxed">
          Cameron will be in touch shortly to discuss your enquiry. If you need an urgent response, give him a call directly.
        </p>

        {/* Divider */}
        <div className="divider max-w-xs mx-auto mb-10" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07715821193"
            className="btn-primary justify-center py-4 px-8 text-base"
          >
            📞 Call Cameron Now
          </a>
          <Link
            href="/"
            className="btn-ghost justify-center py-4 px-8 text-base"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Phone number display */}
        <div
          className="mt-10 rounded-2xl p-6 border border-green-400/15"
          style={{ background: 'rgba(46,168,74,0.07)' }}
        >
          <p className="text-green-300/60 text-xs uppercase tracking-widest mb-2">Or call us directly</p>
          <a
            href="tel:07715821193"
            className="font-display text-4xl font-extrabold text-white hover:text-green-300 transition-colors block"
          >
            07715 821193
          </a>
          <p className="text-green-300/50 text-sm mt-2">Mon – Sat · Free Quotes · No Obligation</p>
        </div>

      </div>
    </main>
  )
}