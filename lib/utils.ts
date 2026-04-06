export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'PEO Exit': 'bg-teal/10 text-teal',
    'Renewal Strategy': 'bg-amber/10 text-amber',
    'Funding Strategy': 'bg-slate-blue/10 text-slate-blue',
    'Cost Reduction': 'bg-olive/10 text-olive',
    'Compliance': 'bg-navy/10 text-navy',
    'Benchmarking': 'bg-teal/10 text-teal',
    'Broker Evaluation': 'bg-amber/10 text-amber',
    'HR Strategy': 'bg-olive/10 text-olive',
    'Open Enrollment': 'bg-slate-blue/10 text-slate-blue',
    'Pharmacy Strategy': 'bg-olive/10 text-olive',
  }
  return colors[category] ?? 'bg-gray-100 text-gray-600'
}
