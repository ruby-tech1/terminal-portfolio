import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Backend engineer building reliable, scalable systems in Java and Spring Boot, paired with React frontends. Head Engineer at Glass Finance, co-founder of Drifto.",
      },
      { property: "og:title", content: "Reuben Alabi — Backend Engineer" },
      {
        property: "og:description",
        content: "Backend engineer building reliable, scalable full-stack systems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <p className="text-foreground text-lg">
        <Typewriter text="Backend Engineer. Full-Stack Systems." />
      </p>
      <p className="text-foreground">
        I'm Reuben. I live mostly on the backend — Java, Spring Boot, NestJS — but I ship the whole
        stack when the product needs it. Right now I'm Head Engineer at Glass Finance, a community
        finance layer, driving architecture and deployment from concept to production. I also
        co-founded{" "}
        <a
          href="https://www.drifto.app"
          target="_blank"
          rel="noreferrer"
          className="text-[color:var(--accent)] underline underline-offset-4"
        >
          Drifto
        </a>
        , an event platform whose entire backend I designed and built.
      </p>
      <p className="text-foreground">
        I've done this for startups and for government-scale systems alike: payments infrastructure,
        tax processing, property verification, real-time data — the unglamorous machinery that has
        to work every time.
      </p>

      <p className="pt-4 text-foreground">Some of the stuff I made:</p>
      <ul className="list-disc pl-6 space-y-2 marker:text-muted-foreground">
        <li>
          <span className="font-mono text-[color:var(--accent)]">Drifto</span>
          <span className="text-foreground">
            : event management and ticketing — idempotent payments, auth, 500+ users, live and
            revenue-generating.
          </span>
        </li>
        <li>
          <span className="font-mono text-[color:var(--accent)]">Role_AI</span>
          <span className="text-foreground">
            : an AI assistant that adapts to your role on an engineering team — chat with live UML,
            ERD and flowchart rendering.
          </span>
        </li>
      </ul>

      <p className="pt-2 text-muted-foreground text-sm">
        More on{" "}
        <Link to="/projects" className="text-[color:var(--accent)] underline underline-offset-4">
          /projects
        </Link>{" "}
        — or see where I've worked on{" "}
        <Link to="/experience" className="text-[color:var(--accent)] underline underline-offset-4">
          /experience
        </Link>
        .
      </p>
    </PageLayout>
  );
}
