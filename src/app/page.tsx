"use client";
import AboutSection from "@/Components/home/AboutSection";
import Hero from "@/Components/home/Hero";
import Skills from "@/Components/home/SkillsSection";
import ProjectSection from "@/Components/home/ProjectSection";
import BlogsSection from "@/Components/home/BlogSection";


const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <BlogsSection />
    </div>
  );
};

export default page;
