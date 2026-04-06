import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getGuideBySlug, getGuides } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import MarkdownRenderer from '@/components/content/MarkdownRenderer'
import Badge, { getCategoryVariant } from '@/components/ui/Badge'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'

export async function generateStaticParams() {
  const guides = getGuides()
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: guide.seoTitle ?? guide.title,
    description: guide.metaDescription ?? guide.excerpt,
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)
  if (!guide) notFound()

  return (
    <>
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-teal transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-body truncate">{guide.title}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={getCategoryVariant(guide.category)}>{guide.category}</Badge>
            <span className="text-xs font-semibold text-olive bg-olive/10 px-2.5 py-0.5 rounded-full">
              Employer Guide
            </span>
          </div>
          <h1 className="text-3xl font-bold text-navy md:text-4xl leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-body leading-relaxed mb-6">{guide.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{guide.author}</span>
            <span>·</span>
            <time dateTime={guide.date}>{formatDate(guide.date)}</time>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <MarkdownRenderer content={guide.content} />
        </div>
      </div>
      <CTABanner
        title="Ready to Take the Next Step?"
        description="Schedule a free consultation to discuss your specific situation with Benefits Collective."
        primaryLabel="Schedule a Consultation"
        primaryHref="/consultation"
        secondaryLabel="Explore More Guides"
        secondaryHref="/guides"
      />
    </>
  )
}
