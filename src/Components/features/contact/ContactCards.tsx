"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function ContactCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* EMAIL */}
      <motion.a
        href="mailto:tusharbisht706@gmail.com"
        whileHover={{ scale: 1.06, y: -8 }}
        className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                   hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] transition"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-white/20 via-transparent to-transparent" />

        <FiMail className="text-3xl mx-auto mb-4 text-white/80" />

        <h3 className="text-lg font-semibold">Email Me</h3>
        <p className="text-gray-400 text-sm mt-1">tusharbisht706@gmail.com</p>

        <p className="text-xs text-gray-500 mt-4">
          Primary contact • Fast response
        </p>
      </motion.a>

      {/* LINKEDIN */}
      <motion.a
        href="https://www.linkedin.com/in/tushar-singh-bisht-a1099a314"
        target="_blank"
        rel="noopener noreferrer"
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
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -6 }}
        className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
             hover:shadow-[0_0_70px_rgba(255,255,255,0.12)] transition"
      >
        <FiGithub className="text-3xl mx-auto mb-4 text-white/80" />
        <h3 className="text-lg font-semibold">GitHub</h3>
        <p className="text-gray-400 text-sm mt-1">Explore my code</p>
      </motion.a>
    </div>
  );
}
