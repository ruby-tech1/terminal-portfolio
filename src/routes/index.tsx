import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reuben Alabi — Software Engineer & Founder" },
      { name: "description", content: "Fullstack software engineer and founder. I build clean, scalable systems and intuitive interfaces with Java, Spring Boot, TypeScript and React." },
      { property: "og:title", content: "Reuben Alabi — Software Engineer & Founder" },
      { property: "og:description", content: "Fullstack engineer building clean, scalable systems." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <p className="text-foreground text-lg">
        <Typewriter text="Software Engineer. Founder." />
      </p>
      <p className="text-foreground">
        Curious by default; adventurous by choice. I build clean, scalable
        backend systems and intuitive interfaces — currently shipping{" "}
        <a
          href="#"
          className="text-[color:var(--accent)] underline underline-offset-4"
        >
          Drifto
        </a>{" "}
        and contributing across Java / Spring Boot, TypeScript, NestJS, Next.js
        and React stacks.
      </p>

      <p className="pt-4 text-foreground">Some of the stuff I made:</p>
      <ul className="list-disc pl-6 space-y-2 marker:text-muted-foreground">
        <li>
          <span className="font-mono text-[color:var(--accent)]">Drifto</span>
          <span className="text-foreground">
            : Event platform — Spring Boot backend + Next.js MVP, Paystack payments,
            500+ users.
          </span>
        </li>
        <li>
          <span className="font-mono text-[color:var(--accent)]">Tax_Revenue</span>
          <span className="text-foreground">
            : Government tax processing system in Java, ~20% efficiency gain.
          </span>
        </li>
        <li>
          <span className="font-mono text-[color:var(--accent)]">Lagos_Tourism</span>
          <span className="text-foreground">
            : Spring Boot modules with real-time data for Lagos State.
          </span>
        </li>
      </ul>

      <p className="pt-2 text-muted-foreground text-sm">
        More on{" "}
        <Link to="/projects" className="text-[color:var(--accent)] underline underline-offset-4">
          /projects
        </Link>
        .
      </p>
    </PageLayout>
  );
}
