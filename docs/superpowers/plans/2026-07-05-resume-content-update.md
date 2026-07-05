# Resume-Driven Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the terminal-portfolio site content (home, about, experience, projects, served PDF) to match the July 2026 resume, per the approved spec `docs/superpowers/specs/2026-07-05-resume-content-update-design.md`.

**Architecture:** In-place content edits to existing TanStack Start route files, following each file's existing pattern (data arrays in `experience.tsx`/`projects.tsx`, prose JSX in `index.tsx`/`about.tsx`). No new components, no styling or structural changes.

**Tech Stack:** TanStack Start + React + TypeScript, Vite, Tailwind, Bun. No test framework exists — verification is `bun run lint` + `bun run build` per task, plus a final dev-server smoke check.

## Global Constraints

- Source of truth for claims: the July 2026 resume. Site-only figures the resume omits are KEPT (Drifto: 500+ users, 99.5% API uptime, ~95% ticket fulfillment). Figures the resume contradicts are REPLACED (~250ms → ~700ms average responses under live-event spikes).
- Positioning everywhere: "Backend Engineer / Full-Stack Systems", Glass Finance as current headline role, Drifto as the co-founder story.
- Do NOT touch: `src/routes/blog.tsx`, `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/routes/__root.tsx`, `src/assets/resume.pdf.asset.json`, anything under `src/components/ui/`, `src/styles.css`.
- Keep the site's existing visual idioms: `text-[color:var(--accent)]` accent, `font-mono` labels, `// section` headings on /about, tag chips on /experience and /projects.
- Every commit message ends with the Claude Code trailer (see Task 1's commit for the exact format; repeat it verbatim in every commit).

---

### Task 1: Replace the served resume PDF

**Files:**
- Modify: `public/reuben-alabi-resume.pdf` (binary overwrite)

**Interfaces:**
- Consumes: `/home/ruby/Downloads/Alabi Reuben Resume.pdf` (new revision)
- Produces: `/reuben-alabi-resume.pdf` URL (used by `src/routes/resume.tsx:4`) now serves the new revision. No code change needed.

- [ ] **Step 1: Copy the new PDF over the served one**

```bash
cp "/home/ruby/Downloads/Alabi Reuben Resume.pdf" \
   /home/ruby/Documents/Personal/terminal-portfolio/public/reuben-alabi-resume.pdf
```

- [ ] **Step 2: Verify the copy took**

Run:
```bash
md5sum "/home/ruby/Downloads/Alabi Reuben Resume.pdf" \
       /home/ruby/Documents/Personal/terminal-portfolio/public/reuben-alabi-resume.pdf
```
Expected: both lines show the SAME hash (previously they differed: downloads was `a97f9c11…`, public was `c1e5a901…`).

- [ ] **Step 3: Commit**

```bash
git add public/reuben-alabi-resume.pdf
git commit -m "content: replace served resume PDF with July 2026 revision

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01PHxjXxgMTH751BxcrvK59E"
```

---

### Task 2: Update home page (`/`)

**Files:**
- Modify: `src/routes/index.tsx` (full-file replacement below)

**Interfaces:**
- Consumes: `PageLayout`, `Typewriter`, `Link` — all already imported in the file.
- Produces: nothing other tasks depend on.

- [ ] **Step 1: Replace the entire contents of `src/routes/index.tsx` with:**

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "description", content: "Backend engineer building reliable, scalable systems in Java and Spring Boot, paired with React frontends. Head Engineer at Glass Finance, co-founder of Drifto." },
      { property: "og:title", content: "Reuben Alabi — Backend Engineer" },
      { property: "og:description", content: "Backend engineer building reliable, scalable full-stack systems." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <p className="text-foreground text-lg">
        <Typewriter text="Backend Engineer. Full-Stack Systems." />
      </p>
      <p className="text-foreground">
        I'm Reuben. I live mostly on the backend — Java, Spring Boot, NestJS —
        but I ship the whole stack when the product needs it. Right now I'm
        Head Engineer at Glass Finance, a community finance layer, driving
        architecture and deployment from concept to production. I also
        co-founded{" "}
        <a
          href="https://www.drifto.app"
          target="_blank"
          rel="noreferrer"
          className="text-[color:var(--accent)] underline underline-offset-4"
        >
          Drifto
        </a>
        , an event platform whose entire backend I designed and built.
      </p>
      <p className="text-foreground">
        I've done this for startups and for government-scale systems alike:
        payments infrastructure, tax processing, property verification,
        real-time data — the unglamorous machinery that has to work every
        time.
      </p>

      <p className="pt-4 text-foreground">Some of the stuff I made:</p>
      <ul className="list-disc pl-6 space-y-2 marker:text-muted-foreground">
        <li>
          <span className="font-mono text-[color:var(--accent)]">Drifto</span>
          <span className="text-foreground">
            : event management and ticketing — idempotent payments, auth, 500+
            users, live and revenue-generating.
          </span>
        </li>
        <li>
          <span className="font-mono text-[color:var(--accent)]">Role_AI</span>
          <span className="text-foreground">
            : an AI assistant that adapts to your role on an engineering team —
            chat with live UML, ERD and flowchart rendering.
          </span>
        </li>
      </ul>

      <p className="pt-2 text-muted-foreground text-sm">
        More on{" "}
        <Link to="/projects" className="text-[color:var(--accent)] underline underline-offset-4">
          /projects
        </Link>
        {" "}— or see where I've worked on{" "}
        <Link to="/experience" className="text-[color:var(--accent)] underline underline-offset-4">
          /experience
        </Link>
        .
      </p>
    </PageLayout>
  );
}
```

- [ ] **Step 2: Verify lint and build pass**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run lint && bun run build
```
Expected: eslint exits clean (no errors; pre-existing warnings elsewhere are acceptable) and `vite build` completes with "built in …" and no errors.

