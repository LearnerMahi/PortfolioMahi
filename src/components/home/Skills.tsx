import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { skillCategories, competitiveProgramming } from '@/data/skills'

const colorVariants: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue:   { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/20',   icon: 'text-blue-400' },
  green:  { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/20',  icon: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', icon: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20', icon: 'text-orange-400' },
  cyan:   { bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   border: 'border-cyan-500/20',   icon: 'text-cyan-400' },
  red:    { bg: 'bg-red-500/10',    text: 'text-red-400',    border: 'border-red-500/20',    icon: 'text-red-400' },
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tools & Technologies"
          subtitle="Languages, frameworks, and tools I work with."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const colors = colorVariants[cat.color] ?? colorVariants.blue
            return (
              <AnimatedSection key={cat.label} delay={i * 0.07}>
                <div className="h-full bg-bg-card border border-border rounded-xl p-5 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className={`font-semibold text-sm uppercase tracking-wider ${colors.text}`}>
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Competitive Programming */}
        <AnimatedSection delay={0.3} className="mt-10">
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b949e] mb-5">
              Competitive Programming
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(competitiveProgramming).map(([key, { label, solved }]) => (
                <div key={key} className="flex items-center justify-between bg-bg-secondary border border-border rounded-lg px-4 py-3">
                  <span className="text-sm font-medium text-[#c9d1d9]">{label}</span>
                  <span className="text-lg font-bold text-accent-blue">{solved} solved</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
