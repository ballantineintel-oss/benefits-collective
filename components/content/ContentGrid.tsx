interface ContentGridProps {
  children: React.ReactNode
  cols?: 2 | 3 | 4
  className?: string
}

export default function ContentGrid({ children, cols = 3, className = '' }: ContentGridProps) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[cols]

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6 ${className}`}>
      {children}
    </div>
  )
}
