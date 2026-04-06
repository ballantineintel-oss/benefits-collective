import Button from './Button'

interface CTABannerProps {
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="hero-premium py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{description}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} size="lg" className="bg-white/10 text-white border border-white/30 hover:bg-white/20">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
