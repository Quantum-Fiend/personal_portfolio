"use client";

import { motion } from "framer-motion";

export default function AboutBadges() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {["Curious", "Logical", "Strategic", "Adaptive"].map((tag, i) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="px-4 py-1 text-xs rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}
