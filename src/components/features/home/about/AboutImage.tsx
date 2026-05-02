"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 lg:px-0 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full max-w-3xl group" // 👈 yaha change
      >
        {/* Glow Background */}
        <div className="absolute -inset-1 rounded-4xl bg-linear-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-500" />

        {/* Image Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <Image
            src="/About.jpg"
            alt="about"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
