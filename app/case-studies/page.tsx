import type { Metadata } from 'next'
import { getCaseStudies } from '@/lib/content'
import CaseStudyCard from '@/components/content/CaseStudyCard'
import ContentGrid from '@/components/content/ContentGrid'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real employer success stories — how companies reduced benefits costs, exited PEOs, and took control of their health insurance.',
}

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-navy py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Results</p>
          <h1 className="text-4xl font-bold text-white mb-3">Case Studies</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Real stories from employers who took a strategic approach to their benefits — and the results they achieved.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {caseStudies.length > 0 ? (
          <ContentGrid cols={3}>
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </ContentGrid>
        ) : (
          <p className="text-center text-gray-400 py-16">Case studies coming soon.</p>
        )}
      </div>
    </div>
  )
}
