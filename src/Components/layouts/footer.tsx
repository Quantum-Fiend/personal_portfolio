"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* =========================
   SVG ICONS (SAFE)
========================= */
const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-7a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.2-.3-4 1.3a13.4 13.4 0 0 0-7 0C6.2 2.7 5 3 5 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.6 9.4c0 5.5 3 6.7 6 7-.4.3-.8.9-.8 1.8V21" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16v16H4z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 overflow-hidden">
      {/* SUBTLE BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* =========================
            TOP TEXT
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Let’s build something
            <br />
            <span className="relative inline-block">
              {/* GRADIENT TEXT */}
              <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-size-[200%_100%] bg-clip-text text-transparent animate-[gradientMove_6s_linear_infinite]">
                creative & impactful.
              </span>
            </span>
          </h2>
        </motion.div>
        {/* =========================
            NAV LINKS (CENTERED)
        ========================= */}
        <div className="mt-12 flex flex-wrap justify-center gap-5 md:gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Articles", path: "/articles" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative group text-zinc-300 hover:text-white transition duration-75 ease-linear font-semibold"
            >
              {item.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-linear-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        {/* =========================
            SOCIAL ICONS (CENTERED)
        ========================= */}
        <div className="mt-10 flex justify-center gap-6">
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="https://github.com/Quantum-Fiend"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition"
          >
            <GitHubIcon />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="www.linkedin.com/in/tushar-singh-bisht-a1099a314"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="mailto:tusharbisht706@gmail.com"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition"
          >
            <MailIcon />
          </motion.a>
        </div>
        {/* =========================
            DIVIDER
        ========================= */}
        <div className="w-full h-px bg-white/10 my-12" />
        {/* =========================
            BOTTOM
        ========================= */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full text-xs text-gray-200 gap-4 mb-6 md:mb-0">
          <p>© {new Date().getFullYear()} Tushar Singh Bisht 💫</p>
        </div>
        <div className="w-48 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mb-6 md:mb-0 mt-2"></div>
      </div>
    </footer>
  );
}
