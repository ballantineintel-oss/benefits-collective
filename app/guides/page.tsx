import type { Metadata } from 'next'
import { getGuides } from '@/lib/content'
import GuideCard from '@/components/content/GuideCard'
import ContentGrid from '@/components/content/ContentGrid'

export const metadata: Metadata = {
  title: 'Employer Guides',
  description: 'In-depth guides for employers navigating health insurance, PEO exit, funding strategies, and more.',
}

export default function GuidesPage() {
  const guides = getGuides()

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-navy py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl font-bold text-white mb-3">Employer Guides</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            In-depth, step-by-step guides on the most important benefits decisions employers face.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {guides.length > 0 ? (
          <ContentGrid cols={3}>
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </ContentGrid>
        ) : (
          <p className="text-center text-gray-400 py-16">Guides coming soon.</p>
        )}
      </div>
    </div>
  )
}
