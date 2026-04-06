'use client'

import { useState, useMemo } from 'react'
import type { ArticleMeta } from '@/lib/types'
import ArticleCard from './ArticleCard'
import CategoryFilter from './CategoryFilter'
import ContentGrid from './ContentGrid'

interface ArticlesClientProps {
  articles: ArticleMeta[]
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return articles
    return articles.filter((a) => a.category === selectedCategory)
  }, [selectedCategory, articles])

  return (
    <>
      <div className="mb-8">
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
      </div>
      <p className="text-sm text-gray-500 mb-6">
        {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </p>
      {filtered.length > 0 ? (
        <ContentGrid cols={3}>
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </ContentGrid>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No articles in this category yet.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-3 text-teal hover:text-[#156f6f] font-medium"
          >
            View all articles
          </button>
        </div>
      )}
    </>
  )
}
