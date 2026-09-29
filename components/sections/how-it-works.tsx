"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { DynamicIcon } from "@/components/ui/icon-map";
import { IMAGES, SIMPLE_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-[var(--oxy-teal)]/5 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="Simple Setup"
            title="Up and Running in 3 Steps"
            subtitle="No complex setup. Mount the device, install the app, and start monitoring."
          />
        </motion.div>

        <div className="my-16 grid gap-8 md:grid-cols-3">
          {SIMPLE_STEPS.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8 }}
              key={step.step}
              className="group relative rounded-3xl border border-border/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-8 text-center shadow-lg transition-all hover:shadow-2xl hover:border-[var(--oxy-teal)]/40"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--oxy-teal)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10 mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--oxy-teal)] to-[var(--oxy-green)] text-2xl font-black text-white shadow-lg shadow-[var(--oxy-teal)]/30 group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              <div className="relative z-10 mb-4 flex justify-center text-[var(--oxy-teal)]">
                <div className="p-3 bg-[var(--oxy-teal)]/10 rounded-full group-hover:bg-[var(--oxy-teal)]/20 transition-colors">
                  <DynamicIcon name={step.icon} className="size-7" />
                </div>
              </div>
              <h3 className="relative z-10 mb-3 text-xl font-bold text-[var(--oxy-navy)] dark:text-white">
                {step.title}
              </h3>
              <p className="relative z-10 text-base leading-relaxed text-muted-foreground dark:text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
