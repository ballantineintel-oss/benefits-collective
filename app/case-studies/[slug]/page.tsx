import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import MarkdownRenderer from '@/components/content/MarkdownRenderer'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'

export async function generateStaticParams() {
  const caseStudies = getCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.excerpt,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  if (!caseStudy) notFound()

  return (
    <>
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-teal transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-body truncate">{caseStudy.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded-full">
              {caseStudy.industry}
            </span>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {caseStudy.companySize}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-navy md:text-4xl leading-tight mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-body leading-relaxed mb-6">{caseStudy.excerpt}</p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-light-gray rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Challenge</p>
              <p className="font-bold text-navy text-sm">{caseStudy.challenge}</p>
            </div>
            <div className="bg-teal/10 rounded-lg p-4">
              <p className="text-xs text-teal mb-1">Result</p>
              <p className="font-bold text-teal text-sm">{caseStudy.result}</p>
            </div>
            <div className="bg-light-gray rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Published</p>
              <p className="font-semibold text-navy text-sm">{formatDate(caseStudy.date)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <MarkdownRenderer content={caseStudy.content} />
        </div>
      </div>
      <CTABanner
        title="Could Your Organization Achieve Similar Results?"
        description="Schedule a free consultation to explore what a strategic benefits approach could mean for your company."
        primaryLabel="Schedule a Consultation"
        primaryHref="/consultation"
        secondaryLabel="Read More Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
