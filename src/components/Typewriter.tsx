import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 35, className }: { text: string; speed?: number; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);
  return (
    <span className={className}>
      {text.slice(0, i)}
      <span className="caret h-[1em] align-[-0.15em]" />
    </span>
  );
}
