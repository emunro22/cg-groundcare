import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { blogPosts } from '@/lib/blogPosts'

const title = 'Blog | CG Groundcare'
const description = 'Practical garden maintenance, landscaping and winter maintenance advice for homeowners and businesses across Glasgow, Edinburgh and the Central Belt.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, url: '/blog' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-16"
          style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#56cfff' }}>Advice &amp; Guides</span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight mt-3 mb-5">
              Groundcare Blog
            </h1>
            <p className="text-green-100/80 text-lg leading-relaxed max-w-2xl">
              Seasonal advice, service breakdowns and practical tips from CG Groundcare, covering garden maintenance,
              landscaping and winter maintenance across Glasgow, Edinburgh and Newton Mearns.
            </p>
          </div>
        </section>

        <section className="py-20 section-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col gap-5">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-7 block">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2ea84a' }}>
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold mt-2 mb-2" style={{ color: '#0d2b15' }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{formatDate(post.publishDate)}</span>
                    <span className="text-sm font-semibold" style={{ color: '#2ea84a' }}>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
