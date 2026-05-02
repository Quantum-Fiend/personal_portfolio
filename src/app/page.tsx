import AboutSection from "@/components/features/home/about/AboutSection";
//import ArticlesSection from "@/components/features/home/article/ArticlesSection";
import Hero from "@/components/features/home/Hero";
import ProjectsSection from "@/components/features/home/project/ProjectsSection";
//import SkillsSection from "@/components/features/home/skills/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Portfolio",
};

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      {/*<SkillsSection />*/}
      <ProjectsSection />
      {/*<ArticlesSection />*/}
    </div>
  );
};

export default page;
