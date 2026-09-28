import { useState, useEffect, type ReactNode } from "react";

/**
 * Renders children only on the client after hydration.
 * Prevents SSR crashes for components that need browser APIs (canvas, WebGL, etc.)
 */
export function ClientOnly({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : <>{fallback}</>;
}
