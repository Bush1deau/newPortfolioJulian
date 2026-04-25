import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "./ThemeContext";

const skills = [
  { logo: "🌐", name: "HTML",       competence: 50, ease: 80 },
  { logo: "🎨", name: "CSS",        competence: 40, ease: 70 },
  { logo: "🛠️", name: "C#",         competence: 40, ease: 50 },
  { logo: "🤖", name: "RPA",        competence: 60, ease: 90 },
  { logo: "🐘", name: "PHP",        competence: 40, ease: 50 },
  { logo: "📜", name: "JavaScript", competence: 40, ease: 40 },
  { logo: "⚛️", name: "React",      competence: 30, ease: 40 },
  { logo: "🐍", name: "Python",     competence: 60, ease: 70 },
  { logo: "☕", name: "Java",       competence: 20, ease: 40 },
  { logo: "🅰️", name: "Angular",    competence: 30, ease: 60 },
  { logo: "💾", name: "SQL",        competence: 40, ease: 70 },
  { logo: "⚙️", name: ".NET",       competence: 20, ease: 40 },
  { logo: "📱", name: "Flutter",    competence: 20, ease: 50 },
  { logo: "💎", name: "Ruby",       competence: 10, ease: 25 },
];

const experiences = [
  {
    logo: `${process.env.PUBLIC_URL}/logo-jlautomate.png`,
    company: "JL AUTOMATE",
    period: "Mars 2025 — Aujourd'hui",
    role: "Développeur RPA / Fullstack",
    missions: [
      "Réalisation de projets RPA",
      "Gestion de projets RPA",
    ],
    stack: ["Python", "OCR", "API", "React"],
    href: "https://jl-automate.fr",
    current: true,
  },
  {
    logo: "logo_lyreco.png",
    company: "Lyreco Management",
    period: "Octobre 2022 — Septembre 2024",
    role: "Apprenti Développeur RPA",
    missions: [
      "Développement de solutions automatisées avec UIPath",
      "Maintenance de machines virtuelles",
      "Management de projets RPA",
    ],
    stack: ["VB.Net", "C#", "Python"],
  },
  {
    logo: "logo_lycéeWatteau.png",
    company: "Lycée Antoine Watteau",
    period: "Stage — 10 semaines",
    role: "Stagiaire Développeur Informatique",
    missions: [
      "Maintenance et redéveloppement du site internet",
    ],
    stack: ["Wordpress", "HTML", "CSS", "PHP"],
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute", top: "50%",
      left: window.innerWidth <= 768 ? "0" : "-40px",
      transform: "translateY(-50%)",
      fontSize: "28px", cursor: "pointer", zIndex: 1,
      color: "var(--color-primary)",
    }}
  >&#9664;</div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute", top: "50%",
      right: window.innerWidth <= 768 ? "0" : "-40px",
      transform: "translateY(-50%)",
      fontSize: "28px", cursor: "pointer", zIndex: 1,
      color: "var(--color-primary)",
    }}
  >&#9654;</div>
);

const ExperienceCard = ({ exp }) => {
  const inner = (
    <>
      <img src={exp.logo} alt={exp.company} className="company-logo" />
      <div className="experience-details">
        <div className="experience-head">
          <h3>{exp.company}</h3>
          {exp.current && <span className="experience-badge">En poste</span>}
        </div>
        <p className="experience-period">{exp.period}</p>
        <p className="experience-role">{exp.role}</p>
        <ul className="experience-missions">
          {exp.missions.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <div className="experience-stack">
          {exp.stack.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
      </div>
    </>
  );

  return exp.href ? (
    <a
      className="experience experience--link"
      href={exp.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    <div className="experience">{inner}</div>
  );
};

const Cv = () => {
  const { version } = useTheme();

  const settings = {
    dots: false, infinite: true, speed: 500, slidesToShow: 5, slidesToScroll: 1,
    prevArrow: <PrevArrow />, nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 2480, settings: { slidesToShow: 5 } },
      { breakpoint: 1980, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="cv-wrapper fade-in">
      <h1 className="page-title">Mon CV</h1>
      <p className="page-lede">
        Développeur fullstack et RPA, actuellement en poste chez{" "}
        <a
          href="https://jl-automate.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="page-lede__link"
        >
          JL AUTOMATE
        </a>.
      </p>

      <a href="CV Leroy Julian.pdf" download className="download-button">
        Télécharger le CV
      </a>

      {version === 'current' && (
        <div className="cv-quickinfo">
          <div className="cv-quickinfo__cell">
            <span className="cv-quickinfo__label">Statut</span>
            <strong>En poste</strong>
          </div>
          <div className="cv-quickinfo__cell">
            <span className="cv-quickinfo__label">Société</span>
            <strong>JL AUTOMATE</strong>
          </div>
          <div className="cv-quickinfo__cell">
            <span className="cv-quickinfo__label">Spécialités</span>
            <strong>RPA · Fullstack</strong>
          </div>
          <div className="cv-quickinfo__cell">
            <span className="cv-quickinfo__label">Stack actuel</span>
            <strong>Python · OCR · API · React</strong>
          </div>
        </div>
      )}

      <hr className="divider" />

      <section className="experiences">
        <h2 className="experiences-title">Dernières expériences</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
      </section>

      <hr className="divider" />

      <h2 style={{ textAlign: "center" }}>Mes compétences</h2>

      <div style={{ width: "80%", margin: "0 auto", position: "relative", paddingBottom: "2rem" }}>
        <Slider {...settings}>
          {skills.map((skill, i) => (
            <div key={i} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "2.6rem", marginBottom: "8px" }}>{skill.logo}</div>
              <h3 style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)" }}>{skill.name}</h3>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Compétence</label>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill-green" style={{ width: `${skill.competence}%` }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Aisance</label>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill-blue" style={{ width: `${skill.ease}%` }} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <p style={{
        textAlign: "center", margin: "40px auto 60px", fontSize: "0.95rem",
        color: "var(--color-text-muted)", fontStyle: "italic", maxWidth: "600px",
      }}>
        Certains langages ci-dessus sont des langages que j'ai appris en autodidacte,
        c'est pourquoi ils ne sont pas renseignés dans le CV version PDF.
      </p>
    </div>
  );
};

export default Cv;
