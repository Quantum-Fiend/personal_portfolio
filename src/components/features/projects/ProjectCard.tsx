"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projects.data";

type Props = {
  p: Project;
  index: number;
};

export default function ProjectCard({ p, index }: Props) {
  return (
    <div className="w-full flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative w-full max-w-md sm:max-w-xl lg:max-w-2xl"
      >
        {/* Glow (softer + premium) */}
        <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

        {/* Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500 group-hover:shadow-purple-500/20 group-hover:-translate-y-1 p-5 sm:p-6">
          {/* Image */}
          <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={p.image || "/placeholder.png"}
              alt={p.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
              className="object-cover transition duration-700 group-hover:scale-105"
              priority={index === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Hover actions (desktop only feel, but still visible on tap) */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-medium shadow-md hover:scale-105 transition flex items-center gap-2"
                >
                  <FiExternalLink /> Live
                </a>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-md shadow-md hover:bg-white/20 hover:scale-105 hover:shadow-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiGithub /> Code
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
              {p.title}
            </h3>

            {/* underline */}
            <div className="w-8 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-2 group-hover:w-14 transition-all duration-500" />

            <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed max-w-md mx-auto">
              {p.desc}
            </p>

            {/* Features */}
            <div className="mt-4 space-y-1">
              {p.features.map((f, i) => (
                <p
                  key={i}
                  className="text-[11px] sm:text-xs text-gray-400 flex items-center justify-center gap-2"
                >
                  <span className="text-white/70">•</span> {f}
                </p>
              ))}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom links (mobile-friendly always visible) */}
            <div className="flex justify-center gap-6 mt-6">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  <FiExternalLink size={16} /> Live
                </a>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >
                  <FiGithub size={16} /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
