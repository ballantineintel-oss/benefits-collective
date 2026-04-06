import Link from 'next/link'
import type { GuideMeta } from '@/lib/types'
import { formatDateShort } from '@/lib/utils'
import Badge, { getCategoryVariant } from '../ui/Badge'

interface GuideCardProps {
  guide: GuideMeta
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="card-hover-accent bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
      <div className="h-1.5 bg-teal" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={getCategoryVariant(guide.category)}>{guide.category}</Badge>
          <span className="text-xs font-medium text-olive bg-olive/10 px-2 py-0.5 rounded-full">Guide</span>
        </div>
        <Link href={`/guides/${guide.slug}`}>
          <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug mb-2">
            {guide.title}
          </h3>
        </Link>
        <p className="text-sm text-body line-clamp-3 leading-relaxed">{guide.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{formatDateShort(guide.date)}</span>
          <Link
            href={`/guides/${guide.slug}`}
            className="text-sm font-medium text-teal hover:text-[#156f6f] transition-colors"
          >
            Read the guide →
          </Link>
        </div>
      </div>
    </article>
  )
}
