"use client";

import { motion } from "framer-motion";

export default function ArticlesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
        Articles & <span className="text-gray-400">Insights</span>
      </h1>

      <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        I share my engineering thoughts, system design experience, UI patterns,
        and real-world development insights.
      </p>
    </motion.div>
  );
}
	