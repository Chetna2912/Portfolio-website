import { ArrowUpRight } from "lucide-react";
import { writing } from "../data";

export default function Writing() {
  return (
    <section id="writing" className="section writing">
      <div className="container">
        <div className="eyebrow">writing</div>
        <h2 className="section-title">Notes I've written along the way.</h2>
        <p className="section-sub">
          Placeholder posts for now — I like turning what I learn into short write-ups.
        </p>

        <div className="writing__list">
          {writing.map((w, i) => (
            <a href="#" key={i} className="writing__item">
              <div className="writing__meta mono">{w.date}</div>
              <div className="writing__body">
                <h3 className="writing__title">{w.title}</h3>
                <p className="writing__excerpt">{w.excerpt}</p>
              </div>
              <ArrowUpRight size={18} className="writing__arrow" />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .writing__list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--line);
        }
        .writing__item {
          display: grid;
          grid-template-columns: 100px 1fr 24px;
          gap: 24px;
          align-items: center;
          padding: 26px 8px;
          border-bottom: 1px solid var(--line);
          transition: background 0.15s ease, padding-left 0.15s ease;
        }
        .writing__item:hover {
          background: var(--bg-card);
          padding-left: 16px;
        }
        .writing__meta {
          font-size: 12.5px;
          color: var(--text-faint);
        }
        .writing__title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .writing__excerpt {
          color: var(--text-dim);
          font-size: 14px;
        }
        .writing__arrow {
          color: var(--text-faint);
          transition: color 0.15s ease, transform 0.15s ease;
        }
        .writing__item:hover .writing__arrow {
          color: var(--amber);
          transform: translate(2px, -2px);
        }
        @media (max-width: 640px) {
          .writing__item { grid-template-columns: 1fr 20px; }
          .writing__meta { display: none; }
        }
      `}</style>
    </section>
  );
}
