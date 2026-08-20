import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="eyebrow">experience</div>
        <h2 className="section-title">Where I've worked, learned, and built.</h2>
        <p className="section-sub">
          A snapshot of the experiences where I've applied software engineering, data science, and AI beyond the classroom.
        </p>

        <div className="timeline">
          {experience.map((e) => (
            <div key={e.id} className="timeline__item">
              <div className="timeline__marker">
                <span className="timeline__dot" />
                <span className="timeline__line" />
              </div>
              <div className="timeline__content">
                <div className="timeline__period mono">{e.period}</div>
                <h3 className="timeline__role">{e.role}</h3>
                <div className="timeline__org mono">{e.org}</div>
                <ul className="timeline__points">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 760px;
        }
        .timeline__item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 24px;
        }
        .timeline__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--amber);
          box-shadow: 0 0 0 4px rgba(242,193,78,0.15);
          margin-top: 6px;
          flex-shrink: 0;
        }
        .timeline__line {
          flex-grow: 1;
          width: 1px;
          background: var(--line);
          margin: 6px 0;
        }
        .timeline__item:last-child .timeline__line { display: none; }
        .timeline__content {
          padding-bottom: 44px;
        }
        .timeline__period {
          font-size: 12.5px;
          color: var(--teal);
          margin-bottom: 6px;
        }
        .timeline__role {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .timeline__org {
          font-size: 13px;
          color: var(--text-faint);
          margin-bottom: 14px;
        }
        .timeline__points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .timeline__points li {
          color: var(--text-dim);
          font-size: 14.5px;
          padding-left: 18px;
          position: relative;
          line-height: 1.6;
        }
        .timeline__points li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: var(--violet);
          font-size: 12px;
        }
      `}</style>
    </section>
  );
}
