import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticleBySlug, getArticles } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import MarkdownRenderer from '@/components/content/MarkdownRenderer'
import Badge, { getCategoryVariant } from '@/components/ui/Badge'
import NewsletterSection from '@/components/home/NewsletterSection'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'

export async function generateStaticParams() {
  const articles = getArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.seoTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    openGraph: {
      title: article.seoTitle ?? article.title,
      description: article.metaDescription ?? article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <>
      {/* Article header */}
      <div className="bg-[#FAF9F7] border-b border-[#E8E4DF] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-10 h-0.5 bg-teal rounded-full mb-6" />
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-teal transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-body truncate">{article.title}</span>
          </nav>
          <Badge variant={getCategoryVariant(article.category)} className="mb-4">
            {article.category}
          </Badge>
          <h1 className="text-3xl font-extrabold text-navy md:text-4xl leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-[#3d4550] leading-[1.8] mb-6">{article.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>{article.author}</span>
            <span>·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.readingTime && (
              <>
                <span>·</span>
                <span>{article.readingTime}</span>
              </>
            )}
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-warm-gray text-gray-500 px-3 py-1 rounded-full border border-[#E8E4DF]">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <MarkdownRenderer content={article.content} />
        </div>
      </div>

      {/* Newsletter signup */}
      <NewsletterSection />

      <CTABanner
        title="Get a Second Opinion on Your Benefits"
        description="Schedule a free, no-obligation consultation with Benefits Collective."
        primaryLabel="Schedule a Consultation"
        primaryHref="/consultation"
      />
    </>
  )
}
