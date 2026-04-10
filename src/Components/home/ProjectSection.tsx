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
    <section className="w-full bg-zinc-950 text-white py-28 px-6 md:px-12">
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative w-full max-w-sm"
            >
              {/* glow border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />

              {/* CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-lg transition-all duration-500 group-hover:shadow-purple-500/10">
                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold group-hover:text-white transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex items-center gap-5 mt-6">
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
