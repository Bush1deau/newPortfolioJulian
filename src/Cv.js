import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  {
    logo: "🌐",
    name: "HTML",
    competence: 50,
    ease: 80,
  },
  {
    logo: "🎨",
    name: "CSS",
    competence: 40,
    ease: 70,
  },
  {
    logo: "🛠️",
    name: "C#",
    competence: 40,
    ease: 50,
  },
  {
    logo: "🤖",
    name: "RPA",
    competence: 60,
    ease: 90,
  },
  {
    logo: "🐘",
    name: "PHP",
    competence: 40,
    ease: 50,
  },
  {
    logo: "📜",
    name: "JavaScript",
    competence: 40,
    ease: 40,
  },
  {
    logo: "⚛️",
    name: "React",
    competence: 30,
    ease: 40,
  },
  {
    logo: "🐍",
    name: "Python",
    competence: 60,
    ease: 70,
  },
  {
    logo: "☕",
    name: "Java",
    competence: 20,
    ease: 40,
  },
  {
    logo: "🅰️",
    name: "Angular",
    competence: 30,
    ease: 60,
  },
  {
    logo: "💾",
    name: "SQL",
    competence: 40,
    ease: 70,
  },
  {
    logo: "⚙️",
    name: ".NET",
    competence: 20,
    ease: 40,
  },
  {
    logo: "📱",
    name: "Flutter",
    competence: 20,
    ease: 50,
  },
  {
    logo: "💎",
    name: "Ruby",
    competence: 10,
    ease: 25,
  },
];

// Flèche personnalisée pour "Précédent"
const PrevArrow = ({ onClick }) => {
  const isMobile = window.innerWidth <= 768; // Détection d'un affichage mobile
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: isMobile ? "0px" : "-50px", // Ajustement pour mobile
        transform: "translateY(-50%)",
        fontSize: "30px",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

// Flèche personnalisée pour "Suivant"
const NextArrow = ({ onClick }) => {
  const isMobile = window.innerWidth <= 768; // Détection d'un affichage mobile
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: isMobile ? "0px" : "-50px", // Ajustement pour mobile
        transform: "translateY(-50%)",
        fontSize: "30px",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
};

const Cv = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2480, // Ultra-wide screens (écrans très larges)
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1980, // Écrans normaux (desktop)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // Tablettes
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Mobiles
      settings: {
        slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <div className="titres">
        <h1 className="fade-in">Mon CV</h1>
      </div>

      <a href="CV Leroy Julian.pdf" download className="download-button">
        Télécharger le CV
      </a>

      <hr className="divider" />

      {/* Section des expériences */}
      <div className="experiences" style={{ marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Dernières Expériences</h1>

        <div className="experience">
          <img src="logo_lyreco.png" alt="Lyreco Management" className="company-logo" />
          <div className="experience-details">
            <h3>Lyreco Management</h3>
            <p><strong>Durée:</strong> Octobre 2022 - Septembre 2024</p>
            <p><strong>Poste:</strong> Apprenti Développeur RPA</p>
            <p><strong>Missions:</strong> Développement de solutions automatisées avec UIPath, maintenance de machines virtuelles, management de projets RPA</p>
            <p><strong>Langages utilisés:</strong> VB.Net, C#, Python</p>
          </div>
        </div>

        <div className="experience">
          <img src="logo_lycéeWatteau.png" alt="Nom de l'entreprise" className="company-logo" />
          <div className="experience-details">
            <h3>Lycée Antoine Watteau</h3>
            <p><strong>Durée:</strong> 10 semaines</p>
            <p><strong>Poste:</strong> Stagiaire Développeur Informatique</p>
            <p><strong>Missions:</strong> Maintenance du site internet avec Wordpress, redéveloppement du site internet </p>
            <p><strong>Langages utilisés:</strong> Wordpress, HTML, CSS, PHP</p>
          </div>
        </div>
        </div>

      <hr className="divider" />

      <h1 style={{ textAlign: "center" }}>Mes compétences</h1>

      <div style={{ width: "80%", margin: "0 auto", position: "relative" }}>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                {skill.logo}
              </div>
              <h3>{skill.name}</h3>
              <div>
                <label>Compétence : </label>
                <div
                  style={{
                    background: "#ddd",
                    borderRadius: "5px",
                    overflow: "hidden",
                    margin: "10px 30px",
                  }}
                >
                  <div
                    style={{
                      height: "10px",
                      width: `${skill.competence}%`,
                      background: "#4caf50",
                    }}
                  />
                </div>
              </div>
              <div>
                <label>Aisance : </label>
                <div
                  style={{
                    background: "#ddd",
                    borderRadius: "5px",
                    overflow: "hidden",
                    margin: "10px 30px",
                  }}
                >
                  <div
                    style={{
                      height: "10px",
                      width: `${skill.ease}%`,
                      background: "#2196f3",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div style={{textAlign: 'center', margin:'60px auto', fontSize: '1.2rem'}}>
        <i> 
          Certains langages ci-dessus sont des langages que j'ai appris en autodidacte, c'est pourquoi ils ne sont pas renseignés dans le CV version PDF.
        </i>
      </div>
    </div>
  );
};
export default Cv;