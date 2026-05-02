import { IconType } from "react-icons";
import {
  FiCode,
  FiLayers,
  FiCpu,
  FiZap,
  FiBookOpen,
  FiTarget,
} from "react-icons/fi";

export type CardItem = {
  icon: IconType;
  title: string;
  desc: string;
};

export const cards: CardItem[] = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "Building fast, accessible and interactive user interfaces with attention to detail and UX flow.",
  },
  {
    icon: FiLayers,
    title: "System Architecture",
    desc: "Designing scalable, modular systems with clean structure, maintainability, and long-term flexibility.",
  },
  {
    icon: FiCpu,
    title: "Problem Solving",
    desc: "Deconstructing complex UI and system challenges into simple, structured, and maintainable solutions.",
  },
  {
    icon: FiZap,
    title: "Performance Focus",
    desc: "Optimizing rendering, responsiveness, and user experience for fast and smooth interactions..",
  },
  {
    icon: FiBookOpen,
    title: "Continuous Growth",
    desc: "Constantly exploring modern tools, frameworks, and engineering patterns to improve my craft",
  },
  {
    icon: FiTarget,
    title: "Vision",
    desc: "Building meaningful digital products that combine clarity, usability, and strong engineering foundations.",
  },
];
