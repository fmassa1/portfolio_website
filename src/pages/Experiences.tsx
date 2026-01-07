
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

            <div className="experience-card">
                <h2>Argonne National Laboratory</h2>
                <p><strong>Software Engineer Intern</strong> <span className="muted">(May 2024 – Aug 2024)</span></p>
                <p>
                    Developed an AI assistant  in Swift for the Apple Vision Pro that allows general querying, 3D model manipulation, and task automation.
                </p>
                <ul>
                    <li>Utilized OpenAI and Llama APIs with Python to power domain-specific natural language interactions, supporting 
                    dynamic content generation, calendar scheduling, and supercomputer task automation.</li>
                    <li>Presented at Sandia National Lab XR Conference 2024 to an audience of <strong>200+</strong>.</li>
                </ul>
            </div>

            <div className="experience-card">
                <h2>Argonne National Laboratory</h2>
                <p><strong>Software Engineer Intern</strong> <span className="muted">(May 2023 – Aug 2023)</span></p>
                <p>
                Analyzed the effectiveness of pedestrian safety by tracking vehicle speeds and sudden stops, leveraging TensorFlow 
                for vehicle detection and PyTorch deep learning models for re-identification and speed classification.
                </p>
                <ul>
                    <li>Designed a MariaDB database and decreased SQL query execution time by <strong>27%</strong> by optimizing queries.</li>
                    <li>Worked on the data portal to view and analyze the data using Django, Python, HTML, CSS</li>
                    <li>Developed analysis tools using Python to compute average vehicle speeds and identify traffic flow patterns 
                    from large-scale transportation datasets.</li>
                </ul>
            </div>
            
        </>
    );
}