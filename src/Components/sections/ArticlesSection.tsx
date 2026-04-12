"use client";

import { motion } from "framer-motion";

type Article = {
  title: string;
  desc: string;
  date: string;
  tags: string[];
};

const articles: Article[] = [
  {
    title: "Scalable Full Stack Architecture",
    desc: "How I structure large-scale applications with clean architecture, modular systems, and production-grade performance optimization.",
    date: "Jan 2026",
    tags: ["System Design", "Full Stack"],
  },
  {
    title: "UI Engineering Principles",
    desc: "Building interfaces that feel alive — smooth transitions, spacing systems, and modern UX thinking.",
    date: "Dec 2025",
    tags: ["UI/UX", "Frontend"],
  },
  {
    title: "React Performance Optimization",
    desc: "Advanced techniques to reduce re-renders, optimize state flow, and improve real-world performance.",
    date: "Nov 2025",
    tags: ["React", "Performance"],
  },
  {
    title: "Backend API Architecture",
    desc: "Designing scalable APIs with proper structure, security layers, and clean separation of concerns.",
    date: "Oct 2025",
    tags: ["Node.js", "Backend"],
  },
  {
    title: "System Thinking for Developers",
    desc: "Breaking complex problems into structured engineering systems that scale efficiently.",
    date: "Sep 2025",
    tags: ["System Design"],
  },
  {
    title: "Modern Animation in UI",
    desc: "Using motion design principles to improve UX, engagement, and perceived performance.",
    date: "Aug 2025",
    tags: ["Framer Motion", "UI"],
  },
  {
    title: "Database Design Strategy",
    desc: "How I design relational + NoSQL systems for scalability, speed, and reliability.",
    date: "Jul 2025",
    tags: ["Database"],
  },
  {
    title: "Authentication Systems Deep Dive",
    desc: "JWT, sessions, refresh tokens, and secure backend authentication flow design.",
    date: "Jun 2025",
    tags: ["Security", "Backend"],
  },
  {
    title: "Production Ready Applications",
    desc: "End-to-end workflow of building, testing, and deploying scalable web applications.",
    date: "May 2025",
    tags: ["DevOps", "Full Stack"],
  },
];

export default function ArticlesPage() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 " />

      {/* glowing orbs */}
      <div className="absolute -top-62.5 -left-50 w-175 h-175 bg-white/10 blur-[200px] rounded-full" />
      <div className="absolute -bottom-62.5 -right-50 w-175 h-175 bg-gray-400/10 blur-[220px] rounded-full" />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[100px_100px]" />

      <div className="relative max-w-6xl mx-auto space-y-20 text-center">
        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
            Articles & <span className="text-gray-400">Insights</span>
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I share my engineering thoughts, system design experience, UI
            patterns, and real-world development insights.
          </p>
        </motion.div>

        {/* 📚 GRID (3 COLUMN ON LARGE) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -10 }}
              transition={{ delay: i * 0.05 }}
              className="group relative w-full max-w-sm p-7 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                         transition duration-300
                         hover:shadow-[0_0_120px_rgba(255,255,255,0.15)]"
            >
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-white/20 via-transparent to-transparent" />

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-white text-center">
                {a.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 text-sm mt-3 text-center leading-relaxed">
                {a.desc}
              </p>

              {/* DATE */}
              <p className="text-xs text-gray-500 mt-4 text-center">{a.date}</p>

              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {a.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-6 flex justify-center">
                <button className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-350 to-gray-500 text-black font-semibold shadow-lg">
                  Read Article →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔗 CTA */}
        <div className="pt-10 text-center">
          <p className="text-gray-200 text-2xl">
            More deep engineering content coming soon ⚡
          </p>

          <p className="text-gray-300 text-xs mt-2">
            Follow me on GitHub & LinkedIn for updates
          </p>
        </div>
      </div>
    </section>
  );
}
