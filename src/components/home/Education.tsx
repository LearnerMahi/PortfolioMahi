import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'BSc. Computer Science & Engineering',
    institution: 'Khulna University of Engineering & Technology',
    short: 'KUET',
    period: '2022 – 2026',
    gpa: 'CGPA: 3.35',
    location: 'Khulna, Bangladesh',
    highlight: 'Thesis: Malicious Website Detection via System Provenance Analysis',
    color: 'blue',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Nawabganj Govt College',
    short: 'NGC',
    period: '2018 – 2020',
    gpa: 'GPA: 5.00',
    location: 'Chapai Nawabganj, Bangladesh',
    highlight: 'Perfect GPA — Science Group',
    color: 'purple',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Harimohan Government High School',
    short: 'HGHS',
    period: '2016 – 2018',
    gpa: 'GPA: 5.00',
    location: 'Chapai Nawabganj, Bangladesh',
    highlight: 'General Stipend · Perfect GPA',
    color: 'cyan',
  },
]

const awards = [
  {
    title: 'Intra KUET Programming Contest',
    result: '9th Place (Team)',
    year: '2024',
    icon: '🏆',
  },
  {
    title: 'Codeforces',
    result: '132 Problems Solved',
    year: 'Ongoing',
    icon: '⚡',
  },
  {
    title: 'LeetCode',
    result: '72 Problems Solved',
    year: 'Ongoing',
    icon: '🎯',
  },
]

const colorMap: Record<string, { dot: string; ring: string; text: string }> = {
  blue:   { dot: 'bg-accent-blue',   ring: 'ring-accent-blue/30',   text: 'text-accent-blue' },
  purple: { dot: 'bg-accent-purple', ring: 'ring-accent-purple/30', text: 'text-accent-purple' },
  cyan:   { dot: 'bg-accent-cyan',   ring: 'ring-accent-cyan/30',   text: 'text-accent-cyan' },
}

export function Education() {
  return (
    <section id="education" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Background"
          title="Education & Awards"
          subtitle="Academic milestones and achievements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan opacity-30" />

              <div className="space-y-8">
                {education.map((edu, i) => {
                  const c = colorMap[edu.color]
                  return (
                    <AnimatedSection key={edu.degree} delay={i * 0.15} direction="left">
                      <div className="relative pl-14">
                        {/* Dot */}
                        <div className={`absolute left-2.5 top-1.5 w-5 h-5 rounded-full ${c.dot} ring-4 ${c.ring} flex items-center justify-center`}>
                          <div className="w-2 h-2 rounded-full bg-bg-primary" />
                        </div>

                        <div className="bg-bg-card border border-border rounded-xl p-5 card-hover">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-[#e6edf3] text-base">{edu.degree}</h3>
                              <p className={`text-sm font-medium mt-0.5 ${c.text}`}>{edu.institution}</p>
                            </div>
                            <span className="text-sm font-bold text-[#e6edf3] bg-bg-secondary border border-border px-2.5 py-1 rounded-lg whitespace-nowrap">
                              {edu.gpa}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-xs text-[#8b949e] mb-3">
                            <span className="flex items-center gap-1">
                              <FiCalendar size={11} /> {edu.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={11} /> {edu.location}
                            </span>
                          </div>
                          <p className="text-xs text-[#8b949e] bg-bg-secondary/60 rounded-md px-3 py-2 border-l-2 border-accent-blue/40">
                            {edu.highlight}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Awards */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8b949e] mb-5 flex items-center gap-2">
                <FiAward className="text-accent-blue" /> Achievements
              </h3>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="bg-bg-card border border-border rounded-xl p-4 card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl leading-none">{award.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#e6edf3]">{award.title}</p>
                        <p className="text-xs text-accent-blue font-semibold mt-0.5">{award.result}</p>
                        <p className="text-xs text-[#8b949e] mt-0.5">{award.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
