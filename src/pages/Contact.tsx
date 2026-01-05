export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <p>If you'd like to collaborate, talk research, or discuss engineering problems:</p>
            <div className="contact-links">
                <a href="mailto:fredric.massa@gmail.com" className="contact-link">
                <span className="link-label">Email</span>
                <span className="link-value">fredric.massa@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/fredric-massa" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/fredric-massa</span>
                </a>
                <a href="https://github.com/fmassa1" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-label">GitHub</span>
                <span className="link-value">github.com/fmassa1</span>
                </a>
            </div>
        </>
    );
}