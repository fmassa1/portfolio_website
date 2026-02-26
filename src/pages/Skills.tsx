const skillSections = [
  {
      label: "Languages",
      prompt: "lang --list",
      items: ["Java", "Python", "C / C++", "Swift", "JavaScript", "SQL", "Dart"],
  },
  {
      label: "Frameworks & Tools",
      prompt: "tools --list",
      items: ["React", "Node.js", " Express.js", "Next.js", "Vue.js", "Flask", "Flutter", "JUnit"],
  },
  {
      label: "Domains",
      prompt: "focus --list",
      items: ["Full Stack Development", "AI Agents", "Data Engineering"],
  },
];

export default function Skills() {
  return (
      <>
          <div className="header-section">
              <h1>Skills</h1>
              <p className="subtitle">
                  <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: "#58a6ff", fontSize: "13px" }}>
                      $ cat technical-reference.md
                  </span>
              </p>
          </div>

          <div className="skills-grid">
              {skillSections.map((section) => (
                  <div className="skill-category" key={section.label}>
                      <div style={{ marginBottom: "14px" }}>
                          <h3 style={{ marginBottom: "4px" }}>{section.label}</h3>
                          <span style={{
                              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                              fontSize: "12px",
                              color: "#3fb950",
                          }}>
                              {">"} {section.prompt}
                          </span>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          {section.items.map((item) => (
                              <div
                                  key={item}
                                  style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                      fontSize: "14px",
                                      color: "#c9d1d9",
                                  }}
                              >
                                  <span style={{
                                      fontFamily: "'JetBrains Mono', monospace",
                                      color: "#58a6ff",
                                      fontSize: "12px",
                                      flexShrink: 0,
                                  }}>
                                      ·
                                  </span>
                                  {item}
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </>
  );
}