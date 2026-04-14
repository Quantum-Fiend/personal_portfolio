import FeaturedProjects from "./FeaturedProjects";
import GithubProjects from "./GithubProjects";

export default function ProjectsPage() {
  return (
    <section className="py-20 space-y-20">
      <FeaturedProjects />
      <GithubProjects />
    </section>
  );
}
