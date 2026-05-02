export type Article = {
  title: string;
  desc: string;
  date: string;
  tags: string[];
};

export const articles: Article[] = [
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
