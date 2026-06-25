import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on competitive programming, graphics, Android development, and cybersecurity.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Writing"
          title="Blog"
          subtitle="Thoughts on competitive programming, 3D graphics, Android dev, and security research."
        />

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">✍️</p>
            <p className="text-[#8b949e] mb-2">No posts yet.</p>
            <p className="text-sm text-[#484f58]">
              Add <code className="text-accent-blue">.mdx</code> files to{' '}
              <code className="text-accent-blue">src/content/blog/</code> to publish posts.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.08} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
