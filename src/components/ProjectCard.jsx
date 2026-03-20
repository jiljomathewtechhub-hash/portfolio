const ProjectCard = ({
  index,
  name,
  problem,
  solution,
  techStack,
  contributions,
  result,
  liveUrl,
  repoUrl,
}) => {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-index">{index}</span>
        <h3>{name}</h3>
      </div>

      <div className="project-copy">
        <div className="project-block">
          <h4>Problem</h4>
          <p>{problem}</p>
        </div>

        <div className="project-block">
          <h4>Solution</h4>
          <p>{solution}</p>
        </div>

        <div className="project-block">
          <h4>Tech Stack</h4>
          <div className="project-tags" aria-label={`${name} tech stack`}>
            {techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="project-block">
          <h4>Key Contributions</h4>
          <ul className="project-list">
            {contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-block">
          <h4>Result</h4>
          <p className="project-result">{result}</p>
        </div>
      </div>

      <div className="project-actions">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button">
          Live Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary button-secondary-strong"
        >
          View Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
