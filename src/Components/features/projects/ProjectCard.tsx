"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projects.data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group p-5 rounded-2xl border border-white/10 bg-white/5"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-110 transition"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>

      {/* DESC */}
      <p className="text-sm text-gray-400 mt-2">{p.desc}</p>

      {/* TECH */}
      <div className="flex flex-wrap gap-2 mt-3">
        {p.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 border border-white/10 rounded-full text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-4">
        {p.live && (
          <a href={p.live} target="_blank">
            <FiExternalLink />
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank">
            <FiGithub />
          </a>
        )}
      </div>
    </motion.div>
  );
}
