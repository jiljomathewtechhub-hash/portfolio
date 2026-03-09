import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-list">

        {/* Project 1 */}
        <div className="project">
          <h3>The Kapturezz</h3>
          <p>
            A responsive photography portfolio built with React, showcasing
            dynamic galleries and modern UI design.
          </p>
          <a
            href="https://the-kapturezz.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit The Kapturezz
          </a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Shopza Online</h3>
          <p>
            An interactive e-commerce platform built with React, featuring
            product listings, shopping cart functionality, and state management.
          </p>
          <a
            href="https://shopza-online.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Shopza Online
          </a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <h3>The Morning Chronicle</h3>
          <p>
            A modern blog and news platform created with React, featuring
            dynamic posts, clean layout, and fully responsive design.
          </p>
          <a
            href="https://themorningchronicle.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit The Morning Chronicle
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;