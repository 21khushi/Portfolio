// Comprehensive local project case studies for static generation & API fallback
// These ensure every project detail page loads instantly, even when the backend is cold-starting.

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  techStack: string[];
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  learnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
}

export const PROJECTS_DATA: Record<string, ProjectCaseStudy> = {
  'luxe-fitness': {
    slug: 'luxe-fitness',
    title: 'Luxe Fitness',
    tagline: 'End-to-end gym fitness platform powering membership and subscription operations across 3 UK gym locations — Bristol City Center, Bedminster, and Birmingham.',
    techStack: ['Node.js', 'MongoDB', 'React.js', 'Next.js', 'CMS', 'Winston Logging', 'SEO'],
    description: `
## Overview

Luxe Fitness is a live gym management platform serving real members across three UK locations. As the primary backend engineer, I was responsible for architecting the entire backend — from payment processing and subscription scheduling to membership onboarding flows.

## What I Built

### Payment Processing & Subscription Engine
- Designed and implemented a modular payment processing pipeline handling recurring membership fees, one-time purchases, and promotional pricing.
- Built a subscription scheduling system that manages plan upgrades, downgrades, freezes, and cancellations — all with proper proration logic.
- Integrated webhook listeners for real-time payment event processing, ensuring data consistency between the payment gateway and our MongoDB database.

### Membership Onboarding
- Created a multi-step onboarding flow that captures member details, selects membership tiers, processes initial payments, and provisions gym access — all in a single seamless transaction.
- Built automated welcome email sequences triggered post-signup.

### CMS Frontend for Gym Staff
- Developed a custom content management system enabling gym managers to:
  - View and manage active memberships
  - Update class schedules and trainer assignments
  - Monitor payment statuses and handle failed transactions
  - Export member data and financial reports

### Core Web Vitals & SEO Optimization
- Audited and improved all three Core Web Vitals metrics:
  - **LCP (Largest Contentful Paint)**: Optimized hero images with lazy loading and next-gen formats (WebP), reducing LCP from 4.2s to 1.8s.
  - **FID (First Input Delay)**: Code-split heavy JavaScript bundles and deferred non-critical scripts.
  - **CLS (Cumulative Layout Shift)**: Added explicit dimensions to all media elements and font-display swap strategies.
- Implemented structured data (JSON-LD) for local business SEO across all three locations.

### Structured Logging & Monitoring
- Integrated Winston logger with structured JSON output for all API endpoints.
- Built request correlation IDs for end-to-end request tracing across the backend.
- Configured log levels (info, warn, error) with separate transports for production debugging.

## Client Leadership
Served as the **primary technical liaison** for all direct client communications — translating business requirements into technical specifications, providing progress updates, and managing client expectations across sprint cycles.
    `,
    problem: 'The client needed a unified platform to manage memberships, payments, and scheduling across three gym locations with different operational needs, while maintaining a fast, SEO-optimized public website that ranks well in local search results.',
    solution: 'Built a modular Node.js backend with MongoDB that cleanly separates concerns (payments, memberships, scheduling) into independent services, paired with a React-based CMS for gym staff and a Next.js public site optimized for Core Web Vitals.',
    architecture: 'Monolithic Node.js + Express backend with service-layer architecture, MongoDB with Mongoose ODM, React.js CMS dashboard, and Next.js SSR/SSG public website. Winston structured logging with correlation IDs for production observability.',
    challenges: [
      'Handling proration logic for mid-cycle plan changes across different pricing tiers',
      'Ensuring payment webhook idempotency to prevent duplicate charges',
      'Optimizing Core Web Vitals while maintaining rich interactive UI elements',
      'Managing three locations with different class schedules and trainer rosters in a single system',
    ],
    learnings: [
      'Production payment systems require obsessive attention to edge cases — failed webhooks, partial refunds, timezone-aware scheduling',
      'Core Web Vitals optimization is a continuous process, not a one-time fix',
      'Direct client communication as an engineer builds trust and reduces requirement ambiguity',
      'Structured logging is not optional in production — it is the difference between debugging in minutes vs. hours',
    ],
  },

  'krigat': {
    slug: 'krigat',
    title: 'Krigat',
    tagline: '🏆 1st Place Overall — Supernova AI MEA, Cairo 2026. AI-powered motion tracking platform enabling real-time fitness analysis through computer vision.',
    techStack: ['NestJS', 'React Native', 'React.js', 'AI/ML', 'Video Processing', 'TypeScript'],
    description: `
## Overview

Krigat is an AI motion-tracking application that uses computer vision to analyze human movement in real-time, providing automated fitness coaching and exercise form correction. The platform won **1st Place Overall** at the Supernova AI Middle East & Africa competition in Cairo, 2026.

## What I Built

### Admin Panel Backend (NestJS)
- Architected a complete admin panel backend using NestJS with modular architecture.
- Implemented CRUD operations for exercise libraries, user management, and training program configuration.
- Built analytics endpoints aggregating user performance data, session durations, and movement accuracy scores.
- Designed RESTful APIs consumed by both the React.js admin dashboard and the React Native mobile app.

### React Native Mobile App Features
- Developed video capture modules with real-time camera integration for movement recording.
- Built a movement recording review system allowing users to replay, annotate, and compare their sessions.
- Implemented exercise tracking views displaying rep counts, form scores, and improvement suggestions.
- Created smooth UI transitions and loading states for video-heavy screens on mobile.

### AI Integration Layer
- Built the bridge between the frontend applications and the AI motion-tracking ML models.
- Implemented frame-by-frame data pipeline from camera capture → model inference → UI overlay.
- Designed efficient data formats for transmitting pose keypoint data between the mobile app and backend.

## Competition Achievement

The project was presented at **Supernova AI MEA (Middle East & Africa)** in Cairo, 2026 — a premier AI competition showcasing innovative applications of artificial intelligence across the region. Krigat won **1st Place Overall**, recognized for its practical application of computer vision in fitness technology and the quality of its full-stack engineering implementation.
    `,
    problem: 'Traditional fitness coaching is expensive and inaccessible. There was no affordable solution for real-time, AI-powered movement analysis that could provide instant form correction and rep counting on a mobile device.',
    solution: 'Built a full-stack platform combining computer vision ML models with a NestJS backend and React Native mobile app, enabling real-time motion tracking, exercise form analysis, and automated coaching — all running on a standard smartphone camera.',
    architecture: 'NestJS modular backend with TypeORM, React.js admin dashboard, React Native mobile app with camera integration, Python-based ML inference service for pose estimation, WebSocket connections for real-time data streaming.',
    challenges: [
      'Achieving real-time pose estimation performance on mobile devices with limited compute',
      'Designing efficient data pipelines for frame-by-frame video analysis without latency spikes',
      'Synchronizing video playback with movement annotation data for the review system',
      'Building a competition-ready demo under tight deadlines while maintaining code quality',
    ],
    learnings: [
      'Real-time ML inference on mobile requires aggressive optimization — model quantization, frame skipping, and efficient tensor formats',
      'NestJS modular architecture scales cleanly from prototype to competition-ready product',
      'Cross-platform development (React Native) demands careful attention to platform-specific camera and video APIs',
      'Winning a competition is about storytelling and demo quality as much as technical excellence',
    ],
  },

  'redpill-verify': {
    slug: 'redpill-verify',
    title: 'RedPill Verify',
    tagline: 'High-trust fintech escrow platform with OTP authentication, role-based access control, deal management flows, and ML-powered conditional release logic.',
    techStack: ['NestJS', 'PostgreSQL', 'OTP Auth', 'RBAC', 'ML Integration', 'TypeScript'],
    description: `
## Overview

RedPill Verify is a fintech escrow platform designed for high-trust digital service transactions. As the **sole backend engineer**, I built the complete backend from scratch — authentication, authorization, deal lifecycle, notifications, and ML model integration.

## What I Built

### OTP-Based Authentication System
- Implemented a complete OTP verification flow: phone/email OTP generation → delivery → verification → JWT session creation.
- Built rate limiting and brute-force protection for OTP endpoints.
- Designed secure token rotation with refresh token logic and HttpOnly cookie storage.

### Role-Based Access Control (RBAC)
- Architected a granular RBAC system supporting multiple user roles: Buyer, Seller, Admin, Arbitrator.
- Built custom NestJS guards and decorators for route-level permission checks.
- Implemented hierarchical permission inheritance — Admins inherit all lower-role permissions automatically.

### Deal Creation & Proposal Management
- Designed a complete deal lifecycle state machine: Draft → Proposed → Accepted → In Progress → Awaiting Verification → Released/Disputed.
- Built proposal management flows allowing back-and-forth negotiation between parties.
- Implemented atomic state transitions with PostgreSQL transactions to prevent race conditions.

### In-App Notifications
- Built a real-time notification system for deal status updates, new proposals, and payment events.
- Implemented notification preferences (email, in-app, push) per user.
- Designed batch notification processing for high-volume events.

### ML Model Integration with Conditional Release Logic
- Integrated machine learning models for automated verification of deliverables.
- Built a conditional release engine: funds are released only when the ML model confirms deliverable criteria are met.
- Designed fallback flows for manual review when ML confidence scores fall below threshold.

## Production Edge Cases
The escrow domain demands extreme reliability. Every edge case — partial payments, disputed deliverables, timeout scenarios, concurrent modifications — had to be handled gracefully with proper error recovery and audit logging.
    `,
    problem: 'Digital service transactions lack trust — buyers fear paying without receiving, sellers fear delivering without getting paid. Existing solutions rely on manual verification, which is slow, expensive, and error-prone.',
    solution: 'Built an automated escrow platform where funds are held securely and released only when ML-verified deliverable criteria are met, with full RBAC, OTP security, and a robust deal lifecycle state machine.',
    architecture: 'NestJS with modular service architecture, PostgreSQL with TypeORM for transactional data integrity, JWT + OTP authentication layer, custom RBAC middleware, ML inference service for deliverable verification, WebSocket notifications.',
    challenges: [
      'Ensuring atomic state transitions for deal lifecycle to prevent race conditions in concurrent access',
      'Designing an ML-powered verification system with appropriate fallback for edge cases',
      'Building RBAC that is both granular enough for complex permissions and simple enough to maintain',
      'Handling the regulatory and security requirements of a fintech application',
    ],
    learnings: [
      'Fintech backends demand paranoid-level error handling — every state transition must be atomic and auditable',
      'PostgreSQL transactions with proper isolation levels are essential for financial data consistency',
      'RBAC design should be declarative (decorators/guards) rather than imperative (if-else chains)',
      'ML integration in production requires confidence thresholds and human fallback — never trust model outputs blindly',
    ],
  },

  'cbexperts': {
    slug: 'cbexperts',
    title: 'CBExperts',
    tagline: 'Multi-agent AI outreach pipeline automating lead scouting, research, strategy, drafting, Gmail sending, and reply handling — validated on real Apollo lead data.',
    techStack: ['Multi-Agent AI', 'Gmail API', 'Apollo Data', 'TypeScript', 'Node.js', 'Workshops'],
    description: `
## Overview

CBExperts is an end-to-end autonomous multi-agent AI pipeline built for intelligent B2B lead outreach. The system scouts, researches, strategizes, drafts, sends, and handles replies — all without manual intervention. I also co-led the first paid client workshop with the CEO, delivering a live demo and documentation.

## What I Built

### Multi-Agent Pipeline Architecture
Designed and implemented a 6-stage autonomous agent pipeline:

1. **Scout Agent**: Ingests Apollo lead data, filters by ICP (Ideal Customer Profile) criteria, and scores leads based on relevance signals.
2. **Research Agent**: Deep-dives into each qualified lead — company website, LinkedIn presence, recent news, tech stack analysis.
3. **Strategy Agent**: Crafts a personalized outreach strategy per lead — identifying pain points, value propositions, and optimal messaging angles.
4. **Draft Agent**: Generates hyper-personalized email drafts using the research and strategy context, maintaining natural tone and avoiding spam triggers.
5. **Send Agent**: Integrates with Gmail API for authenticated email delivery with proper threading, rate limiting, and bounce handling.
6. **Reply Handler**: Monitors inbox for responses, classifies intent (interested, not interested, auto-reply, OOO), and routes accordingly.

### Gmail API Integration
- Built secure OAuth2 authentication flow for Gmail API access.
- Implemented email threading for multi-touch follow-up sequences.
- Designed rate limiting to stay within Gmail's sending quotas and avoid spam classification.

### Workshop & Client Delivery
- Co-led CreateBytes' first paid workshop with the CEO.
- Built comprehensive documentation and live demo materials.
- Delivered hands-on walkthrough of the pipeline for external clients.

## Impact
The pipeline was validated on real Apollo lead data, demonstrating end-to-end autonomous outreach capability from lead ingestion to reply handling.
    `,
    problem: 'B2B outreach is manual, repetitive, and low-conversion. Sales teams spend hours researching leads, crafting emails, and managing follow-ups — most of which can be automated with intelligent AI agents.',
    solution: 'Built a 6-stage multi-agent pipeline where each agent specializes in one phase of the outreach lifecycle, enabling fully autonomous lead-to-reply processing with human-quality personalization.',
    architecture: 'TypeScript/Node.js orchestration layer coordinating 6 specialized AI agents, Apollo API for lead data ingestion, Gmail API with OAuth2 for email delivery, intent classification model for reply handling.',
    challenges: [
      'Orchestrating 6 agents with proper error handling and retry logic at each stage',
      'Generating personalized emails that pass spam filters and feel genuinely human',
      'Managing Gmail API rate limits while maintaining delivery throughput',
      'Building a system reliable enough for a live paid client workshop demo',
    ],
    learnings: [
      'Multi-agent systems require clear contracts between agents — input/output schemas must be strict',
      'Email deliverability is a science — SPF, DKIM, warmup sequences, and content quality all matter',
      'Presenting technical systems to non-technical clients is a critical engineering skill',
      'Co-leading with the CEO taught me how to bridge business value and technical implementation',
    ],
  },

  'cb-extensions': {
    slug: 'cb-extensions',
    title: 'CB-Extensions',
    tagline: 'Browser extension for CB-Workspace streamlining daily attendance management and task logging for the engineering team.',
    techStack: ['Browser Extension', 'JavaScript', 'Workspace Integration', 'Productivity'],
    description: `
## Overview

CB-Extensions is a browser extension built for CreateBytes' internal workspace, designed to streamline attendance tracking and daily task logging for the engineering team.

## What I Built

### Attendance Management
- One-click check-in/check-out with automatic timestamp recording.
- Visual attendance dashboard showing daily, weekly, and monthly summaries.
- Integration with CB-Workspace APIs for centralized attendance data.

### Task Logging
- Quick-entry task logging with project tagging and time tracking.
- Daily standup summary generator — auto-compiles logged tasks into a formatted standup update.
- Persistent local storage with periodic sync to the workspace backend.

### Developer Experience
- Minimal UI footprint — operates as a browser popup with keyboard shortcuts for power users.
- Offline-first architecture — logs tasks locally and syncs when connectivity is restored.
- Built with vanilla JavaScript for maximum performance and zero dependency bloat.

## Impact
Eliminated the daily friction of manual attendance entry and task reporting, saving the team ~15 minutes per person per day.
    `,
    problem: 'The engineering team spent unnecessary time on manual attendance logging and daily task reporting, breaking flow state and reducing productive hours.',
    solution: 'Built a lightweight browser extension that integrates directly with CB-Workspace, enabling one-click attendance and quick task logging without leaving the browser.',
    architecture: 'Chrome Extension Manifest V3, vanilla JavaScript with local storage persistence, REST API integration with CB-Workspace backend, popup UI with keyboard shortcuts.',
    challenges: [
      'Designing a non-intrusive UI that doesn\'t break developer flow',
      'Handling offline scenarios with reliable local storage and sync logic',
      'Working within Chrome Extension API constraints for background processing',
    ],
    learnings: [
      'Developer tools succeed when they reduce friction to near-zero — every extra click is a barrier to adoption',
      'Offline-first architecture is essential for tools that must be reliable regardless of connectivity',
      'Vanilla JavaScript without frameworks can be the right choice for performance-critical, lightweight tools',
    ],
  },

  'cb-campaigns': {
    slug: 'cb-campaigns',
    title: 'CB-Campaigns',
    tagline: 'Four mobile-responsive marketing landing pages for HealthTech UK/US and FinTech UK/US markets with modern animations and optimized performance.',
    techStack: ['React.js', 'Next.js', 'TailwindCSS', 'Responsive UI', 'Performance'],
    description: `
## Overview

CB-Campaigns is a collection of four production marketing landing pages built for CreateBytes' international market expansion — targeting HealthTech and FinTech audiences in both UK and US markets.

## What I Built

### Four International Landing Pages
1. **HealthTech UK**: Targeting NHS-adjacent health technology companies with localized messaging and UK-specific compliance language.
2. **HealthTech US**: Adapted for the US healthcare market with HIPAA-relevant positioning and USD pricing.
3. **FinTech UK**: Focused on UK financial services with FCA compliance messaging and GBP-denominated case studies.
4. **FinTech US**: Tailored for the US fintech ecosystem with SEC/FINRA-relevant language and US market positioning.

### Technical Implementation
- Built end-to-end on the frontend with React.js and Next.js for SSG performance.
- Implemented modern scroll-based animations and micro-interactions using Framer Motion.
- Designed fully responsive layouts tested across mobile, tablet, and desktop breakpoints.
- Optimized Lighthouse performance scores (90+ across all pages).

### Localization & Market Adaptation
- Adapted copy, currency, regulatory language, and CTAs per market.
- Implemented locale-aware SEO meta tags and structured data for each landing page.
- Designed shared component library with market-specific configuration props.

## Impact
All four landing pages deployed to production, supporting CreateBytes' international go-to-market strategy across two verticals and two geographies.
    `,
    problem: 'CreateBytes needed to establish credibility in four international market segments simultaneously, each requiring tailored messaging, compliance language, and cultural adaptation.',
    solution: 'Built a shared component architecture with market-specific configuration, enabling rapid deployment of four distinct landing pages from a single codebase while maintaining localized authenticity.',
    architecture: 'Next.js with SSG for sub-second page loads, TailwindCSS utility-first styling, Framer Motion animations, shared component library with per-market configuration objects.',
    challenges: [
      'Maintaining consistent brand identity while adapting content for four distinct market segments',
      'Achieving 90+ Lighthouse scores with rich animations and interactive elements',
      'Designing a component architecture flexible enough for market-specific variations without code duplication',
    ],
    learnings: [
      'Componentization with configuration-driven rendering enables efficient multi-market deployment',
      'Performance optimization and rich animations are not mutually exclusive — it is about lazy loading and code splitting',
      'Localization goes beyond translation — regulatory language, currency, and cultural context all matter',
    ],
  },

  'portfolio': {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    tagline: 'Full-stack showcase built with NestJS and Next.js featuring MongoDB integration, Nodemailer contact delivery, dynamic content, and modern glassmorphic UI.',
    techStack: ['Next.js', 'NestJS', 'MongoDB', 'TypeScript', 'Framer Motion', 'Nodemailer'],
    description: `
## Overview

This portfolio itself is a production-grade full-stack application, not a template. Every component, animation, and backend service was built from scratch to showcase not just my work, but my engineering approach.

## Technical Architecture

### Frontend (Next.js + TypeScript)
- Built with Next.js 16 using the App Router for optimal SSR/SSG performance.
- Custom glassmorphic design system with CSS custom properties — no Tailwind dependency for core styling.
- Framer Motion animations with intersection observer triggers for scroll-based reveals.
- Responsive across all breakpoints with mobile-first design approach.

### Backend (NestJS + MongoDB)
- Modular NestJS architecture with separate modules for Blog, Projects, Contact, Experience, Skills, GitHub, and LeetCode.
- MongoDB Atlas with Mongoose ODM for flexible document storage.
- JWT authentication for admin CMS operations (create/edit blog posts, projects).
- Nodemailer integration with Gmail App Password for contact form email delivery.

### SEO & Performance
- Dynamic sitemap generation with both static routes and database-driven content.
- OpenGraph and Twitter Card metadata for social sharing.
- Schema.org JSON-LD structured data for rich search results.
- Optimized Lighthouse scores with code splitting and image optimization.

### Dynamic Integrations
- Real-time GitHub stats and repository data via GitHub API.
- Live LeetCode problem-solving statistics via public API.
- Contact form with email notification and MongoDB persistence.
    `,
    problem: 'Needed a portfolio that demonstrates full-stack engineering capability — not just design skills, but production backend architecture, database design, API integration, and DevOps deployment.',
    solution: 'Built a complete NestJS + Next.js application with MongoDB, JWT auth, email delivery, and live API integrations — treating the portfolio itself as a production software product.',
    architecture: 'Next.js 16 App Router frontend with Framer Motion, NestJS modular backend with MongoDB Atlas, JWT authentication, Nodemailer email service, GitHub and LeetCode API integrations.',
    challenges: [
      'Designing a portfolio that is itself an impressive engineering project, not just a static site',
      'Balancing rich animations with fast page load times',
      'Building a CMS backend that is simple enough for personal use but architecturally sound',
    ],
    learnings: [
      'Treating a personal project with production-grade standards reveals gaps in your engineering practices',
      'Next.js App Router with NestJS is a powerful full-stack combination for TypeScript projects',
      'A portfolio should demonstrate engineering maturity, not just technical skills — architecture, testing, logging, and deployment all matter',
    ],
    githubUrl: 'https://github.com/21khushi',
  },

  'fraud-detection': {
    slug: 'fraud-detection',
    title: 'Fraud Detection — AI/ML',
    tagline: 'Python ML pipeline for financial fraud detection using classification and anomaly detection algorithms, achieving >92% accuracy on test datasets.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Classification', 'Anomaly Detection'],
    description: `
## Overview

A machine learning pipeline for detecting fraudulent financial transactions using a combination of supervised classification and unsupervised anomaly detection techniques.

## What I Built

### Data Pipeline
- Built data ingestion and preprocessing pipeline using Pandas for handling large-scale transaction datasets.
- Implemented feature engineering — extracting temporal patterns, transaction velocity, amount distributions, and merchant category analysis.
- Handled severe class imbalance (fraud represents <1% of transactions) using SMOTE oversampling and stratified cross-validation.

### Model Development
- Trained and evaluated multiple classification algorithms:
  - **Random Forest**: Strong baseline with feature importance analysis.
  - **XGBoost**: Best overall performance with gradient boosting.
  - **Logistic Regression**: Interpretable model for regulatory explainability.
  - **Isolation Forest**: Unsupervised anomaly detection for detecting novel fraud patterns.

### Evaluation & Results
- Achieved **>92% accuracy** on held-out test data with optimized XGBoost model.
- Focused on **precision-recall trade-off** rather than raw accuracy — in fraud detection, false negatives (missed fraud) are far more costly than false positives.
- Built confusion matrix visualizations and ROC curve analysis for model comparison.

### Production Considerations
- Designed the pipeline for batch processing with potential for real-time scoring adaptation.
- Implemented model serialization (pickle/joblib) for deployment readiness.
- Built comprehensive logging for model training runs and prediction auditing.
    `,
    problem: 'Financial fraud causes billions in losses annually. Traditional rule-based detection systems fail to catch sophisticated fraud patterns that evolve over time.',
    solution: 'Built an ML pipeline combining supervised classification (XGBoost, Random Forest) with unsupervised anomaly detection (Isolation Forest) to catch both known fraud patterns and novel attack vectors.',
    architecture: 'Python data pipeline with Pandas preprocessing, Scikit-learn model training and evaluation, SMOTE for class imbalance handling, joblib serialization for model persistence.',
    challenges: [
      'Handling severe class imbalance — fraud is less than 1% of all transactions',
      'Optimizing for precision-recall rather than accuracy in a high-stakes domain',
      'Engineering features that capture temporal patterns and transaction velocity',
    ],
    learnings: [
      'In fraud detection, the cost matrix is asymmetric — missing real fraud is far worse than a false alarm',
      'Feature engineering is often more impactful than model selection in tabular data problems',
      'Class imbalance techniques (SMOTE, stratified sampling) are essential for real-world ML pipelines',
    ],
    githubUrl: 'https://github.com/21khushi',
  },
};

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS_DATA[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(PROJECTS_DATA);
}
