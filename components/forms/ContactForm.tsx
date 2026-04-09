'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('meepwkjj')

  if (state.succeeded) {
    return (
      <div className="bg-teal/10 border border-teal/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent</h3>
        <p className="text-body">Thank you for reaching out. We will be in touch shortly.</p>
      </div>
    )
  }

  const inputClass = "input-warm"
  const labelClass = "block text-sm font-medium text-navy mb-1"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Name <span className="text-teal">*</span></label>
        <input id="name" type="text" name="name" required placeholder="Your name" className={inputClass} />
        <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email <span className="text-teal">*</span></label>
        <input id="email" type="email" name="email" required placeholder="your@email.com" className={inputClass} />
        <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message <span className="text-teal">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={inputClass}
        />
        <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <ValidationError errors={state.errors} className="text-red-500 text-sm text-center" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-b from-teal to-[#157070] text-white font-semibold py-3.5 rounded-lg shadow-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
