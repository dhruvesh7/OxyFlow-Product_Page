"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES, PRODUCT_HIGHLIGHTS } from "@/lib/constants";
import { cn } from "cn";

export function ProductShowcase() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section id="product" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 size-96 rounded-full bg-[var(--oxy-teal)]/5 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="The Product"
            title="Built for the Bedside"
            subtitle="A sleek wall-mount device that works seamlessly with the OxyFlow desktop app."
          />
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--oxy-teal)]/20 to-transparent blur-xl transition-all duration-500 group-hover:opacity-80" />
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-white dark:bg-slate-900 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={IMAGES.product}
                alt="OxyFlow wall-mounted oxygen monitoring device"
                width={600}
                height={450}
                className="w-full rounded-2xl"
              />
              
              {/* Hotspots */}
              <div className="absolute top-[30%] left-[45%] group/spot z-10">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--oxy-teal)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-[var(--oxy-teal)] border-2 border-white shadow-lg cursor-pointer"></span>
                </span>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover/spot:opacity-100 group-hover/spot:translate-y-0 group-active/spot:opacity-100 group-active/spot:translate-y-0 transition-all duration-300 z-20">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-border">
                    <p className="text-sm font-bold text-[var(--oxy-navy)] dark:text-white">Digital Display</p>
                    <p className="text-xs text-muted-foreground mt-1">High-contrast OLED screen readable from any angle.</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20%] right-[30%] group/spot z-10">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--oxy-teal)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-[var(--oxy-teal)] border-2 border-white shadow-lg cursor-pointer"></span>
                </span>
                <div className="absolute bottom-8 right-0 w-48 opacity-0 translate-y-2 pointer-events-none group-hover/spot:opacity-100 group-hover/spot:translate-y-0 group-active/spot:opacity-100 group-active/spot:translate-y-0 transition-all duration-300 z-20">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-border">
                    <p className="text-sm font-bold text-[var(--oxy-navy)] dark:text-white">Smart Valve</p>
                    <p className="text-xs text-muted-foreground mt-1">Precision flow control down to 0.1 L/min accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-[var(--oxy-teal)]/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 shadow-2xl z-20"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Starting at</p>
              <p className="text-3xl font-extrabold text-[var(--oxy-navy)] dark:text-white flex items-baseline gap-1">
                ₹2,500
                <span className="text-sm font-normal text-muted-foreground tracking-normal">
                  /device
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-muted-foreground dark:text-slate-300">
              Brushed-metal housing, integrated digital display, and one-click
              sync with your desktop dashboard. <strong className="text-[var(--oxy-navy)] dark:text-white font-semibold">Mount it once — monitor forever.</strong>
            </p>
            <div className="grid grid-cols-2 gap-4">
              {PRODUCT_HIGHLIGHTS.map((metric, index) => (
                <motion.button
                  key={metric.label}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMetric(index)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all duration-300 relative overflow-hidden",
                    activeMetric === index
                      ? "border-[var(--oxy-teal)] bg-[var(--oxy-teal)]/10 shadow-[0_4px_20px_rgba(0,163,173,0.15)]"
                      : "border-border bg-white dark:bg-slate-900/50 hover:border-[var(--oxy-teal)]/40 hover:shadow-md"
                  )}
                >
                  <AnimatePresence>
                    {activeMetric === index && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute inset-0 border-2 border-[var(--oxy-teal)] rounded-2xl pointer-events-none"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{metric.label}</p>
                  <p
                    className={cn(
                      "text-2xl font-bold tracking-tight",
                      metric.status === "normal"
                        ? "text-[var(--oxy-green)]"
                        : "text-[var(--oxy-navy)] dark:text-white"
                    )}
                  >
                    {metric.value}
                  </p>
                </motion.button>
              ))}
            </div>
            
            <div className="pt-4 border-t border-border/50">
              <ul className="grid sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
                {[
                  "Wall-mount kit included",
                  "Braided oxygen hose",
                  "Wi-Fi desktop sync",
                  "Tactile controls",
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    key={item} 
                    className="flex items-center gap-3"
                  >
                    <span className="flex items-center justify-center size-5 rounded-full bg-[var(--oxy-teal)]/10 text-[var(--oxy-teal)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="dark:text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
