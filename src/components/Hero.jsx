import myPhoto from "../assets/jiljo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Toronto based, open to Vancouver</span>
          <h1>Design-minded frontend work that feels clear, fast, and human.</h1>
          <p className="hero-lead">
            I build responsive React interfaces with strong UI structure,
            reusable components, and the kind of polish that makes digital
            products easier to trust.
          </p>
          <p className="hero-intro">
            My background blends customer-facing problem solving, modern web
            development training, and data analytics. That mix helps me create
            interfaces that look good, work cleanly, and stay grounded in how
            people actually use them.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button">
              Explore Projects
            </a>
            <a href="mailto:jiljo555@gmail.com" className="button-secondary">
              Let&apos;s Talk
            </a>
            <a href="#contact" className="button-secondary">
              Documents
            </a>
          </div>

          <div className="hero-highlights">
            <article>
              <strong>3</strong>
              <span>deployed portfolio projects built with React</span>
            </article>
            <article>
              <strong>2</strong>
              <span>technical tracks across web development and analytics</span>
            </article>
            <article>
              <strong>6+</strong>
              <span>years of customer and operations experience</span>
            </article>
          </div>
        </div>

        <aside className="hero-side-panel">
          <img src={myPhoto} alt="Portrait of Jiljo Mathew" className="hero-portrait" />

          <div className="hero-side-copy">
            <strong>Current focus</strong>
            <p>
              Building polished frontend experiences with React, JavaScript,
              Firebase, responsive layouts, and strong UI fundamentals.
            </p>
          </div>

          <div className="hero-badges" aria-label="Key skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Responsive UI</span>
            <span>Firebase</span>
            <span>SQL</span>
            <span>UX thinking</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
