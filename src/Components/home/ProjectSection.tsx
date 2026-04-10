"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitGraphIcon as Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with cart, payments, and admin dashboard.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with animations and responsive design.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager App",
    description: "Productivity app with drag & drop task management system.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["React", "TypeScript", "DnD"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <div className="w-28 h-0.5 bg-linear-to-r from-gray-300 to-transparent mx-auto" />
        </motion.div>

        {/* GRID */}
        <div className="relative">
          {/* BACKGROUND GLOW ORBS */}
          <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

          {/* GRID */}
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative w-full max-w-sm"
              >
                {/* OUTER GLOW BORDER */}
                <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* CARD */}
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-purple-500/20">
                  {/* IMAGE SECTION */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* DARK GRADIENT */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                    {/* TOP BADGE */}
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md">
                      Project 0{i + 1}
                    </div>

                    {/* SCANLINE HOVER EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full" />

                    {/* CTA OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium shadow-lg hover:scale-105 transition"
                      >
                        View Live Project
                      </a>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition">
                      {project.title}
                    </h3>

                    {/* ACCENT LINE */}
                    <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-transparent mt-2 group-hover:w-16 transition-all duration-500" />

                    {/* DESCRIPTION */}
                    <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between mt-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEE MORE BUTTON */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg"
          >
            See More Projects →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
