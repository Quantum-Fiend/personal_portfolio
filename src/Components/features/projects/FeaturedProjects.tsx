import ProjectCard from "./ProjectCard";
import { featuredProjects } from "./projects.data";

export default function FeaturedProjects() {
  return (
    <div className="text-center space-y-10">
      <h2 className="text-2xl font-semibold">
        <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
        <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
      </h2>

      <p className="text-gray-500 text-sm">
        High-impact production-ready applications
      </p>

      <div>
        {featuredProjects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
}
