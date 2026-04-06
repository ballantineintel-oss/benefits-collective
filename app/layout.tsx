import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Benefits Collective | Smarter Benefits Decisions for Employers',
    template: '%s | Benefits Collective',
  },
  description:
    'Strategy, insights, and resources for HR leaders, CFOs, and business owners navigating employee benefits. Articles, guides, and expert consultation.',
  metadataBase: new URL('https://benefitscollective.com'),
  openGraph: {
    type: 'website',
    siteName: 'Benefits Collective',
    title: 'Benefits Collective | Smarter Benefits Decisions for Employers',
    description:
      'Strategy, insights, and resources for HR leaders and CFOs navigating employee benefits costs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefits Collective',
    description: 'Smarter benefits decisions for employers.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
