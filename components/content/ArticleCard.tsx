import Link from 'next/link'
import type { ArticleMeta } from '@/lib/types'
import { formatDateShort } from '@/lib/utils'
import Badge, { getCategoryVariant } from '../ui/Badge'

interface ArticleCardProps {
  article: ArticleMeta
  size?: 'default' | 'compact'
}

export default function ArticleCard({ article, size = 'default' }: ArticleCardProps) {
  if (size === 'compact') {
    return (
      <article className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant={getCategoryVariant(article.category)}>{article.category}</Badge>
            {article.readingTime && (
              <span className="text-xs text-gray-400">{article.readingTime}</span>
            )}
          </div>
          <Link href={`/articles/${article.slug}`} className="group">
            <h3 className="font-semibold text-navy group-hover:text-teal transition-colors line-clamp-2 text-sm leading-snug">
              {article.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-400 mt-1">{formatDateShort(article.date)}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="card-hover-accent bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={getCategoryVariant(article.category)}>{article.category}</Badge>
          {article.readingTime && (
            <span className="text-xs text-gray-400">{article.readingTime}</span>
          )}
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug mb-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-body line-clamp-3 leading-relaxed">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{formatDateShort(article.date)}</span>
          <Link
            href={`/articles/${article.slug}`}
            className="text-sm font-medium text-teal hover:text-[#156f6f] transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}
