import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "/projects — Reuben Alabi" },
      { name: "description", content: "Selected work: Drifto event platform, government tax revenue system, Lagos tourism platform, and Stalwart Crest engineering." },
      { property: "og:title", content: "/projects — Reuben Alabi" },
      { property: "og:description", content: "Selected engineering work across fullstack, backend and platform projects." },
    ],
  }),
  component: Projects,
});

type Project = {
  name: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Drifto",
    role: "Co-Founder & Software Engineer",
    period: "Jul 2025 — Present",
    bullets: [
      "Architected and shipped the full Spring Boot backend as sole backend engineer, powering event management, auth, and Paystack payments for 500+ users.",
      "Built the Next.js / React web MVP with design parity to mobile, sustaining 99.5% API uptime and ~250ms average response.",
      "Owned the full-stack lifecycle: schema design, REST APIs, payment infra and security — concept to revenue-generating platform.",
    ],
    tags: ["Spring Boot", "Next.js", "Paystack", "PostgreSQL"],
  },
  {
    name: "Stalwart Crest",
    role: "Software Engineer (Remote)",
    period: "Sep 2023 — Present",
    bullets: [
      "Engineered dynamic front-end apps with React and Next.js, cutting page load times by 25%.",
      "Strengthened backend with Spring Security, reducing vulnerabilities by 15%.",
      "Scaled Spring Boot services through a 30% traffic surge via API integrations and tuning.",
    ],
    tags: ["React", "Next.js", "Spring Boot", "Spring Security"],
  },
  {
    name: "Tax Revenue System",
    role: "Backend Engineer — CSDC Solutions",
    period: "Jan 2025 — Jun 2025",
    bullets: [
      "Maintained and extended a government tax revenue system in Java, boosting system efficiency by ~20%.",
      "Diagnosed and resolved persistent performance bottlenecks across large-scale deployments.",
    ],
    tags: ["Java", "Spring Boot", "Compliance"],
  },
  {
    name: "Lagos Tourism System",
    role: "Backend Engineer — CSDC Solutions",
    period: "2025",
    bullets: [
      "Built Spring Boot modules for Lagos State tourism, integrating real-time data feeds.",
      "Improved user engagement by 15% through accessibility and UX-focused backend changes.",
    ],
    tags: ["Spring Boot", "Realtime"],
  },
];

function Projects() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/projects</h2>
      <p className="text-muted-foreground text-sm">
        Selected work. Listed newest first.
      </p>
      <ul className="space-y-10 pt-4">
        {projects.map((p) => (
          <li key={p.name} className="space-y-2">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-mono text-[color:var(--accent)]">
                {p.name}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                {p.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{p.role}</p>
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
