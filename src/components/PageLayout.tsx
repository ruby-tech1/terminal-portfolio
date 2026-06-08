import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6">
        <SiteHeader />
        <main className="space-y-6 text-foreground leading-relaxed">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
