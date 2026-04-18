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
  chips = [],
}: PageBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden px-6">
      {/* 🌊 Floating ambient orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-white/5 blur-2xl opacity-70 sm:opacity-100"
        animate={
          reduceMotion
            ? {}
            : { x: [-40, 40, -40], y: [-20, 20, -20], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gray-400/5 blur-3xl opacity-60 sm:opacity-100"
        animate={
          reduceMotion
            ? {}
            : { x: [50, -50, 50], y: [30, -30, 30], scale: [1.05, 1, 1.05] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.015] sm:opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* 🔥 MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          {title}{" "}
          {highlight && <span className="text-gray-400">{highlight}</span>}
        </motion.h1>

        {/* ✨ SPAN UNDER TITLE */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 flex items-center justify-center"
        >
          <div className="relative">
            <div className="h-0.5 w-90 bg-linear-to-r from-transparent via-gray-400 to-transparent" />

            <motion.div
              animate={{ x: [-40, 40, -40] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-0.75 left-1/2 w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>

        {/* 🧠 TAG */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 text-xs sm:text-sm text-gray-300"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          {tag}
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* PILLS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {chips.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs sm:text-sm rounded-full border border-white/10 text-gray-300 hover:border-white/30 transition"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/50 transition"
          >
            Let’s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
