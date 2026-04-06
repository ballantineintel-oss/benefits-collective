'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // TODO: Integrate with email notification service or CRM
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    console.log('Contact form submission:', form)

    await new Promise((r) => setTimeout(r, 500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
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
        <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email <span className="text-teal">*</span></label>
        <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message <span className="text-teal">*</span></label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How can we help?"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-b from-teal to-[#157070] text-white font-semibold py-3.5 rounded-lg shadow-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
