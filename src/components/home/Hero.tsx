'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { FiLinkedin } from 'react-icons/fi'
import { siteConfig } from '@/data/site'

const roles = siteConfig.roles

function useTypewriter(words: string[], speed = 80, deleteSpeed = 40, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const timer = setTimeout(
      () => {
        if (deleting) {
          setDisplay(word.substring(0, display.length - 1))
          if (display.length === 1) {
            setDeleting(false)
            setIndex((i) => (i + 1) % words.length)
          }
        } else {
          setDisplay(word.substring(0, display.length + 1))
          if (display === word) {
            setTimeout(() => setDeleting(true), pause)
          }
        }
      },
      deleting ? deleteSpeed : speed
    )
    return () => clearTimeout(timer)
  }, [display, deleting, index, words, speed, deleteSpeed, pause])

  return display
}

const socials = [
  { icon: FiGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: SiCodeforces, href: siteConfig.social.codeforces, label: 'Codeforces' },
  { icon: SiLeetcode, href: siteConfig.social.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: siteConfig.social.email, label: 'Email' },
]

export function Hero() {
  const role = useTypewriter(roles)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-mono font-semibold tracking-[0.25em] uppercase text-accent-cyan mb-5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4"
            >
              <span className="text-[#e6edf3]">Ahnaf </span>
              <span className="gradient-text">Rais Mahi</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 flex items-center justify-center lg:justify-start mb-5"
            >
              <span className="text-xl sm:text-2xl font-mono text-[#8b949e]">
                {'> '}
                <span className="text-accent-blue typing-cursor">{role}</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#8b949e] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              BSc. CSE student at{' '}
              <span className="text-[#c9d1d9] font-medium">KUET</span>. I build{' '}
              <span className="text-accent-blue">Android apps</span>,{' '}
              <span className="text-accent-purple">3D graphics engines</span>, and research{' '}
              <span className="text-accent-cyan">cybersecurity</span>. Passionate about
              competitive programming and systems-level problems.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-semibold text-sm hover:bg-blue-400 transition-all duration-200 shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40"
              >
                View Projects <FiArrowRight size={16} />
              </Link>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-[#e6edf3] font-semibold text-sm hover:bg-bg-card hover:border-accent-blue/50 transition-all duration-200"
              >
                <FiDownload size={16} /> Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-bg-card border border-border flex items-center justify-center text-[#8b949e] hover:text-accent-blue hover:border-accent-blue/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Avatar / Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan opacity-40 blur-md" />
              {/* Profile box */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-bg-card border border-border overflow-hidden">
                {/* Place your photo at /public/profile.jpg */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.jpg`}
                  alt="Ahnaf Rais Mahi"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Fallback shown if profile.jpg is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-bg-card via-bg-hover to-bg-secondary flex-col items-center justify-center gap-3 hidden">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-4xl font-black text-white shadow-xl">
                    AM
                  </div>
                  <div className="text-center px-4">
                    <p className="text-[#e6edf3] font-semibold text-sm">Ahnaf Rais Mahi</p>
                    <p className="text-[#8b949e] text-xs mt-1">CSE · KUET · Class of 2026</p>
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-bg-card border border-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-[#8b949e]">CGPA</p>
                <p className="text-lg font-bold text-accent-blue">3.35</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-bg-card border border-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-[#8b949e]">Problems Solved</p>
                <p className="text-lg font-bold text-accent-cyan">204+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#8b949e] font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-[#30363d] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
