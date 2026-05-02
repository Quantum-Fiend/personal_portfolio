"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      className="text-center space-y-6"
    >
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Building <span className="text-gray-400">Digital Systems</span>
        <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Crafting scalable digital systems with a strong focus on performance,
        structure, and seamless human-centered interactions.
      </p>
    </motion.div>
  );
}
