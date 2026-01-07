export default function Skills() {
    return (
        <>
        <h1>Technical Reference</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <pre className="code-block">{`Java \nPython \nC / C++ \nSwift \nJavaScript \nSQL \nDart`}</pre>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Tools</h3>
            <pre className="code-block">{`React \nNode.js \nFlask \nFlutter \nJUnit`}</pre>
          </div>
          <div className="skill-category">
            <h3>Domains</h3>
            <pre className="code-block">{`AI Agents \nAR / VR Systems \nSystems Programming \nData Engineering`}</pre>
          </div>
        </div>
      </>
    );
}