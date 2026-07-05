import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Things I've built: Drifto, an event management and ticketing platform, and Role AI, a role-aware AI assistant for software engineering teams.",
      },
      { property: "og:title", content: "/projects — Reuben Alabi" },
      { property: "og:description", content: "Things I've built." },
    ],
  }),
  component: Projects,
});

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  tagline: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: "Drifto",
    tagline:
      "Event management and ticketing, live in production. I co-founded it and built every layer of the backend.",
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
    tagline:
      "An AI assistant that adapts to your role on an engineering team — requirements, design, or analysis.",
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

function Projects() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/projects</h2>
      <p className="text-muted-foreground text-sm">
        Things I've built. For where I've worked, see{" "}
        <Link to="/experience" className="text-[color:var(--accent)] underline underline-offset-4">
          /experience
        </Link>
        .
      </p>
      <ul className="space-y-10 pt-4">
        {projects.map((p) => (
          <li key={p.name} className="space-y-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-mono text-[color:var(--accent)]">{p.name}</h3>
              <span className="flex gap-3 text-xs font-mono">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[color:var(--accent)] underline underline-offset-4"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{p.tagline}</p>
            <ul className="list-disc pl-6 space-y-1 marker:text-muted-foreground text-foreground">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {p.tags.map((t) => (
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
