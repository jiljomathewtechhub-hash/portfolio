const projects = [
  {
    index: "Project 01",
    name: "The Kapturezz",
    description:
      "A photography portfolio built in React to showcase visual work through reusable gallery components and a cleaner browsing experience.",
    outcome:
      "Focused on visual hierarchy, responsive presentation, and component reuse.",
    url: "https://the-kapturezz.netlify.app",
    cta: "Visit The Kapturezz",
    tags: ["React", "Gallery UI", "Responsive"],
  },
  {
    index: "Project 02",
    name: "Shopza Online",
    description:
      "A multi-page e-commerce interface with product browsing, cart interactions, and dynamic content updates.",
    outcome:
      "Improved the shopping flow with clearer layout, interaction feedback, and state-driven UI behavior.",
    url: "https://shopza-online.netlify.app",
    cta: "Visit Shopza Online",
    tags: ["React", "State Management", "E-commerce"],
  },
  {
    index: "Project 03",
    name: "The Morning Chronicle",
    description:
      "A modern blog and news experience designed for readable content, structured page flow, and responsive behavior.",
    outcome:
      "Balanced editorial presentation with a lightweight, easy-to-scan interface.",
    url: "https://themorningchronicle.netlify.app",
    cta: "Visit The Morning Chronicle",
    tags: ["React", "Editorial UI", "Content Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-kicker">Selected Work</span>
        <h2>Projects that show how I translate ideas into usable interfaces.</h2>
        <p>
          Each project emphasizes responsive behavior, clean structure, and UI
          decisions that support the person on the other side of the screen.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <span className="project-index">{project.index}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="project-outcome">{project.outcome}</p>

            <div className="project-tags" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
