import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="hero-premium py-24 px-4 md:py-36">
      <div className="hero-accent-line" />
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-teal text-xs font-semibold uppercase tracking-[0.15em] mb-5">
          Benefits Strategy for Employers
        </p>
        <h1 className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          Smarter Benefits Decisions
          <br className="hidden sm:block" /> for Employers
        </h1>
        <p className="mt-7 text-xl text-white/75 max-w-2xl mx-auto leading-[1.8]">
          Strategy, insights, and resources for HR leaders, CFOs, and business owners who want to manage healthcare costs without sacrificing coverage quality.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/articles" variant="primary" size="lg">
            Explore Articles
          </Button>
          <Button
            href="/consultation"
            size="lg"
            className="bg-white/10 text-white border border-white/25 hover:bg-white/18 backdrop-blur-sm"
          >
            Schedule a Consultation
          </Button>
        </div>
        <div className="mt-14 flex items-center justify-center gap-3 opacity-40">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-teal" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </section>
  )
}
