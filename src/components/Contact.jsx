const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="section-kicker">Contact</span>
        <h2>Open to junior frontend roles, collaborative teams, and thoughtful digital work.</h2>
        <p>
          I&apos;m currently studying web development while building projects and
          sharpening my frontend craft. If you&apos;re hiring or want to connect,
          I&apos;d love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <h3>Let&apos;s build something useful.</h3>
          <p>
            The roles I&apos;m most excited about combine clean frontend execution,
            strong teamwork, and space to keep growing in UI engineering.
          </p>

          <div className="contact-details">
            <a href="mailto:jiljo555@gmail.com">jiljo555@gmail.com</a>
            <a href="tel:+14167257991">+1 416-725-7991</a>
            <span>Toronto, ON</span>
          </div>

          <div className="contact-actions">
            <a href="mailto:jiljo555@gmail.com" className="button">
              Email Me
            </a>
            <a href="#hero" className="button-secondary">
              Back to Top
            </a>
          </div>
        </article>

        <article className="contact-card contact-note">
          <h3>Documents</h3>
          <p>
            I prepare resumes and cover letters for each opportunity, so I keep
            the portfolio general and share tailored application documents
            directly when needed.
          </p>
          <ul>
            <li>General portfolio and project samples are shown here</li>
            <li>Role-specific resume versions are available on request</li>
            <li>Tailored cover letters are shared privately per application</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Contact;
