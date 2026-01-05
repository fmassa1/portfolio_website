import './App.css'
import Overview from "./pages/Overview";
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';

import { useState } from "react";

type Page = "overview" | "experience" | "projects" | "skills" | "education" | "contact";

const pages: Record<Page, JSX.Element> = {
  overview: <Overview />,
  experience: <Experiences />,
  projects: <Projects />,
  skills: <Skills />,
  education: <Education/>,
  contact: <Contact />
};

export default function App() {
  const [page, setPage] = useState<Page>("overview");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>fredric-massa</h2>
          <span className="version-badge">v2026.1</span>
        </div>
        <nav>
          {Object.keys(pages).map((p) => (
            <button
              key={p}
              className={page === p ? "active" : ""}
              onClick={() => setPage(p as Page)}
            >
              <span className="nav-icon">›</span>
              {p}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="content-wrapper">
          {pages[page]}
        </div>
      </main>
    </div>
  );
}