import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";

const script = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "chetna_nagar — b.s. data science, iit madras" },
  { type: "cmd", text: "cat status.txt" },
  { type: "out", text: "seeking internship · eager to learn & contribute" },
  { type: "cmd", text: "./run_portfolio.sh" },
];

function useTypedScript(lines, speed = 28, lineDelay = 380) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let current = [];

    function typeChar() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const line = lines[lineIndex];
      if (charIndex === 0) {
        current = [...current, { ...line, text: "" }];
      }
      charIndex++;
      const partial = line.text.slice(0, charIndex);
      const updated = current.map((l, i) => (i === current.length - 1 ? { ...l, text: partial } : l));
      current = updated;
      setRenderedLines([...current]);

      if (charIndex <= line.text.length) {
        setTimeout(typeChar, line.type === "cmd" ? speed : speed * 0.6);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeChar, lineDelay);
      }
    }

    const startTimer = setTimeout(typeChar, 500);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, []);

  return { renderedLines, done };
}

export default function Hero() {
  const { renderedLines, done } = useTypedScript(script);

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="eyebrow">software engineering · data science · AI/ML</div>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">{profile.name}</span>.
            <br />
            I built <span className="hero__accent hero__accent--teal">software</span> and
            <br />
            intelligent <span className="hero__accent hero__accent--amber">systems</span>.
          </h1>
          <p className="hero__sub">
            B.S. Data Science student at <strong>IIT Madras</strong>, with hands-on full-stack development experience and 
            a growing focus on machine learning, deep learning, and generative AI.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <LeetcodeIcon size={18} />
            </a>
          </div>
        </div>

        <div className="hero__terminal" role="img" aria-label="Terminal animation introducing Chetna Nagar">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--r" />
              <span className="terminal__dot terminal__dot--y" />
              <span className="terminal__dot terminal__dot--g" />
              <span className="terminal__title mono">chetna@iitm — zsh</span>
            </div>
            <div className="terminal__body mono">
              {renderedLines.map((line, i) => (
                <div key={i} className={`terminal__line terminal__line--${line.type}`}>
                  {line.type === "cmd" && <span className="terminal__prompt">➜ ~ </span>}
                  {line.text}
                  {i === renderedLines.length - 1 && !done && <span className="terminal__cursor" />}
                </div>
              ))}
              {done && (
                <div className="terminal__result">
                  <div className="terminal__row">
                    <span className="terminal__key">education</span>
                    <span className="terminal__val">B.S. Data Science, IIT Madras</span>
                  </div>
                  <div className="terminal__row">
                    <span className="terminal__key">stack</span>
                    <span className="terminal__val">Python · React · Angular · Laravel</span>
                  </div>
                  <div className="terminal__row">
                    <span className="terminal__key">focus</span>
                    <span className="terminal__val">Full-Stack · Machine Learning · AI</span>
                  </div>
                  <div className="terminal__line terminal__line--cmd">
                    <span className="terminal__prompt">➜ ~ </span>
                    <span className="terminal__cursor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <ArrowDown size={16} />
      </a>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
        }
        .hero__glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(78,201,176,0.10), transparent 65%);
          filter: blur(20px);
          z-index: 0;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.12;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }
        .hero__name { color: var(--text); }
        .hero__accent--teal { color: var(--teal); }
        .hero__accent--amber { color: var(--amber); }
        .hero__sub {
          color: var(--text-dim);
          font-size: 17px;
          max-width: 480px;
          margin-bottom: 34px;
        }
        .hero__sub strong { color: var(--text); font-weight: 600; }
        .hero__actions {
          display: flex;
          gap: 14px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .btn {
          font-family: var(--font-mono);
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 7px;
          display: inline-flex;
          align-items: center;
          transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .btn--primary {
          background: var(--amber);
          color: #14120a;
          font-weight: 600;
        }
        .btn--primary:hover { transform: translateY(-2px); }
        .btn--ghost {
          border: 1px solid var(--line);
          color: var(--text);
        }
        .btn--ghost:hover { border-color: var(--teal); color: var(--teal); transform: translateY(-2px); }
        .hero__social {
          display: flex;
          gap: 18px;
          color: var(--text-dim);
        }
        .hero__social a { transition: color 0.15s ease; }
        .hero__social a:hover { color: var(--amber); }

        .terminal {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5);
        }
        .terminal__bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--line);
          background: var(--bg-raised);
        }
        .terminal__dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .terminal__dot--r { background: #ff5f56; }
        .terminal__dot--y { background: #ffbd2e; }
        .terminal__dot--g { background: #27c93f; }
        .terminal__title { margin-left: 10px; font-size: 12px; color: var(--text-faint); }
        .terminal__body {
          padding: 22px 20px;
          font-size: 14px;
          min-height: 260px;
          color: var(--text-dim);
        }
        .terminal__line { margin-bottom: 10px; white-space: pre-wrap; word-break: break-word; }
        .terminal__line--cmd { color: var(--text); }
        .terminal__line--out { color: var(--teal); padding-left: 4px; }
        .terminal__prompt { color: var(--violet); }
        .terminal__cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--amber);
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .terminal__result {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px dashed var(--line);
        }
        .terminal__row {
          display: flex;
          gap: 10px;
          font-size: 13px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .terminal__key { color: var(--blue); min-width: 82px; }
        .terminal__key::after { content: ":"; color: var(--text-faint); }
        .terminal__val { color: var(--text-dim); }

        .hero__scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-faint);
          border: 1px solid var(--line);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floaty 2.2s ease-in-out infinite;
        }
        @keyframes floaty {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }

        @media (max-width: 940px) {
          .hero__grid { grid-template-columns: 1fr; }
          .hero { padding-top: 110px; }
        }
      `}</style>
    </section>
  );
}
