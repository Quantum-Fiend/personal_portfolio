import { Palette, Rocket, Atom, Braces, Server, Database, LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: "Next.js", level: 95, icon: Rocket },
  { name: "React", level: 92, icon: Atom },
  { name: "TypeScript", level: 88, icon: Braces },
  { name: "Tailwind CSS", level: 96, icon: Palette },
  { name: "Node.Js", level: 85, icon: Server },
  { name: "PostgreSQL", level: 80, icon: Database },
];