- [ ] **Step 3: Commit**

```bash
git add src/routes/index.tsx
git commit -m "content: reposition home page as Backend Engineer, lead with Glass Finance

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01PHxjXxgMTH751BxcrvK59E"
```

---

### Task 3: Update about page (`/about`)

**Files:**
- Modify: `src/routes/about.tsx` (full-file replacement below)

**Interfaces:**
- Consumes: `PageLayout` — already imported.
- Produces: nothing other tasks depend on.

- [ ] **Step 1: Replace the entire contents of `src/routes/about.tsx` with:**

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { name: "description", content: "About Reuben Alabi: backend engineer, Head Engineer at Glass Finance, co-founder of Drifto, based in Lagos, Nigeria." },
      { property: "og:title", content: "/about — Reuben Alabi" },
      { property: "og:description", content: "Backend engineer, Head Engineer at Glass Finance, co-founder of Drifto." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/about</h2>
      <p>
        I'm Reuben Alabi — a software engineer based in Lagos, Nigeria.
        Curious by default, adventurous by choice.
      </p>
      <p>
        My home turf is the backend: Java and Spring Boot, NestJS, the
        databases, queues and payment rails underneath a product. But I'm not
        precious about the boundary — I build the React and Next.js frontends
        too, and I've shipped end-to-end more than once.
      </p>
      <p>
        These days that means{" "}
        <span className="text-[color:var(--accent)] font-mono">Glass Finance</span>,
        a community finance layer where I'm Head Engineer — I shaped the
        architecture and shipped a Spring Boot backend of 173 REST endpoints
        across 16 domains, including an obligation engine that posts member
        dues to a double-entry ledger. It also means{" "}
        <span className="text-[color:var(--accent)] font-mono">Drifto</span>,
        an event platform I co-founded: as the sole backend engineer I took it
        from an empty repo to a live, revenue-generating product on AWS —
        idempotent payments, authentication and event management for 500+
        users.
      </p>
      <p>
        Along the way I've built Verrify, a property allocation and
        verification platform with PostGIS geospatial search, at Luxnet; the
        backend foundation for Resov at CSG Development; features for a
        government tax revenue system and a Lagos State tourism platform at
        CSDC Solutions; and full-stack client work with NDPR/GDPR-aligned
        compliance controls at Stalwart Crest.
      </p>
      <p>
        What I care about: correctness, security, and keeping systems simple
        enough to reason about at 2am.
      </p>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// education</h3>
        <p className="mt-2">
          B.Sc. Computer Software Engineering — Babcock University,
          2022 — Jul 2026. CGPA 4.34 / 5.
        </p>
      </div>

      <div className="pt-4 space-y-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// skills</h3>
        <div>
          <p className="font-mono text-xs text-muted-foreground">languages</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            java · typescript · javascript · python · sql · c · c++ · bash
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">backend</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            spring boot · spring security · spring data / mvc / cloud ·
            hibernate / jpa · nestjs · node.js · express · fastapi · rest ·
            graphql · websockets · microservices · flyway · jwt · oauth 2.0 ·
            oidc
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">frontend</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            react · next.js · html · css · tailwind css · responsive ui
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">data &amp; messaging</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            postgresql · mysql · mongodb · dynamodb · redis · elasticsearch ·
            kafka · rabbitmq
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">infra &amp; tooling</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            docker · kubernetes · aws · azure · gcp · nginx · jenkins · ci/cd ·
            git · linux · maven · gradle
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">ai</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            llm / ai feature integration · ai-assisted development (claude
            code, codex) · openai &amp; gemini apis · pgvector
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">testing &amp; practice</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            junit · mockito · selenium · tdd · agile / scrum · jira
          </p>
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// volunteering &amp; leadership</h3>
        <div>
          <p className="text-foreground">
            Google Developer Group (GDG), Babcock Chapter — Software
            Development Track Lead
          </p>
          <p className="mt-1 text-muted-foreground text-sm">
            Designed the software curriculum across 5 tracks, mentored student
            developers through hands-on workshops, and recruited 5+ industry
            professionals for guest speaker sessions.
          </p>
        </div>
        <div>
          <p className="text-foreground">
            Babcock University Computer Club, Dev Team — Backend Developer
          </p>
          <p className="mt-1 text-muted-foreground text-sm">
            Built backend features for 3+ BUCC platforms supporting 1,000+
            students across club, chaplaincy and team websites.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
