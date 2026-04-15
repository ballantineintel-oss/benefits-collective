import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'A 49-Person Company Discovers $86,000 in Hidden PEO Fees',
  description:
    "Attracted by a competitive workers' comp rate, this employer had no idea their PEO was quietly making up the difference everywhere else. A Benefits Collective audit saved them $78,000.",
}

const feeBreakdown = [
  { label: "Workers' comp", amount: 18000, color: '#5DCAA5', pct: 21 },
  { label: 'Admin fee on payroll', amount: 29000, color: '#F0997B', pct: 34 },
  { label: 'Wage base manipulation', amount: 27000, color: '#E24B4A', pct: 31 },
  { label: 'Unused HR services', amount: 12000, color: '#B4B2A9', pct: 14 },
]

export default function LawncarePeoExitPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-teal transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-body truncate">Lawn Care &amp; Landscape — PEO Exit</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded-full">Field Services</span>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">49 employees</span>
            <span className="text-xs font-semibold bg-[#E1F5EE] text-[#0F6E56] px-2.5 py-1 rounded-full uppercase tracking-wide" style={{ fontSize: '11px' }}>Case Study — PEO Exit</span>
          </div>

          <h1 className="text-3xl font-bold text-navy md:text-4xl leading-tight mb-4">
            A 49-person company was convinced their PEO deal was too good to leave. It wasn&rsquo;t.
          </h1>
          <p className="text-lg text-body leading-relaxed mb-6">
            Attracted by a competitive workers&rsquo; comp rate, this employer had no idea their PEO was quietly making up the difference everywhere else. A free Benefits Collective consultation uncovered $86,000 in annual payroll fees &mdash; and saved them $78,000.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Company size</p>
              <p className="text-3xl font-bold text-navy leading-none">49</p>
              <p className="text-xs text-gray-400 mt-1">full-time employees</p>
            </div>
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Annual PEO cost</p>
              <p className="text-3xl font-bold leading-none" style={{ color: '#A32D2D' }}>$86k</p>
              <p className="text-xs text-gray-400 mt-1">actual fees paid</p>
            </div>
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Annual savings</p>
              <p className="text-3xl font-bold text-teal leading-none">$78k</p>
              <p className="text-xs text-gray-400 mt-1">after extraction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Background */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Background</p>
            <p className="text-body leading-relaxed mb-3">
              A growing lawn care and landscape services company with 49 employees had been with their PEO for several years. They were skeptical when Benefits Collective reached out &mdash; and for a reason many employers share: they believed their workers&rsquo; compensation rates were too good to walk away from.
            </p>
            <p className="text-body leading-relaxed">
              Their PEO had originally won their business by offering significantly discounted workers&rsquo; comp coverage &mdash; a legitimate pain point for companies in field services and labor-intensive industries. From that point forward, the assumption was that the PEO relationship was a net win. Nobody had run the full numbers.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* How PEOs use bait pricing */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">How PEOs use bait pricing</p>
            <p className="text-body leading-relaxed mb-5">
              PEOs are self-funded entities, which means they control their own rate structures across workers&rsquo; comp, medical, and administrative fees. When a prospect has a specific pain point &mdash; say, a high workers&rsquo; comp modifier &mdash; a PEO can offer an attractive rate in that area and quietly make up the margin everywhere else.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl p-5 border" style={{ background: '#f0fbf7', borderColor: '#9FE1CB' }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#0F6E56' }}>The bait</p>
                <p className="text-sm text-body leading-relaxed">
                  Discounted workers&rsquo; comp rate &mdash; well below market, solving the company&rsquo;s most visible cost problem and making the PEO deal look compelling
                </p>
              </div>
              <div className="rounded-xl p-5 border" style={{ background: '#fef5f5', borderColor: '#F7C1C1' }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#A32D2D' }}>The switch</p>
                <p className="text-sm text-body leading-relaxed">
                  Elevated admin fees as a percentage of payroll, manipulated wage base limits, and opaque line items that recouped the discount many times over
                </p>
              </div>
            </div>
            <blockquote className="border-l-4 border-teal pl-5 py-3 bg-warm-gray rounded-r-xl">
              <p className="text-body italic leading-relaxed">
                There is no free lunch in a PEO. If one rate looks too good, the question isn&rsquo;t whether you&rsquo;re paying for it somewhere else &mdash; it&rsquo;s where.
              </p>
            </blockquote>
          </section>

          <hr className="border-gray-100" />

          {/* What we found */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What we found</p>
            <p className="text-body leading-relaxed mb-5">
              A Benefits Collective advisor conducted a full audit of the company&rsquo;s PEO rate sheet and payroll records. The workers&rsquo; comp rate was indeed favorable. Everything else told a different story.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-gray">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Fee component</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">What the employer saw</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">What was actually happening</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Workers&rsquo; comp rate</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Below-market &mdash; the reason they joined and stayed</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Genuinely favorable, used as the anchor to justify the full relationship</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#E1F5EE', color: '#0F6E56' }}>Bait</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Admin fee (% of payroll)</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Listed as a small percentage &mdash; looked reasonable in isolation</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Applied to total gross payroll. Every raise given to any employee increased PEO revenue automatically</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#FCEBEB', color: '#A32D2D' }}>Hidden impact</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Wage base non-dropoff</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Payroll tax line items blended with legitimate employer taxes</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Social Security taxes were not dropped at the federal wage base limit (~$176,100). Employers continued paying 6.2% on earnings beyond that &mdash; a charge with no legal basis</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#FCEBEB', color: '#A32D2D' }}>Hidden</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Bundled HR services</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Included in the package as added value</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">The company was not using HR support services but was paying for them through elevated fee rates</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#FCEBEB', color: '#A32D2D' }}>Unused cost</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* The math */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The math &mdash; breaking down $86,000 in annual fees</p>

            {/* CSS bar chart */}
            <div className="space-y-3 mb-5">
              {feeBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-body font-medium">{item.label}</span>
                    <span className="font-semibold text-navy">${(item.amount / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="h-7 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.pct}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
              {feeBreakdown.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                  {item.label} (${(item.amount / 1000).toFixed(0)}k)
                </span>
              ))}
            </div>

            <p className="text-body leading-relaxed">
              The workers&rsquo; comp rate was real &mdash; but at market rates for a company this size, comparable coverage was available independently for a similar cost. The perceived savings on workers&rsquo; comp did not come close to offsetting what was being paid everywhere else.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Outcome */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The outcome</p>
            <p className="text-body leading-relaxed mb-5">
              Once the full cost picture was documented, the company moved off the PEO. They secured workers&rsquo; comp coverage independently through a direct carrier relationship at a comparable rate, selected a standalone payroll platform, and established their own benefits program.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Annual payroll service cost', before: '$86,000', after: '~$8,000', note: 'after extraction' },
                { label: 'Annual savings', before: '$78,000+', after: 'ongoing', note: 'every year going forward', beforeGood: true },
                { label: "Workers' comp", before: 'PEO self-funded pool', after: 'Direct carrier, comparable rate', note: 'moved to', small: true },
                { label: 'Payroll technology', before: 'White-labeled PEO platform', after: 'Best-in-class HCM', note: 'upgraded to', small: true },
              ].map((card) => (
                <div key={card.label} className="border border-gray-100 rounded-xl p-5">
                  <p className="text-xs text-gray-400 font-medium mb-2">{card.label}</p>
                  <p className={`font-bold mb-1 ${card.small ? 'text-base' : 'text-xl'}`} style={{ color: card.beforeGood ? '#0F6E56' : '#A32D2D' }}>
                    {card.before}
                  </p>
                  <p className="text-xs text-gray-400 mb-1">↓ {card.note}</p>
                  <p className={`font-bold text-teal ${card.small ? 'text-base' : 'text-xl'}`}>{card.after}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Key takeaway */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Key takeaway</p>
            <p className="text-body leading-relaxed mb-3">
              The most effective PEO sales tactic isn&rsquo;t a deceptive pitch &mdash; it&rsquo;s a genuinely good rate on the one thing you care most about. Workers&rsquo; comp, medical rates, a strong HR platform. Whatever your pain point is, a PEO can solve it on paper and earn your trust. The problem is what happens to the rest of the invoice.
            </p>
            <p className="text-body leading-relaxed">
              If you&rsquo;ve never had someone audit your full PEO cost structure &mdash; not just the line items they show you, but the payroll tax rates, the wage base behavior, the fees embedded in your employer taxes &mdash; you likely don&rsquo;t know what you&rsquo;re actually paying. This company didn&rsquo;t, until someone ran the numbers.
            </p>
          </section>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-6 leading-relaxed">
            Company details have been anonymized to protect client confidentiality. All financial figures are based on actual client data reviewed during a Benefits Collective advisory consultation. Results vary by organization size, PEO provider, and fee structure.
          </p>
        </div>
      </div>

      <CTABanner
        title="Think Your PEO Deal Might Be Too Good to Be True?"
        description="A free Benefits Collective consultation includes a full fee audit — no obligation, no sales pitch."
        primaryLabel="Request a Free Audit"
        primaryHref="/consultation"
        secondaryLabel="Read More Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
