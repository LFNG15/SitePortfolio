import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { navItems } from '@/data/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const home: MetadataRoute.Sitemap[number] = {
    url: SITE.url,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1.0,
  }

  const sections = navItems
    .filter((item) => item.href.startsWith('#'))
    .map((item) => ({
      url: `${SITE.url}/${item.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [home, ...sections]
}
