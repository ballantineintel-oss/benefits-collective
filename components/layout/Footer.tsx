import Link from 'next/link'
import NewsletterForm from '../forms/NewsletterForm'

const footerNav = {
  content: [
    { label: 'Articles', href: '/articles' },
    { label: 'Guides', href: '/guides' },
    { label: 'Resources', href: '/resources' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
  strategy: [
    { label: 'PEO Exit Strategy', href: '/strategy/peo-exit' },
    { label: 'Renewal Strategy', href: '/strategy/renewal-strategy' },
    { label: 'Funding Strategies', href: '/strategy/funding-strategies' },
    { label: 'Cost Reduction', href: '/strategy/cost-reduction' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Schedule Consultation', href: '/consultation' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2332' }} className="text-[#c5c0b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Benefits Collective — home">
              <span className="text-[1.3rem] font-bold leading-none tracking-tight">
                <span style={{ color: '#4db8b8' }}>Benefits</span>
                <span style={{ color: '#c5c0b8' }}> Collective</span>
              </span>
            </Link>
            <p className="mt-4 text-[#c5c0b8]/75 text-sm leading-relaxed max-w-xs">
              Smarter benefits decisions for employers. Strategy, insights, and resources for HR leaders, CFOs, and business owners.
            </p>
            <p className="mt-6 text-[#c5c0b8]/55 text-sm">
              hello@benefitscollective.com
            </p>
          </div>

          {/* Content links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c5c0b8]/45 mb-4">Content</h3>
            <ul className="space-y-2.5">
              {footerNav.content.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#c5c0b8]/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategy links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c5c0b8]/45 mb-4">Strategy</h3>
            <ul className="space-y-2.5">
              {footerNav.strategy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#c5c0b8]/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c5c0b8]/45 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#c5c0b8]/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="max-w-xl">
            <h3 className="text-base font-semibold text-white mb-1">Stay ahead of your benefits strategy</h3>
            <p className="text-sm text-[#c5c0b8]/55 mb-4">
              Practical insights for HR leaders and CFOs. No fluff. Unsubscribe anytime.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-[#c5c0b8]/35">
          <p>© {new Date().getFullYear()} Benefits Collective. All rights reserved.</p>
          <p>Built for employers who take benefits seriously.</p>
        </div>
      </div>
    </footer>
  )
}
