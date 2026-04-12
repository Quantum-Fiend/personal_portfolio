"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiCode,
  FiLayers,
  FiTool,
  FiZap,
  FiBookOpen,
  FiTarget,
  FiBriefcase,
} from "react-icons/fi";
import { useEffect, useState } from "react";

type CardItem = {
  icon: IconType;
  title: string;
  desc: string;
};

const cards: CardItem[] = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "Crafting smooth, interactive and responsive interfaces.",
  },
  {
    icon: FiLayers,
    title: "System Architecture",
    desc: "Designing scalable backend and modular systems.",
  },
  {
    icon: FiTool,
    title: "Problem Solving",
    desc: "Breaking complex challenges into clean solutions.",
  },
  {
    icon: FiZap,
    title: "Performance Focus",
    desc: "Optimizing speed, UX flow, and rendering efficiency.",
  },
  {
    icon: FiBookOpen,
    title: "Continuous Growth",
    desc: "Always learning modern tools and engineering patterns.",
  },
  {
    icon: FiTarget,
    title: "Vision",
    desc: "Building impactful digital experiences that matter.",
  },
];

export default function AboutSection() {
  // 🔥 TYPEWRITER STATE (ADDED ONLY)
  const words = ["backend", "systems", "frontends", "apps", "websites"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[index];

    const type = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }

      timeout = setTimeout(type, isDeleting ? 60 : 90);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative w-full py-36 px-6 overflow-hidden">
      {/* 🌌 ULTRA PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[90px_90px]" />

      {/* FLOATING ENERGY LAYERS */}
      <div className="absolute -top-45 -left-45 w-150 h-150 bg-white/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-50 -right-50 w-175 h-175 bg-gray-400/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto space-y-28">
        {/* 🔥 HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Building <span className="text-gray-400">Digital Systems</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            I design and engineer high-performance web experiences with clarity,
            scalability, and smooth interaction systems.
          </p>
        </motion.div>

        {/* 🧠 INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-semibold">
              I’m Tushar <span className="text-gray-400">Singh Bisht</span>
            </h2>

            <div className="w-48 sm:w-28 md:w-32 h-0.5 bg-linear-to-r from-white/70 to-transparent mt-4 mx-auto lg:mx-0"></div>

            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
              Full-stack developer focused on building scalable systems, modern
              UI experiences, and performance-driven architecture.
            </p>

            {/* 🔥 PREMIUM TYPING EFFECT (ONLY CHANGE HERE) */}
            <div className="mt-6 text-gray-200">
              <span className="text-gray-100 font-bold text-2xl">I make :</span>{" "}
              <span className="font-bold text-2xl bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* RIGHT PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative p-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute -inset-50 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)] blur-3xl" />
            </div>

            <FiBriefcase className="text-gray-200 text-2xl mb-5 mx-auto" />

            <p className="text-center text-gray-300 text-sm leading-relaxed">
              I build full-stack applications, SaaS platforms, and dashboards
              that combine performance, structure, and user experience.
            </p>
          </motion.div>
        </div>

        {/* 🧩 ULTRA PREMIUM CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -14, scale: 1.03 }}
                className="group relative p-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -inset-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_60%)] blur-3xl" />
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent" />
                </div>

                <div className="flex justify-center mb-5 relative z-10">
                  <div className="p-5 rounded-full border border-white/10 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                    <Icon className="text-gray-200 text-xl" />
                  </div>
                </div>

                <h3 className="text-center text-gray-200 font-medium relative z-10">
                  {item.title}
                </h3>

                <p className="text-center text-sm text-gray-400 mt-2 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 🧠 FINAL STATEMENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="group relative max-w-3xl mx-auto p-12 rounded-2xl border border-white/10 bg-white/5 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)] blur-3xl" />
          </div>

          <h3 className="text-xl font-semibold text-gray-200">
            Engineering Mindset
          </h3>

          <div className="w-48 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 text-sm leading-relaxed">
            I focus on building scalable, fast, and intuitive systems where
            every interaction feels intentional, smooth, and production-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
