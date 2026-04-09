'use client'

import { useForm, ValidationError } from '@formspree/react'

interface NewsletterFormProps {
  variant?: 'default' | 'footer' | 'inline'
}

export default function NewsletterForm({ variant = 'default' }: NewsletterFormProps) {
  const [state, handleSubmit] = useForm('mgopbywv')

  if (state.succeeded) {
    return (
      <div className={`rounded-md p-4 ${variant === 'footer' ? 'bg-white/10 text-white' : 'bg-teal/10 text-teal border border-teal/20'}`}>
        <p className="font-semibold">You are subscribed.</p>
        <p className={`text-sm mt-1 ${variant === 'footer' ? 'text-white/70' : 'text-body'}`}>
          Watch your inbox for insights and strategy from Benefits Collective.
        </p>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal focus:bg-white/15 transition-colors duration-200"
        />
        <ValidationError field="email" errors={state.errors} className="text-red-300 text-xs mt-1" />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-gradient-to-b from-teal to-[#157070] text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200 disabled:opacity-50 whitespace-nowrap"
        >
          {state.submitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1">
            First Name <span className="text-teal">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            className="input-warm"
          />
          <ValidationError field="firstName" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email <span className="text-teal">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className="input-warm"
          />
          <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1">
          Company <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Acme Corp"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-body focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
        />
      </div>

      <ValidationError errors={state.errors} className="text-red-500 text-sm" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full sm:w-auto bg-gradient-to-b from-teal to-[#157070] text-white font-semibold px-8 py-3 rounded-lg shadow-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200 disabled:opacity-50"
      >
        {state.submitting ? 'Subscribing...' : 'Subscribe to the Newsletter'}
      </button>
    </form>
  )
}
