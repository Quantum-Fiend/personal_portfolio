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
    <div className="w-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
      >
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-purple-500/20 p-5 sm:p-6 md:p-7 text-center">
          {/* Image */}
          <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={p.image || "/placeholder.png"}
              alt={p.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full" />

            {/* CENTER BUTTONS */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
              {p.live && (
                <button
                  onClick={() =>
                    window.open(p.live, "_blank", "noopener,noreferrer")
                  }
                  className="px-5 py-2 rounded-full bg-linear-to-r from-white via-gray-300   text-black text-sm font-medium shadow-lg hover:scale-105 transition flex items-center gap-2"
                >
                  <FiExternalLink /> View Live
                </button>
              )}

              {p.github && (
                <button
                  onClick={() =>
                    window.open(p.github, "_blank", "noopener,noreferrer")
                  }
                  className="px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:scale-105 transition flex items-center gap-2"
                >
                  <FiGithub /> View Code
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 flex flex-col items-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {p.title}
            </h3>

            {/* underline */}
            <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-transparent mt-2 group-hover:w-16 transition-all duration-500" />

            <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed max-w-md">
              {p.desc}
            </p>

            {/* Features */}
            <div className="mt-4 space-y-1">
              {p.features.map((f, i) => (
                <p
                  key={i}
                  className="text-[11px] sm:text-xs text-gray-400 flex items-center justify-center gap-2"
                >
                  <span className="text-white">•</span> {f}
                </p>
              ))}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom links */}
            <div className="flex items-center justify-center gap-6 mt-6">
              {p.live && (
                <button
                  onClick={() =>
                    window.open(p.live, "_blank", "noopener,noreferrer")
                  }
                  className="flex items-center gap-2 text-sm text-blue-400"
                >
                  <FiExternalLink size={16} /> Live
                </button>
              )}

              {p.github && (
                <button
                  onClick={() =>
                    window.open(p.github, "_blank", "noopener,noreferrer")
                  }
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <FiGithub size={16} /> Code
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
