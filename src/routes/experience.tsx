import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Work experience: Head Engineer at Glass Finance, Co-founder & Backend Engineer at Drifto, Backend Engineer at Luxnet and CSDC Solutions, Software Engineer at CSG Development and Stalwart Crest.",
      },
      { property: "og:title", content: "/experience — Reuben Alabi" },
      {
        property: "og:description",
        content: "Work experience across backend and full-stack engineering roles.",
      },
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
  isLive?: boolean;
};

const roles: Role[] = [
  {
    title: "Head Engineer, Platform & Backend Architecture",
    company: "Glass Finance (Remote)",
    period: "May 2026 — Present",
    isLive: true,
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
    isLive: true,
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
    isLive: true,
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

// IDE control dots
function ControlDots() {
  return (
    <div className="flex gap-1.5">
      <span className="ide-dot" style={{ background: "rgba(255,96,96,0.5)", border: "1px solid rgba(255,96,96,0.3)" }} />
      <span className="ide-dot" style={{ background: "rgba(255,189,68,0.5)", border: "1px solid rgba(255,189,68,0.3)" }} />
      <span className="ide-dot" style={{ background: "rgba(0,255,136,0.5)", border: "1px solid rgba(0,255,136,0.3)" }} />
    </div>
  );
}

function Experience() {
  return (
    <>
      <PageLayout>
        <h2 className="font-serif text-3xl text-foreground">/experience</h2>
        <p className="text-muted-foreground text-sm">Where I've worked. Current roles first.</p>

        <ul className="timeline-list space-y-8 pt-4">
          {roles.map((r, idx) => {
            const delay = idx * 70;
            return (
              <li
                key={r.company}
                className={`timeline-item ide-card page-enter ${r.isLive ? "is-live" : ""}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* IDE title bar */}
                <div className="ide-card-header">
                  <ControlDots />
                  <span className="font-mono text-xs text-muted-foreground ml-1 truncate">
                    {r.company.toLowerCase().replace(/[\s()]/g, "_")}.log
                  </span>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono hidden sm:block">
                      {r.period}
                    </span>
                    {r.isLive && (
                      <span className="live-badge">
                        <span className="live-dot" />
                        live
                      </span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="ide-card-body space-y-3">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <h3 className="font-mono text-[color:var(--accent)] text-sm">{r.company}</h3>
                    <span className="text-xs text-muted-foreground font-mono sm:hidden">{r.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.title}</p>
                  <ul className="list-disc pl-5 space-y-1 marker:text-muted-foreground text-foreground text-sm">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {r.tags.map((t) => (
                      <span key={t} className="tag-chip font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </PageLayout>
    </>
  );
}
