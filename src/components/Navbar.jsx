import myPhoto from "../assets/jiljo.jpg";

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#hero" aria-label="Go to home section">
          <img src={myPhoto} alt="Jiljo Mathew" />
          <div className="brand-copy">
            <strong>Jiljo Mathew</strong>
            <span>Frontend Developer</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
