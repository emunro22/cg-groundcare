import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | CG Groundcare',
  description: 'Terms and conditions for CG Groundcare services and this website.',
  alternates: { canonical: '/terms' },
}

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-36 pb-24 section-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-3" style={{ color: '#0d2b15' }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: 30 August 2026</p>

          <div className="space-y-8 text-gray-600 text-base leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Quotes & pricing</h2>
              <p>
                All quotes provided by CG Groundcare are free and no-obligation. Quoted prices are based on the
                information and access provided at the time of the visit and may be revised if the scope of work
                changes on site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Bookings & cancellations</h2>
              <p>
                Work is scheduled by agreement between CG Groundcare and the client. If you need to reschedule or
                cancel a booking, please give us as much notice as possible by phone or email.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Access & site conditions</h2>
              <p>
                Clients are responsible for providing reasonable access to the property and grounds, and for
                flagging any hazards (buried services, fragile structures, pets, etc.) in advance of a visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Insurance & liability</h2>
              <p>
                CG Groundcare is fully insured. Every reasonable care is taken while working on site; any issue
                arising from our work should be reported to us as soon as possible so we can put it right.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Website use</h2>
              <p>
                This website and its content are provided for general information about CG Groundcare&apos;s
                services. While we try to keep information accurate and up to date, availability, pricing and
                service areas may change without notice — please contact us to confirm current details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a href="mailto:enquiries@cg-groundcare.co.uk" className="font-semibold" style={{ color: '#2ea84a' }}>
                  enquiries@cg-groundcare.co.uk
                </a>{' '}
                or 07715 821193.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
