"use client";

import { motion } from "framer-motion";

export default function AboutFinalStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative max-w-3xl mx-auto p-12 rounded-2xl border border-white/10 bg-white/5 text-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      <h3 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        Engineering Mindset
      </h3>

      <div className="w-48 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>

      <p className="text-gray-400 mt-5 text-sm leading-relaxed">
        I build and engineer scalable software systems with a focus on
        architecture, performance, and usability.
      </p>
    </motion.div>
  );
}
