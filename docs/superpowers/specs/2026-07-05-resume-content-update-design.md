# Resume-Driven Content Update — Design

**Date:** 2026-07-05
**Source of truth:** `/home/ruby/Downloads/Alabi Reuben Resume.pdf` (July 2026 revision)
**Approach:** In-place content edits to existing route files, following each file's existing pattern (data arrays in `experience.tsx`/`projects.tsx`, prose JSX in `index.tsx`/`about.tsx`). No structural refactor, no new components, no styling changes.

## Decisions (confirmed with user)

1. **Positioning:** Match the resume — "Backend Engineer | Full-Stack Systems", Glass Finance as the current headline role. Drifto remains the co-founder story.
2. **Metrics:** Use resume claims; keep site-only figures the resume merely omits (Drifto's 500+ users, 99.5% uptime, ~95% ticket fulfillment). Where a site figure directly contradicts the resume (~250ms vs ~700ms avg response), the resume wins. Old percentage claims tied to bullets the resume rewrote (CSDC 20%/15%, Stalwart 25%/15%/30%) are replaced by the resume wording.
3. **Volunteering:** Add a `// volunteering & leadership` section to `/about` (GDG Babcock, BUCC Dev Team).
4. **Skills:** Merge — add the resume's new items (AI category, Flyway, OIDC, JWT/OAuth2) without dropping anything currently listed.
5. **Role AI project:** Merge frontend (existing site copy) and backend (resume: FastAPI, PostgreSQL + pgvector, role-aware LLM routing) into one full-stack entry.
6. **Projects page scope:** Personal/side builds only (Drifto, Role AI). Glass Finance and Verrify appear on `/experience` only.

## Changes by file

### `public/reuben-alabi-resume.pdf`
Replace with the new PDF from Downloads (checksums currently differ). `src/assets/resume.pdf.asset.json` is a Lovable platform pointer to remote storage — leave untouched.

### `src/routes/index.tsx` (Home)
- Typewriter: `"Backend Engineer. Full-Stack Systems."`
- Intro prose: backend systems in Java/Spring Boot first; name Glass Finance (Head Engineer — community finance layer) as current headline role; keep Drifto co-founder mention with existing link.
- "Stuff I made" list stays Drifto + Role AI; Drifto line updated to merged metrics.
- `head()` meta description/og tags updated to backend-engineer positioning.

### `src/routes/about.tsx`
- Narrative paragraphs updated to cover: Glass Finance (head engineer), Drifto (co-founder, sole backend), Luxnet/Verrify, CSG Resov, CSDC (gov tax + Lagos tourism), Stalwart Crest.
- Education: add `2022 — Jul 2026` alongside CGPA 4.34/5.
- Skills (merged additions): new `ai` group — llm / ai feature integration · ai-assisted development (claude code, codex) · openai & gemini apis; `backend` group gains flyway · oidc · jwt · oauth 2.0.
- New `// volunteering & leadership` section in existing style:
  - GDG Babcock Chapter — Software Development Track Lead (curriculum across 5 tracks, mentoring, 5+ guest speakers)
  - BUCC Dev Team — Backend Developer (3+ platforms, 1,000+ students)
- Meta tags updated.

### `src/routes/experience.tsx`
Six roles, newest first, resume bullets adapted to the site's voice:

1. **Glass Finance** — Head Engineer, Platform & Backend Architecture · May 2026 — Present · tags: Java, Spring Boot, Fintech, Architecture
   - Technical direction from concept to production; 173 REST endpoints across 16 domains; obligation engine with 4 collection types posting to a double-entry ledger; advising founders on feasibility/trade-offs.
2. **Drifto** — Backend Engineer & Co-founder · Jul 2025 — Present · tags: Spring Boot, AWS, Next.js, Paystack, PostgreSQL
   - Entire Spring Boot backend on AWS for web/iOS/Android; idempotent-webhook payment pipeline preventing duplicate charges; ~700ms average responses under live-event spikes; site-kept extras: 500+ users, 99.5% uptime, ~95% ticket fulfillment.
3. **Luxnet** — Backend Engineer (Part-time) · May 2025 — Present · tags: NestJS, PostgreSQL, TypeORM, PostGIS
   - Verrify backend: 75 endpoints across 12 domains; PostGIS viewport/location/radius search; automated 3-stage reviewer workflow with RBAC and auditable history.
4. **CSG Development — Resov** — Software Engineer (Contract) · Jan 2026 — Jun 2026 · tags: Java 21, Spring Boot, RabbitMQ, OAuth2
   - 161 endpoints across 9 domains secured with JWT/OAuth2/permissions; RabbitMQ event layer with per-workflow retry + dead-letter queues; audit infrastructure powering activity/admin reports.
5. **CSDC Solutions** — Backend Engineer · Jan 2025 — Jun 2025 · tags: Java, Spring Boot, Compliance, Realtime
   - Resume wording: 10+ critical defects in gov tax revenue system; diagnosed bottlenecks, cut processing latency under regulatory requirements; real-time modules for Lagos State tourism platform.
6. **Stalwart Crest** — Software Engineer (Part-time) · Sep 2023 — Jun 2026 (ended) · tags: React, Next.js, Java, Spring Boot, Compliance
   - Full-stack features across 3 client projects; NDPR/GDPR-aligned access control, audit trails, privacy; API architecture + 10+ third-party integrations.

Meta description updated to name the new role set.

### `src/routes/projects.tsx`
- **Drifto:** tagline kept; bullets updated to merged metrics (idempotent webhooks, ~700ms under spikes, 500+ users, 99.5% uptime, AWS); tags gain AWS.
- **Role AI:** full-stack entry — FastAPI backend routing role-specific AI responses (PM/dev/security perspectives); PostgreSQL + pgvector retrieval of project files, chat history, design artifacts; design-decision logging and LLM context injection; existing frontend bullets (Next.js App Router, Mermaid live diagrams, Google OAuth + JWT) retained. Tags: FastAPI, PostgreSQL, pgvector, Next.js, TypeScript, Mermaid.
- Meta tags updated.

### Untouched
`blog.tsx` (Drifto mention still accurate), `SiteHeader`, `SiteFooter`, `__root.tsx`, all components/styles, `src/assets/resume.pdf.asset.json`.

## Error handling / testing
Content-only change. Verification: `bun run build` (or `vite build`) passes; `bun run lint` clean on changed files; manual check of `/`, `/about`, `/experience`, `/projects`, `/resume` in dev server, including that the served PDF is the new revision.
