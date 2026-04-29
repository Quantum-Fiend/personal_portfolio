export type Project = {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Sensor_Net",
    description:
      "Sensor_Net is a full-stack IoT platform designed to bridge the gap between hardware sensors and actionable intelligence.",
    image: "/project1.png",
    githubUrl: "https://github.com/Quantum-Fiend/Sensor_Net",
  },
  {
    title: "Aurexis_Mobile",
    description:
      "production-grade personal finance application showcasing an Elite Mobile Engineering Stack. It features native iOS (SwiftUI), native Android (Jetpack Compose),",
    image: "/project2.png",

    githubUrl: "https://github.com/Quantum-Fiend/aurexis-mobile",
  },
  {
    title: "Task Manager App",
    description: "Productivity app with drag & drop task management system.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",

    githubUrl: "#",
  },
];
