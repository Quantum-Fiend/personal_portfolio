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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with cart, payments, and admin.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    githubUrl: "#",
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
