interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-8 ${alignClass} ${className}`}>
      <h2 className="text-2xl font-bold text-navy md:text-3xl">{title}</h2>
      <div className={`mt-2.5 h-0.5 w-10 bg-teal rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="mt-3 text-body text-lg max-w-2xl" style={align === 'center' ? { margin: '0.75rem auto 0' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
