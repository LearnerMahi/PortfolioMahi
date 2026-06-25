'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { siteConfig } from '@/data/site'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Uses Formspree — create a free account at formspree.io and replace YOUR_FORM_ID below
    // Or remove the fetch and just use the mailto fallback
    try {
      const res = await fetch('https://formspree.io/f/xykqejoz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${siteConfig.email}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}`
      setStatus('idle')
    }
  }

  const info = [
    { icon: FiMail, label: 'Email', value: siteConfig.email, href: siteConfig.social.email },
    { icon: FiPhone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: FiMapPin, label: 'Location', value: siteConfig.location, href: undefined },
    { icon: FiGithub, label: 'GitHub', value: '@ahnafraismahi', href: siteConfig.social.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Ahnaf Rais Mahi', href: siteConfig.social.linkedin },
  ]

  return (
    <section id="contact" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Have a project idea, research collaboration, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="h-full bg-bg-card border border-border rounded-xl p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-[#e6edf3] mb-1">Let&apos;s Connect</h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  I&apos;m open to internship opportunities, research collaborations, and interesting
                  open-source projects.
                </p>
              </div>
              <div className="space-y-4">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-accent-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8b949e]">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-[#c9d1d9] hover:text-accent-blue transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#c9d1d9]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#8b949e] mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3 py-2.5 bg-bg-secondary border border-border rounded-lg text-sm text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#8b949e] mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 bg-bg-secondary border border-border rounded-lg text-sm text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#8b949e] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full px-3 py-2.5 bg-bg-secondary border border-border rounded-lg text-sm text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-white font-semibold text-sm rounded-lg hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-accent-blue/25"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'sent' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please email me directly at{' '}
                  <a href={siteConfig.social.email} className="underline">
                    {siteConfig.email}
                  </a>
                </p>
              )}
              <p className="text-xs text-center text-[#484f58]">
                Or email me directly at{' '}
                <a href={siteConfig.social.email} className="text-accent-blue hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
