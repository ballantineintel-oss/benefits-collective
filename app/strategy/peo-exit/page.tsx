import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import { getArticlesByCategory, getGuides } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'
import GuideCard from '@/components/content/GuideCard'

export const metadata: Metadata = {
  title: 'PEO Exit Strategy',
  description: 'Everything employers need to know about evaluating, planning, and executing a PEO exit — including timeline, costs, vendor selection, and what to expect.',
}

export default function PeoExitPage() {
  const relatedArticles = getArticlesByCategory('PEO Exit').slice(0, 3)
  const relatedGuides = getGuides().filter((g) => g.category === 'PEO Exit').slice(0, 2)

  return (
    <>
      {/* Hero */}
      <div className="hero-premium py-16 px-4">
        <div className="hero-accent-line" />
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Strategy</span>
            <span>/</span>
            <span className="text-white">PEO Exit Strategy</span>
          </nav>
          <span className="inline-block bg-teal/20 text-teal text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
            Strategy Guide
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-4">
            PEO Exit Strategy
          </h1>
          <p className="text-xl text-white/75 leading-relaxed max-w-2xl">
            A PEO can be the right choice for a small company. But many employers outgrow theirs. Here is how to evaluate the decision, plan the transition, and come out ahead.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#FAF9F7] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>What Is a PEO — and Why Employers Leave</h2>
            <p>
              A Professional Employer Organization (PEO) co-employs your workforce, giving you access to their group health insurance rates, payroll processing, HR administration, and compliance support under a single bundled fee. For companies under 25–50 employees, this arrangement often delivers real value.
            </p>
            <p>
              As companies grow, the equation changes. PEO fees — typically 3–6% of gross payroll — scale with every hire. Health insurance rates are pooled across the PEO's entire client base, which may not reflect your group's actual cost. And the bundled HR platform may no longer fit an organization with more complex needs.
            </p>

            <h2>Signs It May Be Time to Leave</h2>
            <ul>
              <li><strong>Your workforce has grown to 50–100+ employees.</strong> At this size, you can get your own health insurance rates, and they may be significantly better than what you are paying through the PEO pool.</li>
              <li><strong>Your PEO fees are growing faster than your headcount.</strong> The absolute dollar cost compounds with every hire, and annual fee increases are common.</li>
              <li><strong>You want more control over your benefits program.</strong> PEOs offer limited flexibility on carrier selection, plan design, and alternative funding structures.</li>
              <li><strong>You need deeper HR support.</strong> PEO HR services are generalist and shared across hundreds of clients.</li>
              <li><strong>The all-in math no longer pencils out.</strong> When you model independent benefits, payroll, and HR costs, the PEO is no longer delivering value for the fee.</li>
            </ul>

            <h2>The Financial Case: Building the Comparison</h2>
            <p>
              The core question is simple: what does your total cost of benefits, payroll, HR, and compliance look like inside the PEO versus outside?
            </p>
            <p>
              The comparison requires modeling several variables: health insurance costs on your own group policy (which requires a census and carrier quotes), workers' compensation on your own policy, payroll processing fees, HRIS costs, and any HR staffing or outsourced HR you would need.
            </p>
            <p>
              For many companies with 75–150 employees and a reasonably healthy workforce, the independent path is $1,500–$4,000 less per employee per year. For a 100-person company, that is $150,000–$400,000 annually.
            </p>

            <h2>The Transition Process</h2>
            <p>
              A well-executed PEO exit touches four functional areas simultaneously: benefits, payroll, HR systems, and workers' compensation. Rushing the process creates risk — especially around benefits enrollment gaps and payroll tax setup.
            </p>
            <p>
              A realistic minimum timeline from decision to launch is 90 days. A comfortable timeline is 120 days. The critical path typically runs through benefits carrier underwriting (30–60 days) and payroll setup (30–45 days with parallel testing).
            </p>

            <h3>Key Steps</h3>
            <ol>
              <li>Build the financial comparison with your benefits advisor</li>
              <li>Obtain standalone health insurance quotes from your broker</li>
              <li>Select a payroll provider and HRIS</li>
              <li>Secure workers' compensation coverage</li>
              <li>Provide formal written notice to your PEO per contract terms</li>
              <li>Execute employee open enrollment and communications</li>
              <li>Set effective date for new plans and payroll system</li>
            </ol>

            <h2>Common Challenges</h2>
            <p>
              <strong>Claims data gaps.</strong> If you have been in a PEO for several years, you may not have detailed claims history tied to your specific employees. This can make underwriting less favorable and limits your ability to target cost drivers immediately. Some PEOs provide claims data on request; others resist.
            </p>
            <p>
              <strong>Notice period requirements.</strong> PEO contracts typically require 30–90 days written notice. Missing this window can lock you in for another full term. Read your contract carefully before assuming a timeline.
            </p>
            <p>
              <strong>Workers' comp transition.</strong> Any open workers' comp claims at the time of exit need to be handled carefully. Your new insurer and the PEO's insurer need to coordinate on claims that span the transition date.
            </p>
            <p>
              <strong>Underestimating the benefits enrollment workload.</strong> Employees moving from a PEO to a standalone plan have to re-enroll from scratch — including all dependents, beneficiary designations, and FSA/HSA elections. Plan adequate time and communication support.
            </p>

            <h2>What Comes Next</h2>
            <p>
              After the exit, you own your benefits program. That is both the upside and the responsibility. With a level-funded or self-funded plan, you now have access to claims data that gives you real insight into what is driving your costs — and the ability to take targeted action.
            </p>
            <p>
              The first renewal after exit is the moment that tests whether the strategy delivered. Employers who engage a strong benefits advisor and actively manage their plan in year one are in a much stronger position at renewal.
            </p>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Related guides */}
          {relatedGuides.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-navy mb-6">Related Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CTABanner
        title="Thinking About Leaving Your PEO?"
        description="Benefits Collective helps employers build the financial case, plan the transition, and select the right vendors. Schedule a free consultation."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="Read the PEO Exit Guide"
        secondaryHref="/guides/employer-guide-leaving-peo"
      />
    </>
  )
}
