"use client";

import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-14"
    >
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
        <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          About Me
        </span>
        <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
      </h1>
    </motion.div>
  );
}
