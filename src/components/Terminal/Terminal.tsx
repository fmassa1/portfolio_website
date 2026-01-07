import "./Terminal.css"
import { useEffect, useState } from "react";

type TerminalProps = {
  lines: string[];
  typingSpeed?: number;
};

export default function Terminal({
  lines,
  typingSpeed = 25
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        const updated = [...displayedLines];
        updated[lineIndex] =
          (updated[lineIndex] || "") + currentLine[charIndex];
        setDisplayedLines(updated);
        setCharIndex(charIndex + 1);
      } else {
        setDisplayedLines([...displayedLines, ""]);
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, displayedLines, lines, typingSpeed]);

  return (
    <pre className="terminal">
      {displayedLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <span className="cursor">█</span>
    </pre>
  );
}