import Link from 'next/link'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { Project } from '@/data/projects'

const statusConfig = {
  completed:   { label: 'Completed',   color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  'in-progress': { label: 'In Progress', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
  research:    { label: 'Research',    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
}

interface ProjectCardProps {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <AnimatedSection delay={delay}>
      <div className="group h-full flex flex-col bg-bg-card border border-border rounded-xl overflow-hidden card-hover">
        {/* Color bar top */}
        <div className="h-1 w-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />

        <div className="flex flex-col flex-1 p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-semibold text-[#e6edf3] text-base leading-snug group-hover:text-accent-blue transition-colors">
              {project.title}
            </h3>
            <span className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${status.color}`}>
              {status.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#8b949e] leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-mono bg-bg-secondary border border-border text-[#8b949e]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-mono text-[#484f58]">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-1.5 rounded-md text-[#8b949e] hover:text-accent-blue hover:bg-accent-blue/10 transition-colors"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="p-1.5 rounded-md text-[#8b949e] hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-1 text-xs font-medium text-[#8b949e] hover:text-accent-blue transition-colors"
            >
              Details <FiArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
