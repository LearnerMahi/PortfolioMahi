import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FiArrowLeft, FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return {}
  return { title: project.title, description: project.description }
}

const statusConfig = {
  completed:     { label: 'Completed',    color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  'in-progress': { label: 'In Progress',  color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
  research:      { label: 'Research',     color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()

  const status = statusConfig[project.status]

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-accent-blue transition-colors mb-8"
        >
          <FiArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.color}`}>
              {status.label}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#8b949e]">
              <FiCalendar size={11} /> {project.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-3">{project.title}</h1>
          <p className="text-[#8b949e] text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-[#e6edf3] text-sm font-medium hover:bg-bg-card hover:border-accent-blue/40 transition-all"
            >
              <FiGithub size={16} /> View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-medium hover:bg-blue-400 transition-all"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>

        {/* Tech stack */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b949e] mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-sm font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Long description */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#e6edf3] mb-4">About this Project</h2>
          <div className="prose-dark text-[#8b949e] text-sm leading-relaxed whitespace-pre-wrap">
            {project.longDescription}
          </div>
        </div>
      </div>
    </div>
  )
}
