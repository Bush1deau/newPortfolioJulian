import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const projects = {
  Professionnelles: [
    {
      title: "Automatisation des processus",
      description: "Développement de 8 solutions RPA pour automatiser des tâches répétitives.",
      image: "rpa-article.png",
      tags: ["UIPath", "Python", "VB.Net"],
      github: null,
      isGroup: false,
    },
    {
      title: "Maintenance de machines virtuelles",
      description: "Optimisation et gestion des VM en environnement professionnel.",
      image: "vm-article.png",
      tags: ["C#", "PowerShell"],
      github: null,
      isGroup: false,
    },
    {
      title: "Redéveloppement du site internet du Lycée Watteau",
      description: "Optimisation du site web pour améliorer les performances.",
      image: "site-web-article.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      github: null,
      isGroup: false,
    },
    {
      title: "Développement d'un site vitrine pour une startup de domotique",
      description: "Développement d'un site internet pour présenter les services de la startup.",
      image: "site-web-2-article.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: null,
      isGroup: false,
    },
  ],
  Scolaires: [
    {
      title: "Projet ecommerce sur la normalisation des données",
      description: "Création d'un microservice pour gérer les commandes et produits d'un site e-commerce.",
      image: "ecommerce.png",
      tags: ["Python", "TypeScript", "React", "Docker", "PostgreSQL"],
      github: "https://github.com/nicolas-petey/ecommerce",
      isGroup: true,
    },
    {
      title: "Pierre-Feuille-Ciseaux en Python",
      description: "Conception d'un jeu en Python pour apprendre les conditions",
      image: "shifoumi.jpg",
      tags: ["Python"],
      github: null,
      isGroup: false,
    },
    {
      title: "Twitch Angular",
      description: "Développement de l'application Twitch en Angular pour apprendre le framework.",
      image: "twitch.jpg",
      tags: ["Angular", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Bush1deau/angular-twitch",
      isGroup: true,
    },
    {
      title: "Sentim-analyze",
      description: "Conception d'une application pour analyser le sentiment des mots.",
      image: "sentim-analyze.webp",
      tags: ["Node.js", "TypeScript", "React", "IA"],
      github: "https://github.com/nicolas-petey/sentim-analyze",
      isGroup: true,
    },
    {
      title: "Bid Process",
      description: "Conception d'une application pour gérer les processus d'offres.",
      image: "bid-process.webp",
      tags: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
      github: "https://github.com/Bush1deau/BidProcessJavaAPI",
      isGroup: false,
    },
    {
      title: "Livré'bon",
      description: "Conception d'une application pour gérer les livraisons de nourriture.",
      image: "livrebon.webp",
      tags: ["Symfony", "PHP", "MySQL"],
      github: "https://github.com/Bush1deau/livrebon",
      isGroup: true,
    },
    {
      title: "Pokedex Mobile",
      description: "Conception d'un pokedex mobile pour apprendre le développement mobile avec PokeAPI.",
      image: "pokedex.jpeg",
      tags: ["Flutter", "Dart"],
      github: null,
      isGroup: false,
    },
  ],
  Personnelles: [
    {
      title: "Portfolio personnel",
      description: "Création de mon portfolio en ReactJS",
      image: "portfolio.png",
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Bush1deau/newPortfolioJulian",
      isGroup: false,
    },
    {
      title: "Blog club de danse Raismes",
      description: "Développement d'un blog pour partager les actualités du club de danse.",
      image: "bdc.png",
      tags: ["WordPress", "PHP"],
      github: null,
      isGroup: false,
    },
    {
      title: "Footballer Comparison",
      description: "Développement d'un process RPA pour comparer les statistiques des joueurs de football.",
      image: "footballer-comparaison.jpg",
      tags: ["RPA", "VB.Net", "IA"],
      github: null,
      isGroup: false,
    },
  ],
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const ProjectCard = ({ title, description, image, tags, github, isGroup }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="github-link">
        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src="/logo-github.png"
              alt="GitHub Link"
              className="github-icon"
            />
          </a>
        ) : null}
      </div>
      <div className="group-link">
        <img
          src={isGroup ? "/groupe.png" : "/pas-groupe.png"}
          alt={isGroup ? "Travail en groupe" : "Travail en solo"}
          className="group-icon"
        />
      </div>
    </div>
  );
};

const Realisations = () => {
  return (
    <div className="realisations">
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Mes Réalisations</h1>
      <div className="legend">
        <div className="legend-item">
          <img src="/groupe.png" alt="Projet en groupe" className="legend-icon" />
          <span>Projet en groupe</span>
        </div>
        <div className="legend-item">
          <img src="/pas-groupe.png" alt="Projet solo" className="legend-icon" />
          <span>Projet solo</span>
        </div>
      </div>
      {Object.entries(projects).map(([category, projectList], index) => (
        <div key={index}>
          <hr className="divider" />
          <h2 style={{ textAlign: "center", marginTop: "2rem" }}>{category}</h2>
          <Slider {...settings}>
            {projectList.map((project, idx) => (
              <div key={idx}>
                <ProjectCard {...project} />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Realisations;