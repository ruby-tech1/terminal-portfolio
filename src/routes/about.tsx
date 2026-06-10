import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
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
        The proof is <span className="text-[color:var(--accent)] font-mono">Drifto</span>,
        an event platform I co-founded. As the sole backend engineer I took it
        from an empty repo to a live, revenue-generating product — event
        management, authentication and Paystack payments for 500+ users.
        Before and alongside that, I've worked on government tax revenue
        systems, a tourism platform for Lagos State, and frontend and backend
        work for Stalwart Crest.
      </p>
      <p>
        What I care about: correctness, security, and keeping systems simple
        enough to reason about at 2am.
      </p>

      <div className="pt-4">
        <h3 className="font-mono text-[color:var(--accent)] text-sm">// education</h3>
        <p className="mt-2">
          B.Sc. Computer Software Engineering — Babcock University.
          CGPA 4.34 / 5.
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
            graphql · websockets · microservices
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
          <p className="font-mono text-xs text-muted-foreground">testing &amp; practice</p>
          <p className="mt-1 text-muted-foreground text-sm font-mono leading-7">
            junit · mockito · selenium · tdd · agile / scrum · jira
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
