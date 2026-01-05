
export default function Experiences() {
    return (
        <>
            <h1>Experience</h1>

            <div className="experience-card">
                <h2>Argonne National Laboratory</h2>
                <p><strong>Software Engineer Intern</strong> <span className="muted">(May 2025 – Aug 2025)</span></p>
                <p>
                    Worked on next-generation scientific tooling using AI agents and collaborative AR environments
                    to support researchers working with large-scale datasets and simulations.
                </p>
                <ul>
                    <li>Designed autonomous AI agents for data ingestion, filtering, and AR rendering</li>
                    <li>Reduced AR visualization load times by <strong>40%</strong></li>
                    <li>Built synchronized multi-user 3D environments for collaborative analysis</li>
                </ul>
            </div>

            <div className="experience-card">
                <h2>Electronic Visualization Laboratory (EVL)</h2>
                <p><strong>Undergraduate Research Assistant</strong> <span className="muted">(Feb 2023 – May 2025)</span></p>
                <p>
                Conducted applied research at the intersection of AI, visualization, and immersive computing
                with a focus on scientific and biomedical applications.
                </p>
                <ul>
                    <li>Developed RAG-powered AI agents for protein interaction and fluid dynamics simulations</li>
                    <li>Optimized 3D model generation pipelines, increasing AR throughput by <strong>40%</strong></li>
                </ul>
            </div>
        </>
    );
}