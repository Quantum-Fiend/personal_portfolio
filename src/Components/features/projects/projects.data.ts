export type Project = {
  title: string;
  desc: string;
  tech: string[];
  features: string[];
  image?: string;
  live?: string;
  github?: string;
};

const IMAGE =
  "/project-image.png";

export const featuredProjects: Project[] = [
  {
    title: "Re-Start (Full-Stack / Agency Website)",
    desc: "Re-Start is a modern, responsive website designed to showcase startup services and digital solutions with a clean, conversion-focused UI.",
    tech: ["Php", "MySql", "JavaScript", "Css", "Html"],
    features: [
      "Modern responsive UI with smooth animations",
      "SEO-friendly and performance optimized layout",
      "Clean navigation with professional branding",
    ],
    image: IMAGE,
    live: "https://re-start.in/",
  },
];

export const githubProjects: Project[] = [
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
