import { Metadata } from 'next';
import BackToHome from '@/components/ui/BackToHome';
import ProfileImage from '@/components/ui/ProfileImage';
import { Mail, ArrowRight, Code2, Database, Terminal, Pen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Full-Stack SDE with 1+ year live UK client delivery. Offered Full-Time SDE at CreateBytes. CGPA 9.06. First engineer in the family. Currently writing a book.',
};

const BEYOND_CODE = [
  {
    title: '✍️ Writing a Book',
    desc: '"Breaking Walls, Building Wings" — a story for every young teen navigating confusion and inner struggles.',
    accent: '#a89cf7',
  },
  {
    title: '📸 Photography & Sketching',
    desc: 'Finding patterns and creativity outside the digital screen.',
    accent: '#7B6EF6',
  },
  {
    title: '🧠 Psychology & Reading',
    desc: 'Understanding human behavior to build better user experiences.',
    accent: '#7B6EF6',
  },
  {
    title: '✍️ Tech Blogging',
    desc: 'Documenting engineering learnings and translating production reality into readable narratives.',
    accent: '#7B6EF6',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl relative">
      <BackToHome />

      {/* Header */}
      <header className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-44 h-44 shrink-0 hidden md:block">
          <div
            className="w-full h-full rounded-2xl p-[2px]"
            style={{ background: 'linear-gradient(135deg, #7B6EF6, #a89cf7, #5a4fd4)' }}
          >
            <div className="w-full h-full rounded-[14px] bg-[#0f0f1a] overflow-hidden">
              <ProfileImage />
            </div>
          </div>
        </div>

        <div>
          <span className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-3 block">
            ABOUT ME
          </span>
          <h1 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-4 leading-tight">
            Khushi Sikka
          </h1>
          <p className="text-[17px] text-[#8888a8] leading-relaxed max-w-xl">
            Full-Stack SDE with{' '}
            <span className="text-white font-semibold">1+ year</span> of live production delivery
            for UK clients. Offered Full-Time SDE at CreateBytes. First engineer in my family. CGPA{' '}
            <span className="text-white font-semibold">9.06</span>.
            Currently writing my first book.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2 space-y-5 text-[#8888a8] leading-relaxed text-[16px]">
          <p>
            Growing up in Rohtak, Haryana — the world of software felt light-years away. I was the{' '}
            <span className="text-white font-medium">first engineer in my family</span>, and that
            weight has shaped everything about how I approach my work. Every line of code carries
            meaning beyond the syntax.
          </p>
          <p>
            At <span className="text-[#7B6EF6] font-semibold">CreateBytes</span>, I completed my 1+ year
            internship shipping live production systems for real UK clients — gym SaaS, AI motion
            tracking, and fintech escrow — and was subsequently offered a{' '}
            <span className="text-white font-medium">Full-Time SDE role</span>. I owned complete backend
            architectures, led direct client interactions, and built things that real users depend on every day.
          </p>
          <p>
            I thrive at the intersection of{' '}
            <span className="text-white font-medium">clean backend architecture</span> and{' '}
            <span className="text-white font-medium">production-grade engineering</span>. TypeScript
            strict mode, structured logging, automated E2E tests with Selenium — reliability is a
            feature, not an afterthought.
          </p>
          <p>
            Outside code, I&apos;m writing my first book:{' '}
            <span className="text-[#a89cf7] font-semibold italic">
              "Breaking Walls, Building Wings"
            </span>{' '}
            — the story of every young person navigating confusion, inner struggles, and finding
            themselves in chaos. Writing has always been my first language.
          </p>
        </div>

        <div className="space-y-5">
          {/* Developer Core */}
          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6">
            <h3 className="font-bold text-[15px] mb-4 text-white flex items-center gap-2">
              <Code2 className="text-[#7B6EF6]" size={18} /> Developer Core
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#8888a8]">
              <li><span className="text-white font-medium">Frontend:</span> Next.js, React.js</li>
              <li><span className="text-white font-medium">Backend:</span> NestJS, Node.js, Express</li>
              <li><span className="text-white font-medium">DB:</span> MongoDB, PostgreSQL, MySQL</li>
              <li><span className="text-white font-medium">Languages:</span> TypeScript, Java, Python</li>
              <li><span className="text-white font-medium">Testing:</span> Selenium E2E, Postman</li>
            </ul>
          </div>

          {/* DSA */}
          <div
            className="bg-[#0f0f1a] border border-[#7B6EF6]/20 rounded-2xl p-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f0f1a, #141424)' }}
          >
            <div className="relative z-10">
              <h3 className="font-bold text-[15px] mb-3 text-white flex items-center gap-2">
                <Terminal className="text-[#7B6EF6]" size={18} /> DSA & Logic
              </h3>
              <p className="text-[13px] text-[#8888a8] mb-3">
                Consistent competitive programming practice — keeping problem-solving sharp.
              </p>
              <div className="text-[32px] font-bold text-white">300+</div>
              <div className="text-[11px] text-[#55556a] uppercase tracking-wider font-medium">
                Problems Solved · LeetCode · GFG
              </div>
            </div>
          </div>

          {/* Academic */}
          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6">
            <h3 className="font-bold text-[15px] mb-4 text-white flex items-center gap-2">
              <Database className="text-[#7B6EF6]" size={18} /> Education
            </h3>
            <div className="text-[28px] font-bold text-white mb-0.5">9.06</div>
            <div className="text-[11px] text-[#55556a] uppercase tracking-wider font-medium mb-3">
              CGPA / 10
            </div>
            <div className="text-[12px] text-[#8888a8]">Chitkara University, Punjab</div>
            <div className="text-[12px] text-[#55556a]">BE CSE · 2022 – 2026</div>
          </div>
        </div>
      </div>

      {/* Beyond the Code */}
      <section className="mb-16">
        <h2 className="text-[22px] font-bold text-white mb-8 flex items-center gap-3">
          <Pen size={22} className="text-[#7B6EF6]" /> Beyond the Code
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BEYOND_CODE.map((item) => (
            <div
              key={item.title}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-xl p-5 hover:border-[#7B6EF6]/30 card-lift"
            >
              <h3 className="text-[15px] font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-[13px] text-[#8888a8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center border-t border-[#1e1e2e] pt-12">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=gunnusikka21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[16px] font-semibold text-white hover:text-[#7B6EF6] transition-colors gap-2"
        >
          <Mail size={18} className="text-[#7B6EF6]" />
          Want to chat? Drop me an email
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
