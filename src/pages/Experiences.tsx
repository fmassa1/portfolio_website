import { useState } from "react";

const LINKEDIN_ICON = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const experiences = [
    {
        company: "Argonne National Laboratory",
        role: "Software Engineer Intern",
        period: "May 2025 – Aug 2025",
        index: "01",
        tags: ["AI Agents", "AR/XR", "Python", "Swift"],
        description:
            "Worked on next generation scientific tooling using AI agents and collaborative AR environments to support researchers working with large-scale datasets and simulations.",
        bullets: [
            "Developed AI-powered data processing agents using Swift and Python for Apple Vision Pro that reduced cosmology dataset visualization load times by 70% and enabled real-time analysis of simulation data.",
            "Built multi-user collaborative AR workspace supporting 5 concurrent researchers with synchronized 3D visualization, annotation, and interaction tools for scientific simulations.",
            "Integrated Retrieval-Augmented Generation (RAG) pipelines with scientific databases to automate dataset filtering, retrieval, and rendering workflows, improving research efficiency.",
        ],
        linkedIn: "https://www.linkedin.com/embed/feed/update/urn:li:share:7356336328663277569",
    },
    {
        company: "Electronic Visualization Laboratory (EVL)",
        role: "Software Developer",
        period: "Feb 2023 – May 2025",
        index: "02",
        tags: ["Python", "Pytorch", "TensorFlow", "SQL"],
        description:
            "Developed scalable computer vision and data analytics systems for transportation research, integrating deep learning, database optimization, and statistical analysis to extract actionable insights from large-scale datasets.",
        bullets: [
            "Engineered computer vision analytics platform processing 2,000+ vehicle detections daily using TensorFlow and PyTorch for object detection, vehicle re-identification, and speed classification.",
            "Optimized MariaDB database schema and SQL queries, reducing execution time by 20% and improving retrieval performance across 250K+ transportation records.",
            "Built scalable Python data analysis pipeline using Pandas and NumPy to compute traffic metrics, detect trends, and generate statistical insights.",
        ],
        linkedIn: "https://www.linkedin.com/embed/feed/update/urn:li:share:7257014050419613696",
    },
    {
        company: "Argonne National Laboratory",
        role: "Software Engineer Intern",
        period: "May 2024 – Aug 2024",
        index: "03",
        tags: ["Swift", "Vision Pro", "LLMs"],
        description:
            "Engineered an AI-powered assistant for Apple Vision Pro integrating RAG-based intelligence, scientific database querying, and immersive 3D visualization to automate research workflows and enhance interactive analysis.",
        bullets: [
            "Developed AI agent using Retrieval-Augmented Generation (RAG) and OpenAI APIs to query protein interaction and fluid dynamics databases, automate simulation submissions, and generate AR-based 3D visualizations.",
            "Optimized 3D rendering pipeline in Swift and RealityKit, increasing simultaneous protein model rendering capacity by 50% on Apple Vision Pro.",
            "Led weekly Agile sprint meetings and presented technical demos to 500+ attendees at research conferences and university technology events.",
        ],
        linkedIn: "https://www.linkedin.com/embed/feed/update/urn:li:share:7232793488646365184",
    },
];

function LinkedInEmbed({ url }: { url: string }) {
    const [failed, setFailed] = useState(false);
    const [loaded, setLoaded] = useState(false);

    if (failed) {
        return (
            <div className="li-fallback">
                <span>Could not load post.</span>
                <a
                    href={url.replace("/embed/feed/update/", "/posts/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="li-fallback-link"
                >
                    {LINKEDIN_ICON} View on LinkedIn
                </a>
            </div>
        );
    }

    return (
        <div className="li-embed-wrapper">
            {!loaded && (
                <div className="li-loading">
                    <span className="li-loading-dot" />
                    <span className="li-loading-dot" />
                    <span className="li-loading-dot" />
                </div>
            )}
            <iframe
                src={url}
                className="li-iframe"
                style={{ opacity: loaded ? 1 : 0 }}
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Post"
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
            />
        </div>
    );
}

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="exp-entry">
            <div className="exp-index-col">
                <span className="exp-index">{exp.index}</span>
                <div className="exp-line" />
            </div>

            <div className="exp-body">
                <div className="exp-header">
                    <div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-role">
                            <span className="exp-prompt">{">"}</span> {exp.role}
                        </div>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                </div>

                <div className="exp-tags">
                    {exp.tags.map((tag) => (
                        <span className="exp-tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-bullets">
                    {exp.bullets.map((b, i) => (
                        <div className="exp-bullet" key={i}>
                            <span className="bullet-arrow">→</span>
                            <span>{b}</span>
                        </div>
                    ))}
                </div>

                {exp.linkedIn && (
                    <div className="li-section">
                        <button
                            className={`li-toggle ${expanded ? "li-toggle-open" : ""}`}
                            onClick={() => setExpanded(!expanded)}
                        >
                            <span className="li-toggle-icon">{LINKEDIN_ICON}</span>
                            <span>{expanded ? "Hide Post" : "View LinkedIn Post"}</span>
                            <span className="li-chevron">{expanded ? "▲" : "▼"}</span>
                        </button>

                        {expanded && (
                            <div className="li-embed-container">
                                <LinkedInEmbed url={exp.linkedIn} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experiences() {
    return (
        <>
            <div className="header-section">
                <h1>Experience</h1>
                <p className="subtitle">
                    <span
                        style={{
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            color: "#58a6ff",
                            fontSize: "13px",
                        }}
                    >
                        $ git log --author="Fredric Massa" --oneline
                    </span>
                </p>
            </div>

            <div className="exp-timeline">
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.index} exp={exp} />
                ))}
            </div>
        </>
    );
}