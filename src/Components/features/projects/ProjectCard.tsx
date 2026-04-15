"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projects.data";

const IMAGE =
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="group relative w-full max-w-md mx-auto p-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-white/15 via-transparent to-transparent blur-2xl" />

      <div className="relative z-10 overflow-hidden rounded-2xl mb-5 border border-white/10">
        <Image
          src={p.image || IMAGE}
          alt={p.title}
          width={800}
          height={500}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <h3 className="text-xl font-bold text-center text-gray-200">{p.title}</h3>

      <p className="text-sm text-gray-400 mt-2 text-center">{p.desc}</p>

      <div className="mt-5 space-y-1 text-center">
        {p.features.map((f, i) => (
          <p key={i} className="text-xs text-gray-400">
            ✔ {f}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {p.tech.map((t, i) => (
          <span
            key={i}
            className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {p.live && (
          <a
            href={p.live}
            className="text-xs px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition flex items-center gap-1"
          >
            <FiExternalLink /> Live
          </a>
        )}

        {p.github && (
          <a
            href={p.github}
            className="text-xs px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition flex items-center gap-1"
          >
            <FiGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
