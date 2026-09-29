"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { GradientButton } from "@/components/ui/gradient-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_LINKS, PRODUCT } from "@/lib/constants";
import { cn } from "cn";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="md" linkToTop />

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--oxy-teal)] relative py-2",
                  isActive ? "text-[var(--oxy-teal)] dark:text-[var(--oxy-teal)]" : "text-[var(--oxy-navy)]/80 dark:text-slate-300"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--oxy-teal)] rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <GradientButton href={PRODUCT.desktopDownloadUrl} download size="default">
            <Download className="mr-1.5 size-3.5" />
            Download
          </GradientButton>
          <GradientButton
            href="#pricing"
            size="default"
          >
            Order Now
          </GradientButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--oxy-navy)] dark:text-slate-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 dark:border-white/10 bg-white dark:bg-slate-950 transition-all lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-[var(--oxy-teal)]/10 text-[var(--oxy-teal)]" 
                    : "text-[var(--oxy-navy)] dark:text-slate-300 hover:bg-[var(--oxy-blue-tint)] dark:hover:bg-slate-800"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 flex flex-col gap-2">
            <GradientButton href={PRODUCT.desktopDownloadUrl} download className="w-full">
              Download for Windows
            </GradientButton>
            <GradientButton href="#pricing" className="w-full">
              Order Now
            </GradientButton>
          </div>
        </nav>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--oxy-teal)] to-[var(--oxy-green)] origin-left z-50"
        style={{ scaleX }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border/60 dark:bg-white/10" />
    </header>
  );
}
