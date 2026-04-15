import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Cv = () => {
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

      <a href="CV Leroy Julian.pdf" download className="download-button">
        Télécharger le CV
      </a>

      <hr className="divider" />

      <div className="experiences">
        <h2 style={{ textAlign: "center" }}>Dernières Expériences</h2>

        <div className="experience">
          <img src="logo_lyreco.png" alt="Lyreco" className="company-logo" />
          <div className="experience-details">
            <h3>Lyreco Management</h3>
            <p><strong>Durée :</strong> Octobre 2022 — Septembre 2024</p>
            <p><strong>Poste :</strong> Apprenti Développeur RPA</p>
            <p><strong>Missions :</strong> Développement de solutions automatisées avec UIPath, maintenance de machines virtuelles, management de projets RPA</p>
            <p><strong>Langages :</strong> VB.Net, C#, Python</p>
          </div>
        </div>

        <div className="experience">
          <img src="logo_lycéeWatteau.png" alt="Lycée Watteau" className="company-logo" />
          <div className="experience-details">
            <h3>Lycée Antoine Watteau</h3>
            <p><strong>Durée :</strong> 10 semaines</p>
            <p><strong>Poste :</strong> Stagiaire Développeur Informatique</p>
            <p><strong>Missions :</strong> Maintenance et redéveloppement du site internet</p>
            <p><strong>Langages :</strong> Wordpress, HTML, CSS, PHP</p>
          </div>
        </div>
      </div>

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
