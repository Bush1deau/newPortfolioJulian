import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  const qualities = [
    { icon: "ponctuelle.png", label: "Ponctuel" },
    { icon: "la-creativite.png", label: "Créatif" },
    { icon: "esprit-dequipe.png", label: "Esprit d'équipe" },
    { icon: "organiser.png", label: "Organisé" },
  ];

  const flaws = [
    { icon: "tapotement.png", label: "Impatient parfois" },
    { icon: "perfectionniste.png", label: "Trop perfectionniste" }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '5%', padding: '0 10%' }}>
      {/* Titre principal */}
      <h1 className="fade-in" style={{ color: '#072a40' }}>À propos de moi</h1>
      

      <hr className="divider" />


      {/* Introduction */}
      <p style={{
        fontSize: '1.5rem',
        color: '#34495e', // Gris foncé
        marginTop: '20px',
        lineHeight: '1.8',
      }}>
        Passionné par le développement et la gestion de projets informatiques, j’ai toujours cherché à me surpasser dans tout ce que j’entreprends. 
        Que ce soit à travers des <Link to="/realisations" style={{ color: '#178ca4', textDecoration: 'underline' }}>projets</Link> professionnels, scolaires ou personnels, je suis constamment en quête de nouvelles compétences et expériences.
      </p>
      

      <hr className="divider" />


      {/* Section Image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0',
        flexWrap: 'wrap',
      }}>
        <img
          src="moi.jpg"
          alt="Portrait de moi"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            margin: '0 20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          }}
        />
        <div style={{ maxWidth: '500px', textAlign: 'left' }}>
          <h3 style={{ color: '#178ca4' }}>Qui suis-je ?</h3>
          <p style={{ color: '#34495e', fontSize: '1.2rem' }}>
            Je suis un développeur et chef de projet enthousiaste, prêt à relever des défis techniques et créatifs.
            Ma formation et mes expériences m’ont permis d’acquérir des compétences solides en programmation, gestion de projets,
            et résolution de problèmes complexes.
          </p>
        </div>
      </div>

      {/* Section Qualités et Défauts */}
      <div style={{ margin: "50px 0" }}>
        <h2 style={{ color: "#178ca4", marginBottom: "20px" }}>Mes Qualités et Défauts</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Qualités */}
          <div>
            <h3 style={{ color: "#072a40" }}>Qualités</h3>
            {qualities.map((quality, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={quality.icon}
                  alt={quality.label}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <span style={{ fontSize: "1.2rem", color: "#34495e" }}>
                  {quality.label}
                </span>
              </div>
            ))}
          </div>

          {/* Défauts */}
          <div>
            <h3 style={{ color: "#072a40" }}>Défauts</h3>
            {flaws.map((flaw, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={flaw.icon}
                  alt={flaw.label}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                <span style={{ fontSize: "1.2rem", color: "#34495e" }}>
                  {flaw.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
