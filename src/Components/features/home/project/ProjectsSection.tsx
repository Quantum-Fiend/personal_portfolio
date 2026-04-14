"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";
import Button from "@/components/ui/Button";

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

          <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* GRID */}
        <div className="relative">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <Button className="bg-linear-to-r from-white via-gray-300 to-gray-500">
              Explore More Projects →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
