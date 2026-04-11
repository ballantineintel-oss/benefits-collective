export interface ArticleMeta {
  title: string
  slug: string
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: string
  seoTitle?: string
  metaDescription?: string
  featured: boolean
  readingTime?: string
}

export interface Article extends ArticleMeta {
  content: string
}

export interface GuideMeta {
  title: string
  slug: string
  date: string
  author: string
  category: string
  excerpt: string
  seoTitle?: string
  metaDescription?: string
  featured: boolean
}

export interface Guide extends GuideMeta {
  content: string
}

export interface ResourceMeta {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  resourceType: 'checklist' | 'comparison' | 'one-pager' | 'template'
  downloadable: boolean
}

export interface Resource extends ResourceMeta {
  content: string
}

export interface CaseStudyMeta {
  title: string
  slug: string
  date: string
  industry: string
  companySize: string
  challenge: string
  result: string
  excerpt: string
  featured: boolean
}

export interface CaseStudy extends CaseStudyMeta {
  content: string
}

export const ARTICLE_CATEGORIES = [
  'PEO Exit',
  'Renewal Strategy',
  'Funding Strategy',
  'Cost Reduction',
  'Compliance',
  'Benchmarking',
  'Broker Evaluation',
  'HR Strategy',
  'Open Enrollment',
  'Pharmacy Strategy',
  'Payroll/HCM Tech',
] as const

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number]
