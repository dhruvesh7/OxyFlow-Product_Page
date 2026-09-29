"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--oxy-navy)] transition-colors hover:bg-[var(--oxy-blue-tint)] dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <span className="size-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--oxy-navy)] transition-colors hover:bg-[var(--oxy-blue-tint)] dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}
