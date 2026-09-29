"use client";

import { Download, Monitor, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GradientButton } from "@/components/ui/gradient-button";
import { INSTALL_STEPS, PRODUCT } from "@/lib/constants";
import { cn } from "cn";
import { useState } from "react";
import { motion } from "framer-motion";

export function DownloadSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="download" className="relative py-24 bg-gradient-to-b from-slate-50 to-[var(--oxy-blue-tint)]/30 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="Get Started"
            title="Download OxyFlow Desktop App"
            subtitle="Install on your hospital PC and connect to your OxyFlow devices."
          />
        </motion.div>
        
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-[2rem] border border-[var(--oxy-teal)]/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500",
              hovered && "shadow-2xl scale-[1.02] border-[var(--oxy-teal)]/50"
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--oxy-teal)]/5 to-transparent rounded-[2rem] pointer-events-none" />
            
            <motion.div 
              animate={{ 
                y: hovered ? -5 : 0,
                boxShadow: hovered ? "0 20px 25px -5px rgba(0, 163, 173, 0.3)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mb-8 flex size-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[var(--oxy-navy)] to-[var(--oxy-teal)] text-white shadow-lg"
            >
              <Monitor className="size-12" />
            </motion.div>
            
            <GradientButton
              href={PRODUCT.desktopDownloadUrl}
              download
              size="lg"
              className="mb-4 relative z-10 w-full shadow-lg hover:shadow-[var(--oxy-teal)]/20"
            >
              <Download className="mr-2 size-5" />
              Download OxyFlow (.exe)
            </GradientButton>
            
            <p className="text-sm text-muted-foreground font-medium relative z-10">
              Windows 10+ · ~50 MB
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground relative z-10 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
              <Shield className="size-4 text-[var(--oxy-green)]" />
              Safe & verified installer
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
            className="rounded-[2rem] border border-border/50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-8 shadow-lg"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--oxy-navy)] dark:text-slate-300">
              Quick Install Guide
            </h3>
            <ol className="space-y-6">
              {INSTALL_STEPS.map((step, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  key={step} 
                  className="flex gap-4 items-start"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--oxy-teal)] to-[var(--oxy-green)] text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
