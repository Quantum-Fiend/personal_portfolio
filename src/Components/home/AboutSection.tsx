"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-28 px-6 flex justify-center overflow-hidden">
      {/* 🌌 SOFT GLOBAL GLOW */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-125 h-125 bg-white/5 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-20%] right-1/2 translate-x-1/2 w-100 h-100 bg-gray-500/10 blur-[160px] rounded-full" />

      {/* GRID (VERY SUBTLE) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-14"
        >
          {/* glow behind image */}
          <div className="absolute inset-0 w-[320px] h-80 sm:w-95 sm:h-95 bg-white/5 blur-[120px] rounded-full mx-auto" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-65 sm:w-85 md:w-105 overflow-hidden rounded-[40px_0_40px_0] border border-white/10"
          >
            <Image
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="about"
              width={1000}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 max-w-2xl"
        >
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I’m a Full Stack Developer focused on building modern,
            high-performance, and visually refined digital experiences.
          </p>

          <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
            I work with Next.js, TypeScript, Tailwind CSS, and motion-driven UI
            systems to create interfaces that feel alive and intentional.
          </p>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-6 py-3 rounded-full bg-linear-to-r from-white to-gray-400 text-black font-medium hover:opacity-90 transition"
            >
              Explore More →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
