"use client";
import AboutSection from "@/Components/home/AboutSection";
import Hero from "@/Components/home/Hero";
import Skills from "@/Components/home/SkillsSection";
import ProjectSection from "@/Components/home/ProjectSection";
import BlogsSection from "@/Components/home/BlogSection";
import ContactCTA from "@/Components/home/CallToActionSection";


const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <BlogsSection />
	  <ContactCTA />
    </div>
  );
};

export default page;
