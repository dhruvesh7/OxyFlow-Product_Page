"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { OrderModal } from "@/components/ui/order-modal";

export function FloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderModalOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--oxy-teal)] to-[var(--oxy-green)] p-4 text-white shadow-2xl ring-4 ring-white/30 dark:ring-slate-900/50 sm:bottom-8 sm:right-8 group"
            aria-label="Order Now"
          >
            <Mail className="size-6 sm:size-7" />
            <span className="absolute -inset-1 rounded-full bg-[var(--oxy-teal)] opacity-40 blur-md group-hover:animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </>
  );
}
