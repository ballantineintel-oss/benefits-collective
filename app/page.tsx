import type { Metadata } from 'next'
import {
  getFeaturedArticles,
  getLatestArticles,
  getFeaturedGuides,
  getResources,
  getCaseStudies,
} from '@/lib/content'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import StrategyTopics from '@/components/home/StrategyTopics'
import NewsletterSection from '@/components/home/NewsletterSection'
import CTABanner from '@/components/ui/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'
import ArticleCard from '@/components/content/ArticleCard'
import GuideCard from '@/components/content/GuideCard'
import ResourceCard from '@/components/content/ResourceCard'
import ContentGrid from '@/components/content/ContentGrid'
import CaseStudyCard from '@/components/content/CaseStudyCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Benefits Collective | Smarter Benefits Decisions for Employers',
  description:
    'Strategy, insights, and resources for HR leaders, CFOs, and business owners navigating employee benefits and healthcare costs.',
}

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3)
  const latestArticles = getLatestArticles(6)
  const featuredGuides = getFeaturedGuides(3)
  const resources = getResources().slice(0, 3)
  const featuredCaseStudies = getCaseStudies().filter((cs) => cs.featured).slice(0, 3)

  return (
    <>
      <HeroSection />
      <AboutSection />

      {/* Featured Articles */}
      <section className="bg-white py-20 px-4 border-b border-[#E8E4DF]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading
              title="Featured Articles"
              subtitle="In-depth strategy content for employers dealing with rising benefits costs."
              className="mb-0"
            />
            <Link href="/articles" className="hidden sm:inline text-sm font-medium text-teal hover:text-[#156f6f] transition-colors whitespace-nowrap ml-4">
              View all articles →
            </Link>
          </div>
          <ContentGrid cols={3}>
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ContentGrid>
          <div className="mt-6 sm:hidden">
            <Link href="/articles" className="text-sm font-medium text-teal hover:text-[#156f6f]">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      <StrategyTopics />

      {/* Featured Guides */}
      <section className="bg-white py-20 px-4 border-b border-[#E8E4DF]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading
              title="Employer Guides"
              subtitle="Step-by-step guidance on the most important benefits decisions."
              className="mb-0"
            />
            <Link href="/guides" className="hidden sm:inline text-sm font-medium text-teal hover:text-[#156f6f] transition-colors whitespace-nowrap ml-4">
              View all guides →
            </Link>
          </div>
          <ContentGrid cols={3}>
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </ContentGrid>
        </div>
      </section>

      {/* Resource Downloads */}
      {resources.length > 0 && (
        <section className="bg-[#F5F3F0] py-20 px-4 border-y border-[#E8E4DF]/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <SectionHeading
                title="Free Resources"
                subtitle="Practical checklists, templates, and tools you can use today."
                className="mb-0"
              />
              <Link href="/resources" className="hidden sm:inline text-sm font-medium text-teal hover:text-[#156f6f] transition-colors whitespace-nowrap ml-4">
                View all resources →
              </Link>
            </div>
            <ContentGrid cols={3}>
              {resources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </ContentGrid>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="bg-white py-20 px-4 border-b border-[#E8E4DF]/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <SectionHeading
                title="Case Studies"
                subtitle="Real results from employers who took a strategic approach to their benefits."
                className="mb-0"
              />
              <Link href="/case-studies" className="hidden sm:inline text-sm font-medium text-teal hover:text-[#156f6f] transition-colors whitespace-nowrap ml-4">
                View all case studies →
              </Link>
            </div>
            <ContentGrid cols={3}>
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </ContentGrid>
            <div className="mt-6 sm:hidden">
              <Link href="/case-studies" className="text-sm font-medium text-teal hover:text-[#156f6f]">
                View all case studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />

      {/* Latest Articles */}
      <section className="bg-white py-20 px-4 border-b border-[#E8E4DF]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading title="Latest Articles" className="mb-0" />
            <Link href="/articles" className="hidden sm:inline text-sm font-medium text-teal hover:text-[#156f6f] transition-colors whitespace-nowrap ml-4">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} size="compact" />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get a Second Opinion on Your Benefits"
        description="Not sure if you are overpaying? Facing a renewal increase? Schedule a free, no-obligation consultation with Benefits Collective."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="Explore Our Resources"
        secondaryHref="/resources"
      />
    </>
  )
}
