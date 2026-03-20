import myPhoto from "../assets/jiljo.jpg";
import { heroStats, profileLinks } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Toronto based, open to frontend opportunities</span>
          <h1>
            Frontend developer building clean, responsive React interfaces.
          </h1>
          <p className="hero-lead">
            I build modern frontend applications with React, JavaScript,
            reusable components, and strong UI structure. My focus is creating
            interfaces that feel clear, fast, and easy to use.
          </p>

          <div className="hero-links" aria-label="Professional links">
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
            <a href={profileLinks.email} className="button-secondary">
              Email
            </a>
            <a href="#projects" className="button">
              Explore Projects
            </a>
          </div>

          <div className="hero-highlights">
            {heroStats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-side-panel">
          <img src={myPhoto} alt="Portrait of Jiljo Mathew" className="hero-portrait" />

          <div className="hero-side-copy">
            <strong>Frontend focus</strong>
            <p>
              React-first UI development with reusable components, responsive
              layouts, and user experience that feels intentional.
            </p>
          </div>

          <div className="hero-badges" aria-label="Key skills">
            <span>React</span>
            <span>JavaScript ES6+</span>
            <span>Responsive UI</span>
            <span>Component Architecture</span>
            <span>API Integration</span>
            <span>UX Thinking</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
