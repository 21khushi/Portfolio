import { Metadata } from 'next';
import { api } from '@/lib/api';
import { getProjectBySlug, getAllProjectSlugs, PROJECTS_DATA } from '@/lib/data/projectsData';
import { ReadingProgressBar } from '@/components/ui/ReadingProgressBar';
import Link from 'next/link';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  Trophy, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Server, 
  Target, 
  Zap, 
  Cpu,
  Share2
} from 'lucide-react';
import BackToHome from '@/components/ui/BackToHome';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export const revalidate = 60;

// Pre-render all project case studies at build time for instant loading
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = await api.projects.get(slug);
    return {
      title: `${project.title} | Technical Case Study | Khushi Sikka`,
      description: project.tagline,
      openGraph: { images: [project.coverImage || '/og-image.png'] },
    };
  } catch (e) {
    const local = getProjectBySlug(slug);
    if (local) {
      return {
        title: `${local.title} | Technical Case Study | Khushi Sikka`,
        description: local.tagline,
        openGraph: { images: [local.coverImage || '/og-image.png'] },
      };
    }
    return { title: 'Project Not Found | Khushi Sikka' };
  }
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project: any;

  // Try API first, fall back to local case study data
  try {
    project = await api.projects.get(slug);
  } catch (e) {
    project = getProjectBySlug(slug);
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#080810] flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-3xl p-10 max-w-md w-full shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-6 text-2xl">
            ⚠️
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Case Study Not Found</h1>
          <p className="text-sm text-[#7a7a8c] mb-6">
            The requested project case study could not be loaded. Please return to the portfolio directory.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#7B6EF6] hover:bg-[#685ad8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-[#7B6EF6]/20"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  // Find next and previous projects
  const allSlugs = Object.keys(PROJECTS_DATA);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevProject = prevSlug ? PROJECTS_DATA[prevSlug] : null;
  const nextProject = nextSlug ? PROJECTS_DATA[nextSlug] : null;

  const isTrophy = project.title.toLowerCase().includes('krigat') || (project.tagline && project.tagline.includes('1st Place'));

  return (
    <main className="min-h-screen bg-[#080810] text-white pt-28 pb-24 selection:bg-[#7B6EF6]/30 selection:text-white relative overflow-hidden">
      <ReadingProgressBar />
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123,110,246,0.15) 0%, rgba(16,185,129,0.03) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[800px] -left-48 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pt-4 border-b border-[#1e1e2e]/60 pb-5">
          <div className="flex items-center gap-2 text-sm text-[#7a7a8c]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#7B6EF6] transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[#a89cf7] font-medium truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8888a8] hover:text-white bg-[#0f0f1a] border border-[#1e1e2e] hover:border-[#7B6EF6]/40 px-3.5 py-1.5 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={13} />
            All Projects
          </Link>
        </div>

        {/* HERO SECTION */}
        <header className="mb-14">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
              PRODUCTION CASE STUDY
            </span>
            {isTrophy && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#f5c842] border border-[#f5c842]/30 bg-[#f5c842]/10 px-3 py-1 rounded-full">
                <Trophy size={13} className="text-[#f5c842]" />
                Cairo 2026 Winner (1st Place)
              </span>
            )}
            <span className="text-[11px] font-mono text-[#666680] uppercase tracking-wider bg-[#141424] border border-[#1e1e2e] px-3 py-1 rounded-full">
              Khushi Sikka · SDE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-[#a0a0c0] leading-relaxed max-w-3xl mb-8 font-normal">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#1e1e2e]">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#141424] hover:bg-[#1a1a2e] text-white border border-[#2a2a3e] hover:border-[#7B6EF6]/40 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md"
              >
                <Github size={17} />
                View Source Code
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 bg-[#0f0f1a] text-[#666688] border border-[#1e1e2e] text-xs font-semibold px-4 py-2.5 rounded-xl">
                <span>🔒</span> Private Client Codebase
              </div>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7B6EF6] hover:bg-[#695bd4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#7B6EF6]/20"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a89cf7] hover:text-white transition-colors ml-auto"
            >
              Discuss this architecture <ArrowRight size={15} />
            </Link>
          </div>
        </header>

        {/* METADATA GRID CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5 hover:border-[#7B6EF6]/30 transition-colors">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B6EF6] block mb-1">
              Role & Ownership
            </span>
            <p className="text-[15px] font-semibold text-white">Full-Stack SDE</p>
            <p className="text-xs text-[#7a7a8c] mt-0.5">Backend Architecture & APIs</p>
          </div>

          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5 hover:border-[#7B6EF6]/30 transition-colors">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B6EF6] block mb-1">
              Organization
            </span>
            <p className="text-[15px] font-semibold text-white">CreateBytes</p>
            <p className="text-xs text-[#7a7a8c] mt-0.5">Gurgaon · Live UK Clients</p>
          </div>

          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5 hover:border-[#7B6EF6]/30 transition-colors">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B6EF6] block mb-1">
              Timeline / Status
            </span>
            <p className="text-[15px] font-semibold text-white">Production Shipped</p>
            <p className="text-xs text-[#7a7a8c] mt-0.5">Active & Monitored</p>
          </div>

          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5 hover:border-[#7B6EF6]/30 transition-colors">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B6EF6] block mb-1">
              Core Tech
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.techStack.slice(0, 3).map((t: string) => (
                <span key={t} className="text-[11px] bg-[#141424] text-[#a89cf7] px-2 py-0.5 rounded border border-[#2a2a3e]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK PILLS */}
        <section className="mb-14 bg-[#0f0f1a]/80 border border-[#1e1e2e] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={16} className="text-[#7B6EF6]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#a89cf7]">
              Engineered With & Technologies Used
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="bg-[#141424] hover:bg-[#1a1a30] text-[#cfcfea] hover:text-white border border-[#252538] hover:border-[#7B6EF6]/40 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-150 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B6EF6]" />
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROBLEM & SOLUTION HIGHLIGHT CARDS */}
        <section className="space-y-6 mb-16">
          {project.problem && (
            <div className="bg-[#0f0f1a] border border-amber-500/20 rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Target size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                    The Problem & Business Challenge
                  </h2>
                  <p className="text-[16px] text-[#cfcfdf] leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="bg-[#0f0f1a] border border-emerald-500/20 rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                    My Engineering Solution & Execution
                  </h2>
                  <p className="text-[16px] text-[#cfcfdf] leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.architecture && (
            <div className="bg-[#0f0f1a] border border-[#7B6EF6]/25 rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#7B6EF6]" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7B6EF6]/10 border border-[#7B6EF6]/25 text-[#a89cf7] flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu size={20} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#a89cf7] mb-2">
                    System Architecture & Infrastructure
                  </h2>
                  <p className="text-[15px] text-[#cfcfdf] leading-relaxed font-mono bg-[#141424] p-4 rounded-xl border border-[#1e1e2e]">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* DEEP DIVE MARKDOWN BODY */}
        <section className="mb-16 bg-[#0c0c16] border border-[#1e1e2e] rounded-3xl p-8 sm:p-12 shadow-xl relative">
          <div className="flex items-center gap-3 pb-6 border-b border-[#1e1e2e] mb-8">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-mono text-[#55556a] uppercase tracking-widest">
              technical_deep_dive.md
            </span>
          </div>

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
                  const match = /language-(\w+)/.exec(className || '');
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
                      <span className="text-[11px] font-mono text-[#8888a8]">Source Snippet</span>
                      <span className="text-[10px] uppercase font-mono text-[#55556a]">Read-only</span>
                    </div>
                    <pre className="p-5 overflow-x-auto text-[13px] font-mono text-[#e0e0f0] leading-relaxed">
                      {children}
                    </pre>
                  </div>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </section>

        {/* CHALLENGES & LEARNINGS GRID */}
        {(project.challenges?.length > 0 || project.learnings?.length > 0) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Key Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-3xl p-7 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1e1e2e]">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                    <AlertTriangle size={18} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">Key Engineering Challenges</h3>
                    <p className="text-xs text-[#666680]">Edge cases & production constraints</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {project.challenges.map((challenge: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#a0a0c0] leading-relaxed bg-[#141424]/60 border border-[#1e1e2e] p-3.5 rounded-xl">
                      <span className="text-rose-400 font-bold text-xs mt-0.5 shrink-0">0{i + 1}</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What I Learned */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-3xl p-7 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1e1e2e]">
                  <div className="w-9 h-9 rounded-xl bg-[#7B6EF6]/10 border border-[#7B6EF6]/20 text-[#a89cf7] flex items-center justify-center">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">Key Takeaways & Learnings</h3>
                    <p className="text-xs text-[#666680]">Senior mindset & engineering insights</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {project.learnings.map((learning: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#a0a0c0] leading-relaxed bg-[#141424]/60 border border-[#1e1e2e] p-3.5 rounded-xl">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* BOTTOM PROJECT PAGINATION */}
        <nav aria-label="Project Navigation" className="border-t border-[#1e1e2e] pt-10 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group bg-[#0f0f1a] hover:bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 p-5 rounded-2xl transition-all duration-200 flex flex-col"
              >
                <span className="text-xs font-semibold text-[#666680] flex items-center gap-1 mb-1">
                  <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="text-[16px] font-bold text-white group-hover:text-[#a89cf7] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group bg-[#0f0f1a] hover:bg-[#141424] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 p-5 rounded-2xl transition-all duration-200 flex flex-col sm:items-end text-left sm:text-right"
              >
                <span className="text-xs font-semibold text-[#666680] flex items-center gap-1 mb-1">
                  Next Project <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[16px] font-bold text-white group-hover:text-[#a89cf7] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </nav>

        {/* CALL TO ACTION CARD */}
        <section className="bg-gradient-to-r from-[#120d2a] via-[#0f0f1a] to-[#0a1624] border border-[#7B6EF6]/25 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div
            className="absolute -right-20 -bottom-20 w-64 h-64 pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(123,110,246,0.25) 0%, transparent 70%)',
            }}
          />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Interested in discussing this project?
          </h3>
          <p className="text-sm sm:text-base text-[#8888a8] max-w-xl mx-auto mb-6">
            I am available for full-time Software Engineer positions and high-impact engineering collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7B6EF6] hover:bg-[#695bd4] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#7B6EF6]/25"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#141424] hover:bg-[#1a1a2e] text-white border border-[#2a2a3e] text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Browse All Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
