"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
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
          I’m a Full Stack Developer | Software Developer focused on crafting
          modern, high-performance digital experiences with a strong emphasis on
          clean design, usability, and seamless user interaction.
        </p>

        <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
          I build and develop software systems that are smooth, responsive, and
          thoughtfully crafted to deliver a seamless user experience.
        </p>
      </motion.div>

      {/* 👉 YOU control Link separately */}
      <Link href="/about">
        <div className="mt-8">
          <Button className="bg-linear-to-r from-white via-gray-300 to-gray-500">
            More About Me →
          </Button>
        </div>
      </Link>
    </>
  );
}
