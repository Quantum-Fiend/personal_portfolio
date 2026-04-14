import { featuredProjects } from "./projects.data";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
}
