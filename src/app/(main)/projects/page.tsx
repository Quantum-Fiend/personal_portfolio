import PageBanner from "@/components/sections/PageBanner";
import ProjectsPage from "@/components/features/projects/ProjectsPage";

const page = () => {
  return (
    <div>
      <PageBanner
        title="PROJECT"
        highlight="WORKS"
        tag="Product Builder • Interface Engineer"
        subtitle="A collection of engineered digital products built with performance, interaction, and scalable architecture in mind."
      />
      <ProjectsPage />
    </div>
  );
};

export default page;
