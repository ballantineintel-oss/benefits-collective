import Link from 'next/link'
import type { CaseStudyMeta } from '@/lib/types'
import { formatDateShort } from '@/lib/utils'

interface CaseStudyCardProps {
  caseStudy: CaseStudyMeta
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="card-hover-accent bg-white rounded-xl border border-[#E8E4DF] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded-full">
            {caseStudy.industry}
          </span>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
            {caseStudy.companySize}
          </span>
        </div>

        <Link href={`/case-studies/${caseStudy.slug}`}>
          <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug mb-3">
            {caseStudy.title}
          </h3>
        </Link>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-warm-gray rounded-lg p-3 border border-gray-200/50">
            <p className="text-xs text-gray-500 mb-0.5">Challenge</p>
            <p className="text-sm font-semibold text-navy">{caseStudy.challenge}</p>
          </div>
          <div className="bg-teal/10 rounded-lg p-3">
            <p className="text-xs text-teal mb-0.5">Result</p>
            <p className="text-sm font-bold text-teal">{caseStudy.result}</p>
          </div>
        </div>

        <p className="text-sm text-body line-clamp-2 leading-relaxed">{caseStudy.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{formatDateShort(caseStudy.date)}</span>
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="text-sm font-medium text-teal hover:text-[#156f6f] transition-colors"
          >
            Read the case study →
          </Link>
        </div>
      </div>
    </article>
  )
}
