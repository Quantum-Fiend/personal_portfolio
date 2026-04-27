export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Stream_Forge",
    description:
      "StreamForge is a production-ready, fault-tolerant distributed data processing platform that handles high-volume event streams",
    image: "/Home_Project.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    githubUrl: "https://github.com/Quantum-Fiend/Stream_Forge#-streamforge",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with animations and responsive design.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    githubUrl: "#",
  },
  {
    title: "Task Manager App",
    description: "Productivity app with drag & drop task management system.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["React", "TypeScript", "DnD"],
    githubUrl: "#",
  },
];
