"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useRef } from "react";

/* =========================
   STATIC SHOOTING STARS
========================= */

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     3D MOUSE TILT
  ========================= */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section className="relative w-full overflow-hidden py-32 px-6 bg-black">
      {/* =========================
          BACKGROUND SYSTEM
      ========================= */}

      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Gradient Mesh */}
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.10),transparent_40%)]" />

      {/* Glow Orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-emerald-500/20 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-180 h-180 bg-cyan-500/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[20%] w-120 h-120 bg-violet-500/10 blur-[200px] rounded-full"
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_70%)]" />

      {/* =========================
   SHOOTING STARS (NO RANDOM)
========================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "5%", delay: 0 },
          { left: "15%", delay: 1 },
          { left: "25%", delay: 2 },
          { left: "35%", delay: 3 },
          { left: "45%", delay: 4 },
          { left: "55%", delay: 5 },
          { left: "65%", delay: 6 },
          { left: "75%", delay: 7 },
          { left: "85%", delay: 8 },
          { left: "95%", delay: 9 },
          { left: "20%", delay: 2.5 },
          { left: "70%", delay: 6.5 },
        ].map((star, i) => (
          <motion.div
            key={i}
            initial={{
              y: "-20%",
              opacity: 0,
            }}
            animate={{
              y: "120%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
            className="absolute w-0.5 h-50 bg-linear-to-b from-white via-cyan-300 to-transparent blur-[0.5px] shadow-[0_0_14px_rgba(34,211,238,0.9)]"
            style={{
              left: star.left,
              top: "-20%",
            }}
          />
        ))}
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          style={{
            rotateX: useTransform(y, [-300, 300], [10, -10]),
            rotateY: useTransform(x, [-300, 300], [-10, 10]),
          }}
          className="perspective-distant"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl px-10 py-24 overflow-hidden"
          >
            {/* CONTENT */}
            <div className="relative z-10">
              {/* ICON */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="mx-auto mb-8 w-fit p-4 rounded-full bg-white/10"
              >
                <Mail className="text-white" size={26} />
              </motion.div>

              {/* TITLE */}
              <h2 className="text-5xl md:text-7xl font-bold text-white">
                Got an Idea?
                <br />
                <span className="text-cyan-300">Let’s Build It</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-zinc-400 mt-8 max-w-2xl mx-auto">
                I design and build modern, scalable digital products with
                beautiful experiences and strong performance.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                <a
                  href="mailto:youremail@example.com"
                  className="px-10 py-3 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
                >
                  Start a Project{" "}
                  <ArrowRight size={18} className="inline ml-2" />
                </a>

                <a
                  href="#projects"
                  className="px-10 py-3 rounded-full border border-white/20 text-white"
                >
                  View Work
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
