import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'A 28-Person Nonprofit Was Paying $198,000/Year for Payroll. They Had No Idea.',
  description:
    'A free Benefits Collective consultation uncovered hidden fee structures that had gone undetected for years. The nonprofit renegotiated their entire benefits and payroll stack and saved over $110,000 annually.',
}

// Stacked bar chart data: perceived vs actual
const perceivedTotal = 38000
const actualBreakdown = [
  { label: 'Disclosed admin fee', amount: 38000, color: '#5DCAA5' },
  { label: 'Hidden compliance fee', amount: 28000, color: '#F0997B' },
  { label: 'Wage base manipulation', amount: 132000, color: '#E24B4A' },
]
const actualTotal = actualBreakdown.reduce((s, i) => s + i.amount, 0) // 198000

export default function NonprofitPeoExitPage() {
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
            <span className="text-body truncate">Southwest Nonprofit — PEO Exit</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded-full">Nonprofit</span>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">28 employees</span>
            <span className="text-xs font-semibold bg-[#E1F5EE] text-[#0F6E56] px-2.5 py-1 rounded-full uppercase tracking-wide" style={{ fontSize: '11px' }}>Case Study — PEO Exit</span>
          </div>

          <h1 className="text-3xl font-bold text-navy md:text-4xl leading-tight mb-4">
            A 28-person nonprofit was paying $198,000/year for payroll. They had no idea.
          </h1>
          <p className="text-lg text-body leading-relaxed mb-6">
            A free Benefits Collective consultation uncovered hidden fee structures that had gone undetected for years. The organization renegotiated their entire benefits and payroll stack and saved over $110,000 annually.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Organization size</p>
              <p className="text-3xl font-bold text-navy leading-none">28</p>
              <p className="text-xs text-gray-400 mt-1">full-time employees</p>
            </div>
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Annual PEO cost (actual)</p>
              <p className="text-3xl font-bold leading-none" style={{ color: '#A32D2D' }}>$198k</p>
              <p className="text-xs text-gray-400 mt-1">payroll + HR + tech fees</p>
            </div>
            <div className="bg-light-gray rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Annual savings</p>
              <p className="text-3xl font-bold text-teal leading-none">$110k</p>
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
              A Southwest-based nonprofit organization with 28 full-time employees reached out to Benefits Collective for a second opinion on their benefits program. They believed they had a reasonable handle on their costs. They were wrong.
            </p>
            <p className="text-body leading-relaxed">
              The organization had been on a Professional Employer Organization (PEO) for several years. Like most employers on a PEO, they could see their administrative fee line item &mdash; but what was buried underneath it was a different story entirely.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* What we found */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What we found</p>
            <p className="text-body leading-relaxed mb-5">
              When a Benefits Collective advisor reviewed the organization&rsquo;s PEO rate sheet and payroll records, three distinct hidden fee structures emerged:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-gray">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Fee type</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">How it appeared</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Reality</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Administrative service fee</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Listed as a percentage of total payroll</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Grows automatically with every raise given &mdash; employees get a raise, the PEO gets one too</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#E1F5EE', color: '#0F6E56' }}>Disclosed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">&ldquo;Compliance tax&rdquo; line item</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Listed at 0.6% &mdash; formatted to look like a standard employer tax</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">No such tax exists. This was a fabricated fee disguised as a regulatory requirement</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#FCEBEB', color: '#A32D2D' }}>Hidden</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-navy align-top">Social Security wage base manipulation</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">Embedded in employer payroll tax line items</td>
                    <td className="px-4 py-4 text-body align-top leading-snug">The PEO was not dropping Social Security tax after the federal wage base limit (~$176,100). Highly compensated employees were taxed on every dollar &mdash; generating pure profit for the PEO</td>
                    <td className="px-4 py-4 align-top">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded" style={{ background: '#FCEBEB', color: '#A32D2D' }}>Hidden</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-4 border-teal pl-5 py-3 bg-warm-gray rounded-r-xl mt-6">
              <p className="text-body italic leading-relaxed">
                When employers are shown a rate sheet from a PEO, they are typically shown what the PEO wants them to see. The administrative fee is transparent by design. Everything else often is not.
              </p>
            </blockquote>
          </section>

          <hr className="border-gray-100" />

          {/* The math */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">The math &mdash; what they were actually paying</p>

            {/* Stacked comparison bars */}
            <div className="space-y-5 mb-5">
              {/* Perceived */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-body">What they thought they were paying</span>
                  <span className="font-semibold text-navy">$38k</span>
                </div>
                <div className="h-10 bg-gray-100 rounded-lg overflow-hidden flex">
                  <div
                    className="h-full"
                    style={{
                      width: `${(perceivedTotal / actualTotal) * 100}%`,
                      background: '#5DCAA5',
                    }}
                  />
                </div>
              </div>

              {/* Actual */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-body">What they were actually paying</span>
                  <span className="font-bold text-navy">$198k</span>
                </div>
                <div className="h-10 bg-gray-100 rounded-lg overflow-hidden flex">
                  {actualBreakdown.map((seg) => (
                    <div
                      key={seg.label}
                      className="h-full"
                      style={{
                        width: `${(seg.amount / actualTotal) * 100}%`,
                        background: seg.color,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
              {actualBreakdown.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                  {item.label} (~${(item.amount / 1000).toFixed(0)}k)
                </span>
              ))}
            </div>

            <p className="text-body leading-relaxed">
              To put the actual cost in context: the industry benchmark for best-in-class payroll technology for a 28-person organization is approximately $30&ndash;$60 per employee per month &mdash; roughly $10,000&ndash;$20,000 per year. This organization was paying nearly $200,000.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Outcome */}
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The outcome</p>
            <p className="text-body leading-relaxed mb-5">
              Once the full picture was clear, the organization moved off the PEO entirely. They selected independent payroll technology, established their own carrier relationships for benefits, and no longer needed to pay for bundled HR services they were not using.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Annual payroll + HR + tech cost', before: '$198,000', after: '~$88,000', note: 'after extraction' },
                { label: 'Annual savings', before: '$110,000+', after: 'ongoing', note: 'returned to mission every year', beforeGood: true },
                { label: 'Payroll technology', before: 'White-labeled PEO platform', after: 'Best-in-class HCM', note: 'upgraded to', small: true },
                { label: 'Benefits structure', before: 'PEO master plan (pooled)', after: 'Own carrier relationships', note: 'moved to', small: true },
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
              PEOs are not inherently bad products &mdash; for the right companies at the right stage, they can provide real value. But for most organizations above 25&ndash;30 employees, the math often stops making sense. And it almost never gets better at renewal.
            </p>
            <p className="text-body leading-relaxed">
              The problem is that most employers never see the full picture. A rate sheet is not a fee disclosure. If you have not had someone independently audit your PEO cost structure, there is a good chance you do not know what you are actually paying.
            </p>
          </section>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-6 leading-relaxed">
            Company details have been anonymized to protect client confidentiality. All financial figures are based on actual client data reviewed during a Benefits Collective advisory consultation. Results vary by organization size, PEO provider, and fee structure.
          </p>
        </div>
      </div>

      <CTABanner
        title="Not Sure What Your PEO Is Actually Charging You?"
        description="A free Benefits Collective consultation includes a full fee audit — no obligation, no sales pitch."
        primaryLabel="Request a Free Audit"
        primaryHref="/consultation"
        secondaryLabel="Read More Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
