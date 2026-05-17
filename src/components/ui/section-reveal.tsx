"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionRevealProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionReveal({ id, className, children }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
