"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import FeaturedProjects from "./FeaturedProjects";
import GithubProjects from "./GithubProjects";

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative max-w-6xl mx-auto space-y-28">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Engineering <span className="text-gray-400">Portfolio</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A curated showcase of production systems and scalable engineering
            work.
          </p>
        </motion.div>

        <FeaturedProjects />
        <GithubProjects />

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/Quantum-Fiend?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-full border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] flex items-center gap-2 text-sm text-gray-300"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/20 via-transparent to-transparent blur-xl" />

            <FiGithub className="text-lg relative z-10" />

            <span className="relative z-10">View More on GitHub →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