```

- [ ] **Step 2: Verify lint and build pass**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run lint && bun run build
```
Expected: clean eslint, successful build.

- [ ] **Step 3: Commit**

```bash
git add src/routes/about.tsx
git commit -m "content: update about page — Glass Finance, education dates, AI skills, volunteering

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01PHxjXxgMTH751BxcrvK59E"
```

---

### Task 4: Update experience page (`/experience`)

**Files:**
- Modify: `src/routes/experience.tsx` (full-file replacement below)

**Interfaces:**
- Consumes: `PageLayout`, existing `Role` type — unchanged.
- Produces: nothing other tasks depend on. Note `key={r.company}` in the render — all six company strings below are unique, so keys stay valid.

- [ ] **Step 1: Replace the entire contents of `src/routes/experience.tsx` with:**

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { name: "description", content: "Work experience: Head Engineer at Glass Finance, Co-founder & Backend Engineer at Drifto, Backend Engineer at Luxnet and CSDC Solutions, Software Engineer at CSG Development and Stalwart Crest." },
      { property: "og:title", content: "/experience — Reuben Alabi" },
      { property: "og:description", content: "Work experience across backend and full-stack engineering roles." },
    ],
  }),
  component: Experience,
});

type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    title: "Head Engineer, Platform & Backend Architecture",
    company: "Glass Finance (Remote)",
    period: "May 2026 — Present",
    bullets: [
      "Shaped the technical direction for a community finance layer — requirements, architecture and deployment from concept to production.",
      "Architected and shipped the backend: 173 REST endpoints across 16 domains in Java and Spring Boot.",
      "Built an obligation engine that auto-computes member dues across 4 collection types, posting to a double-entry ledger.",
      "Advise the founding team on technical feasibility and architecture trade-offs shaping product decisions.",
    ],
    tags: ["Java", "Spring Boot", "Fintech", "Architecture"],
  },
  {
    title: "Backend Engineer & Co-founder",
    company: "Drifto",
    period: "Jul 2025 — Present",
    bullets: [
      "Sole backend engineer: architected and shipped the entire Spring Boot backend on AWS, powering web, iOS and Android clients for 500+ users at ~95% ticket fulfillment.",
      "Built a payment pipeline with idempotent webhooks and async processing, preventing duplicate charges across every transaction.",
      "Sustained ~700ms average API responses under live-event traffic spikes — holding 99.5% API uptime — using caching and asynchronous event handling.",
    ],
    tags: ["Spring Boot", "AWS", "Next.js", "Paystack", "PostgreSQL"],
  },
  {
    title: "Backend Engineer (Part-time)",
    company: "Luxnet (Remote)",
    period: "May 2025 — Present",
    bullets: [
      "Architected and shipped the NestJS backend for Verrify, a property allocation & verification platform — 75 REST endpoints across 12 domains on PostgreSQL/TypeORM.",
      "Built PostGIS geospatial search — viewport, location and radius queries powering the platform's interactive property map.",
      "Automated reviewer assignment across a 3-stage verification workflow, enforcing RBAC roles with auditable status history.",
    ],
    tags: ["NestJS", "PostgreSQL", "TypeORM", "PostGIS"],
  },
  {
    title: "Software Engineer (Contract)",
    company: "CSG Development — Resov (Remote)",
    period: "Jan 2026 — Jun 2026",
    bullets: [
      "Designed and built the backend foundation — 161 REST endpoints across 9 domains in Spring Boot / Java 21, secured with JWT, OAuth2 and permission-based access.",
      "Built a RabbitMQ event-driven layer with per-workflow retry and dead-letter queues, keeping email, payment and audit processing resilient to downstream failures.",
      "Built audit infrastructure tracking every user action and state change, powering activity and admin reports.",
    ],
    tags: ["Java 21", "Spring Boot", "RabbitMQ", "OAuth2"],
  },
  {
    title: "Backend Engineer",
    company: "CSDC Solutions (Hybrid)",
    period: "Jan 2025 — Jun 2025",
    bullets: [
      "Shipped features and fixed 10+ critical defects in a Java government tax revenue system across large-scale deployments.",
      "Diagnosed performance bottlenecks and cut processing latency on key transactions, restoring reliability under regulatory requirements.",
      "Built real-time user-facing modules for a Lagos State tourism platform in Spring Boot, integrating live data feeds.",
    ],
    tags: ["Java", "Spring Boot", "Compliance", "Realtime"],
  },
  {
    title: "Software Engineer (Part-time)",
    company: "Stalwart Crest (Remote)",
    period: "Sep 2023 — Jun 2026",
    bullets: [
      "Delivered full-stack features across 3 client projects, building React/Next.js frontends backed by Java/Spring Boot services.",
      "Built compliance and data controls — access control, audit trails, privacy — aligned with NDPR/GDPR data-residency rules.",
      "Shaped API architecture and integrated 10+ third-party services, improving reliability across client deployments.",
    ],
    tags: ["React", "Next.js", "Java", "Spring Boot", "Compliance"],
  },
];

