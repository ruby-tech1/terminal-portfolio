# Minimal Terminal Portfolio — Reuben Alabi

Build a minimalist, terminal-inspired portfolio in the style of uncdozie.vercel.app — pure black background, green accents, monospace type, centered single column.

## Design

- **Palette**: bg `#000000`, surface `#0a0a0a`, accent green `#00ff88`, text `#cccccc`, muted `#666666`
- **Type**: Serif (Instrument Serif) for the big name; JetBrains Mono for nav, code accents, and body
- **Layout**: Centered ~640px column, generous whitespace, no top header bar — the name IS the header
- **Effects**: Blinking caret `▊` after the name; typewriter reveal on the tagline (runs once on mount); no other motion
- **Footer**: thin divider, email line, GitHub + LinkedIn + X icons, small visitor-style counter line

## Routes (TanStack Start)

```
src/routes/
  __root.tsx       Shell, Google Fonts link, dark bg, footer
  index.tsx        Home: name, tagline, bio, featured projects, contact
  about.tsx        /about — full bio, education, languages
  projects.tsx     /projects — Drifto, Stalwart Crest, CSDC work
  blog.tsx         /blog — "coming soon" terminal stub
  resume.tsx       /resume — embedded PDF + download link
```

Each route gets its own `head()` with unique title/description/og tags. Nav row under the name: `/about /projects /blog /resume` in green monospace, on every page.

## Content (from your resume)

- **Name**: Reuben Alabi
- **Tagline**: Software Engineer. Founder.
- **Bio**: Fullstack engineer (Java, Spring Boot, TypeScript, NestJS, Next.js, React). Builds responsive web apps with clean backend integration.
- **Projects** (featured on home, all on /projects):
  - **Drifto** — Co-Founder & SWE. Spring Boot backend + Next.js MVP for event management & Paystack payments. 500+ users, ~250ms response, 99.5% uptime.
  - **Tax Revenue System (CSDC)** — Java backend for government tax processing; +20% efficiency.
  - **Lagos Tourism System (CSDC)** — Spring Boot modules with real-time data.
  - **Stalwart Crest** — React/Next.js front-end + Spring Security hardening; −25% page load, +30% traffic capacity.
- **About page extras**: BSc Computer Software Engineering, Babcock University (CGPA 4.34/5); English C2.
- **Contact**: `reubenalabi2006 @ gmail.com` (rendered terminal-style), LinkedIn `rubytech`, GitHub + X placeholders for you to fill.
- **Resume**: PDF uploaded — embed via `<object>` / `<iframe>` and offer a download link. PDF is served via Lovable Assets (no binary in repo).

## Technical notes

- Load `Instrument Serif` + `JetBrains Mono` via `<link>` in `__root.tsx` head (never `@import` URLs in styles.css)
- Define color + font tokens in `src/styles.css` `@theme` (Tailwind v4)
- Force dark — override `:root` tokens directly, no toggle
- Replace placeholder `index.tsx` content entirely
- Upload the resume PDF via `lovable-assets create` and import the `.asset.json` for the `/resume` embed + download
- No backend / Lovable Cloud needed
- All socials and any uncertain copy marked with `// TODO` comments for easy edits
