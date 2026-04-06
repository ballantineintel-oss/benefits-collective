'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const strategyLinks = [
  { label: 'PEO Exit Strategy', href: '/strategy/peo-exit' },
  { label: 'Renewal Strategy', href: '/strategy/renewal-strategy' },
  { label: 'Funding Strategies', href: '/strategy/funding-strategies' },
  { label: 'Cost Reduction Strategies', href: '/strategy/cost-reduction' },
]

export default function NavDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-navy hover:text-teal transition-colors"
        aria-expanded={open}
      >
        Strategy
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50 py-1">
          {strategyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-body hover:text-teal hover:bg-light-gray transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
