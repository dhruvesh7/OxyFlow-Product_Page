"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Mail, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { OrderModal } from "@/components/ui/order-modal";
import { ThreeDCard } from "@/components/ui/3d-card";
import { IMAGES, PRODUCT } from "@/lib/constants";
import { cn } from "cn";

const stats = [
  { label: "Flow", value: 2.5, unit: "L/min", color: "text-[var(--oxy-green)]" },
  { label: "Humidity", value: 45, unit: "%", color: "text-[var(--oxy-teal)]" },
];

export function Hero() {
  const [flow, setFlow] = useState(2.5);
  const [humidity, setHumidity] = useState(45);
  const [pulse, setPulse] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlow(2.4 + Math.random() * 0.2);
      setHumidity(44 + Math.random() * 2);
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--oxy-blue-tint)] to-[var(--oxy-green-tint)] dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-[var(--oxy-teal)]/20 dark:bg-[var(--oxy-teal)]/40 blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-[var(--oxy-green)]/20 dark:bg-[var(--oxy-green)]/40 blur-3xl" 
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="lg" />
          </motion.div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="border-[var(--oxy-teal)]/20 bg-[var(--oxy-teal)]/10 text-[var(--oxy-teal)] shadow-sm">
                <Monitor className="mr-1.5 size-3" />
                Next-Gen Medical Device
              </Badge>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-extrabold leading-tight tracking-tight text-[var(--oxy-navy)] dark:text-white sm:text-6xl lg:text-[4rem]"
            >
              Monitor Every Breath.{" "}
              <span className="text-gradient-flow block mt-2">Protect Every Patient.</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground dark:text-slate-300"
          >
            OxyFlow pairs a smart bedside device with a powerful desktop app —
            giving your team real-time oxygen monitoring, instant alerts, and
            digital records from one screen.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <GradientButton href={PRODUCT.desktopDownloadUrl} download size="lg" className="shadow-xl hover:shadow-[var(--oxy-teal)]/20 hover:-translate-y-1 transition-all">
              <Download className="mr-2 size-5" />
              Download App
            </GradientButton>
            <GradientButton
              as="button"
              onClick={() => setIsOrderModalOpen(true)}
              size="lg"
              className="cursor-pointer"
            >
              <Mail className="mr-2 size-5" />
              Order Now
            </GradientButton>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            {["Real-time monitoring", "Desktop alerts", "Digital records"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground dark:text-slate-400"
                >
                  <span className="size-2.5 rounded-full bg-gradient-to-r from-[var(--oxy-teal)] to-[var(--oxy-green)] shadow-[0_0_8px_rgba(0,163,173,0.5)]" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--oxy-teal)]/30 to-[var(--oxy-green)]/30 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 opacity-60" />
          <ThreeDCard className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 p-2 shadow-2xl backdrop-blur-sm">

            <Image
              src={IMAGES.product}
              alt="OxyFlow wall-mounted oxygen monitoring device in a hospital room"
              width={800}
              height={600}
              className="w-full rounded-xl object-cover shadow-inner"
              priority
            />
            <AnimatePresence>
              <motion.div
                key="live-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={cn(
                  "absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-[var(--oxy-navy)]/95 dark:bg-black/90 p-5 text-white backdrop-blur-md transition-all duration-300 shadow-2xl",
                  pulse && "ring-2 ring-[var(--oxy-teal)]/60 shadow-[0_0_30px_rgba(0,163,173,0.3)]"
                )}
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--oxy-teal)]">
                    Live Vitals
                  </p>
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--oxy-green)] opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-[var(--oxy-green)] shadow-[0_0_10px_rgba(72,187,120,1)]" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs text-white/60 mb-1">{stat.label}</p>
                      <p className={cn("text-2xl font-bold tabular-nums tracking-tight", stat.color)}>
                        {stat.label === "Flow"
                          ? flow.toFixed(1)
                          : Math.round(humidity)}
                        <span className="text-sm font-medium text-white/50 ml-1">
                          {stat.unit}
                        </span>
                      </p>
                    </div>
                  ))}
                  <Badge className="border-transparent bg-gradient-to-r from-[var(--oxy-green)] to-[#38a169] text-white px-3 py-1 shadow-lg">
                    Normal
                  </Badge>
                </div>
              </motion.div>
            </AnimatePresence>
          </ThreeDCard>
        </motion.div>
      </div>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}
