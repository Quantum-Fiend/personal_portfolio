"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="relative w-full py-36 px-6 overflow-hidden">
      {/* 🌌 CINEMATIC BACKGROUND */}
      <div className="absolute inset-0" />

      <div className="absolute -top-50 -left-50 w-125 h-125 bg-white/10 blur-[140px] rounded-full" />
      <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-gray-400/10 blur-[160px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[90px_90px]" />

      <div className="relative max-w-6xl mx-auto space-y-20 text-center">
        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Let’s Build <span className="text-gray-400">Something Great</span>
          </h1>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            Have an idea, project, or opportunity? I’m always open to meaningful
            collaborations.
          </p>
        </motion.div>

        {/* 📩 CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* EMAIL - HERO CARD */}
          <motion.a
            href="mailto:tusharbisht706@gmail.com"
            whileHover={{ scale: 1.06, y: -8 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                       hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] transition"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-white/20 via-transparent to-transparent" />

            <FiMail className="text-3xl mx-auto mb-4 text-white/80" />

            <h3 className="text-lg font-semibold">Email Me</h3>
            <p className="text-gray-400 text-sm mt-1">
              tusharbisht706@gmail.com
            </p>

            <p className="text-xs text-gray-500 mt-4">
              Primary contact • Fast response
            </p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="www.linkedin.com/in/tushar-singh-bisht-a1099a314"
            whileHover={{ scale: 1.05, y: -6 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                       hover:shadow-[0_0_70px_rgba(255,255,255,0.12)] transition"
          >
            <FiLinkedin className="text-3xl mx-auto mb-4 text-white/80" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-400 text-sm mt-1">
              Let’s connect professionally
            </p>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/Quantum-Fiend"
            whileHover={{ scale: 1.05, y: -6 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                       hover:shadow-[0_0_70px_rgba(255,255,255,0.12)] transition"
          >
            <FiGithub className="text-3xl mx-auto mb-4 text-white/80" />
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-400 text-sm mt-1">Explore my code</p>
          </motion.a>
        </div>

        {/* 🧠 FORM SECTION */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-5 px-4 sm:px-0 text-center"
        >
          {/* INPUT GRID (ALWAYS CENTERED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
                 focus:border-white/40 outline-none transition text-center"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
                 focus:border-white/40 outline-none transition text-center"
            />
          </div>

          {/* TEXTAREA (CENTERED ALWAYS) */}
          <div className="flex justify-center">
            <textarea
              rows={6}
              placeholder="Your Message..."
              className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
                 focus:border-white/40 outline-none transition resize-none text-center"
            />
          </div>

          {/* BUTTON (CENTERED ALWAYS) */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg w-96"
            >
              Send Message <FiSend className="inline ml-2" />
            </motion.button>
          </div>
        </motion.form>

        {/* ⚡ CTA TEXT */}
        <p className="text-white-900">
          I usually respond within 24 hours ⚡
          <div className="w-46 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
        </p>
      </div>
    </section>
  );
}
