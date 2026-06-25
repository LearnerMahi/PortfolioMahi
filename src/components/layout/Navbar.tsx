'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { siteConfig } from '@/data/site'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#education', label: 'Education' },
  { href: '/projects', label: 'All Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold text-white shadow-lg">
              AM
            </span>
            <span className="hidden sm:block font-semibold text-[#e6edf3] group-hover:text-accent-blue transition-colors">
              Ahnaf Mahi
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-accent-blue bg-accent-blue/10'
                    : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-bg-card'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.email}
              className="ml-2 px-4 py-1.5 rounded-md text-sm font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue hover:text-white transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#8b949e] hover:text-[#e6edf3] hover:bg-bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-secondary/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-accent-blue bg-accent-blue/10'
                      : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-bg-card'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.social.email}
                className="mt-2 px-4 py-2.5 rounded-md text-sm font-medium text-center bg-accent-blue/10 text-accent-blue border border-accent-blue/30"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
