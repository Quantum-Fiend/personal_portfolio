"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden flex justify-center">
      {/* 🌌 Glow Background */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-150 h-150white/10 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-62.5 right-1/2 translate-x-1/2 w-137.5 h-137.5 bg-gray-500/10 blur-[180px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[35px_35px]"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide mb-10">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <div className="w-24 h-0.5 bg-linear-to-r from-gray-300 to-transparent mt-3"></div>
        </motion.div>

        {/* 🖼️ IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mb-14"
        >
          {/* Glow */}
          <div className="absolute w-105 h-105 bg-white/10 blur-[130px] rounded-full"></div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-65 sm:w-85 md:w-112.5
            overflow-hidden rounded-[2.5rem_0_2.5rem_0] border border-gray-700"
          >
            <Image
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="about"
              width={1000}
              height={1000}
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>

          {/* Floating UI */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-11 w-30 h-30
            bg-white/5 border border-gray-700 backdrop-blur-xl rounded-[0_2rem_0_2rem]
            flex items-center justify-center text-xs text-gray-300"
          ></motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -left-11 w-30 h-30
            bg-white/5 border border-gray-700 backdrop-blur-xl rounded-[0_2rem_0_2rem]
            flex items-center justify-center text-xs text-gray-300"
          ></motion.div>
        </motion.div>

        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 sm:p-10 max-w-2xl"
        >
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I’m a Full Stack Developer passionate about crafting futuristic,
            high-performance digital experiences with modern UI systems.
          </p>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            I specialize in building scalable applications using Next.js,
            TypeScript, Tailwind CSS, and motion-driven interfaces that feel
            alive.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full 
            hover:bg-linear-to-r hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 
            hover:text-white transition-all duration-300 text-lg w-full sm:w-auto"
          >
            Explore More →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
