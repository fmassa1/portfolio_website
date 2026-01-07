import Terminal from "../components/Terminal/Terminal";

const OVERVIEW_LINES = [
    "> whoami",
    "Fredric Massa",
    "",
    "> role",
    "Software Engineer · Full Stack · AI · AR/VR",
    "",
    "> status",
    "Actively Building — v2026.1",
    "Chicago, IL",
    "",
    "> focus",
    "Fullstack development",
];

export default function Overview() {
    return (
        <>
        <div className="header-section">
            <h1>Fredric Massa</h1>
            <p className="subtitle">Software Engineer · Full Stack Development · AI Systems · AR/VR </p>
        </div>
        <Terminal lines={OVERVIEW_LINES} />

        </>
    );
}
