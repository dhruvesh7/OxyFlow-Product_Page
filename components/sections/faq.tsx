"use client";

import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 size-[500px] rounded-full bg-[var(--oxy-blue-tint)]/40 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            accent="Support"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about deploying OxyFlow in your facility."
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion
            className="rounded-3xl border border-border/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-6 py-4 shadow-xl"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} className="border-border/40 last:border-0 py-2">
                <AccordionTrigger className="text-lg font-semibold text-[var(--oxy-navy)] dark:text-slate-200 hover:text-[var(--oxy-teal)] dark:hover:text-[var(--oxy-teal)] transition-colors text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground dark:text-slate-400 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
