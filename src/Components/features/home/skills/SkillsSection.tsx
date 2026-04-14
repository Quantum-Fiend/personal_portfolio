"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import SkillCard from "./SkillCard";
import { skills } from "./skills.data";
import Button from "@/components/ui/Button";

export default function SkillsSection() {
  return (
    <section className="relative py-36 px-6 overflow-hidden">
      {/* background (LOWER LAYER) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-white/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 -right-50 w-100 h-100 bg-gray-500/10 blur-[180px] rounded-full" />
        <div className="absolute -bottom-50 left-1/3 w-87.5 h-87.5 bg-white/5 blur-[140px] rounded-full" />
      </div>

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-8">
          <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4" />
      </motion.div>

      {/* skills grid */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} index={index} {...skill} />
          ))}
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="mt-12 flex justify-center relative z-10">
        <Link href="/about">
          <Button className="bg-linear-to-r from-white via-gray-300 to-gray-500">
            Explore More Skills →
          </Button>
        </Link>
      </div>
    </section>
  );
}
