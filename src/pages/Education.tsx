const education = [
    {
        index: "01",
        school: "University of Illinois at Chicago",
        degree: "Bachelor of Science in Computer Science",
        period: "Aug 2022 – May 2025",
        tags: ["Computer Science", "B.S."],
        bullets: [
            "Electronic Visualization Laboratory — undergraduate research in AI, AR/VR, and scientific visualization",
            "3x Argonne National Laboratory intern across software engineering and research roles",
        ],
    },
];

export default function Education() {
    return (
        <>
            <div className="header-section">
                <h1>Education</h1>
                <p className="subtitle">
                    <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: "#58a6ff", fontSize: "13px" }}>
                        $ cat education.log
                    </span>
                </p>
            </div>

            <div className="exp-timeline">
                {education.map((edu) => (
                    <div className="exp-entry" key={edu.index}>
                        <div className="exp-index-col">
                            <span className="exp-index">{edu.index}</span>
                            <div className="exp-line" />
                        </div>

                        <div className="exp-body">
                            <div className="exp-header">
                                <div>
                                    <div className="exp-company">{edu.school}</div>
                                    <div className="exp-role">
                                        <span className="exp-prompt">{">"}</span> {edu.degree}
                                    </div>
                                </div>
                                <span className="exp-period">{edu.period}</span>
                            </div>

                            <div className="exp-tags">
                                {edu.tags.map((tag) => (
                                    <span className="exp-tag" key={tag}>{tag}</span>
                                ))}
                            </div>

                            <div className="exp-bullets">
                                {edu.bullets.map((b, i) => (
                                    <div className="exp-bullet" key={i}>
                                        <span className="bullet-arrow">→</span>
                                        <span>{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}