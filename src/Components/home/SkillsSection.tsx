"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Layers } from "lucide-react";

const skills = [
  { name: "Next.js", level: 95, icon: Rocket },
  { name: "React", level: 92, icon: Code2 },
  { name: "TypeScript", level: 88, icon: Layers },
  { name: "Tailwind CSS", level: 96, icon: Palette },
  { name: "Framer Motion", level: 85, icon: Rocket },
  { name: "UI/UX Design", level: 80, icon: Palette },
];

export default function Skills() {
  return (
    <section className="relative bg-black text-white py-36 px-6 overflow-hidden">
      {/* 🌌 MULTI LAYER BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-white/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 -right-50 w-100 h-100 bg-gray-500/10 blur-[180px] rounded-full" />
        <div className="absolute -bottom-50 left-1/3 w-87.5 h-87.5 bg-white/5 blur-[140px] rounded-full" />
      </div>

      {/* ✨ FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-32 right-24 w-2 h-2 bg-gray-300 rounded-full"
      />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* ✨ TITLE (UNCHANGED STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* 💎 MAIN HERO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl rounded-[2.5rem] p-0.5 bg-linear-to-r from-white/20 via-gray-500/10 to-white/10"
        >
          {/* INNER CARD */}
          <div className="relative rounded-[2.5rem] bg-black/60 backdrop-blur-2xl p-10 sm:p-14 overflow-hidden">
            {/* ✨ INNER LIGHT SWEEP */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-gray-500/5" />

            {/* GRID */}
            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.08, rotate: 0.5 }}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                  >
                    {/* glow hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/10 via-transparent to-gray-500/10" />

                    {/* ICON */}
                    <div className="flex justify-center mb-5">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {skill.level}% mastery
                      </p>
                    </div>

                    {/* PROGRESS */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-white via-gray-300 to-gray-500 rounded-full"
                      />
                    </div>

                    {/* FLOAT DOT */}
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full blur-[2px]"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg"
              >
                Explore Skills →
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