function Experience() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/experience</h2>
      <p className="text-muted-foreground text-sm">
        Where I've worked. Current roles first.
      </p>
      <ul className="space-y-10 pt-4">
        {roles.map((r) => (
          <li key={r.company} className="space-y-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-mono text-[color:var(--accent)]">
                {r.company}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                {r.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{r.title}</p>
            <ul className="list-disc pl-6 space-y-1 marker:text-muted-foreground text-foreground">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
```

- [ ] **Step 2: Verify lint and build pass**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run lint && bun run build
```
Expected: clean eslint, successful build.

- [ ] **Step 3: Commit**

```bash
git add src/routes/experience.tsx
git commit -m "content: expand experience to six roles from July 2026 resume

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01PHxjXxgMTH751BxcrvK59E"
```

---

### Task 5: Update projects page (`/projects`)

**Files:**
- Modify: `src/routes/projects.tsx` (only the `projects` array changes; component and types stay as-is)

**Interfaces:**
- Consumes: existing `Project` / `ProjectLink` types — unchanged.
- Produces: nothing other tasks depend on.

- [ ] **Step 1: Replace the `projects` array (currently `src/routes/projects.tsx:28-51`) with:**

```tsx
const projects: Project[] = [
  {
    name: "Drifto",
    tagline: "Event management and ticketing, live in production. I co-founded it and built every layer of the backend.",
    bullets: [
      "Spring Boot backend on AWS powering web, iOS and Android clients — event management, authentication and Paystack payments for 500+ users at ~95% ticket fulfillment.",
      "Payment pipeline with idempotent webhooks and async processing, preventing duplicate charges; ~700ms average responses under live-event spikes at 99.5% API uptime.",
      "End-to-end ownership: database schema, RESTful APIs, payment infrastructure and security — from empty repo to live, revenue-generating product.",
    ],
    tags: ["Spring Boot", "AWS", "Next.js", "React", "Paystack", "PostgreSQL"],
    links: [{ label: "drifto.app", href: "https://www.drifto.app" }],
  },
  {
    name: "Role AI",
    tagline: "An AI assistant that adapts to your role on an engineering team — requirements, design, or analysis.",
    bullets: [
      "FastAPI backend routing role-specific AI responses for project managers, developers and security engineers.",
      "PostgreSQL + pgvector retrieval over project files, chat history and generated design artifacts — with design-decision logging, approval tracking and LLM context injection.",
      "Architectural discussions rendered live — flowcharts, UML and ERDs drawn via Mermaid as you talk — with decision tracking built in.",
      "Next.js App Router frontend in TypeScript and Tailwind CSS, with Google OAuth and custom JWT auth.",
    ],
    tags: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "TypeScript", "Mermaid"],
    links: [{ label: "live demo", href: "https://role-ai-frontend.vercel.app" }],
  },
];
```

Everything else in the file (imports, `head()` meta, types, `Projects` component) stays exactly as it is — the existing meta description already names both projects accurately.

- [ ] **Step 2: Verify lint and build pass**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run lint && bun run build
```
Expected: clean eslint, successful build.

- [ ] **Step 3: Commit**

```bash
git add src/routes/projects.tsx
git commit -m "content: update Drifto metrics and make Role AI full-stack on projects page

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01PHxjXxgMTH751BxcrvK59E"
```

---

### Task 6: Final verification (smoke check all pages)

**Files:** none modified.

**Interfaces:**
- Consumes: all previous tasks' output.
- Produces: verified, shippable main branch.

- [ ] **Step 1: Full lint + build**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run lint && bun run build
```
Expected: clean eslint, successful `vite build`.

- [ ] **Step 2: Start the dev server in the background**

Run:
```bash
cd /home/ruby/Documents/Personal/terminal-portfolio && bun run dev
```
(background it; note the port Vite prints, typically 5173 or 3000)

- [ ] **Step 3: Smoke-check every changed route**

Run (adjust port to what Vite printed):
```bash
for p in / /about /experience /projects /resume; do
  echo "== $p =="; curl -s "http://localhost:5173$p" | grep -oE "Glass Finance|Backend Engineer|Luxnet|Resov|volunteering|700ms|pgvector" | sort -u
done
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" http://localhost:5173/reuben-alabi-resume.pdf
```
Expected:
- `/` mentions "Backend Engineer" and "Glass Finance"
- `/about` mentions "Glass Finance" and "volunteering"
- `/experience` mentions "Glass Finance", "Luxnet", "Resov", "700ms"
- `/projects` mentions "pgvector", "700ms"
- PDF request returns `200` with a download size exactly matching `stat -c%s public/reuben-alabi-resume.pdf` (which after Task 1 equals the size of the Downloads PDF — do NOT expect 173699; that was the old revision's size).

- [ ] **Step 4: Stop the dev server**

Kill the background dev-server process.

- [ ] **Step 5: Confirm clean tree**

Run: `git status`
Expected: working tree clean, all commits on `main`.
