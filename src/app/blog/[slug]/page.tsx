import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-accent-blue transition-colors mb-8"
        >
          <FiArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6edf3] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-[#8b949e] text-lg leading-relaxed mb-5">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-[#484f58]">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock size={13} /> {post.readingTime}
            </span>
          </div>
        </header>

        <hr className="border-border mb-10" />

        {/* Content */}
        <article className="prose prose-invert prose-sm sm:prose-base max-w-none prose-dark
          prose-headings:text-[#e6edf3] prose-headings:font-semibold
          prose-p:text-[#8b949e] prose-p:leading-relaxed
          prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#c9d1d9]
          prose-code:text-[#ff7b72] prose-code:bg-bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-bg-card prose-pre:border prose-pre:border-border
          prose-blockquote:border-accent-blue/50 prose-blockquote:text-[#8b949e]
          prose-hr:border-border
          prose-li:text-[#8b949e]">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  )
}
