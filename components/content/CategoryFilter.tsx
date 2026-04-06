'use client'

import { ARTICLE_CATEGORIES } from '@/lib/types'

interface CategoryFilterProps {
  selected: string
  onChange: (category: string) => void
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('All')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selected === 'All'
            ? 'bg-navy text-white'
            : 'bg-white border border-gray-200 text-body hover:border-teal hover:text-teal'
        }`}
      >
        All Topics
      </button>
      {ARTICLE_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selected === cat
              ? 'bg-teal text-white'
              : 'bg-white border border-gray-200 text-body hover:border-teal hover:text-teal'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
