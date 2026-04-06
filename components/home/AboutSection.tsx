export default function AboutSection() {
  return (
    <section className="bg-[#FAF9F7] py-20 px-4 border-b border-[#E8E4DF]/60">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
              What is Benefits Collective?
            </p>
            <h2 className="text-3xl font-bold text-navy leading-snug mb-4">
              A strategy resource for employers who want to get more from their benefits program
            </h2>
            <p className="text-body leading-relaxed mb-4">
              Benefits Collective is a content and advisory platform focused on employee benefits strategy. We publish in-depth articles, practical guides, and actionable resources for HR directors, CFOs, and business owners navigating the complexity of employer-sponsored health insurance.
            </p>
            <p className="text-body leading-relaxed">
              Whether you are facing a double-digit renewal increase, evaluating a PEO exit, or trying to understand your funding options — this is where you will find clear, unbiased strategy content written for business leaders, not insurance experts.
            </p>
          </div>
          <div className="md:w-72 space-y-4 flex-shrink-0">
            {[
              { label: 'In-depth articles', desc: 'Actionable strategy and analysis' },
              { label: 'Employer guides', desc: 'Step-by-step guidance for complex decisions' },
              { label: 'Resource library', desc: 'Checklists, tools, and frameworks' },
              { label: 'Expert consultation', desc: 'A second opinion, no obligation' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-teal flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
