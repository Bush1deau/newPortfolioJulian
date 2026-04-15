import React from 'react';
import { Link } from 'react-router-dom';

const qualities = [
  { icon: 'ponctuelle.png',    label: 'Ponctuel' },
  { icon: 'la-creativite.png', label: 'Créatif' },
  { icon: 'esprit-dequipe.png',label: "Esprit d'équipe" },
  { icon: 'organiser.png',     label: 'Organisé' },
];

const flaws = [
  { icon: 'tapotement.png',       label: 'Impatient parfois' },
  { icon: 'perfectionniste.png',  label: 'Trop perfectionniste' },
];

const About = () => (
  <div className="about-wrapper fade-in">
    <h1 className="page-title">À propos de moi</h1>
    <hr className="divider" />

    <p className="about-intro">
      Passionné par le développement et la gestion de projets informatiques, j'ai toujours cherché à me surpasser
      dans tout ce que j'entreprends. Que ce soit à travers des{' '}
      <Link to="/realisations">projets</Link> professionnels, scolaires ou personnels,
      je suis constamment en quête de nouvelles compétences et expériences.
    </p>

    <hr className="divider" />

    <div className="about-profile">
      <img src="moi.jpg" alt="Portrait de Julian" className="about-avatar" />
      <div className="about-bio">
        <h3>Qui suis-je ?</h3>
        <p>
          Je suis un développeur et chef de projet enthousiaste, prêt à relever des défis techniques et créatifs.
          Ma formation et mes expériences m'ont permis d'acquérir des compétences solides en programmation,
          gestion de projets, et résolution de problèmes complexes.
        </p>
      </div>
    </div>

    <hr className="divider" />

    <div className="about-traits">
      <div className="about-trait-group">
        <h3>Qualités</h3>
        {qualities.map(q => (
          <div key={q.label} className="about-trait-item">
            <img src={q.icon} alt={q.label} />
            <span>{q.label}</span>
          </div>
        ))}
      </div>
      <div className="about-trait-group">
        <h3>Défauts</h3>
        {flaws.map(f => (
          <div key={f.label} className="about-trait-item">
            <img src={f.icon} alt={f.label} />
            <span>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
