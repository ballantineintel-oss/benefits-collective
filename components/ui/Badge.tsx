interface BadgeProps {
  children: React.ReactNode
  variant?: 'teal' | 'amber' | 'olive' | 'slate' | 'navy' | 'gray'
  className?: string
}

const variants = {
  teal: 'bg-teal/10 text-teal',
  amber: 'bg-amber/10 text-amber',
  olive: 'bg-olive/10 text-olive',
  slate: 'bg-slate-blue/10 text-slate-blue',
  navy: 'bg-navy/10 text-navy',
  gray: 'bg-gray-100 text-gray-600',
}

export default function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export function getCategoryVariant(category: string): BadgeProps['variant'] {
  const map: Record<string, BadgeProps['variant']> = {
    'PEO Exit': 'teal',
    'Renewal Strategy': 'amber',
    'Funding Strategy': 'slate',
    'Cost Reduction': 'olive',
    'Compliance': 'navy',
    'Benchmarking': 'teal',
    'Broker Evaluation': 'amber',
    'HR Strategy': 'olive',
    'Open Enrollment': 'slate',
    'Pharmacy Strategy': 'olive',
  }
  return map[category] ?? 'gray'
}
