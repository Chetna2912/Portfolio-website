import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available — no-op
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="eyebrow">contact</div>
        <h2 className="section-title">Let's build something together.</h2>
        <p className="section-sub">
          'm currently open to internship opportunities and collaborations. Feel free to reach out.
        </p>

        <div className="contact__grid">
          <div className="contact__card">
            <button className="contact__row contact__row--btn" onClick={copyEmail}>
              <span className="contact__icon"><Mail size={17} /></span>
              <span className="contact__text">{profile.email}</span>
              <span className="contact__copy mono">{copied ? <><Check size={13}/> copied</> : "copy"}</span>
            </button>

            {/* <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact__row">
              <span className="contact__icon"><Phone size={17} /></span>
              <span className="contact__text">{profile.phone}</span>
            </a> */}

            <div className="contact__row contact__row--static">
              <span className="contact__icon"><MapPin size={17} /></span>
              <span className="contact__text">{profile.location}</span>
            </div>
          </div>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-card">
              <GithubIcon size={22} />
              <span>GitHub</span>
              <span className="social-card__handle mono">@Chetna2912</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-card">
              <LinkedinIcon size={22} />
              <span>LinkedIn</span>
              <span className="social-card__handle mono">chetna-nagar-011b73324</span>
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" className="social-card">
              <LeetcodeIcon size={22} />
              <span>LeetCode</span>
              <span className="social-card__handle mono">Chetna_Nagar</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        .contact__card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
        }
        .contact__row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 22px;
          border-bottom: 1px solid var(--line);
          width: 100%;
          text-align: left;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          color: var(--text);
          transition: background 0.15s ease;
        }
        .contact__row:last-child { border-bottom: none; }
        .contact__row--btn:hover, .contact__row:not(.contact__row--static):hover {
          background: var(--bg-raised);
        }
        .contact__icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--bg-raised);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact__text {
          font-size: 14.5px;
          flex-grow: 1;
        }
        .contact__copy {
          font-size: 11.5px;
          color: var(--amber);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .contact__socials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .social-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 22px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          color: var(--text-dim);
        }
        .social-card:hover {
          transform: translateY(-4px);
          border-color: var(--amber);
          color: var(--text);
        }
        .social-card__handle {
          font-size: 11px;
          color: var(--text-faint);
        }
        @media (max-width: 780px) {
          .contact__grid { grid-template-columns: 1fr; }
          .contact__socials { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .contact__socials { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
