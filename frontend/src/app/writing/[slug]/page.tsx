import { Metadata } from 'next';
import { api } from '@/lib/api';
import { getBlogBySlug, getAllBlogSlugs, BLOG_DATA } from '@/lib/data/blogData';
import Link from 'next/link';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Twitter,
  Linkedin,
  BookOpen,
  Calendar,
  Eye,
  CheckCircle2,
  Sparkles,
  Share2
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export const revalidate = 60;

// Pre-render all blog articles at build time for instant loading
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await api.blog.get(slug);
    return {
      title: `${post.title} | Technical Writing | Khushi Sikka`,
      description: post.excerpt,
      openGraph: { type: 'article', images: [post.coverImage || '/og-image.png'] },
    };
  } catch (e) {
    const local = getBlogBySlug(slug);
    if (local) {
      return {
        title: `${local.title} | Technical Writing | Khushi Sikka`,
        description: local.excerpt,
        openGraph: { type: 'article', images: [local.coverImage || '/og-image.png'] },
      };
    }
    return { title: 'Article Not Found | Khushi Sikka' };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: any;

  // Try API first, fall back to local article data
  try {
    post = await api.blog.get(slug);
  } catch (e) {
    post = getBlogBySlug(slug);
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#080810] flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-3xl p-10 max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-6 text-2xl">
            📖
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Article Not Found</h1>
          <p className="text-sm text-[#7a7a8c] mb-6">
            The requested article could not be loaded. Please return to the engineering writing section.
          </p>
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 bg-[#7B6EF6] hover:bg-[#685ad8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-[#7B6EF6]/20"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  // Find next and previous articles
  const allSlugs = Object.keys(BLOG_DATA);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevPost = prevSlug ? BLOG_DATA[prevSlug] : null;
  const nextPost = nextSlug ? BLOG_DATA[nextSlug] : null;

  return (
    <main className="min-h-screen bg-[#080810] text-white pt-28 pb-24 selection:bg-[#7B6EF6]/30 selection:text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123,110,246,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        {/* Navigation / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pt-4 border-b border-[#1e1e2e]/60 pb-5">
          <div className="flex items-center gap-2 text-sm text-[#7a7a8c]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/writing" className="hover:text-[#7B6EF6] transition-colors">Writing</Link>
            <span>/</span>
            <span className="text-[#a89cf7] font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </div>

          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8888a8] hover:text-white bg-[#0f0f1a] border border-[#1e1e2e] hover:border-[#7B6EF6]/40 px-3.5 py-1.5 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={13} />
            All Articles
          </Link>
        </div>

        {/* HERO ARTICLE HEADER */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          {/* Metadata pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#8888a8] mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#141424] border border-[#1e1e2e] px-3 py-1 rounded-full text-[#a89cf7]">
              <Calendar size={12} />
              {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '2026'}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#141424] border border-[#1e1e2e] px-3 py-1 rounded-full text-emerald-400">
              <Clock size={12} />
              {post.readTime || 6} MIN READ
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#141424] border border-[#1e1e2e] px-3 py-1 rounded-full text-[#8888a8]">
              <Eye size={12} />
              {post.views || 450}+ views
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-[#9999bb] leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-semibold text-[#a89cf7] bg-[#141424] border border-[#2a2a3e] px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* ARTICLE BODY */}
        <article className="bg-[#0c0c16] border border-[#1e1e2e] rounded-3xl p-7 sm:p-12 shadow-2xl mb-16 relative">
          <div className="case-study-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-5 tracking-tight border-b border-[#1e1e2e] pb-3 flex items-center gap-3">
                    <span className="text-[#7B6EF6]">#</span> {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 tracking-tight border-b border-[#1e1e2e]/70 pb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7B6EF6] inline-block" />
                    {children}
                  </h3>
                ),
                h3: ({ children }) => (
                  <h4 className="text-base sm:text-lg font-bold text-[#a89cf7] mt-8 mb-3 flex items-center gap-2">
                    <span className="text-xs text-[#7B6EF6]">▶</span>
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-[15px] sm:text-[16px] text-[#a0a0c0] leading-[1.8] mb-5 font-normal">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 my-5 pl-1">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-3 text-[15px] text-[#b8b8d4] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7B6EF6] shrink-0" />
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#7B6EF6] bg-[#7B6EF6]/5 pl-5 py-3 rounded-r-xl my-6 text-[#b0b0d0] italic">
                    {children}
                  </blockquote>
                ),
                code: ({ className, children, ...props }) => {
                  return (
                    <code
                      className={`font-mono text-[13px] bg-[#141424] border border-[#2a2a3e] text-[#a89cf7] px-2 py-0.5 rounded-md ${className || ''}`}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <div className="my-6 rounded-2xl overflow-hidden border border-[#2a2a3e] bg-[#0d0d18] shadow-2xl">
                    <div className="bg-[#141424] px-4 py-2 border-b border-[#2a2a3e] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#8888a8]">Code Snippet</span>
                      <span className="text-[10px] uppercase font-mono text-[#55556a]">TypeScript / SQL</span>
                    </div>
                    <pre className="p-5 overflow-x-auto text-[13px] font-mono text-[#e0e0f0] leading-relaxed">
                      {children}
                    </pre>
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author footer inside article */}
          <div className="mt-12 pt-8 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7B6EF6] to-[#4338ca] flex items-center justify-center font-bold text-lg text-white shadow-lg">
                KS
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Khushi Sikka</h4>
                <p className="text-xs text-[#7a7a8c]">Full-Stack Software Development Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://khushisikka.com/writing/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141424] hover:bg-[#1a1a2e] border border-[#1e1e2e] hover:border-[#7B6EF6]/40 rounded-xl text-[#8888a8] hover:text-white transition-colors"
                title="Share on Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://khushisikka.com/writing/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#141424] hover:bg-[#1a1a2e] border border-[#1e1e2e] hover:border-[#7B6EF6]/40 rounded-xl text-[#8888a8] hover:text-white transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </article>

        {/* BOTTOM ARTICLE PAGINATION */}
        <nav aria-label="Article Navigation" className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/writing/${prevPost.slug}`}
                className="group bg-[#0f0f1a] hover:bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 p-5 rounded-2xl transition-all duration-200 flex flex-col"
              >
                <span className="text-xs font-semibold text-[#666680] flex items-center gap-1 mb-1">
                  <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> Previous Article
                </span>
                <span className="text-[15px] font-bold text-white group-hover:text-[#a89cf7] transition-colors line-clamp-1">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextPost && (
              <Link
                href={`/writing/${nextPost.slug}`}
                className="group bg-[#0f0f1a] hover:bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 p-5 rounded-2xl transition-all duration-200 flex flex-col sm:items-end text-left sm:text-right"
              >
                <span className="text-xs font-semibold text-[#666680] flex items-center gap-1 mb-1">
                  Next Article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[15px] font-bold text-white group-hover:text-[#a89cf7] transition-colors line-clamp-1">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
