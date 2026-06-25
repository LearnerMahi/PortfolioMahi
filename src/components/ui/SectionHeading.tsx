import { AnimatedSection } from './AnimatedSection'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="text-center mb-16">
      <span className="inline-block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-accent-blue mb-3 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-4">{title}</h2>
      {subtitle && (
        <p className="text-[#8b949e] max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </AnimatedSection>
  )
}
