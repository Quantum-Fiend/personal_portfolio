"use client";
import PageBanner from "@/Components/sections/PageBanner";
import ArticlesSection from "@/Components/sections/ArticlesSection";

const page = () => {
  return (
    <div>
      <PageBanner
        title="DIGITAL"
        highlight="THOUGHTS"
        tag="Writing Systems • Design Thinking"
        subtitle="Exploring engineering, UI systems, motion design, and scalable web experiences."
      />
      <ArticlesSection />
    </div>
  );
};

export default page;
