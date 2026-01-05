import { useState } from "react";
import "./App.css";


const pages = {
  overview: (
    <>
      <h1>Fredric Massa</h1>
      <p className="subtitle">Software Engineer · AI · AR/VR · Systems</p>
      <pre className="code-block">{`Version: v2025.1
Status: Actively Building
Location: Chicago, IL`}</pre>
    </>
  ),
  experience: (
    <>
      <h1>Experience</h1>

      <h2>Argonne National Laboratory</h2>
      <p><strong>Software Engineer Intern</strong> (May 2025 – Aug 2025)</p>
      <ul>
        <li>Developed autonomous AI agents on Apple Vision Pro</li>
        <li>Reduced AR visualization load times by 40%</li>
        <li>Built collaborative multi-user 3D environments</li>
      </ul>

      <h2>Electronic Visualization Laboratory</h2>
      <p><strong>Undergraduate Research Assistant</strong> (Feb 2023 – May 2025)</p>
      <ul>
        <li>Built RAG-based AI agents for protein & fluid simulations</li>
        <li>Optimized AR 3D rendering pipelines by 40%</li>
      </ul>
    </>
  ),
  projects: (
    <>
      <h1>Projects</h1>

      <h2>Low-Level Game Engine</h2>
      <pre className="code-block">{`C / Win32 / DirectSound / XInput
- Raw pixel buffer renderer
- Custom memory management
- Procedural audio`}</pre>

      <h2>Coffee Shop Web App</h2>
      <pre className="code-block">{`Python / Flask / PostgreSQL
- Inventory & order management
- Real-time updates
- Financial tracking`}</pre>
    </>
  ),
  skills: (
    <>
      <h1>Technical Reference</h1>
      <pre className="code-block">{`Languages:
  Java, Python, C/C++, Swift, JavaScript, SQL, Dart

Frameworks:
  React, Node.js, Flask, Flutter, JUnit

Domains:
  AI Agents
  AR / VR
  Systems Programming`}</pre>
    </>
  ),
  education: (
    <>
      <h1>Education</h1>
      <p><strong>University of Illinois at Chicago</strong></p>
      <p>B.S. Computer Science (Aug 2022 – May 2025)</p>
    </>
  ),
  contact: (
    <>
      <h1>Contact</h1>
      <pre className="code-block">{`Email: fredric.massa@gmail.com
LinkedIn: linkedin.com/in/fredric-massa
GitHub: github.com/fmassa1`}</pre>
    </>
  )
};

export default function App() {
  const [page, setPage] = useState("overview");

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>fredric-massa</h2>
        <nav>
          {Object.keys(pages).map((p) => (
            <button
              key={p}
              className={page === p ? "active" : ""}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">{pages[page]}</main>
    </div>
  );
}
