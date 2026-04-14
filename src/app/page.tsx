import AboutSection from "@/components/features/home/about/AboutSection";
import Hero from "@/components/features/home/Hero";
import SkillsSection from "@/components/features/home/skills/SkillsSection";

//import ProjectSection from "@/components/home/ProjectSection";
//import ArticleSection from "@/components/home/ArticleSection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillsSection />
      {/*<ProjectSection />
      <ArticleSection />*/}
    </div>
  );
};

export default page;
