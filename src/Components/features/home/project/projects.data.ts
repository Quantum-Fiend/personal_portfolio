export type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Recruit_Flow",
    description:
      "Project Status: 🚧 In Progress 🚧 This project is currently undergoing active development and production hardening.",
    image:
      "/project3.png",

    githubUrl: "https://github.com/Quantum-Fiend/Recruit_Flow",
  },
  {
    title: "Aurexis_Mobile",
    description:
      "production-grade personal finance application showcasing an Elite Mobile Engineering Stack. It features iOS (SwiftUI), Android.",
    image: "/project2.png",

    githubUrl: "https://github.com/Quantum-Fiend/aurexis-mobile",
  },
  {
    title: "Sensor_Net",
    description:
      "Sensor_Net is a full-stack IoT platform designed to bridge the gap between hardware sensors and actionable intelligence.",
    image: "/project1.png",
    githubUrl: "https://github.com/Quantum-Fiend/Sensor_Net",
  },
];
