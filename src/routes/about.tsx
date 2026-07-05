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

function About() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/about</h2>
      <p>
        I'm Reuben Alabi — a software engineer based in Lagos, Nigeria. Curious by default,
        adventurous by choice.
      </p>
      <p>
        My home turf is the backend: Java and Spring Boot, NestJS, the databases, queues and payment
        rails underneath a product. But I'm not precious about the boundary — I build the React and
        Next.js frontends too, and I've shipped end-to-end more than once.
      </p>
      <p>
        These days that means{" "}
        <span className="text-[color:var(--accent)] font-mono">Glass Finance</span>, a community
        finance layer where I'm Head Engineer — I shaped the architecture and shipped a Spring Boot
        backend of 173 REST endpoints across 16 domains, including an obligation engine that posts
        member dues to a double-entry ledger. It also means{" "}
        <span className="text-[color:var(--accent)] font-mono">Drifto</span>, an event platform I
        co-founded: as the sole backend engineer I took it from an empty repo to a live,
        revenue-generating product on AWS — idempotent payments, authentication and event management
        for 500+ users.
      </p>
      <p>
        Along the way I've built Verrify, a property allocation and verification platform with
        PostGIS geospatial search, at Luxnet; the backend foundation for Resov at CSG Development;
        features for a government tax revenue system and a Lagos State tourism platform at CSDC
        Solutions; and full-stack client work with NDPR/GDPR-aligned compliance controls at Stalwart
        Crest.
      </p>
      <p>
        What I care about: correctness, security, and keeping systems simple enough to reason about
        at 2am.
      </p>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// education</h3>
        <p className="mt-2">
          B.Sc. Computer Software Engineering — Babcock University, 2022 — Jul 2026. CGPA 4.34 / 5.
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
            spring boot · spring security · spring data / mvc / cloud · hibernate / jpa · nestjs ·
            node.js · express · fastapi · rest · graphql · websockets · microservices · flyway · jwt
            · oauth 2.0 · oidc
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
            postgresql · mysql · mongodb · dynamodb · redis · elasticsearch · kafka · rabbitmq
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">infra &amp; tooling</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            docker · kubernetes · aws · azure · gcp · nginx · jenkins · ci/cd · git · linux · maven
            · gradle
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground">ai</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            llm / ai feature integration · ai-assisted development (claude code, codex) · openai
            &amp; gemini apis · pgvector
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
        <h3 className="font-mono text-[color:var(--accent)] text-sm">
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
  );
}
