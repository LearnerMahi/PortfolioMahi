import Link from 'next/link'
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import { SiCodeforces, SiLeetcode } from 'react-icons/si'
import { siteConfig } from '@/data/site'

const socials = [
  { icon: FiGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: SiCodeforces, href: siteConfig.social.codeforces, label: 'Codeforces' },
  { icon: SiLeetcode, href: siteConfig.social.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: siteConfig.social.email, label: 'Email' },
]

const links = [
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white">
                AM
              </span>
              <span className="font-semibold text-[#e6edf3]">Ahnaf Rais Mahi</span>
            </div>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              CS Engineer @ KUET · Building Android apps, 3D graphics, and researching cybersecurity.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#8b949e] hover:text-accent-blue transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center text-[#8b949e] hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#8b949e]">
            © {new Date().getFullYear()} Ahnaf Rais Mahi. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-[#8b949e]">
            KUET · Khulna, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}
