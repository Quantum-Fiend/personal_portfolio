"use client";

import { motion, useReducedMotion } from "framer-motion";

type PageBannerProps = {
  title: string;
  highlight?: string;
  subtitle: string;
  tag?: string;
  chips?: string[];
};

export default function PageBanner({
  title,
  highlight,
  subtitle,
  tag,
}: PageBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden px-6">
      {/* 🌊 Floating ambient orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-white/5 blur-2xl opacity-70 sm:opacity-100"
        animate={
          reduceMotion
            ? { opacity: 0.7 }
            : { x: [-40, 40, -40], y: [-20, 20, -20], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gray-400/5 blur-3xl opacity-60 sm:opacity-100"
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : { x: [50, -50, 50], y: [30, -30, 30], scale: [1.05, 1, 1.05] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          {title}{" "}
          {highlight && <span className="text-gray-400">{highlight}</span>}
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 flex items-center justify-center"
        >
          <div className="h-0.5 w-50 sm:w-90 bg-linear-to-r from-transparent via-gray-400 to-transparent" />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 text-xs sm:text-sm text-gray-200"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          {tag}
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
