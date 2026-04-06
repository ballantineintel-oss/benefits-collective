import type { Metadata } from 'next'
import { getArticles } from '@/lib/content'
import ArticlesClient from '@/components/content/ArticlesClient'

export const metadata: Metadata = {
  title: 'Articles & Insights',
  description: 'Strategy and analysis for employers navigating health insurance, benefits costs, and HR decisions.',
}

export default function ArticlesPage() {
  const articles = getArticles()

  return (
    <div className="bg-background min-h-screen">
      <div className="hero-premium py-14 px-4">
        <div className="hero-accent-line" />
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            Benefits Collective
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-3">Articles & Insights</h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Strategy and analysis for employers navigating health insurance, benefits costs, and HR decisions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ArticlesClient articles={articles} />
      </div>
    </div>
  )
}
