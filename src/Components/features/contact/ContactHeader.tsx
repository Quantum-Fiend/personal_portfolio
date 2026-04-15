"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
        Let’s Build <span className="text-gray-400">Something Great</span>
      </h1>

      <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
        Have an idea, project, or opportunity? I’m always open to meaningful
        collaborations.
      </p>
    </motion.div>
  );
}
