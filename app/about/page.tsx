import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Benefits Collective — a strategy and resource platform for employers navigating employee benefits, health insurance costs, and HR decisions.',
}

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">About Benefits Collective</h1>
          <p className="text-xl text-white/75">
            A strategy and resource platform for employers who take benefits seriously.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
            Benefits Collective exists to help employers make smarter decisions about employee benefits. Most of the information available to HR leaders and CFOs about health insurance comes from people who are paid to sell it. We think that is a problem.
          </p>
          <p>
            Our mission is to produce clear, honest, strategic content that helps employers understand their options, ask better questions of their brokers and carriers, and ultimately build benefits programs that are both competitive and cost-effective.
          </p>

          <h2>Who We Write For</h2>
          <p>
            Benefits Collective is written for business leaders, not insurance experts. Our target reader is:
          </p>
          <ul>
            <li>An HR Director or HR Manager at a 50–300 person company</li>
            <li>A CFO or controller who has started paying attention to benefits costs</li>
            <li>A CEO or operations leader at a growing company approaching compliance thresholds</li>
            <li>A business owner who is frustrated with annual renewal increases and wants to understand why</li>
          </ul>
          <p>
            We write in plain language. No acronym soup, no insurance-industry jargon, no fluffy marketing copy. Just straightforward strategy content.
          </p>

          <h2>What We Cover</h2>
          <p>
            Our content focuses on the decisions that have the biggest financial impact on employer benefits programs:
          </p>
          <ul>
            <li><strong>Renewal strategy</strong> — Understanding what drives increases and how to respond</li>
            <li><strong>Funding structures</strong> — Fully insured, level funded, self-funded, captive</li>
            <li><strong>PEO exit strategy</strong> — When and how to leave a Professional Employer Organization</li>
            <li><strong>Cost reduction</strong> — Pharmacy management, plan design, contribution strategy</li>
            <li><strong>Compliance</strong> — ACA requirements, ALE thresholds, reporting obligations</li>
            <li><strong>Broker evaluation</strong> — How to assess your broker relationship and when to consider a change</li>
          </ul>

          <h2>The Consultation</h2>
          <p>
            In addition to the content platform, Benefits Collective offers free strategy consultations for employers. A consultation is a 30-minute conversation to understand your situation, benchmark your costs, and identify where you have leverage.
          </p>
          <p>
            There is no obligation and no sales pitch. If it makes sense to work together after the consultation, we will talk about what that looks like. If not, you leave with useful information and a clearer picture of your options.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions, feedback, or content suggestions — we would like to hear from you. Reach us at <a href="mailto:hello@benefitscollective.com">hello@benefitscollective.com</a> or use the <Link href="/contact">contact form</Link>.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center bg-teal text-white font-semibold px-6 py-3 rounded-md hover:bg-[#156f6f] transition-colors"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center border border-teal text-teal font-semibold px-6 py-3 rounded-md hover:bg-teal hover:text-white transition-colors"
          >
            Subscribe to the Newsletter
          </Link>
        </div>
      </div>
    </div>
  )
}
