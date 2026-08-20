import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  // { href: "#writing", label: "writing" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand mono">
          <span className="navbar__bracket">&lt;</span>
          Chetna<span className="navbar__dot">.</span>Nagar
          <span className="navbar__bracket">/&gt;</span>
        </a>

        <nav className="navbar__links">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="navbar__link">
              <span className="navbar__index mono">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Let's talk
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="navbar__mobile-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="navbar__mobile-cta">
            Let's talk
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .navbar--scrolled {
          background: rgba(13, 17, 23, 0.86);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .navbar__brand {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .navbar__bracket { color: var(--text-faint); }
        .navbar__dot { color: var(--amber); }
        .navbar__links {
          display: flex;
          gap: 28px;
        }
        .navbar__link {
          font-size: 14px;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s ease;
        }
        .navbar__link:hover { color: var(--text); }
        .navbar__index {
          font-size: 11px;
          color: var(--teal);
          opacity: 0.7;
        }
        .navbar__cta {
          font-size: 13px;
          font-family: var(--font-mono);
          border: 1px solid var(--line);
          padding: 8px 16px;
          border-radius: 6px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .navbar__cta:hover {
          border-color: var(--amber);
          color: var(--amber);
        }
        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
        }
        .navbar__mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__toggle { display: block; }
          .navbar--scrolled, .navbar { background: rgba(13, 17, 23, 0.96); border-bottom: 1px solid var(--line); }
          .navbar__mobile {
            display: flex;
            flex-direction: column;
            padding: 12px 24px 24px;
            gap: 4px;
            background: rgba(13, 17, 23, 0.98);
            border-bottom: 1px solid var(--line);
          }
          .navbar__mobile-link {
            padding: 12px 0;
            border-bottom: 1px solid var(--line-soft);
            color: var(--text-dim);
            font-size: 15px;
          }
          .navbar__mobile-cta {
            margin-top: 14px;
            text-align: center;
            padding: 12px;
            border: 1px solid var(--amber);
            color: var(--amber);
            border-radius: 6px;
            font-family: var(--font-mono);
            font-size: 14px;
          }
        }
      `}</style>
    </header>
  );
}
