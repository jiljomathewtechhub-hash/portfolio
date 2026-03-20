import { profileLinks } from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="section-kicker">Contact</span>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          I&apos;m open to junior frontend roles, internships, and collaborative
          product teams where I can keep growing as a React developer.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <div className="contact-intro">
            <h3>Open to new opportunities</h3>
            <p>
              If you&apos;re hiring for a frontend role or building a product that
              values clean React implementation and strong UI execution, I&apos;d
              be glad to connect.
            </p>
          </div>

          <div className="contact-details">
            <strong>Jiljo Mathew</strong>
            <span>Frontend Developer</span>
            <span>Toronto, ON</span>
            <a href={profileLinks.email}>jiljomathew.techhub@gmail.com</a>
          </div>

          <div className="contact-actions">
            <a href={profileLinks.email} className="button">
              Email Me
            </a>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              View GitHub
            </a>
          </div>
        </article>

        <article className="contact-card contact-note">
          <h3>What I bring</h3>
          <p>
            Frontend engineering with React, JavaScript, reusable components,
            responsive layouts, and careful attention to the user experience.
          </p>
          <ul>
            <li>Reusable component systems and clean code structure</li>
            <li>Responsive interfaces built for desktop, tablet, and mobile</li>
            <li>Technical communication shaped by real user-facing experience</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Contact;
