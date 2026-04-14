import { githubProjects } from "./projects.data";
import ProjectCard from "./ProjectCard";

export default function GithubProjects() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubProjects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
}
