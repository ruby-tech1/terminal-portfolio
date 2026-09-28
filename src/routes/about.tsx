import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "About Reuben Alabi: backend engineer, Head Engineer at Glass Finance, co-founder of Drifto, based in Lagos, Nigeria.",
      },
      { property: "og:title", content: "/about — Reuben Alabi" },
      {
        property: "og:description",
        content: "Backend engineer, Head Engineer at Glass Finance, co-founder of Drifto.",
      },
    ],
  }),
  component: About,
});

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "languages",
    items: ["java", "typescript", "javascript", "python", "sql", "c", "c++", "bash"],
  },
  {
    label: "backend",
    items: [
      "spring boot", "spring security", "spring data/mvc/cloud", "hibernate/jpa",
      "nestjs", "node.js", "express", "fastapi", "rest", "graphql", "websockets",
      "microservices", "flyway", "jwt", "oauth 2.0", "oidc",
    ],
  },
  {
    label: "frontend",
    items: ["react", "next.js", "html", "css", "tailwind css", "responsive ui"],
  },
  {
    label: "data & messaging",
    items: ["postgresql", "mysql", "mongodb", "dynamodb", "redis", "elasticsearch", "kafka", "rabbitmq"],
  },
  {
    label: "infra & tooling",
    items: ["docker", "kubernetes", "aws", "azure", "gcp", "nginx", "jenkins", "ci/cd", "git", "linux", "maven", "gradle"],
  },
  {
    label: "ai",
    items: ["llm / ai feature integration", "claude code", "codex", "openai api", "gemini api", "pgvector"],
  },
  {
    label: "testing & practice",
    items: ["junit", "mockito", "selenium", "tdd", "agile/scrum", "jira"],
  },
];

function About() {
  return (
    <>
      <PageLayout>
        <h2 className="font-serif text-3xl text-foreground">/about</h2>

        <p className="page-enter stagger-1">
          I'm Reuben Alabi — a software engineer based in Lagos, Nigeria. Curious by default,
          adventurous by choice.
        </p>
        <p className="page-enter stagger-2">
          I specialize in building secure, scalable systems across the entire stack. While my deepest
          roots are in backend architecture—engineering systems & services with Java, Spring Boot,
          TypeScript, and NestJS, I'm not precious about the boundary. From designing systems, data schemas,
          queues, message brokers, and event streaming, to provisioning, optimizing and securing cloud
          infrastructure and crafting responsive React and Next.js frontends, I own the product
          from concept to production.
        </p>
        <p className="page-enter stagger-3">
          These days that means{" "}
          <span className="text-[color:var(--accent)] font-mono">Glass Finance</span>, a community
          finance layer where I'm Head Engineer — I shaped the architecture and shipped a Spring Boot
          backend of 173 REST endpoints across 16 domains, including an obligation collections engine
          for members dues. It also means{" "}
          <span className="text-[color:var(--accent)] font-mono">Drifto</span>, an event platform I
          co-founded: as the sole backend engineer I took it from an empty repo to a live,
          revenue-generating product on AWS — idempotent payments, authentication and event management
          for 500+ users.
        </p>
        <p className="page-enter stagger-4">
          Along the way I've built Verrify, a property allocation and verification platform with
          PostGIS geospatial search, at Luxnet; the backend foundation for Resov at CSG Development;
          features for a government tax revenue system and a Lagos State tourism platform at CSDC
          Solutions; and full-stack client work with NDPR/GDPR-aligned compliance controls at Stalwart
          Crest.
        </p>
        <p className="page-enter stagger-5">
          What I care about: correctness, security, and keeping systems simple enough to reason about
          at 2am.
        </p>

        {/* Education */}
        <div className="pt-4 page-enter stagger-6">
          <h3 className="font-mono text-[color:var(--accent)] text-sm section-heading">// education</h3>
          <p className="mt-3">
            B.Sc. Computer Software Engineering — Babcock University, 2022 — Jul 2026. CGPA 4.34 / 5.
          </p>
        </div>

        {/* Skills */}
        <div className="pt-4 space-y-5 page-enter" style={{ animationDelay: "360ms" }}>
          <h3 className="font-mono text-[color:var(--accent)] text-sm section-heading">// skills</h3>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-muted-foreground mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill font-mono">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Volunteering */}
        <div className="pt-4 space-y-4 page-enter" style={{ animationDelay: "420ms" }}>
          <h3 className="font-mono text-[color:var(--accent)] text-sm section-heading">
            // volunteering &amp; leadership
          </h3>
          <div>
            <p className="text-foreground">
              Google Developer Group (GDG), Babcock Chapter — Software Development Track Lead
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              Designed the software curriculum across 5 tracks, mentored student developers through
              hands-on workshops, and recruited 5+ industry professionals for guest speaker sessions.
            </p>
          </div>
          <div>
            <p className="text-foreground">
              Babcock University Computer Club, Dev Team — Backend Developer
            </p>
            <p className="mt-1 text-muted-foreground text-sm">
              Built backend features for 3+ BUCC platforms supporting 1,000+ students across club,
              chaplaincy and team websites.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
