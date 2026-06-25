import type { Metadata } from 'next'
import Link from 'next/link'
import { FiDownload, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download the CV of Ahnaf Rais Mahi.',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-accent-blue transition-colors"
          >
            <FiArrowLeft size={14} /> Home
          </Link>
          <div className="flex gap-3">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-blue-400 transition-all shadow-lg shadow-accent-blue/25"
            >
              <FiDownload size={16} /> Download PDF
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-[#e6edf3] text-sm font-medium hover:bg-bg-card transition-all"
            >
              <FiExternalLink size={16} /> Open in Tab
            </a>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#e6edf3] mb-2">Curriculum Vitae</h1>
        <p className="text-[#8b949e] mb-8">Ahnaf Rais Mahi · BSc. CSE · KUET · Class of 2026</p>

        {/* PDF embed */}
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden" style={{ height: '80vh' }}>
          <iframe
            src={`${siteConfig.resumeUrl}#toolbar=0`}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>

        {/* Fallback message */}
        <p className="text-center text-xs text-[#484f58] mt-4">
          Can&apos;t see the PDF?{' '}
          <a href={siteConfig.resumeUrl} download className="text-accent-blue hover:underline">
            Download it directly
          </a>
          .
        </p>

        {/* Quick summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: 'Current Role', value: 'CS Engineering Student', sub: 'KUET · Class of 2026' },
            { label: 'Research Focus', value: 'Cybersecurity', sub: 'Malicious Website Detection' },
            { label: 'Open To', value: 'Internships & Research', sub: 'Android, Security, Graphics' },
          ].map((item) => (
            <div key={item.label} className="bg-bg-card border border-border rounded-xl p-5">
              <p className="text-xs text-[#8b949e] uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-semibold text-[#e6edf3]">{item.value}</p>
              <p className="text-xs text-accent-blue mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
