const projects = [
  {
    index: "01",
    title: "Developer Portfolio Platform",
    description:
        "Built a full-stack web platform that enables developers to showcase projects, build professional profiles, and collaborate through community feedback, featuring scalable architecture and responsive UI.",
    stack: ["React", "Node.js", "MySQL", "Express"],
    features: [
        "Implemented secure authentication and dynamic developer profile management",
        "Designed interactive project engagement system with likes, comments, and real-time updates",
        "Developed advanced filtering and sorting logic for projects by popularity, recency, and engagement metrics"
    ],
    link: "https://github.com/fmassa1/student-collab-hub",
  },
  {
    index: "02",
    title: "Coffee Shop Web App",
    description:
        "Developed a full-stack business management system that streamlines daily operations for a retail environment, integrating inventory control, transaction processing, and financial analytics through a responsive web interface.",
    stack: ["Python", "Flask", "PostgreSQL", "HTML/CSS"],
    features: [
        "Engineered dynamic inventory and order management modules with database backed state tracking",
        "Implemented real-time data synchronization between frontend interface and backend services",
    ],
    link: "https://github.com/fmassa1/CoffeeShopWebApp",
  },
  {
      index: "03",
      title: "Low-Level Game Engine",
      description:
          "A from-scratch engine built to deeply understand rendering, input, audio, memory management, and timing — without relying on external libraries.",
      stack: ["C", "Win32 API", "DirectSound", "XInput"],
      features: [
          "Raw pixel buffer renderer",
          "Custom memory management",
          "Procedural audio playback",
      ],
      link: null,
  },
];

export default function Projects() {
  return (
      <>
          <div className="header-section">
              <h1>Projects</h1>
              <p className="subtitle">
                  <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: "#58a6ff", fontSize: "13px" }}>
                      $ ls -la ~/projects
                  </span>
              </p>
          </div>

          <div className="exp-timeline">
              {projects.map((project) => (
                  <div className="exp-entry" key={project.index}>
                      <div className="exp-index-col">
                          <span className="exp-index">{project.index}</span>
                          <div className="exp-line" />
                      </div>

                      <div className="exp-body">
                          <div className="exp-header">
                              <div>
                                  <div className="exp-company">{project.title}</div>
                                  <div className="exp-role">
                                      <span className="exp-prompt">{">"}</span> {project.stack.join(" · ")}
                                  </div>
                              </div>
                              {project.link && (
                                  <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="project-link"
                                  >
                                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
                                          view →
                                      </span>
                                  </a>
                              )}
                          </div>

                          <div className="exp-tags">
                              {project.stack.map((tag) => (
                                  <span className="exp-tag" key={tag}>{tag}</span>
                              ))}
                          </div>

                          <p className="exp-description">{project.description}</p>

                          <div className="exp-bullets">
                              {project.features.map((f, i) => (
                                  <div className="exp-bullet" key={i}>
                                      <span className="bullet-arrow">→</span>
                                      <span>{f}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </>
  );
}