import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'
import { getArticlesByCategory } from '@/lib/content'
import ArticleCard from '@/components/content/ArticleCard'

export const metadata: Metadata = {
  title: 'Cost Reduction Strategies',
  description: 'Pharmacy management, plan design, contribution strategy, compliance savings, and vendor management strategies for reducing employer health benefits costs.',
}

export default function CostReductionPage() {
  const relatedArticles = getArticlesByCategory('Cost Reduction').slice(0, 3)

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
            <span className="text-white">Cost Reduction Strategies</span>
          </nav>
          <span className="inline-block bg-olive/20 text-olive text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-4">
            Strategy Guide
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight mb-4">
            Cost Reduction Strategies
          </h1>
          <p className="text-xl text-white/75 leading-relaxed max-w-2xl">
            Reducing benefits costs is not about cutting coverage. It is about eliminating waste, managing high-cost areas proactively, and designing a program that aligns incentives between you and your employees.
          </p>
        </div>
      </div>

      <div className="bg-[#FAF9F7] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2>Pharmacy Management</h2>
            <p>
              Pharmacy costs represent 20–30% of total plan spend for most employer groups — and that percentage is growing. Specialty medications alone can account for 40–50% of pharmacy spend despite being used by a small fraction of employees.
            </p>
            <p>
              Effective pharmacy management includes:
            </p>
            <ul>
              <li><strong>PBM contract evaluation:</strong> Most employers do not know whether their pharmacy benefit manager (PBM) contract is competitive. Rebate pass-through rates, network discounts, and administrative fees vary enormously between contracts.</li>
              <li><strong>Formulary management:</strong> Is your formulary directing employees toward lower-cost therapeutically equivalent drugs? Generic substitution and preferred brand tiers can meaningfully reduce both employer and employee costs.</li>
              <li><strong>Specialty pharmacy carve-out:</strong> For employers with self-funded plans, carving out specialty pharmacy to a dedicated specialty PBM often produces significant savings compared to using the standard PBM for specialty drugs.</li>
              <li><strong>Manufacturer copay assistance:</strong> For employees on high-cost specialty drugs, manufacturer copay assistance programs can reduce the plan's net cost — but they require active management.</li>
              <li><strong>GLP-1 strategy:</strong> With the rapid uptake of GLP-1 medications (Ozempic, Wegovy, Mounjaro), employers need a deliberate coverage and management strategy rather than reactive formulary decisions.</li>
            </ul>

            <h2>Plan Design Optimization</h2>
            <p>
              Many employers are over-insuring their workforce — offering richer benefits than are needed to attract and retain talent. A plan design review examines:
            </p>
            <ul>
              <li><strong>Deductible and out-of-pocket levels:</strong> Are your cost-sharing levels appropriate for your workforce demographics and competitive position?</li>
              <li><strong>Co-pay structure:</strong> Flat co-pays for services create utilization, especially for specialist visits. A coinsurance structure aligns incentives better.</li>
              <li><strong>Consumer-directed options:</strong> Adding an HSA-eligible high-deductible health plan (HDHP) gives cost-conscious employees a lower-premium option and reduces employer premium obligation.</li>
              <li><strong>Voluntary benefits:</strong> Supplemental coverage (accident, critical illness, hospital indemnity) can supplement a higher-deductible plan and improve the perceived value of benefits without adding to employer cost.</li>
            </ul>

            <h2>Contribution Strategy</h2>
            <p>
              How you structure employee contributions has a significant impact on both total cost and employee behavior. Common strategies include:
            </p>
            <ul>
              <li><strong>Defined contribution:</strong> Setting a fixed employer dollar contribution rather than a percentage of premium gives you cost predictability and ensures you are not subsidizing employees who choose richer (more expensive) plans.</li>
              <li><strong>Spousal surcharge:</strong> Charging an additional premium contribution for spouses who have access to other employer coverage can reduce enrollment in your plan by covered spouses who are effectively using yours as secondary coverage.</li>
              <li><strong>Tobacco surcharge:</strong> In states where permitted, a tobacco user surcharge both generates contribution offset and creates an incentive for tobacco cessation.</li>
            </ul>

            <h2>Compliance Savings</h2>
            <p>
              Several compliance-related strategies produce real dollar savings:
            </p>
            <ul>
              <li><strong>Dependent eligibility audit:</strong> Many plans carry ineligible dependents — ex-spouses, adult children over age 26, or dependents who no longer meet eligibility criteria. A one-time audit often removes 2–5% of enrolled dependents.</li>
              <li><strong>ACA optimization:</strong> For employers near the 50 FTE threshold, workforce structuring can affect ALE (Applicable Large Employer) status and minimum essential coverage obligations.</li>
              <li><strong>COBRA administration:</strong> Proper COBRA administration ensures you are recovering premium for continuation coverage rather than subsidizing separated employees inadvertently.</li>
            </ul>

            <h2>Vendor Management</h2>
            <p>
              Every vendor in your benefits program — carriers, TPAs, PBMs, COBRA administrators, FSA/HSA custodians — has a contract with terms that affect your cost. Most employers renew these contracts without negotiating.
            </p>
            <p>
              Periodic competitive reviews, even when you are not planning to switch vendors, create negotiating leverage. Knowing what alternatives exist and what they would cost changes the conversation.
            </p>

            <h2>Where to Start</h2>
            <p>
              The most impactful starting point is almost always data. You cannot implement targeted cost reduction strategies without understanding what is driving your costs. Start with a claims analysis, a pharmacy spend review, and a plan design benchmark. The data will tell you where your highest leverage opportunities are.
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
        title="Want to Identify Your Highest-Leverage Cost Reduction Opportunities?"
        description="Benefits Collective helps employers analyze their plans and prioritize the strategies with the biggest impact. No obligation."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/consultation"
      />
    </>
  )
}
