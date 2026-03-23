'use client'
import { useState } from 'react'

const services = ['Grounds Maintenance', 'Landscaping', 'Winter Maintenance', 'Fencing & Decking', 'Domestic - One-off', 'Commercial Contract', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: '#f0f4f0',
    border: '1px solid rgba(46,168,74,0.2)',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#1a1a1a',
    outline: 'none',
    width: '100%',
  }

  return (
    <section id="contact" className="py-24"
      style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#56cfff' }}>Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold mt-3 mb-4 text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-green-200/70 text-lg max-w-md mx-auto">
            Free quotes for domestic and commercial clients. Fill in the form or call/email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: 'white' }}>
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: '#0d2b15' }}>Message Sent!</h3>
                <p className="text-gray-500">Cameron will be in touch shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm hover:underline" style={{ color: '#2ea84a' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#0d2b15' }}>Send an Enquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2ea84a' }}>Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2ea84a' }}>Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="07700 000000" style={inputStyle} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2ea84a' }}>Email (optional)</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" style={inputStyle} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2ea84a' }}>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' as const }}>
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#2ea84a' }}>Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us a bit about what you need..."
                    style={{ ...inputStyle, resize: 'none' }} />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong — please try calling us instead.</p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="btn-primary justify-center py-4 text-base font-bold mt-1 w-full disabled:opacity-60">
                  {status === 'sending' ? '⏳ Sending...' : '📩 Send Enquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5">
            {/* Phone */}
            <div className="rounded-3xl p-8 text-center border border-green-400/20"
              style={{ background: 'rgba(46,168,74,0.08)' }}>
              <p className="text-green-300 text-xs uppercase tracking-widest mb-2">Call us today</p>
              <a href="tel:07715821193"
                className="font-display text-4xl md:text-5xl font-extrabold text-white hover:text-green-300 transition-colors block mb-2">
                07715 821193
              </a>
              <p className="text-green-300/60 text-sm mb-6">Mon – Sat · Free Quotes · No Obligation</p>
              <a href="tel:07715821193" className="btn-primary justify-center py-3.5 px-8 text-base">
                📞 Call Cameron Now
              </a>
            </div>

            {/* Email */}
            <a href="mailto:camerongill09@outlook.com"
              className="rounded-2xl p-5 flex items-center gap-4 border border-green-400/20 hover:border-green-400/40 transition-colors"
              style={{ background: 'rgba(86,207,255,0.06)', textDecoration: 'none' }}>
              <span className="text-3xl">✉️</span>
              <div>
                <div className="font-semibold text-white text-sm">Email Cameron</div>
                <div className="text-sm mt-0.5" style={{ color: '#56cfff' }}>camerongill09@outlook.com</div>
              </div>
            </a>

            {/* Tiles */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏠', title: 'Domestic', sub: 'Residential' },
                { icon: '🏢', title: 'Commercial', sub: 'Business' },
                { icon: '❄️', title: 'Winter', sub: 'Year-round' },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-4 flex flex-col items-center gap-1.5 text-center border border-green-400/15"
                  style={{ background: 'rgba(46,168,74,0.07)' }}>
                  <span className="text-2xl">{c.icon}</span>
                  <span className="font-semibold text-white text-xs">{c.title}</span>
                  <span className="text-xs" style={{ color: '#56cfff' }}>{c.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
