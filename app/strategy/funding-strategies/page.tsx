import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import { getArticlesByCategory } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'

export const metadata: Metadata = {
  title: 'Funding Strategies',
  description: 'Understanding fully insured, level funded, self-funded, captive, and reference-based pricing approaches for employer health plans.',
}

export default function FundingStrategiesPage() {
  const relatedArticles = getArticlesByCategory('Funding Strategy').slice(0, 3)

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
            <span className="text-white">Funding Strategies</span>
          </nav>
          <span className="inline-block bg-slate-blue/30 text-white text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
            Strategy Guide
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-4">
            Funding Strategies
          </h1>
          <p className="text-xl text-white/75 leading-relaxed max-w-2xl">
            Most employers default to fully insured health plans without ever evaluating the alternatives. Your funding structure determines your cost, your risk, and your access to data. Here is what you need to know.
          </p>
        </div>
      </div>

      <div className="bg-[#FAF9F7] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>The Funding Spectrum</h2>
            <p>
              Employer health plan funding falls on a spectrum from fully insured (maximum predictability, minimum control) to fully self-funded (maximum control, maximum risk). Most mid-size employers have options across this spectrum — they just have not explored them.
            </p>

            <h2>Fully Insured</h2>
            <p>
              The traditional model: you pay a fixed monthly premium to a carrier. The carrier pays claims. You bear no risk. You have no data. At the end of a good year, the carrier keeps the surplus. At the end of a bad year, the carrier absorbs the excess.
            </p>
            <p>
              <strong>Best for:</strong> Groups under 25–50 employees, or organizations with high-risk workforces that need cost certainty above everything else.
            </p>
            <p>
              <strong>The hidden cost:</strong> The risk premium embedded in your premium. For groups with favorable claims experience, this premium represents significant money that stays with the carrier rather than coming back to you.
            </p>

            <h2>Level Funded</h2>
            <p>
              Level funding is a hybrid: you pay a fixed monthly amount that covers expected claims, stop-loss insurance, and administration. At year-end, if your actual claims were lower than projected, you receive a refund of surplus claims dollars — typically 50–80% of the surplus.
            </p>
            <p>
              <strong>Best for:</strong> Employers with 25–200 employees who want more cost control and claims transparency without taking on full self-insurance risk.
            </p>
            <p>
              <strong>Key advantage:</strong> You get full claims data throughout the year. You can see what is driving costs and act on it. And in a good year, money comes back.
            </p>
            <p>
              <strong>What to watch:</strong> Stop-loss terms matter significantly. The individual deductible (the per-claimant threshold before stop-loss kicks in) and the aggregate attachment point (the overall claims limit) determine how much risk you are actually retaining.
            </p>

            <h2>Self-Funded (ASO)</h2>
            <p>
              You pay claims as they occur. A third-party administrator (TPA) processes claims and manages the plan. You purchase stop-loss insurance to cap your exposure. You own the claims fund.
            </p>
            <p>
              <strong>Best for:</strong> Employers with 100+ employees who have the financial capacity to absorb some claims variability and are committed to actively managing their plan.
            </p>
            <p>
              <strong>Key advantage:</strong> No risk premium. Full claims transparency. The ability to implement advanced cost management strategies — pharmacy carve-outs, reference-based pricing, direct contracting, disease management programs — that are not available in fully insured or level-funded arrangements.
            </p>
            <p>
              <strong>Additional benefit:</strong> Self-funded plans are ERISA-governed and in many states exempt from state insurance mandates, providing additional flexibility.
            </p>

            <h2>Captive Arrangements</h2>
            <p>
              A captive pools a group of employers together, each retaining their own claims layer while sharing the stop-loss layer across the group. This reduces stop-loss premium costs and allows smaller employers to access self-funding economics they could not achieve alone.
            </p>
            <p>
              <strong>Best for:</strong> Employers with 50–200 employees looking for self-funding benefits without taking on the full stop-loss cost alone. Industry-specific captives are common.
            </p>

            <h2>Reference-Based Pricing</h2>
            <p>
              Instead of using carrier networks to set prices, reference-based pricing pays providers based on a benchmark — typically a percentage of Medicare rates (e.g., 150–200% of Medicare). This can produce significant savings, particularly on facility (hospital) costs.
            </p>
            <p>
              <strong>Best for:</strong> Self-funded employers in markets with limited carrier network competition, or as a component of a broader cost management strategy.
            </p>
            <p>
              <strong>The challenge:</strong> Balance billing risk — providers may bill employees for amounts above the reference price. A strong patient advocacy program is essential to manage this effectively.
            </p>

            <h2>Choosing the Right Structure</h2>
            <p>
              The right structure depends on your group size, claims history, financial capacity, and risk tolerance. There is no universally right answer — but there is almost certainly a better answer for your specific situation than whatever you are currently doing by default.
            </p>
            <p>
              The analysis starts with your current claims data (or a demographic profile if data is not available) and a comparison of total employer cost under each structure, net of stop-loss premium and administrative costs.
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
        title="Not Sure Which Funding Structure Is Right for You?"
        description="Benefits Collective helps employers model and evaluate funding options with real data. Schedule a free consultation."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="Read the Article"
        secondaryHref="/articles/fully-insured-vs-level-funded-vs-self-funded"
      />
    </>
  )
}
