"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import SkillCard from "./SkillCard";
import { skills, type Skill } from "./skills.data";
import Button from "@/components/ui/Button";

export default function SkillsSection() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-gray-500/10 blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 left-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="w-20 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-6" />
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill: Skill, index: number) => (
            <SkillCard key={skill.name} index={index} {...skill} />
          ))}
        </div>
      </div>


      {/* CTA */}
      <div className="mt-14 sm:mt-16 flex justify-center">
        <Link href="/about">
          <Button className="px-6 py-3 text-sm sm:text-base font-medium bg-linear-to-r from-white via-gray-300 to-gray-500 hover:opacity-90 transition">
            Explore More Skills →
          </Button>
        </Link>
      </div>
    </section>
  );
}

