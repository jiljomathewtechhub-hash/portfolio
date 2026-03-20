import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-kicker">Selected Work</span>
        <h2>Projects that demonstrate frontend architecture, UI execution, and product thinking.</h2>
        <p>
          Each build focuses on reusable React patterns, responsive layouts,
          clear UX decisions, and the kind of implementation detail hiring teams
          expect from a frontend developer.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
