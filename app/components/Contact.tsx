"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a form backend (e.g. Formspree, Resend, or Vercel serverless)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">Get in Touch</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Request a Free Quote</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Fill out the form and Luis will get back to you within a few hours.
            For emergencies, call or text directly — 24/7.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📞", label: "Phone / Text", value: "(555) 123-4567", href: "tel:+15551234567" },
              { icon: "✉️", label: "Email", value: "luis@nunezelectrical.com", href: "mailto:luis@nunezelectrical.com" },
              { icon: "📍", label: "Service Area", value: "Your City & Surrounding Areas", href: null },
              { icon: "🕐", label: "Hours", value: "Mon–Fri 7am–6pm · Emergency 24/7", href: null },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-gray-800 font-medium hover:text-yellow-500 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-gray-800 font-medium">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <span className="text-6xl mb-4">✅</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thanks! Carlos will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Project *</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you need help with..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
              >
                Send Message ⚡
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
