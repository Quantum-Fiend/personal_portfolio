import ProjectCard from "./ProjectCard";
import { githubProjects } from "./projects.data";

export default function GithubProjects() {
  return (
    <div className="text-center space-y-10">
      <h2 className="text-2xl font-semibold">
        <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          GitHub Projects
        </span>
        <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
      </h2>

      <p className="text-gray-500 text-sm">
        Backend systems, APIs, and engineering experiments
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubProjects.map((p, i) => (
          <ProjectCard key={i} p={p} index={0} />
        ))}
      </div>
    </div>
  );
}
