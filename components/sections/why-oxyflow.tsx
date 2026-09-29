"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { DynamicIcon } from "@/components/ui/icon-map";
import { WHY_POINTS } from "@/lib/constants";
import { cn } from "cn";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhyOxyFlow() {
  const [active, setActive] = useState(0);

  return (
    <section id="why" className="relative py-24 bg-gradient-to-b from-white to-[var(--oxy-blue-tint)]/50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="The Problem"
            title="Why Hospitals Choose OxyFlow"
            subtitle="Manual oxygen checks leave gaps. OxyFlow closes them — automatically."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/50 bg-white dark:bg-slate-900 p-2 shadow-2xl"
        >
          <Image
            src="/images/current-process.png"
            alt="Current Process - End to End Flow and Gaps"
            width={1200}
            height={550}
            className="w-full rounded-2xl object-contain bg-white"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mt-16">
          {WHY_POINTS.map((point, index) => (
            <motion.button
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "group relative rounded-3xl border p-8 text-left transition-all duration-500 overflow-hidden",
                active === index
                  ? "border-[var(--oxy-teal)]/50 bg-white dark:bg-slate-900 shadow-2xl scale-[1.03]"
                  : "border-border/50 bg-white/60 dark:bg-slate-900/50 hover:border-[var(--oxy-teal)]/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl"
              )}
            >
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    layoutId="why-active-bg"
                    className="absolute inset-0 bg-gradient-to-br from-[var(--oxy-teal)]/5 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
              
              <div
                className={cn(
                  "relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl transition-all duration-300",
                  active === index
                    ? "bg-gradient-to-br from-[var(--oxy-teal)] to-[var(--oxy-green)] text-white shadow-lg"
                    : "bg-[var(--oxy-navy)]/5 dark:bg-white/10 text-[var(--oxy-navy)] dark:text-white group-hover:scale-110 group-hover:bg-[var(--oxy-teal)]/10 group-hover:text-[var(--oxy-teal)]"
                )}
              >
                <DynamicIcon name={point.icon} className="size-6" />
              </div>
              <h3 className={cn(
                "relative z-10 mb-3 text-xl font-bold transition-colors duration-300",
                active === index ? "text-[var(--oxy-teal)]" : "text-[var(--oxy-navy)] dark:text-white"
              )}>
                {point.title}
              </h3>
              <p className="relative z-10 leading-relaxed text-muted-foreground dark:text-slate-400">
                {point.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
