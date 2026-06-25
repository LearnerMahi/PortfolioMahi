'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'

const allCategories = ['All', ...Array.from(new Set(projects.flatMap((p) => p.category)))]

const categoryLabels: Record<string, string> = {
  All: 'All',
  android: 'Android',
  opengl: 'OpenGL',
  '3d': '3D Graphics',
  ml: 'Machine Learning',
  research: 'Research',
  security: 'Security',
  web: 'Web',
  mobile: 'Mobile',
  game: 'Game Dev',
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category.includes(active))

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="All Projects"
          subtitle="Everything I've built — from academic work to personal experiments."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === cat
                  ? 'bg-accent-blue text-white border-accent-blue shadow-lg shadow-accent-blue/25'
                  : 'border-border text-[#8b949e] hover:border-accent-blue/40 hover:text-[#e6edf3]'
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.05} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#8b949e] py-20">No projects in this category yet.</p>
        )}
      </div>
    </div>
  )
}
