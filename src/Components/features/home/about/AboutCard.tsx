"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.04 }}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 max-w-2xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10" />

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          I’m a Full Stack Developer focused on building modern,
          high-performance, and visually refined digital experiences.
        </p>

        <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
          I work with Next.js, TypeScript, Tailwind CSS, and motion-driven UI
          systems to create interfaces that feel alive and intentional.
        </p>
      </motion.div>

      <Link href="/about">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(139,92,246,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg"
        >
          More About Me →
        </motion.button>
      </Link>
    </>
  );
}
