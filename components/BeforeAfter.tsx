'use client'
import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

function BASlider({ before, after, beforeLabel, afterLabel }: {
  before: string; after: string; beforeLabel: string; afterLabel: string
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95)
    setPos(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX) }

  return (
    <div ref={containerRef} className="ba-container select-none"
      style={{ aspectRatio: '4/3', cursor: 'col-resize' }}
      onMouseDown={onMouseDown} onMouseMove={onMouseMove}
      onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}>

      {/* Before (full width) */}
      <Image src={before} alt={beforeLabel} fill className="object-cover" />
      <div className="absolute bottom-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10"
        style={{ background: 'rgba(220,50,50,0.85)' }}>BEFORE</div>

      {/* After (clipped) */}
      <div className="ba-after" style={{ width: `${pos}%` }}>
        <div style={{ position: 'absolute', inset: 0, width: `${100 / (pos / 100)}%` }}>
          <Image src={after} alt={afterLabel} fill className="object-cover" />
        </div>
        <div className="absolute bottom-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10"
          style={{ background: 'rgba(46,168,74,0.9)' }}>AFTER</div>
      </div>

      {/* Handle */}
      <div className="ba-handle z-20" style={{ left: `${pos}%` }}>
        <div className="ba-handle-circle">◀▶</div>
      </div>
    </div>
  )
}

const pairs = [
  {
    before: '/garden-before.png',
    after: '/garden-after.png',
    beforeLabel: 'Overgrown garden before',
    afterLabel: 'Garden tidied after',
    title: 'Garden Clearance',
    desc: 'Completely overgrown front garden cleared, hedges shaped and tidied.',
  },
  {
    before: '/garden-makeover-before.png',
    after: '/garden-makeover-after.png',
    beforeLabel: 'Garden before makeover',
    afterLabel: 'Garden after makeover',
    title: 'Full Garden Makeover',
    desc: 'Old lawn removed and new lawn laid with decorative bark path.',
  },
  {
    before: '/hedge-before.png',
    after: '/hedge-after.png',
    beforeLabel: 'Hedge before cutting',
    afterLabel: 'Hedge after cutting',
    title: 'Hedge Cutting',
    desc: 'Large leylandii hedge cut back to a neat, uniform shape throughout.',
  },
]

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>Transformations</span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-2 mb-4 leading-tight" style={{ color: '#0d2b15' }}>
            Before &amp; After
          </h2>
          <div className="divider mx-auto" style={{ maxWidth: '200px' }} />
          <p className="text-gray-500 text-lg max-w-md mx-auto mt-2">
            Drag the slider to see the difference. Every job, done properly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pairs.map((p) => (
            <div key={p.title}>
              <BASlider before={p.before} after={p.after} beforeLabel={p.beforeLabel} afterLabel={p.afterLabel} />
              <div className="mt-4">
                <h3 className="font-display text-lg font-bold" style={{ color: '#0d2b15' }}>{p.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
