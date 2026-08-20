import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono footer__text">
          © {new Date().getFullYear()} {profile.name} —  with React.
        </span>
        <span className="mono footer__text footer__text--dim">designed &amp; built from scratch</span>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
          padding: 28px 0;
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer__text {
          font-size: 12.5px;
          color: var(--text-faint);
        }
      `}</style>
    </footer>
  );
}
