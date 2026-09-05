import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { blogPosts } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cg-groundcare.co.uk'
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${base}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishDate),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
