"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { DynamicIcon } from "@/components/ui/icon-map";
import { FEATURES } from "@/lib/constants";
import { cn } from "cn";
import { motion, AnimatePresence } from "framer-motion";

export function Features() {
  const [active, setActive] = useState(FEATURES[0].id);
  const current = FEATURES.find((f) => f.id === active) ?? FEATURES[0];

  return (
    <section id="features" className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-1/2 left-0 -ml-40 -mt-40 size-96 rounded-full bg-[var(--oxy-green)]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="Desktop App"
            title="Everything on Your Screen"
            subtitle="The OxyFlow desktop app puts full control at your nursing station."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 mt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            {FEATURES.map((feature) => (
              <motion.button
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                type="button"
                onClick={() => setActive(feature.id)}
                className={cn(
                  "relative flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 overflow-hidden",
                  active === feature.id
                    ? "border-[var(--oxy-teal)]/50 bg-white dark:bg-slate-900 shadow-xl"
                    : "border-transparent bg-white/40 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md"
                )}
              >
                {active === feature.id && (
                  <motion.div
                    layoutId="feature-active-border"
                    className="absolute inset-0 border-2 border-[var(--oxy-teal)] rounded-2xl pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                    active === feature.id
                      ? "bg-[var(--oxy-teal)] text-white shadow-md scale-110"
                      : "bg-[var(--oxy-navy)]/5 dark:bg-white/10 text-[var(--oxy-navy)] dark:text-white"
                  )}
                >
                  <DynamicIcon name={feature.icon} className="size-5" />
                </div>
                <span
                  className={cn(
                    "font-semibold text-lg transition-colors",
                    active === feature.id
                      ? "text-[var(--oxy-navy)] dark:text-white"
                      : "text-muted-foreground dark:text-slate-400"
                  )}
                >
                  {feature.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 h-full"
          >
            <div className="relative flex h-full min-h-[320px] flex-col justify-between rounded-3xl border border-border/50 bg-white dark:bg-slate-900 p-8 shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col h-full"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--oxy-teal)] to-[var(--oxy-green)] text-white shadow-lg shadow-[var(--oxy-teal)]/20">
                    <DynamicIcon name={current.icon} className="size-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[var(--oxy-navy)] dark:text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground dark:text-slate-300 mb-4 flex-grow">
                    {current.description}
                  </p>

                  {current.image && (
                    <div className="relative w-full h-48 lg:h-64 my-4 group">
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

              {/* Subtle background decoration */}
              <div className="absolute -bottom-24 -right-24 size-64 rounded-full bg-gradient-to-br from-[var(--oxy-teal)]/5 to-[var(--oxy-green)]/5 blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-border/50 bg-white/60 dark:bg-slate-900/60 p-8 md:p-12 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--oxy-teal)]/5 to-transparent pointer-events-none" />

          <div className="relative z-10 mb-10 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-[var(--oxy-teal)]/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-semibold text-[var(--oxy-teal)] flex items-center gap-2">
                <DynamicIcon name="ShieldCheck" className="size-4" />
                AWS Powered Security
              </span>
            </div>
            <h3 className="text-3xl font-bold text-[var(--oxy-navy)] dark:text-white">Role-Based Access Control</h3>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Customized dashboards and workflows for every member of your team, backed by secure AWS database and authentication.
            </p>
          </div>

          <div className="relative z-10 grid gap-6 md:grid-cols-3">
            {/* Admin */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-border/50 hover:shadow-md transition-shadow">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[var(--oxy-navy)]/10 text-[var(--oxy-navy)] dark:bg-white/10 dark:text-white">
                  <DynamicIcon name="Lock" className="size-5" />
                </div>
                <h4 className="text-xl font-bold text-[var(--oxy-navy)] dark:text-white">Admin</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground dark:text-slate-300">
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Dashboard</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Hospitals</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Hospital Analytics</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> My Profile</li>
              </ul>
            </div>

            {/* Hospital Administrator */}
            <div className="rounded-2xl bg-gradient-to-b from-[var(--oxy-teal)]/10 to-transparent dark:from-[var(--oxy-teal)]/20 p-6 shadow-sm ring-1 ring-[var(--oxy-teal)]/30 hover:shadow-md transition-shadow relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--oxy-teal)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Facility Manager</div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[var(--oxy-teal)] text-white shadow-sm">
                  <DynamicIcon name="Building2" className="size-5" />
                </div>
                <h4 className="text-xl font-bold text-[var(--oxy-navy)] dark:text-white">Hospital Admin</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground dark:text-slate-300">
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Dashboard & Analytics</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Alerts Overview</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Patients / Devices</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> Device Maintenance</li>
                <li className="flex items-center gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)]" /> My Profile</li>
              </ul>
            </div>

            {/* Clinical Staff */}
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-border/50 hover:shadow-md transition-shadow">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[var(--oxy-green)]/10 text-[var(--oxy-green)] dark:bg-[var(--oxy-green)]/20">
                  <DynamicIcon name="Stethoscope" className="size-5" />
                </div>
                <h4 className="text-xl font-bold text-[var(--oxy-navy)] dark:text-white">Clinical Staff</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground dark:text-slate-300">
                <li className="flex items-start gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)] shrink-0 mt-0.5" /> Dashboard & Analytics</li>
                <li className="flex items-start gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)] shrink-0 mt-0.5" /> Alerts with acknowledgement</li>
                <li className="flex items-start gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)] shrink-0 mt-0.5" /> <span>Patients / Devices <span className="block text-xs opacity-80">(Auto/Manual & Prescribed Flow)</span></span></li>
                <li className="flex items-start gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)] shrink-0 mt-0.5" /> Event Log</li>
                <li className="flex items-start gap-2"><DynamicIcon name="CheckCircle2" className="size-4 text-[var(--oxy-teal)] shrink-0 mt-0.5" /> My Profile</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
