import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "/resume — Reuben Alabi" },
      { name: "description", content: "Resume of Reuben Alabi, fullstack software engineer." },
      { property: "og:title", content: "/resume — Reuben Alabi" },
      { property: "og:description", content: "Resume — fullstack software engineer." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageLayout>
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2 className="font-serif text-3xl text-foreground">/resume</h2>
        <a
          href={resumeAsset.url}
          download
          className="font-mono text-sm text-[color:var(--accent)] underline underline-offset-4"
        >
          ↓ download.pdf
        </a>
      </div>
      <p className="text-muted-foreground text-sm">
        Inline preview below. Open in a new tab if your browser blocks the embed.
      </p>
      <div className="border border-border bg-muted h-[80vh] mt-4">
        <object
          data={resumeAsset.url}
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src={resumeAsset.url}
            className="w-full h-full"
            title="Reuben Alabi resume"
          />
        </object>
      </div>
    </PageLayout>
  );
}
