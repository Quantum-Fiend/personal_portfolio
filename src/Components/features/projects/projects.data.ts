export type Project = {
  title: string;
  desc: string;
  tech: string[];
  features: string[];
  image: string;
  live?: string;
  github?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "AI SaaS Dashboard",
    desc: "Production-grade AI analytics platform with real-time insights.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: [
      "Real-time analytics",
      "Authentication system",
      "Scalable backend",
    ],
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Engine",
    desc: "Full-stack commerce platform with optimized checkout.",
    tech: ["React", "Express", "PostgreSQL"],
    features: ["Payment integration", "Admin dashboard", "Order system"],
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    live: "#",
    github: "#",
  },
];

export const githubProjects: Project[] = [
  {
    title: "Realtime Chat System",
    desc: "Socket-based real-time messaging system.",
    tech: ["Socket.io", "Node.js"],
    features: ["Instant messaging", "Live sync"],
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    github: "#",
  },
];
