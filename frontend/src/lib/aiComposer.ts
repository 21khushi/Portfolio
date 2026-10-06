// Intelligent Free AI Email Composer Engine
// Supports optional Google Gemini Free Tier API + Instant Smart Heuristic Engine

export type EmailIntent = 'job' | 'collab' | 'book' | 'coffee' | 'custom';
export type EmailTone = 'professional' | 'concise' | 'enthusiastic' | 'technical';

export interface ComposeOptions {
  intent: EmailIntent;
  tone: EmailTone;
  customPrompt?: string;
  senderName?: string;
  senderCompany?: string;
}

export interface GeneratedEmail {
  subject: string;
  message: string;
}

// 100% Free Smart Generative Engine
function generateLocalEmail(options: ComposeOptions): GeneratedEmail {
  const { intent, tone, customPrompt, senderName } = options;
  const nameGreeting = senderName ? senderName : 'a fellow engineer / recruiter';
  const custom = customPrompt?.trim() || '';

  // 1. SDE Job Opportunity
  if (intent === 'job' || custom.toLowerCase().includes('job') || custom.toLowerCase().includes('interview') || custom.toLowerCase().includes('hire') || custom.toLowerCase().includes('sde') || custom.toLowerCase().includes('role')) {
    if (tone === 'concise') {
      return {
        subject: `SDE Opportunity — Connecting with Khushi Sikka`,
        message: `Hi Khushi,

I came across your portfolio and was impressed by your full-stack work at CreateBytes, particularly on NestJS backends and React apps.

${custom ? `Regarding our opening: ${custom}` : 'We have an open Software Development Engineer (SDE) position on our engineering team that aligns well with your background.'}

Would you be open for a brief 15-minute introductory call this week to discuss details?

Best regards,
${senderName || '[Your Name]'}`
      };
    }

    if (tone === 'technical') {
      return {
        subject: `Software Engineer Role: High-Impact Backend & Full-Stack Systems`,
        message: `Hi Khushi,

I reviewed your case studies on Luxe Fitness (payment scheduling & Winston observability) and Krigat (computer vision & pose analysis). Your focus on modular NestJS architecture, database indexing, and automated E2E testing stands out.

${custom ? `We are currently hiring: ${custom}` : 'Our team is scaling high-throughput distributed systems and looking for a strong Full-Stack / Backend SDE to own core API services.'}

Key tech stack: TypeScript, NestJS/Node.js, PostgreSQL/MongoDB, and React.

Let me know if you are open to exploring new engineering opportunities. Looking forward to connecting.

Best regards,
${senderName || '[Your Name]'}`
      };
    }

    if (tone === 'enthusiastic') {
      return {
        subject: `Exciting SDE Opportunity at our team — Loved your portfolio!`,
        message: `Hi Khushi! 🚀

I just went through your portfolio and technical case studies — the 1st Place win at Supernova AI MEA Cairo and your live UK client delivery at CreateBytes are super impressive!

${custom ? `Here is what we're building: ${custom}` : 'We have an exciting Full-Stack SDE role that would be a fantastic fit for your skills in React, NestJS, and modern cloud architectures.'}

We'd love to chat with you about what you're looking for in your next role. Let me know when you might have a few minutes for a quick chat!

Warm regards,
${senderName || '[Your Name]'}`
      };
    }

    // Default Professional
    return {
      subject: `SDE Position Opportunity — Engineering Team`,
      message: `Hi Khushi,

I hope this message finds you well.

I came across your engineering portfolio and was particularly impressed by your live production work at CreateBytes across NestJS, MongoDB, and React.js.

${custom ? `We are reaching out regarding: ${custom}` : 'We are currently looking for a talented Full-Stack / Backend Software Development Engineer to join our team.'}

Given your experience in architecting scalable backend APIs, optimizing Core Web Vitals, and leading client delivery, I believe you would be an excellent fit for our team.

Are you open to having a brief conversation this week to discuss your availability and role details?

Best regards,
${senderName || '[Your Name]'}`
    };
  }

  // 2. Project Collaboration / Freelance
  if (intent === 'collab' || custom.toLowerCase().includes('project') || custom.toLowerCase().includes('freelance') || custom.toLowerCase().includes('build') || custom.toLowerCase().includes('startup')) {
    if (tone === 'concise') {
      return {
        subject: `Project Collaboration: ${custom ? custom.slice(0, 40) : 'Engineering Partnership'}`,
        message: `Hi Khushi,

I'm working on a project and loved your engineering work on Luxe Fitness and RedPill Verify.

${custom ? `Project overview: ${custom}` : 'We are looking to build a modern full-stack web application with scalable backend architecture.'}

Let me know your current bandwidth for project collaboration and if we can schedule a quick discussion.

Thanks,
${senderName || '[Your Name]'}`
      };
    }

    if (tone === 'technical') {
      return {
        subject: `Technical Architecture Collaboration — ${custom ? custom.slice(0, 35) : 'Full Stack System'}`,
        message: `Hi Khushi,

I came across your technical writeups and architecture diagrams for fintech escrow and subscription billing engines.

${custom ? `We need engineering support for: ${custom}` : 'We are architecting a new application requiring clean modular NestJS backend services, secure authentication, and a responsive Next.js frontend.'}

Would love to discuss your technical approach, architecture recommendations, and potential collaboration scope.

Best regards,
${senderName || '[Your Name]'}`
      };
    }

    return {
      subject: `Project Collaboration Inquiry — Engineering Discussion`,
      message: `Hi Khushi,

I recently explored your portfolio and was impressed by your end-to-end delivery of client products and internal AI tooling.

${custom ? `I'd love to collaborate on: ${custom}` : 'I am currently developing a new product and looking for a skilled full-stack engineer with expertise in React, Next.js, and NestJS.'}

Would you be open to connecting for a short call to discuss scope, timeline, and how we might work together?

Looking forward to hearing from you!

Best regards,
${senderName || '[Your Name]'}`
    };
  }

  // 3. Book Collaboration ("Breaking Walls, Building Wings")
  if (intent === 'book' || custom.toLowerCase().includes('book') || custom.toLowerCase().includes('writing') || custom.toLowerCase().includes('wings') || custom.toLowerCase().includes('publish')) {
    return {
      subject: `Collaboration on "Breaking Walls, Building Wings"`,
      message: `Hi Khushi,

I came across the teaser for your upcoming book, "Breaking Walls, Building Wings," on your writing page and deeply resonated with the premise of navigating youth, inner struggles, and personal growth.

${custom ? `Inquiry / Collaboration details: ${custom}` : 'I would love to connect with you regarding potential collaborations, reader feedback, publishing discussions, or sharing thoughts on your creative journey.'}

Wishing you all the best with the writing process, and looking forward to your response!

Warm regards,
${senderName || '[Your Name]'}`
    };
  }

  // 4. Coffee Chat / Mentorship / Tech Networking
  if (intent === 'coffee' || custom.toLowerCase().includes('coffee') || custom.toLowerCase().includes('chat') || custom.toLowerCase().includes('connect') || custom.toLowerCase().includes('advice')) {
    return {
      subject: `Virtual Coffee Chat / Quick Tech Connection`,
      message: `Hi Khushi,

I came across your engineering portfolio and was really inspired by your journey — from solving 300+ DSA problems and winning the Supernova AI competition in Cairo to shipping production systems during your internship.

${custom ? `Specifically wanted to ask about: ${custom}` : 'I would love to connect for a quick 15-minute virtual coffee chat to ask a few questions about your backend engineering learnings and transition to SDE.'}

No rush at all — whenever your schedule permits. Thank you for your time!

Best regards,
${senderName || '[Your Name]'}`
    };
  }

  // 5. Custom / General Prompt
  if (custom) {
    return {
      subject: `Inquiry Regarding ${custom.slice(0, 45)}`,
      message: `Hi Khushi,

I am reaching out via your portfolio website.

${custom}

Please let me know if you would be available for a brief conversation to discuss further.

Best regards,
${senderName || '[Your Name]'}`
    };
  }

  // Default Fallback
  return {
    subject: `Connecting via your Portfolio — Khushi Sikka`,
    message: `Hi Khushi,

I came across your portfolio website and wanted to reach out directly.

I was really impressed by your engineering background, your live UK client work at CreateBytes, and your technical writing on NestJS and system architecture.

I'd love to connect and discuss potential opportunities and collaborations.

Looking forward to hearing from you!

Best regards,
${senderName || '[Your Name]'}`
  };
}

// Main generation function with optional Google Gemini API support + Instant fallback
export async function generateAiEmail(options: ComposeOptions): Promise<GeneratedEmail> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

  if (apiKey) {
    try {
      const prompt = `You are a helpful AI email assistant helping a recruiter, client, or engineer write a message to Khushi Sikka (a Full-Stack SDE with expertise in React, Next.js, NestJS, Node.js, MongoDB, PostgreSQL, and winner of Supernova AI MEA Cairo 2026).
Intent: ${options.intent}
Tone: ${options.tone}
Context / User Instructions: ${options.customPrompt || 'General inquiry'}
Sender Name: ${options.senderName || '[Name]'}

Return ONLY a JSON object in this exact format with no extra text or markdown code blocks:
{"subject": "...", "message": "..."}`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' },
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          if (parsed.subject && parsed.message) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn('Gemini API call skipped or rate-limited, using smart local engine fallback:', e);
    }
  }

  // Instant high-quality local generation (0ms latency, zero API costs)
  return generateLocalEmail(options);
}
