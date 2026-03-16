const skillGroups = [
  {
    title: "Frontend foundations",
    items: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React with components, props, state, and hooks",
      "Responsive and mobile-first layout systems",
      "DOM manipulation, API integration, and AJAX",
    ],
  },
  {
    title: "Tools and workflow",
    items: [
      "Git, GitHub, and Visual Studio Code",
      "Firebase Console and Netlify deployment",
      "Chrome DevTools, testing, and debugging",
      "Cross-browser compatibility and QA awareness",
    ],
  },
  {
    title: "UI and product sense",
    items: [
      "Component-based architecture",
      "UX and UI fundamentals",
      "Interaction polish and layout clarity",
      "Clear communication shaped by support experience",
    ],
  },
  {
    title: "Data fluency",
    items: [
      "SQL with MySQL and PostgreSQL",
      "Python with pandas and NumPy",
      "Tableau, Power BI, and spreadsheet analysis",
      "Funnel thinking and insight-driven decisions",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-kicker">Capabilities</span>
        <h2>Practical frontend skills, with enough range to collaborate well.</h2>
        <p>
          I&apos;m strongest in frontend implementation, but I also bring
          analytics thinking, debugging discipline, and real-world experience
          supporting users across digital systems.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
