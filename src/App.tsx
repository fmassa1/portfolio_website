import { useEffect } from 'react';
import './App.css';
import profilePicture from './img/ricky.jpg';
import argonneLogo from './img/ArgonneLogo.png';
import evlLogo from './img/evlLogo.png';
import uiceLogo from './img/UICEngineeringLogo.png';
import { LinkedIn } from './LinkedIn';
import { Github } from './Github';

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
              <li><a href="https://www.evl.uic.edu/people/2700">EVL</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <h1>Ricky Massa</h1>
      <p>Welcome to my website!</p>

      <div className="container">
        <div className="experience-section">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-grid">
            <div className="experience-box">
              <img src={argonneLogo} alt="Argonne National Laboratory" className="experience-logo" />
              <h3>Argonne National Laboratory</h3>
              <p>Lemont, IL</p>
              <p><strong>Junior Software Research Aid</strong> — May 2023 — August 2023</p>
              <ul>
                <li>Collaborated with a team to develop a vehicle and pedestrian detection program that can detect possible close call encounters between the two using Python and TensorFlow.</li>
                <li>Created and utilized a large-scale SQL database to process and analyze patterns in data of vehicles and pedestrians at a crosswalk.</li>
              </ul>
            </div>
            <div className="experience-box">
              <img src={evlLogo} alt="Electronic Visualization Laboratory" className="experience-logo" />
              <h3>Electronic Visualization Laboratory</h3>
              <p>Chicago, IL</p>
              <p><strong>Research Aid</strong> — February 2023 — Current</p>
              <ul>
                <li>Working on a Shell script and setup guide to streamline a setup process for educational nodes that will be sent to schools.</li>
                <li>Developing code to detect vehicle types and speeds of passing vehicles at Northern Illinois University campus using Python, TensorFlow.</li>
              </ul>
            </div>
            <div className="experience-box">
              <img src={uiceLogo} alt="University of Illinois in Chicago Engineering Department" className="experience-logo" />
              <h3>University of Illinois in Chicago Engineering Department</h3>
              <p>Chicago, IL</p>
              <p><strong>Teaching Assistant</strong> — August 2023 — Current</p>
              <ul>
                <li>Facilitating engaging classroom instruction by leading discussions, delivering informative lectures, and conducting hands-on activities to enhance student understanding and participation.</li>
                <li>Providing comprehensive student support by offering regular office hours, addressing individual inquiries and concerns, and extending supplementary resources to ensure students’ academic success and growth.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <div className="about-content">
            <img src={profilePicture} alt="Ricky Massa" className="profile-picture" />
            <p>Currently a senior at the University of Illinois at Chicago earning my Bachelor's in Computer Science with a 3.71 GPA. I have experience working as a Research Aid at the Electronic Visualization Laboratory and as a Teaching Assistant in the UIC Engineering Department. Additionally, I have interned as a Research Aide Technical Intern at Argonne National Laboratory.</p>
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

      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <ul className="projects-grid">
          <li>
            <div className="item-container">
              <div className="text-overlay">
                <a target="_blank" href="https://github.com/fmassa1/Battleship">Battleship</a>
              </div>
              <spline-viewer url="https://prod.spline.design/WewzT3SwukB7p9FF/scene.splinecode" className="spline-viewer"></spline-viewer>
            </div>
          </li>
          <li>
            <div className="item-container">
              <div className="text-overlay">
                <a target="_blank" href="https://github.com/fmassa1/blackjack">Blackjack</a>
              </div>
              <spline-viewer url="https://prod.spline.design/7CU0pS0azF2m2HcU/scene.splinecode" className="spline-viewer"></spline-viewer>
            </div>
          </li>
          <li>
            <div className="item-container">
              <div className="text-overlay">
                <a target="_blank" href="https://github.com/fmassa1/MessagingApp">Messaging App</a>
              </div>
              <spline-viewer url="https://prod.spline.design/ANQ8Yva2y4tWVHqh/scene.splinecode" className="spline-viewer"></spline-viewer>
            </div>
          </li>
          <li>
            <div className="item-container">
              <div className="text-overlay">
                <a target="_blank" href="https://github.com/fmassa1/Weather-Updater">Weather Updater</a>
              </div>
              <spline-viewer url="https://prod.spline.design/5BJcy3N6vuleL1Vf/scene.splinecode" className="spline-viewer"></spline-viewer>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-text">
            <p>rickmass2020@gmail.com</p>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/fredric-massa" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
            <a href="https://github.com/fmassa1" target="_blank" rel="noopener noreferrer"><Github/></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;