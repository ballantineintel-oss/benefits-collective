import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Benefits Collective — questions, feedback, or partnership inquiries.',
}

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="hero-premium py-16 px-4">
        <div className="hero-accent-line" />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-3">Contact</h1>
          <p className="text-white/75 text-lg leading-relaxed">Questions, feedback, or ideas — we would like to hear from you.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Get in Touch</h2>
            <p className="text-body mb-8 leading-relaxed">
              Whether you have a question about our content, want to suggest a topic, or are ready to schedule a consultation — reach out and we will get back to you promptly.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <a href="mailto:hello@benefitscollective.com" className="text-teal hover:text-[#156f6f] font-medium">
                  hello@benefitscollective.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Schedule a Consultation</p>
                <a href="/consultation" className="text-teal hover:text-[#156f6f] font-medium">
                  Use the consultation form →
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[#E8E4DF] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
