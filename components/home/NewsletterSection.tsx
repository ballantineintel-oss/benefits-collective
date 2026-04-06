import NewsletterForm from '../forms/NewsletterForm'

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-br from-[#3d6a78] via-slate-blue to-[#2d5a68] py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
          Benefits Collective Newsletter
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay ahead of your benefits strategy
        </h2>
        <p className="text-white/75 mb-8 leading-relaxed">
          Practical insights delivered to your inbox. Renewal analysis, funding strategies, PEO exit guidance, and more — written for HR leaders and CFOs, not insurance salespeople.
        </p>
        <div className="bg-white rounded-xl p-6 md:p-8 text-left shadow-lg border border-white/20">
          <NewsletterForm />
        </div>
        <p className="mt-4 text-white/50 text-xs">No spam. No fluff. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
