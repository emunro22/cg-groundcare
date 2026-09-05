import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | CG Groundcare',
  description: 'How CG Groundcare collects, uses and protects your personal data.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-36 pb-24 section-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-3" style={{ color: '#0d2b15' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: 30 August 2026</p>

          <div className="space-y-8 text-gray-600 text-base leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Who we are</h2>
              <p>
                CG Groundcare (CGG Groundcare Limited) provides garden maintenance, landscaping and winter
                maintenance services. For any privacy queries, contact us at{' '}
                <a href="mailto:enquiries@cg-groundcare.co.uk" className="font-semibold" style={{ color: '#2ea84a' }}>
                  enquiries@cg-groundcare.co.uk
                </a>{' '}
                or call 07715 821193.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>What we collect</h2>
              <p>
                When you submit our contact form we collect your name, phone number, and, if provided, your email
                address and message. We only ask for what we need to respond to your enquiry and provide a quote.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>How we use it</h2>
              <p>
                Your details are used solely to respond to your enquiry, arrange a quote and, where agreed, carry
                out work for you. We do not sell or share your data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Third parties we use</h2>
              <p>
                Contact form submissions are sent via Resend, our email delivery provider, so that we receive your
                enquiry and can send you a confirmation email. The site is hosted on Vercel. If analytics is
                enabled on this site, we use it only after you accept cookies (see our cookie banner) to understand
                how visitors use the site, never to identify you personally.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Cookies</h2>
              <p>
                We only load non-essential cookies (such as analytics) after you give consent via the cookie banner.
                You can change your mind at any time by clearing your browser&apos;s cookies for this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>How long we keep it</h2>
              <p>
                We keep enquiry details only for as long as needed to respond to you and, where you become a
                customer, for our business records. You can ask us to delete your data at any time.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold mb-2" style={{ color: '#0d2b15' }}>Your rights</h2>
              <p>
                Under UK GDPR you have the right to access, correct or request deletion of your personal data.
                To exercise any of these rights, email{' '}
                <a href="mailto:enquiries@cg-groundcare.co.uk" className="font-semibold" style={{ color: '#2ea84a' }}>
                  enquiries@cg-groundcare.co.uk
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
