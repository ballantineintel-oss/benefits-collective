import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import type {
  Article,
  ArticleMeta,
  Guide,
  GuideMeta,
  Resource,
  ResourceMeta,
  CaseStudy,
  CaseStudyMeta,
} from './types'

const CONTENT_DIR = path.join(process.cwd(), 'content')

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}

function getFilesInDir(dir: string): string[] {
  const fullDir = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(fullDir)) return []
  return fs.readdirSync(fullDir).filter((f) => f.endsWith('.md'))
}

// ─── Articles ────────────────────────────────────────────────────────────────

export function getArticles(): ArticleMeta[] {
  const files = getFilesInDir('articles')
  return files
    .map((filename) => {
      const raw = fs.readFileSync(
        path.join(CONTENT_DIR, 'articles', filename),
        'utf8'
      )
      const { data } = matter(raw)
      return {
        title: data.title ?? '',
        slug: data.slug ?? filename.replace('.md', ''),
        date: data.date ?? '',
        author: data.author ?? 'Benefits Collective',
        category: data.category ?? '',
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? '',
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        featured: data.featured ?? false,
        readingTime: data.readingTime,
      } as ArticleMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, 'articles', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)
  return {
    title: data.title ?? '',
    slug: data.slug ?? slug,
    date: data.date ?? '',
    author: data.author ?? 'Benefits Collective',
    category: data.category ?? '',
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? '',
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    featured: data.featured ?? false,
    readingTime: data.readingTime,
    content: html,
  }
}

export function getFeaturedArticles(limit = 3): ArticleMeta[] {
  return getArticles()
    .filter((a) => a.featured)
    .slice(0, limit)
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getArticles().filter((a) => a.category === category)
}

export function getLatestArticles(limit = 6): ArticleMeta[] {
  return getArticles().slice(0, limit)
}

// ─── Guides ──────────────────────────────────────────────────────────────────

export function getGuides(): GuideMeta[] {
  const files = getFilesInDir('guides')
  return files
    .map((filename) => {
      const raw = fs.readFileSync(
        path.join(CONTENT_DIR, 'guides', filename),
        'utf8'
      )
      const { data } = matter(raw)
      return {
        title: data.title ?? '',
        slug: data.slug ?? filename.replace('.md', ''),
        date: data.date ?? '',
        author: data.author ?? 'Benefits Collective',
        category: data.category ?? '',
        excerpt: data.excerpt ?? '',
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        featured: data.featured ?? false,
      } as GuideMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  const filePath = path.join(CONTENT_DIR, 'guides', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)
  return {
    title: data.title ?? '',
    slug: data.slug ?? slug,
    date: data.date ?? '',
    author: data.author ?? 'Benefits Collective',
    category: data.category ?? '',
    excerpt: data.excerpt ?? '',
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    featured: data.featured ?? false,
    content: html,
  }
}

export function getFeaturedGuides(limit = 3): GuideMeta[] {
  return getGuides()
    .filter((g) => g.featured)
    .slice(0, limit)
}

// ─── Resources ───────────────────────────────────────────────────────────────

export function getResources(): ResourceMeta[] {
  const files = getFilesInDir('resources')
  return files
    .map((filename) => {
      const raw = fs.readFileSync(
        path.join(CONTENT_DIR, 'resources', filename),
        'utf8'
      )
      const { data } = matter(raw)
      return {
        title: data.title ?? '',
        slug: data.slug ?? filename.replace('.md', ''),
        date: data.date ?? '',
        category: data.category ?? '',
        excerpt: data.excerpt ?? '',
        resourceType: data.resourceType ?? 'checklist',
        downloadable: data.downloadable ?? false,
      } as ResourceMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  const filePath = path.join(CONTENT_DIR, 'resources', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)
  return {
    title: data.title ?? '',
    slug: data.slug ?? slug,
    date: data.date ?? '',
    category: data.category ?? '',
    excerpt: data.excerpt ?? '',
    resourceType: data.resourceType ?? 'checklist',
    downloadable: data.downloadable ?? false,
    content: html,
  }
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export function getCaseStudies(): CaseStudyMeta[] {
  const files = getFilesInDir('case-studies')
  return files
    .map((filename) => {
      const raw = fs.readFileSync(
        path.join(CONTENT_DIR, 'case-studies', filename),
        'utf8'
      )
      const { data } = matter(raw)
      return {
        title: data.title ?? '',
        slug: data.slug ?? filename.replace('.md', ''),
        date: data.date ?? '',
        industry: data.industry ?? '',
        companySize: data.companySize ?? '',
        challenge: data.challenge ?? '',
        result: data.result ?? '',
        excerpt: data.excerpt ?? '',
        featured: data.featured ?? false,
      } as CaseStudyMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(CONTENT_DIR, 'case-studies', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)
  return {
    title: data.title ?? '',
    slug: data.slug ?? slug,
    date: data.date ?? '',
    industry: data.industry ?? '',
    companySize: data.companySize ?? '',
    challenge: data.challenge ?? '',
    result: data.result ?? '',
    excerpt: data.excerpt ?? '',
    featured: data.featured ?? false,
    content: html,
  }
}
