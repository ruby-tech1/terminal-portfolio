import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { name: "description", content: "Writing on software engineering, backend architecture, and building Drifto." },
      { property: "og:title", content: "/blog — Reuben Alabi" },
      { property: "og:description", content: "Writing — coming soon." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageLayout>
      <h2 className="font-serif text-3xl text-foreground">/blog</h2>
      <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap leading-6">
{`$ ls -la posts/
total 0
drwxr-xr-x  2 reuben staff  64 Jun  8 19:00 .
drwxr-xr-x  6 reuben staff 192 Jun  8 19:00 ..

# nothing here yet — writing soon.
# expect notes on spring boot, payments infra, and building drifto.`}
      </pre>
    </PageLayout>
  );
}
