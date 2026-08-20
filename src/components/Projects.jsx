import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { GithubIcon } from "./BrandIcons";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="eyebrow">projects</div>
        <h2 className="section-title">A few things I've built.</h2>
        <p className="section-sub">
          A look at the projects, technologies, and ideas behind my work.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <article key={p.id} className="project-card">
              <div className="project-card__top">
                <span className="project-card__index mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="project-card__period mono">{p.period}</span>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              {/* <div className="project-card__metric">
                <span className="project-card__metric-value mono">{p.metric.value}</span>
                <span className="project-card__metric-label">{p.metric.label}</span>
              </div> */}

              <div className="project-card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="project-card__pill mono">
                    {s}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                  <GithubIcon size={15} /> Code
                </a>
                <a href={p.demo} className="project-card__link">
                  <ArrowUpRight size={15} /> Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
          position: relative;
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--teal);
        }
        .project-card__top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .project-card__index {
          font-size: 13px;
          color: var(--violet);
        }
        .project-card__period {
          font-size: 12px;
          color: var(--text-faint);
        }
        .project-card__title {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .project-card__desc {
          color: var(--text-dim);
          font-size: 14.5px;
          margin-bottom: 18px;
          flex-grow: 1;
        }
        .project-card__metric {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 18px;
          padding: 10px 14px;
          background: var(--bg-raised);
          border-radius: 8px;
          width: fit-content;
        }
        .project-card__metric-value {
          color: var(--amber);
          font-weight: 700;
          font-size: 16px;
        }
        .project-card__metric-label {
          color: var(--text-faint);
          font-size: 12px;
        }
        .project-card__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .project-card__pill {
          font-size: 11.5px;
          padding: 5px 10px;
          border-radius: 5px;
          border: 1px solid var(--line);
          color: var(--text-dim);
        }
        .project-card__links {
          display: flex;
          gap: 20px;
          border-top: 1px solid var(--line);
          padding-top: 16px;
        }
        .project-card__link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          color: var(--text-dim);
          transition: color 0.15s ease;
        }
        .project-card__link:hover { color: var(--teal); }
        @media (max-width: 780px) {
          .projects__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
