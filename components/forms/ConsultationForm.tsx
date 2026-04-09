'use client'

import { useForm, ValidationError } from '@formspree/react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function ConsultationForm() {
  const [state, handleSubmit] = useForm('mlgokbqk')

  if (state.succeeded) {
    return (
      <div className="bg-teal/10 border border-teal/20 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Request Received</h3>
        <p className="text-body">
          Thank you for reaching out. A member of the Benefits Collective team will be in touch within one business day.
        </p>
      </div>
    )
  }

  const inputClass = "input-warm"
  const labelClass = "block text-sm font-medium text-navy mb-1"
  const required = <span className="text-teal">*</span>

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name {required}</label>
          <input id="name" type="text" name="name" required placeholder="Jane Smith" className={inputClass} />
          <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email {required}</label>
          <input id="email" type="email" name="email" required placeholder="jane@company.com" className={inputClass} />
          <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelClass}>Company {required}</label>
          <input id="company" type="text" name="company" required placeholder="Acme Corp" className={inputClass} />
          <ValidationError field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="employees" className={labelClass}>Number of Employees {required}</label>
          <input id="employees" type="text" name="employees" required placeholder="e.g. 85" className={inputClass} />
          <ValidationError field="employees" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="currentBroker" className={labelClass}>
            Current Broker <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input id="currentBroker" type="text" name="currentBroker" placeholder="Broker name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="inPeo" className={labelClass}>Currently in a PEO? {required}</label>
          <select id="inPeo" name="inPeo" required className={inputClass}>
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
          <ValidationError field="inPeo" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
      </div>

      <div>
        <label htmlFor="renewalMonth" className={labelClass}>Renewal Month {required}</label>
        <select id="renewalMonth" name="renewalMonth" required className={inputClass}>
          <option value="">Select month</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <ValidationError field="renewalMonth" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What would you like to discuss? <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your situation — renewal increase, PEO exit, plan design questions, etc."
          className={inputClass}
        />
        <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <ValidationError errors={state.errors} className="text-red-500 text-sm text-center" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-b from-teal to-[#157070] text-white font-semibold py-3.5 rounded-lg shadow-sm hover:from-[#1a9696] hover:to-[#127070] hover:shadow-md transition-all duration-200 disabled:opacity-50 text-base"
      >
        {state.submitting ? 'Submitting...' : 'Request a Free Consultation'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No obligation. We respond within one business day.
      </p>
    </form>
  )
}
