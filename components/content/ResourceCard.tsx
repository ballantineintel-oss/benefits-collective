import Link from 'next/link'
import type { ResourceMeta } from '@/lib/types'
import Badge, { getCategoryVariant } from '../ui/Badge'

interface ResourceCardProps {
  resource: ResourceMeta
}

const resourceTypeLabels: Record<string, string> = {
  checklist: 'Checklist',
  comparison: 'Comparison',
  'one-pager': 'One-Pager',
  template: 'Template',
}

const resourceTypeIcons: Record<string, string> = {
  checklist: '✓',
  comparison: '⇄',
  'one-pager': '📄',
  template: '📋',
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="card-hover-accent bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-warm-gray rounded-lg flex items-center justify-center text-xl border border-gray-200/60">
            {resourceTypeIcons[resource.resourceType] ?? '📄'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={getCategoryVariant(resource.category)}>{resource.category}</Badge>
              <span className="text-xs text-gray-400">{resourceTypeLabels[resource.resourceType]}</span>
            </div>
            <Link href={`/resources/${resource.slug}`}>
              <h3 className="font-bold text-navy group-hover:text-teal transition-colors leading-snug mb-1">
                {resource.title}
              </h3>
            </Link>
            <p className="text-sm text-body line-clamp-2 leading-relaxed">{resource.excerpt}</p>
            <Link
              href={`/resources/${resource.slug}`}
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-teal hover:text-[#156f6f] transition-colors"
            >
              {resource.downloadable ? 'Download free →' : 'View resource →'}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
