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
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

export const featuredProjects: Project[] = [
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
