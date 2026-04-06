import type { Metadata } from 'next'
import NewsletterForm from '@/components/forms/NewsletterForm'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to the Benefits Collective newsletter for employer benefits strategy, renewal insights, and cost management resources.',
}

export default function NewsletterPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            Free Subscription
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">The Benefits Collective Newsletter</h1>
          <p className="text-xl text-white/75">
            Practical benefits strategy delivered to your inbox — no fluff, no sales pitches.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">What You Will Receive</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Renewal season analysis',
                  desc: 'What is driving renewal increases this year and what employers are doing about it.',
                },
                {
                  title: 'Strategy deep-dives',
                  desc: 'In-depth breakdowns of funding structures, pharmacy management, PEO exit decisions, and more.',
                },
                {
                  title: 'New articles and guides',
                  desc: 'Notifications when new content is published on Benefits Collective.',
                },
                {
                  title: 'Benchmark data and market insights',
                  desc: 'How employer health insurance costs are trending and what it means for your organization.',
                },
                {
                  title: 'Practical checklists and tools',
                  desc: 'Resources you can use immediately in your benefits decision-making.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{item.title}</p>
                    <p className="text-sm text-body">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-light-gray rounded-xl p-5">
              <p className="text-sm text-body italic">
                &ldquo;Written for business leaders, not insurance experts. No jargon, no vendor pitches — just practical strategy content from people who work with employers every day.&rdquo;
              </p>
              <p className="text-sm font-semibold text-navy mt-2">— Benefits Collective</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-navy mb-6">Subscribe Free</h2>
            <NewsletterForm />
            <p className="text-xs text-gray-400 mt-4">
              No spam. Unsubscribe anytime. Your information will never be shared or sold.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
