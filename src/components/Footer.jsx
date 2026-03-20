import { profileLinks } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-meta">
        <strong>Jiljo Mathew</strong>
        <p>Frontend Developer</p>
      </div>
      <div className="footer-links">
        <a href={profileLinks.email}>Email</a>
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
