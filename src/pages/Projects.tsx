export default function Projects() {
    return (
        <>
        <h1>Projects</h1>
  
        <div className="project-card">
          <h2>Developer Portfolio Platform</h2>
          <p>
          A responsive full-stack platform for showcasing developer profiles and projects, designed to allow students
          to share and receive feedback on side projects they have been working on.
          </p>
          <pre className="code-block">{`Tech Stack:
    React
    Node.js
    MySQL
    Express
    
  
Features:
  - Account creation
  - Liking and commenting on projects
  - Sort projects based on popularity, date posted, etc`
    }</pre>
        </div>

        <div className="project-card">
          <h2>Coffee Shop Web App</h2>
          <p>
            A full-stack web application designed to manage real-world business operations
            including inventory, orders, and financial tracking.
          </p>
          <pre className="code-block">{`Tech Stack:
    Python
    Flask
    PostgreSQL
    HTML / CSS
  
Features:
  - Inventory & order management
  - Real-time data updates
  - Financial reporting`
  }</pre>
        </div>

        <div className="project-card">
          <h2>Low-Level Game Engine</h2>
          <p>
            A from-scratch engine built to deeply understand rendering, input, audio, memory management,
            and timing—without relying on external libraries.
          </p>
          <pre className="code-block">{`Tech Stack:
    C
    Win32 API
    DirectSound
    XInput
  
Features:
  - Raw pixel buffer renderer
  - Custom memory management
  - Procedural audio playback`}</pre>
        </div>

        
      </>
    );
}