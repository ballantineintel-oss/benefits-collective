import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants = {
  primary: 'bg-gradient-to-b from-teal to-[#156f6f] text-white hover:from-[#1a9696] hover:to-[#127070] border border-teal/80 shadow-sm hover:shadow-md',
  secondary: 'bg-gradient-to-b from-navy to-[#243342] text-white hover:from-[#354d63] hover:to-[#1e2d3d] border border-navy/80 shadow-sm hover:shadow-md',
  ghost: 'bg-transparent text-teal hover:bg-teal/10 border border-transparent',
  outline: 'bg-transparent text-teal hover:bg-teal hover:text-white border border-teal hover:shadow-sm',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
