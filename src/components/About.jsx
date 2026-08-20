import { GraduationCap } from "lucide-react";
import { about, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="eyebrow">about</div>
        <h2 className="section-title">Someone who likes building the whole thing.</h2>
        <p className="section-sub">
          A quick summary of who I am, what I study, and what I'm looking for next.
        </p>

        <div className="about__grid">
          <div className="about__text">
            {about.summary.map((p, i) => (
              <p key={i} className="about__para">
                {p}
              </p>
            ))}

            <div className="about__edu">
              <div className="about__edu-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="about__edu-degree">{profile.education.degree}</div>
                <div className="about__edu-institute mono">{profile.education.institute}</div>
                <div className="about__edu-duration mono">{profile.education.duration}</div>
                <div className="about__edu-detail">{profile.education.detail}</div>
              </div>
            </div>
          </div>

          <div className="about__stats">
            {about.highlights.map((h) => (
              <div key={h.label} className="stat-card">
                <div className="stat-card__value mono">{h.value}</div>
                <div className="stat-card__label">{h.label}</div>
                <div className="stat-card__note mono">{h.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about__para {
          color: var(--text-dim);
          font-size: 16px;
          margin-bottom: 18px;
          max-width: 560px;
        }
        .about__edu {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          padding: 22px;
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 10px;
          border-left: 3px solid var(--teal);
        }
        .about__edu-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(78,201,176,0.12);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about__edu-degree {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 4px;
        }
        .about__edu-institute {
          color: var(--amber);
          font-size: 13px;
          margin-bottom: 2px;
        }
        .about__edu-duration {
          color: var(--text-faint);
          font-size: 12px;
          margin-bottom: 10px;
        }
        .about__edu-detail {
          color: var(--text-dim);
          font-size: 13.5px;
          line-height: 1.6;
        }
        .about__stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 22px 18px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .stat-card:hover {
          border-color: var(--amber);
          transform: translateY(-3px);
        }
        .stat-card__value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 6px;
        }
        .stat-card__label {
          font-size: 13px;
          color: var(--text-dim);
          margin-bottom: 8px;
        }
        .stat-card__note {
          font-size: 11px;
          color: var(--text-faint);
        }
        @media (max-width: 860px) {
          .about__grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
