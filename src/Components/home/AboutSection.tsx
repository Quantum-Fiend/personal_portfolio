"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <section className="relative py-32 px-6 flex justify-center overflow-hidden">
      {/* 🌌 COLORFUL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[35px_35px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* 🔥 TITLE (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
          </h1>
        </motion.div>

        {/* 🧠 FLOATING BADGES */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["Next.js", "TypeScript", "Full Stack", "UI/UX"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-1 text-xs rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* 📸 IMAGE WITH GLOW RING */}
        <motion.div
          className="relative mb-16"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left);
            y.set(e.clientY - rect.top);
          }}
        >
          {/* 🔥 GLOW RING */}
          <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-purple-500 via-blue-500 to-transparent blur-2xl opacity-30 animate-pulse" />

          {/* 🖱️ CURSOR LIGHT */}
          <motion.div
            className="absolute pointer-events-none w-75 h-75 rounded-full bg-white/20 blur-[120px]"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />

          <motion.div
            whileHover={{ scale: 1.06, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative z-10 w-80 md:w-3xl h-80 md:h-90 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
          >
            <Image
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="about"
              width={1000}
              height={1000}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* 🧾 PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 max-w-2xl overflow-hidden"
        >
          {/* 🔥 HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10" />

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I’m a Full Stack Developer focused on building modern,
            high-performance, and visually refined digital experiences.
          </p>

          <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
            I work with Next.js, TypeScript, Tailwind CSS, and motion-driven UI
            systems to create interfaces that feel alive and intentional.
          </p>

          {/* 🚀 BUTTON */}
          <Link href="/about">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 30px rgba(139,92,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg"
            >
              More About Me →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
