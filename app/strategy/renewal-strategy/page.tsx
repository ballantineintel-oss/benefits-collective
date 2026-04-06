import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import { getArticlesByCategory } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'

export const metadata: Metadata = {
  title: 'Renewal Strategy',
  description: 'How employers can respond to health insurance renewal increases — from understanding cost drivers to negotiating effectively and evaluating alternatives.',
}

export default function RenewalStrategyPage() {
  const relatedArticles = getArticlesByCategory('Renewal Strategy').slice(0, 3)

  return (
    <>
      <div className="hero-premium py-16 px-4">
        <div className="hero-accent-line" />
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Strategy</span>
            <span>/</span>
            <span className="text-white">Renewal Strategy</span>
          </nav>
          <span className="inline-block bg-amber/20 text-amber text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
            Strategy Guide
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-4">
            Renewal Strategy
          </h1>
          <p className="text-xl text-white/75 leading-relaxed max-w-2xl">
            A renewal increase is not an inevitable fact of life. Understanding what drives it — and having a strategy to respond — is the difference between employers who manage costs and those who just accept them.
          </p>
        </div>
      </div>

      <div className="bg-[#FAF9F7] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>Why Renewals Keep Increasing</h2>
            <p>
              Every year, carriers project what your group will cost in claims next year and build a premium around that projection, plus a margin for administration and profit. Several structural forces push that number higher almost every year:
            </p>
            <ul>
              <li><strong>Medical trend:</strong> The general rise in healthcare costs, currently running 7–10% annually. Even a group with low claims will see a 5–8% increase just from trend.</li>
              <li><strong>Your own claims experience:</strong> High-cost years — a cancer diagnosis, a specialty drug, a complicated birth — feed directly into next year's rate.</li>
              <li><strong>Specialty drug inflation:</strong> Biologics, oncology drugs, and GLP-1 medications are among the fastest-growing cost drivers.</li>
              <li><strong>Hospital rate increases:</strong> Carriers negotiate higher reimbursement rates with hospitals each year, and those increases get passed along to employers.</li>
            </ul>

            <h2>The Problem with "Just Marketing It"</h2>
            <p>
              The most common broker response to a high renewal is to shop it around. Remarketing can produce savings in year one, but it rarely solves the structural problem. Competing carriers see the same claims data. If your group has had expensive claims, every carrier will price that in.
            </p>
            <p>
              Remarketing is a tactic. A renewal strategy is about understanding and addressing the underlying cost drivers.
            </p>

            <h2>What a Real Renewal Strategy Looks Like</h2>

            <h3>1. Get the Data</h3>
            <p>
              You cannot manage what you cannot measure. Request an aggregate claims report from your carrier. For fully insured groups of 50+ employees, most carriers will provide this. The report should show you: top diagnostic categories, pharmacy spend, inpatient vs. outpatient utilization, and year-over-year trends.
            </p>

            <h3>2. Benchmark Your Plan</h3>
            <p>
              How do your costs compare to similar employers in your industry, geography, and size range? A benefits advisor with access to benchmark data can tell you whether your plan is high-cost, average, or favorable — and where the gap is.
            </p>

            <h3>3. Evaluate Your Funding Structure</h3>
            <p>
              Fully insured plans include a risk premium that stays with the carrier regardless of how your group performs. Level-funded and self-funded alternatives can eliminate this premium for groups that are healthy enough to benefit. If your group has favorable claims experience, you may be significantly overpaying in a fully insured structure.
            </p>

            <h3>4. Address Pharmacy Costs</h3>
            <p>
              Pharmacy is commonly 20–30% of total plan cost and often the fastest-growing component. A dedicated pharmacy review — evaluating your PBM contract, formulary design, and specialty drug management — can produce meaningful savings without reducing the quality of your plan.
            </p>

            <h3>5. Review Plan Design</h3>
            <p>
              Many employers are over-insuring their workforce. A plan design review — including contribution strategy, deductible levels, and voluntary benefit options — can reduce employer cost while preserving employee value. Adding an HSA-eligible high-deductible option gives employees a lower-cost choice and reduces the employer's premium obligation.
            </p>

            <h2>Negotiating with Carriers</h2>
            <p>
              Carriers have more pricing flexibility than most brokers let on. If you have a good claims year, your broker should be challenging the renewal rate and asking for the carrier's justification — not just accepting it. You also have leverage when you have competing quotes from other carriers, even if you do not intend to move.
            </p>
            <p>
              A strong broker relationship means your broker is bringing carriers to the table proactively, presenting your group's claims data in the best light, and negotiating on your behalf rather than just managing the paperwork.
            </p>

            <h2>The Multi-Year Perspective</h2>
            <p>
              Renewal strategy is not a once-a-year event. Employers who consistently outperform on benefits costs are engaging their broker quarterly, monitoring claims data throughout the year, and adjusting their strategy before the renewal conversation — not during it.
            </p>
            <p>
              Start the renewal conversation 90–120 days before your plan anniversary date. By the time you receive the renewal, you should already know what your claims have looked like, what competing options exist, and what your plan design levers are.
            </p>
          </div>

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
        </div>
      </div>

      <CTABanner
        title="Facing a Renewal Increase?"
        description="Get a second opinion on your renewal. Benefits Collective helps employers analyze what is driving costs and identify the best path forward."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="Download the Renewal Checklist"
        secondaryHref="/resources/renewal-increase-checklist"
      />
    </>
  )
}
