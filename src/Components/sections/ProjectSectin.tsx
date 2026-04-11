"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  features: string[];
  image?: string;
  live?: string;
  github?: string;
};

const IMAGE =
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

const featuredProjects: Project[] = [
  {
    title: "AI SaaS Dashboard",
    desc: "Production-grade AI analytics platform with real-time insights and authentication system.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: [
      "Real-time analytics engine",
      "Secure authentication flow",
      "Scalable backend architecture",
    ],
    image: IMAGE,
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Engine",
    desc: "Full-stack commerce system with payments, admin dashboard and optimized checkout flow.",
    tech: ["React", "Express", "PostgreSQL"],
    features: [
      "Payment gateway integration",
      "Admin control system",
      "Optimized order pipeline",
    ],
    image: IMAGE,
    live: "#",
    github: "#",
  },
];

const githubProjects: Project[] = [
  {
    title: "Realtime Chat System",
    desc: "Socket-based messaging system with instant synchronization layer.",
    tech: ["Socket.io", "Node.js"],
    features: ["Instant messaging", "Live sync", "Low latency architecture"],
    image: IMAGE,
    github: "#",
  },
  {
    title: "Auth System Boilerplate",
    desc: "Secure JWT authentication system with role-based access control.",
    tech: ["Node.js", "JWT"],
    features: ["JWT security", "Role access", "Session handling"],
    image: IMAGE,
    github: "#",
  },
  {
    title: "API Rate Limiter",
    desc: "Backend middleware for controlling API abuse and request throttling.",
    tech: ["Express", "Redis"],
    features: ["Request throttling", "Redis caching", "Abuse protection"],
    image: IMAGE,
    github: "#",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220 }}
      className="group relative w-full max-w-md mx-auto p-6 rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/15 via-transparent to-transparent blur-2xl" />

      {/* IMAGE (BIGGER NOW) */}
      <div className="relative z-10 overflow-hidden rounded-2xl mb-5 border border-white/10">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold text-center text-gray-200">{p.title}</h3>

      {/* DESC */}
      <p className="text-sm text-gray-400 mt-2 text-center">{p.desc}</p>

      {/* FEATURES */}
      <div className="mt-5 space-y-1 text-center">
        {p.features.map((f, i) => (
          <p key={i} className="text-xs text-gray-400">
            ✔ {f}
          </p>
        ))}
      </div>

      {/* TECH */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {p.tech.map((t, i) => (
          <span
            key={i}
            className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-gray-300 bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-3 mt-6">
        {p.live && (
          <a
            href={p.live}
            className="text-xs px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition flex items-center gap-1"
          >
            <FiExternalLink /> Live
          </a>
        )}

        {p.github && (
          <a
            href={p.github}
            className="text-xs px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition flex items-center gap-1"
          >
            <FiGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative max-w-6xl mx-auto space-y-28">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Engineering <span className="text-gray-400">Portfolio</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A curated showcase of production systems and scalable engineering
            work.
          </p>
        </motion.div>

        {/* FEATURED */}
        <div className="text-center space-y-10">
          <h2 className="text-2xl font-semibold">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
          </h2>

          <p className="text-gray-500 text-sm">
            High-impact production-ready applications
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </div>

        {/* GITHUB */}
        <div className="text-center space-y-10">
          <h2 className="text-2xl font-semibold">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              GitHub Projects
            </span>
            <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
          </h2>

          <p className="text-gray-500 text-sm">
            Backend systems, APIs, and engineering experiments
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-full border border-white/10 bg-white/5 overflow-hidden transition-all duration-300
               hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] flex items-center gap-2 text-sm text-gray-300"
          >
            {/* glow */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/20 via-transparent to-transparent blur-xl" />

            {/* icon */}
            <FiGithub className="text-lg relative z-10" />

            {/* text */}
            <span className="relative z-10">View More on GitHub →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
