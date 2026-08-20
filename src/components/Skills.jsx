import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="eyebrow">skills</div>

        <h2 className="section-title">
          My skills, organized like a stack trace.
        </h2>

        <p className="section-sub">
          The technologies and practices I use to turn ideas into
          working products — from data and models to APIs and user-facing
          applications.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const isConcepts = group.title === "Concepts & Practices";

            return (
              <div
                key={group.title}
                className="skill-card"
                style={
                  isConcepts
                    ? {
                        gridColumn: "1 / -1",
                        maxWidth: "900px",
                        width: "100%",
                        margin: "0 auto",
                        textAlign: "center",
                      }
                    : {}
                }
              >
                <div
                  className="skill-card__head"
                  style={
                    isConcepts
                      ? {
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  <span
                    className="skill-card__dot"
                    style={{ background: group.color }}
                  />

                  <h3 className="skill-card__title">
                    {group.title}
                  </h3>
                </div>

                <div
                  className="skill-card__tags"
                  style={
                    isConcepts
                      ? {
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 26px;
          transition: border-color 0.2s ease;
        }

        .skill-card:hover {
          border-color: #2c3644;
        }

        .skill-card__head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .skill-card__dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .skill-card__title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
        }

        .skill-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill-tag {
          font-size: 12.5px;
          padding: 7px 12px;
          border-radius: 6px;
          background: var(--bg-raised);
          border: 1px solid var(--line);
          color: var(--text-dim);
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .skill-tag:hover {
          color: var(--text);
          border-color: var(--amber);
        }

        @media (max-width: 780px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            max-width: 100% !important;
            grid-column: auto !important;
          }
        }
      `}</style>
    </section>
  );
}