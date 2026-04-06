import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getResourceBySlug, getResources } from '@/lib/content'
import MarkdownRenderer from '@/components/content/MarkdownRenderer'
import Badge, { getCategoryVariant } from '@/components/ui/Badge'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'

export async function generateStaticParams() {
  const resources = getResources()
  return resources.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)
  if (!resource) return {}
  return {
    title: resource.title,
    description: resource.excerpt,
  }
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)
  if (!resource) notFound()

  const typeLabel: Record<string, string> = {
    checklist: 'Checklist',
    comparison: 'Comparison Chart',
    'one-pager': 'One-Pager',
    template: 'Template',
  }

  return (
    <>
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-teal transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-body truncate">{resource.title}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={getCategoryVariant(resource.category)}>{resource.category}</Badge>
            <span className="text-xs font-semibold text-olive bg-olive/10 px-2.5 py-0.5 rounded-full">
              {typeLabel[resource.resourceType] ?? 'Resource'}
            </span>
            {resource.downloadable && (
              <span className="text-xs font-semibold text-teal bg-teal/10 px-2.5 py-0.5 rounded-full">
                Free Download
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-navy md:text-4xl leading-tight mb-4">
            {resource.title}
          </h1>
          <p className="text-lg text-body leading-relaxed">{resource.excerpt}</p>
        </div>
      </div>
      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <MarkdownRenderer content={resource.content} />
        </div>
      </div>
      <CTABanner
        title="Want Help Putting This Into Action?"
        description="Schedule a free consultation with Benefits Collective to work through your specific situation."
        primaryLabel="Schedule a Consultation"
        primaryHref="/consultation"
        secondaryLabel="View More Resources"
        secondaryHref="/resources"
      />
    </>
  )
}
