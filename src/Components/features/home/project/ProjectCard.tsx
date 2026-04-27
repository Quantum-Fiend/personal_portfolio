"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GitGraphIcon as Github } from "lucide-react";
import { Project } from "./projects.data";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full max-w-sm"
    >
      {/* glow */}
      <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

      {/* card */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-purple-500/20">
        {/* image */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

          <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md">
            Project {index + 1}
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <a
              href={project.githubUrl}
              target="_blank"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium shadow-lg hover:scale-105 transition"
            >
              View Project
            </a>
          </div>
        </div>

        {/* content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>

          <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-transparent mt-2 group-hover:w-16 transition-all duration-500" />

          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center justify-center mt-6">

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
