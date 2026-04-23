export type Project = {
  title: string;
  desc: string;
  tech: string[];
  features: string[];
  image?: string;
  live?: string;
  github?: string;
};

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
    image: "/project-page-images/re-start.png",
    live: "https://re-start.in/",
  },
];

export const githubProjects: Project[] = [
  {
    title: "Neuro_Vault_Ai",
    desc: "NeuroVault is an AI-powered knowledge base that lets users upload PDFs, code, and web data and then ask questions using semantic search and LLM-based responses.",
    tech: ["Python", "Go", "Next Js", "Postgre Sql", "Redis", "Docker"],
    features: [
      "Uploads and indexes PDFs, code, and web data",
      "Enables semantic search using embeddings",
      "Uses LLMs to answer questions from stored knowledge",
    ],
    image: "/project-page-images/NeuroVault.png",
    github: "https://github.com/Quantum-Fiend/Neuro_Vault",
  },
  {
    title: "Intelli_Spend",
    desc: "Intelli_Spend is an AI-powered expense tracking system that analyzes spending patterns and provides smart financial insights for better budgeting.",
    tech: ["Java", "JWT", "Docker"],
    features: [
      "Tracks and categorizes expenses automatically",
      "Analyzes spending patterns using data insights",
      "Helps users understand and improve budgeting habits",
    ],
    image: "/project-page-images/IntelliSpend.png",
    github: "https://github.com/Quantum-Fiend/Intelli_Spend",
  },
  {
    title: "Aevum",
    desc: "A next-generation debugging platform for distributed systems that enables time-travel debugging, causal tracing, and deep state inspection across microservices and async workflows.",
    tech: ["Express", "Redis"],
    features: [
      "Time-travel debugging across system execution history",
      "Causal graph visualization of distributed events (DAG)",
      "Inspect past system state with precision",
    ],
    image: "/project-page-images/Aveum.png",
    github: "https://github.com/Quantum-Fiend/Aevum",
  },
  {
    title: "API Rate Limiter",
    desc: "Backend middleware for controlling API abuse and request throttling.",
    tech: ["Express", "Redis"],
    features: ["Request throttling", "Redis caching", "Abuse protection"],
    image: "/project-page-images/re-start.png",
    github: "#",
  },
];
