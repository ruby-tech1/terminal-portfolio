import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <div className="relative min-h-screen bg-background" style={{ zIndex: 1 }}>
      <div className="mx-auto max-w-2xl px-6 pt-10">
        {!isHome && (
          <Link
            to="/"
            aria-label="Back to home"
            className="inline-block font-mono text-sm text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground hover:decoration-foreground hover:text-shadow transition"
          >
            ..
          </Link>
        )}
        <SiteHeader />
        <main className="page-enter space-y-6 text-foreground leading-relaxed">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
