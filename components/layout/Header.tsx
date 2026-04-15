import Link from 'next/link'
import NavDropdown from './NavDropdown'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Articles', href: '/articles' },
  { label: 'Guides', href: '/guides' },
  { label: 'Resources', href: '/resources' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Newsletter', href: '/newsletter' },
]

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200/70 shadow-[0_1px_8px_rgba(0,0,0,0.06)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px] relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-6 flex items-center gap-3" aria-label="Benefits Collective — home">
            <img src="/benefits_collective_logo_transparent.png" alt="Benefits Collective" className="h-10 w-auto" />
            <span className="text-[1.35rem] font-bold leading-none tracking-tight">
              <span style={{ color: '#1A8A8A' }}>Benefits</span>
              <span style={{ color: '#2C3E50' }}> Collective</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#3d4550] hover:text-teal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <NavDropdown />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/consultation"
              className="inline-flex items-center bg-gradient-to-b from-teal to-[#157070] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
