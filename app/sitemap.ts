import type { MetadataRoute } from 'next'
import { getArticles, getGuides, getResources, getCaseStudies } from '@/lib/content'

const BASE_URL = 'https://benefitscollective.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles()
  const guides = getGuides()
  const resources = getResources()
  const caseStudies = getCaseStudies()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/articles`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/strategy/peo-exit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/strategy/renewal-strategy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/strategy/funding-strategies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/strategy/cost-reduction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/newsletter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/consultation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const resourcePages: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE_URL}/resources/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages, ...guidePages, ...resourcePages, ...caseStudyPages]
}
