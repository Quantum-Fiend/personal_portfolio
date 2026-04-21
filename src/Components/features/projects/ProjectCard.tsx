"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projects.data";

const IMAGE =
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        whileHover={{ y: -12, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 220 }}
        className="group relative w-full max-w-xl mx-auto p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-white/10 via-transparent to-transparent blur-2xl pointer-events-none" />

        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-2xl mb-6 border border-white/10">
          <Image
            src={p.image || IMAGE}
            alt={p.title}
            width={900}
            height={500}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-white tracking-wide">
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-3 text-center leading-relaxed">
          {p.desc}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-1 text-center">
          {p.features.map((f, i) => (
            <p
              key={i}
              className="text-xs text-gray-400 flex items-center justify-center gap-2"
            >
              <span className="text-white">•</span> {f}
            </p>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {p.tech.map((t, i) => (
            <span
              key={i}
              className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:bg-white/10 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-7">
          {p.live && (
            <div
              onClick={() =>
                window.open(p.live, "_blank", "noopener,noreferrer")
              }
              className="cursor-pointer text-xs px-5 py-2 bg-linear-to-r from-white via-gray-300 to-gray-400 text-black font-bold rounded-full hover:text-black transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <FiExternalLink /> Live Demo
            </div>
          )}

          {p.github && (
            <div
              onClick={() =>
                window.open(p.github, "_blank", "noopener,noreferrer")
              }
              className="cursor-pointer text-xs px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
            >
              <FiGithub /> Code
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}