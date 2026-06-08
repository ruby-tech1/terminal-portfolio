import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "/about — Reuben Alabi" },
      { name: "description", content: "About Reuben Alabi: fullstack software engineer, co-founder of Drifto, based in Lagos, Nigeria." },
      { property: "og:title", content: "/about — Reuben Alabi" },
      { property: "og:description", content: "Fullstack engineer, co-founder of Drifto, based in Lagos." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/about</h2>
      <p>
        I'm Reuben — a fullstack software engineer based in Lagos, Nigeria. I
        work across Java, Spring Boot, TypeScript, NestJS, Node.js, Express,
        React and Next.js, building responsive web applications with clean
        backend integration.
      </p>
      <p>
        I co-founded <span className="text-[color:var(--accent)] font-mono">Drifto</span>,
        where I architect and ship the full Spring Boot backend powering event
        management, authentication, and Paystack payments for live events.
      </p>
      <p>
        Outside of product work, I care about correctness, observability and
        keeping systems simple enough to reason about at 2am.
      </p>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// education</h3>
        <p className="mt-2">
          B.Sc. Computer Software Engineering — Babcock University, Nigeria.
          CGPA 4.34 / 5.
        </p>
      </div>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// languages</h3>
        <p className="mt-2">English — C2 (Proficient / Fluent).</p>
      </div>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// stack</h3>
        <p className="mt-2 text-muted-foreground text-sm font-mono leading-7">
          java · spring boot · spring security · typescript · nestjs · node ·
          next.js · react · postgres · mysql · redis · kafka · docker ·
          kubernetes · aws · gcp
        </p>
      </div>
    </PageLayout>
  );
}
