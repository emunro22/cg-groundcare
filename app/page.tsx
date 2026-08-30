import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Work from '@/components/Work'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Work />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
