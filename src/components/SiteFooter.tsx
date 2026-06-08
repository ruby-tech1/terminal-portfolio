import { Github, Linkedin } from "lucide-react";

// TODO: replace with your real handles
const GITHUB = "https://github.com/rubytech";
const LINKEDIN = "https://www.linkedin.com/in/rubytech";
const X = "https://x.com/rubytech";

export function SiteFooter() {
  return (
    <footer className="mt-20 pt-10 border-t border-border">
      <p className="text-foreground">
        You can reach me via email:{" "}
        <span className="font-mono text-[color:var(--accent)]">
          reubenalabi2006 @ [gmail.com]
        </span>
      </p>
      <p className="mt-3 text-muted-foreground text-sm">
        Of course, replace [gmail.com] with the actual domain. Just fighting spambots.
      </p>
      <div className="mt-8 flex gap-5 text-muted-foreground">
        <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition">
          <Github className="size-5" />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition">
          <Linkedin className="size-5" />
        </a>
        <a href={X} target="_blank" rel="noreferrer" aria-label="X" className="hover:text-foreground transition">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.5 22H1.244l8.02-9.16L1 2h6.97l4.84 6.39L18.244 2Zm-1.2 18h1.86L7.04 4H5.06l11.984 16Z"/></svg>
        </a>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground font-mono">
        ◉ you are visitor <span className="text-[color:var(--accent)]">#001</span>
      </p>
    </footer>
  );
}
