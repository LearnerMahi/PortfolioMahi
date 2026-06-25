import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FiAward, FiCode, FiCpu, FiBookOpen } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '204+', label: 'Problems Solved', sub: 'CF + LeetCode' },
  { icon: FiAward, value: '3.35', label: 'CGPA', sub: 'Out of 4.00' },
  { icon: FiCpu, value: '3+', label: 'Major Projects', sub: 'Android · OpenGL · ML' },
  { icon: FiBookOpen, value: '2026', label: 'Graduating', sub: 'BSc. CSE · KUET' },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A quick introduction to my background and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <div className="space-y-4 text-[#8b949e] leading-relaxed text-[15px]">
              <p>
                I&apos;m <span className="text-[#e6edf3] font-semibold">Ahnaf Rais Mahi</span>, a
                final-year Computer Science & Engineering student at{' '}
                <span className="text-accent-blue font-medium">
                  Khulna University of Engineering & Technology (KUET)
                </span>
                , Bangladesh.
              </p>
              <p>
                My work spans a wide range — from building{' '}
                <span className="text-accent-cyan">Android applications</span> backed by Firebase, to
                crafting{' '}
                <span className="text-accent-purple">real-time 3D environments</span> in OpenGL 3.3,
                to conducting{' '}
                <span className="text-accent-blue">cybersecurity research</span> on malicious website
                detection through provenance graph analysis.
              </p>
              <p>
                I&apos;m also an active{' '}
                <span className="text-[#e6edf3] font-medium">competitive programmer</span> — I&apos;ve
                solved 132 problems on Codeforces and 72 on LeetCode, and placed{' '}
                <span className="text-accent-cyan font-medium">9th</span> in the Intra-KUET
                Programming Contest (2024).
              </p>
              <p>
                I love working on problems at the intersection of systems, graphics, and security —
                where the code has real, visible impact.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['C++', 'Java', 'Python', 'Swift', 'OpenGL', 'Android', 'Firebase', 'Godot'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-bg-card border border-border text-[#8b949e]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>

          {/* Stats grid */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div
                  key={label}
                  className="group bg-bg-card border border-border rounded-xl p-5 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-3 group-hover:bg-accent-blue/20 transition-colors">
                    <Icon size={20} className="text-accent-blue" />
                  </div>
                  <p className="text-2xl font-bold text-[#e6edf3] mb-0.5">{value}</p>
                  <p className="text-sm font-medium text-[#c9d1d9]">{label}</p>
                  <p className="text-xs text-[#8b949e] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
