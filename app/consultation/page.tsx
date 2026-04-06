import type { Metadata } from 'next'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Schedule a Consultation',
  description: 'Schedule a free, no-obligation consultation with Benefits Collective to discuss your employee benefits strategy.',
}

export default function ConsultationPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="hero-premium py-16 px-4">
        <div className="hero-accent-line" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            No Obligation
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-4">Schedule a Free Consultation</h1>
          <p className="text-xl text-white/75 leading-relaxed">
            A second opinion on your benefits strategy — at no cost, no commitment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy mb-4">What to Expect</h2>
            <p className="text-body mb-6 leading-relaxed">
              A 30-minute call to understand your current situation, what is driving your costs, and what your options look like. No sales pressure. Just a strategic conversation.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Review of your current plan and renewal situation',
                'Assessment of whether alternative funding structures make sense',
                'Benchmarking your costs against similar employers',
                'Identification of your highest-leverage cost reduction opportunities',
                'Clear next steps if you decide to move forward',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-teal flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-body">{item}</p>
                </li>
              ))}
            </ul>

            <div className="bg-warm-gray rounded-xl p-5 border border-[#E8E4DF]">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Best for</p>
              <ul className="text-sm text-body space-y-1">
                <li>Employers facing a renewal increase</li>
                <li>Companies considering leaving a PEO</li>
                <li>HR leaders evaluating a broker change</li>
                <li>CFOs questioning benefits spend</li>
                <li>Companies near 50 or 100 employee thresholds</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-[#E8E4DF] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
