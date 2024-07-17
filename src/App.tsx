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
      <h2 className="projects-title">Projects</h2>
      <div className="spline-container">
        <ul>
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
    </>
  );
}

export default App;