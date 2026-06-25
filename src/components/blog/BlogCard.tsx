import Link from 'next/link'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { BlogPostMeta } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPostMeta
  delay?: number
}

export function BlogCard({ post, delay = 0 }: BlogCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="bg-bg-card border border-border rounded-xl p-5 card-hover h-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-semibold text-[#e6edf3] text-base mb-2 group-hover:text-accent-blue transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-[#8b949e] leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between text-xs text-[#484f58]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <FiCalendar size={11} /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <FiClock size={11} /> {post.readingTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
              Read <FiArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}
