import Link from 'next/link'
import SectionHeading from '../ui/SectionHeading'

const topics = [
  {
    title: 'PEO Exit Strategy',
    href: '/strategy/peo-exit',
    description: 'Thinking about leaving your PEO? Understand the financial case, the transition process, and what to expect on the other side.',
    color: 'border-teal',
    bg: 'bg-teal/5',
    icon: '🔄',
  },
  {
    title: 'Renewal Strategy',
    href: '/strategy/renewal-strategy',
    description: 'Stop accepting renewal increases at face value. Learn what drives them, how to evaluate your options, and how to negotiate effectively.',
    color: 'border-amber',
    bg: 'bg-amber/5',
    icon: '📈',
  },
  {
    title: 'Funding Strategies',
    href: '/strategy/funding-strategies',
    description: 'Fully insured, level funded, self-funded, captive — understand your options and how each affects your cost, risk, and control.',
    color: 'border-slate-blue',
    bg: 'bg-slate-blue/5',
    icon: '💡',
  },
  {
    title: 'Cost Reduction Strategies',
    href: '/strategy/cost-reduction',
    description: 'Pharmacy management, plan design, contribution strategy, and more. Practical approaches that reduce cost without gutting coverage.',
    color: 'border-olive',
    bg: 'bg-olive/5',
    icon: '📉',
  },
]

export default function StrategyTopics() {
  return (
    <section className="bg-[#F5F3F0] py-20 px-4 border-y border-[#E8E4DF]/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Strategy Topics"
          subtitle="Deep-dive into the most important decisions employers face around health benefits."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link key={topic.href} href={topic.href} className="group">
              <div className={`${topic.bg} border border-gray-200/50 border-l-4 ${topic.color} rounded-xl p-6 h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{topic.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy group-hover:text-teal transition-colors mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">{topic.description}</p>
                    <span className="inline-block mt-3 text-sm font-medium text-teal group-hover:translate-x-1 transition-transform">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
