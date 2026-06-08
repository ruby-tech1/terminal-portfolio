import { Link } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "/about" },
  { to: "/projects", label: "/projects" },
  { to: "/blog", label: "/blog" },
  { to: "/resume", label: "/resume" },
] as const;

export function SiteHeader() {
  return (
    <header className="pt-16 pb-10">
      <Link to="/" className="block">
        <h1 className="font-serif text-6xl md:text-7xl text-foreground leading-none">
          Reuben<span className="caret h-[0.9em] align-[-0.1em]" />
        </h1>
      </Link>
      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-[color:var(--accent)] underline underline-offset-4 decoration-[color:var(--accent)]/40 hover:decoration-[color:var(--accent)] transition"
            activeProps={{ className: "text-[color:var(--accent)] underline underline-offset-4 decoration-[color:var(--accent)]" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
