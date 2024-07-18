import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="left-section">
            <h2>rickymassa.dev</h2>
          </div>
          <div className="right-section">
            <ul className="nav_options">
              <li><a href="https://linkedin.com/in/fredric-massa">LinkedIn</a></li>
              <li><a href="https://github.com/fmassa1">GitHub</a></li>
              <li><a href="#">Other</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <h1>Ricky Massa</h1>
      <p> Welcome to my website! </p>
      <div className="container">
        <div className="projects-section">
          <h2 className="projects-title">Projects</h2>
          <ul className="projects-list">
            <li>
              <div className="item-container">
                <div className="text-overlay">
                  <a target="_blank" href="https://github.com/fmassa1/Weather-Updater">
                    Weather Updater
                  </a>
                </div>
                <spline-viewer url="https://prod.spline.design/5BJcy3N6vuleL1Vf/scene.splinecode" className="spline-viewer"></spline-viewer>
              </div>
            </li>
            <li>
              <div className="item-container">
                <div className="text-overlay">
                  <a target="_blank" href="https://github.com/fmassa1/Evil-Word-Game">
                    Blackjack
                  </a>
                </div>
                <spline-viewer url="https://prod.spline.design/7CU0pS0azF2m2HcU/scene.splinecode" className="spline-viewer"></spline-viewer>
              </div>
            </li>
            <li>
              <div className="item-container">
                <div className="text-overlay">
                  <a target="_blank" href="https://github.com/fmassa1/camera-calibration">
                    Messaging App
                  </a>
                </div>
                <spline-viewer url="https://prod.spline.design/ANQ8Yva2y4tWVHqh/scene.splinecode" className="spline-viewer"></spline-viewer>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <div className="about-content">
            <p>Currently a senior at the University of Illinois at Chicago earning my Bachelor's in Computer Science with a GPA of 3.64. I have experience working as a Research Aid at the Electronic Visualization Laboratory and as a Teaching Assistant in the UIC Engineering Department. Additionally, I have interned as a Research Aide Technical Intern at Argonne National Laboratory.</p>
            <div className="skills-section">
              <h3 className="skills-title">Skills</h3>
              <ul className="skills-list">
                <li>Python</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>Java</li>
                <li>Swift</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2024 Ricky Massa. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/fredric-massa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/fmassa1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#">Other</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;