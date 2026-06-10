import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { name: "description", content: "Work experience: Co-Founder & Software Engineer at Drifto, Software Engineer at Stalwart Crest, Backend Engineer at CSDC Solutions." },
      { property: "og:title", content: "/experience — Reuben Alabi" },
      { property: "og:description", content: "Work experience across fullstack and backend engineering roles." },
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
    title: "Co-Founder & Software Engineer",
    company: "Drifto",
    period: "Jul 2025 — Present",
    bullets: [
      "Sole backend engineer: designed and shipped the entire Spring Boot backend — event management, authentication, and Paystack payments — serving 500+ users across live events at ~95% ticket fulfillment.",
      "Built the Next.js/React web MVP with design parity to the mobile app; the platform holds 99.5% API uptime with ~250ms average response times.",
      "Owned everything from database schema to payment security, taking the product from empty repo to a live, revenue-generating platform.",
    ],
    tags: ["Spring Boot", "Next.js", "React", "Paystack", "PostgreSQL"],
  },
  {
    title: "Software Engineer",
    company: "Stalwart Crest Ltd (Remote)",
    period: "Sep 2023 — Present",
    bullets: [
      "Build and maintain React and Next.js applications — cut page load times by 25% and measurably improved the user experience.",
      "Hardened the backend with Spring Security, reducing vulnerabilities by 15% while keeping the platform compliant with industry regulations.",
      "Keep Java/Spring Boot services fast and scalable — the systems absorbed a 30% surge in user traffic without breaking stride.",
    ],
    tags: ["React", "Next.js", "Java", "Spring Boot", "Spring Security"],
  },
  {
    title: "Backend Engineer",
    company: "CSDC Solutions (Hybrid)",
    period: "Jan 2025 — Jun 2025",
    bullets: [
      "Worked on a government tax revenue system in Java — shipped new features and resolved critical issues, lifting system efficiency by 20%.",
      "Hunted down persistent performance bottlenecks in large-scale deployments, improving transaction throughput while staying within regulatory lines.",
      "Helped build a Spring Boot tourism platform for Lagos State, wiring in real-time data feeds and user-facing modules that raised engagement by 15%.",
    ],
    tags: ["Java", "Spring Boot", "Compliance", "Realtime"],
  },
];

function Experience() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/experience</h2>
      <p className="text-muted-foreground text-sm">
        Where I've worked. Listed newest first.
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
