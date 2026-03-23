'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services', 'Work', 'About', 'Contact']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: open ? '#0d2b15' : scrolled ? 'rgba(13,43,21,0.97)' : 'rgba(13,43,21,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled || open ? '1px solid rgba(46,168,74,0.25)' : 'none',
        paddingTop: scrolled ? '10px' : '16px',
        paddingBottom: scrolled ? '10px' : '16px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — href goes to homepage, Image src points to /logo.png in public folder */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CG Groundcare"
              fill
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-white text-base leading-none">CG Groundcare</div>
            <div className="text-[10px] text-green-300 tracking-wider uppercase">Garden · Landscaping · Winter</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="nav-link text-sm font-medium text-green-100 hover:text-white transition-colors">
              {l}
            </a>
          ))}
          <a href="tel:07715821193" className="btn-primary text-sm px-5 py-2.5">
            📞 07715 821193
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2.5 rounded-lg"
          style={{ background: 'rgba(46,168,74,0.15)', border: '1px solid rgba(46,168,74,0.3)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span className="block h-0.5 w-5 bg-white transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-5 bg-white transition-all duration-300 origin-center"
            style={{ transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '340px' : '0px' }}>
        <div className="px-6 py-5 flex flex-col gap-1"
          style={{ background: '#0d2b15', borderTop: '1px solid rgba(46,168,74,0.2)' }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-green-100 hover:text-green-400 transition-colors text-sm font-medium"
              style={{ padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'block' }}
              onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="tel:07715821193" className="btn-primary justify-center mt-3"
            style={{ padding: '13px 0' }} onClick={() => setOpen(false)}>
            📞 07715 821193
          </a>
        </div>
      </div>
    </nav>
  )
}