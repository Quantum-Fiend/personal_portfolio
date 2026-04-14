import AboutSection from "@/components/features/about/AboutSection";
import PageBanner from "@/components/sections/PageBanner";

const about = () => {
  return (
    <div>
      <PageBanner
        title="ABOUT"
        highlight="ME"
        tag="System Architect • UI Engineer • Experience Designer"
        subtitle="I engineer high-performance digital systems where motion, structure, and interaction converge into a seamless experience."
        chips={[
          "System Thinking",
          "Motion Design",
          "UI Architecture",
          "Performance Focus",
        ]}
      />
      <AboutSection />
    </div>
  );
};

export default about;
