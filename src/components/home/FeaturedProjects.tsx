import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section id="projects" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects I've built — from mobile apps to 3D graphics to research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-[#e6edf3] font-medium text-sm hover:bg-bg-card hover:border-accent-blue/50 transition-all duration-200"
          >
            View All Projects <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
