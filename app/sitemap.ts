import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

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
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
