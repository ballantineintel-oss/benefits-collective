'use client'

import { useState } from 'react'
import Link from 'next/link'

const strategyLinks = [
  { label: 'PEO Exit Strategy', href: '/strategy/peo-exit' },
  { label: 'Renewal Strategy', href: '/strategy/renewal-strategy' },
  { label: 'Funding Strategies', href: '/strategy/funding-strategies' },
  { label: 'Cost Reduction Strategies', href: '/strategy/cost-reduction' },
]

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Guides', href: '/guides' },
  { label: 'Resources', href: '/resources' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [strategyOpen, setStrategyOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-navy"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="px-4 py-4 space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-navy hover:text-teal hover:bg-light-gray rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setStrategyOpen(!strategyOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-navy hover:text-teal hover:bg-light-gray rounded-md transition-colors"
              >
                Strategy
                <svg
                  className={`w-4 h-4 transition-transform ${strategyOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {strategyOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {strategyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-sm text-body hover:text-teal hover:bg-light-gray rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/consultation"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-teal text-white font-semibold px-4 py-3 rounded-md hover:bg-[#156f6f] transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
