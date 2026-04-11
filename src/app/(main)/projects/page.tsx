"use client";
import PageBanner from "@/Components/sections/PageBanner";
import ProjectsSection from "@/Components/sections/ProjectSectin";


const page = () => {
  return (
    <div>
      <PageBanner
        title="PROJECT"
        highlight="WORKS"
        tag="Product Builder • Interface Engineer"
        subtitle="A collection of engineered digital products built with performance, interaction, and scalable architecture in mind."
      />
      <ProjectsSection />
    </div>
  );
};

export default page;
