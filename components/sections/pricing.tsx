"use client";

import Image from "next/image";
import { Check, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GradientButton } from "@/components/ui/gradient-button";
import { IMAGES, PRICING_INCLUDES, PRODUCT } from "@/lib/constants";
import { cn } from "cn";
import { useState } from "react";
import { motion } from "framer-motion";
import { OrderModal } from "@/components/ui/order-modal";

export function Pricing() {
  const [hovered, setHovered] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: PRODUCT.currency,
    maximumFractionDigits: 0,
  }).format(PRODUCT.pricePerDevice);

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-[var(--oxy-yellow-tint)] to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="Pricing"
            title="One Price. Everything Included."
            subtitle="No hidden fees. Device, desktop app, and cloud access — all in one package."
          />
        </motion.div>
        
        <div className="mx-auto max-w-md mt-16 relative">
          <motion.div 
            animate={{ 
              boxShadow: hovered 
                ? "0 25px 50px -12px rgba(0, 163, 173, 0.25)" 
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1)" 
            }}
            className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-[var(--oxy-teal)]/30 to-[var(--oxy-green)]/30 blur-2xl opacity-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className={cn(
              "relative overflow-hidden rounded-[2rem] border-2 bg-white dark:bg-slate-900 transition-all duration-300",
              hovered ? "border-[var(--oxy-teal)] scale-[1.02]" : "border-[var(--oxy-teal)]/20"
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative bg-[var(--oxy-navy)] p-8 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--oxy-navy)] via-[#132c52] to-[var(--oxy-teal)] opacity-90" />
              
              <div className="relative z-10">
                <motion.div 
                  animate={{ y: hovered ? -5 : 0 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={IMAGES.product}
                    alt="OxyFlow device"
                    width={200}
                    height={150}
                    className="mx-auto mb-6 w-44 rounded-xl bg-white/10 p-2 shadow-2xl backdrop-blur-sm border border-white/20"
                  />
                </motion.div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 mb-4 text-xs font-medium tracking-wide text-[var(--oxy-teal)] backdrop-blur-md border border-white/10 uppercase">
                  Per Device
                </div>
                <p className="text-6xl font-black tracking-tighter drop-shadow-lg">{formattedPrice}</p>
                <p className="mt-3 text-sm font-medium text-white/80">
                  + ₹{PRODUCT.monthlyCharge}/month for AWS cloud &amp; monthly device maintenance check
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="mb-8 space-y-4">
                {PRICING_INCLUDES.map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    key={item} 
                    className="flex items-center gap-3 text-base"
                  >
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--oxy-green)]/20 text-[var(--oxy-green)]">
                      <Check className="size-3.5" strokeWidth={3} />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-4">
                <GradientButton
                  as="button"
                  onClick={() => setIsOrderModalOpen(true)}
                  className="w-full shadow-lg hover:shadow-xl transition-all py-6 text-lg font-bold cursor-pointer"
                >
                  Order Now
                </GradientButton>
                <GradientButton
                  href={PRODUCT.desktopDownloadUrl}
                  download
                  variant="outline"
                  className="w-full py-6 text-base hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Download className="mr-2 size-5" />
                  Download Desktop App
                </GradientButton>
              </div>
              
              <p className="mt-6 text-center text-sm font-medium text-muted-foreground dark:text-slate-500">
                Volume pricing available for multi-ward deployments. 3-month replacement warranty
                &amp; 1-year service warranty included.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}
