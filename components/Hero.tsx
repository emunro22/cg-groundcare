'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
      el.classList.add('animate-fade-up', `delay-${i + 1}`)
    })
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(86,207,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(86,207,255,0.8) 1px,transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(46,168,74,0.15) 0%, transparent 70%)'
      }} />

      {/* Van image */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] overflow-hidden">
        <Image
          src="/van2.png"
          alt="CG Groundcare van"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.55, transform: 'scaleX(-1)' }}
          priority
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, #0d2b15 25%, rgba(13,43,21,0.8) 55%, rgba(13,43,21,0.1) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(13,43,21,0.6) 0%, transparent 15%, transparent 80%, #0d2b15 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 sm:pb-20 w-full">
        <div className="max-w-lg">

          {/* Real logo */}
          <div className="reveal opacity-0 flex items-center gap-4 mb-7">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="CG Groundcare"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-white leading-none">CG Groundcare</div>
              <div className="text-sm mt-1.5" style={{ color: '#56cfff' }}>Domestic &amp; Commercial</div>
            </div>
          </div>

          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 border border-green-400/30 bg-green-400/10 text-green-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            Garden · Landscaping · Winter Maintenance
          </div>

          <h1 className="reveal opacity-0 font-display text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-white">
            Your Space,<br />
            <span className="text-shimmer">Perfectly Maintained.</span>
          </h1>

          <p className="reveal opacity-0 text-green-100/80 text-lg leading-relaxed mb-10 max-w-md">
            Professional garden maintenance, landscaping and winter maintenance for homes and businesses across the Scotlands Central Belt. This includes areas such as Newton Mearns, East end of Glasgow & Edinburgh
          </p>

          <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4">
            <a href="tel:07715821193" className="btn-primary text-base px-8 py-4">
              📞 07715 821193
            </a>
            <a href="#services" className="btn-ghost text-base px-8 py-4">
              Our Services →
            </a>
          </div>
        </div>
      </div>

        {/* Scroll cue */}
       <div className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-green-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent" />
        </div>   
        </section>
  )
}