export default function Skills() {
    return (
        <>
        <h1>Technical Reference</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <pre className="code-block">{`Java
  Python
  C / C++
  Swift
  JavaScript
  SQL
  Dart`}</pre>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Tools</h3>
            <pre className="code-block">{`React
  Node.js
  Flask
  Flutter
  JUnit`}</pre>
          </div>
          <div className="skill-category">
            <h3>Domains</h3>
            <pre className="code-block">{`AI Agents
  AR / VR Systems
  Systems Programming
  Data Engineering`}</pre>
          </div>
        </div>
      </>
    );
}