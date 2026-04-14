import AboutSection from "@/components/features/home/about/AboutSection";
import Hero from "@/components/features/home/Hero";
import ProjectsSection from "@/components/features/home/project/ProjectsSection";
import SkillsSection from "@/components/features/home/skills/SkillsSection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default page;
