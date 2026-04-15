
import ContactSection from "@/components/features/contact/ContactSection";
import PageBanner from "@/components/sections/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="LET’S"
        highlight="CONNECT"
        tag="Available for collaborations & product builds"
        subtitle="Open to building impactful digital experiences, collaborations, and engineering opportunities."
      />
      <ContactSection />
    </div>
  );
};

export default page;
