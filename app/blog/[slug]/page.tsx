import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BlogPostBody from '@/components/BlogPostBody'
import { blogPosts, getBlogPostBySlug } from '@/lib/blogPosts'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | CG Groundcare`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    articleSection: post.category,
    author: {
      '@type': 'Person',
      name: 'Cameron Gill',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CGG Groundcare Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cg-groundcare.co.uk/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cg-groundcare.co.uk/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section className="pt-40 pb-16"
          style={{ background: 'linear-gradient(160deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: '#56cfff' }}>← Back to Blog</Link>
            <span className="block text-sm font-bold tracking-widest uppercase mt-5" style={{ color: '#56cfff' }}>
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight mt-3 mb-4">
              {post.title}
            </h1>
            <span className="text-sm text-green-200/60">{formatDate(post.publishDate)}</span>
          </div>
        </section>

        <section className="py-16 section-white">
          <div className="max-w-3xl mx-auto px-6">
            <BlogPostBody blocks={post.body} />

            <div className="mt-14 rounded-3xl p-8 md:p-10 text-center text-white"
              style={{ background: 'linear-gradient(135deg, #0d2b15 0%, #0a3d1f 60%, #0a2535 100%)' }}>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Need a free quote?</h3>
              <p className="text-green-200 mb-6 text-base">Domestic or commercial, we&apos;ll come out and assess your needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:07715821193" className="btn-primary text-base px-7 py-3.5">📞 07715 821193</a>
                <a href="/#contact" className="btn-white text-base px-7 py-3.5">Get a Free Quote →</a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
