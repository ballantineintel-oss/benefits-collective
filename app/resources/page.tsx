import type { Metadata } from 'next'
import { getResources } from '@/lib/content'
import ResourceCard from '@/components/content/ResourceCard'
import ContentGrid from '@/components/content/ContentGrid'

export const metadata: Metadata = {
  title: 'Resource Library',
  description: 'Free checklists, templates, and tools for employers managing health insurance and benefits costs.',
}

export default function ResourcesPage() {
  const resources = getResources()

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-navy py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Free Downloads</p>
          <h1 className="text-4xl font-bold text-white mb-3">Resource Library</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Practical checklists, comparison tools, and one-pagers you can put to work immediately.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {resources.length > 0 ? (
          <ContentGrid cols={3}>
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </ContentGrid>
        ) : (
          <p className="text-center text-gray-400 py-16">Resources coming soon.</p>
        )}
      </div>
    </div>
  )
}
