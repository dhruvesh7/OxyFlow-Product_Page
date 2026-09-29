"use client";

import { Download, Mail } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { PRODUCT } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrderModal } from "@/components/ui/order-modal";

export function FinalCTA() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[var(--oxy-navy)] py-32">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--oxy-teal)_0%,_transparent_60%)] opacity-30" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--oxy-green)_0%,_transparent_50%)] opacity-20" 
      />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 mb-8 text-sm font-semibold tracking-widest text-[var(--oxy-teal)] backdrop-blur-md border border-white/10 uppercase shadow-xl">
            Upgrade Your Ward
          </div>
          
          <h2 className="text-4xl font-extrabold text-white sm:text-6xl tracking-tight leading-tight">
            Ready to Protect <br className="hidden sm:block" /> Every Patient?
          </h2>
          
          <p className="mx-auto mt-8 max-w-2xl text-xl text-white/70 leading-relaxed font-medium">
            Get OxyFlow for <strong className="text-white">₹2,500 per device</strong>. Download the desktop app and
            start monitoring today.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center">
            <GradientButton 
              href={PRODUCT.desktopDownloadUrl} 
              download 
              size="lg"
              className="w-full sm:w-auto text-lg py-6 px-8 shadow-2xl hover:shadow-[var(--oxy-teal)]/40 hover:-translate-y-1 transition-all"
            >
              <Download className="mr-3 size-6" />
              Download for Windows
            </GradientButton>
            <GradientButton
              as="button"
              onClick={() => setIsOrderModalOpen(true)}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 bg-white/5 text-white hover:bg-white/15 backdrop-blur-md text-lg py-6 px-8 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <Mail className="mr-3 size-6" />
              Order Now
            </GradientButton>
          </div>
        </motion.div>
      </div>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}
