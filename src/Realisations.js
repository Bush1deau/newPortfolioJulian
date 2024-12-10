import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const projects = {
  Professionnels: [
    {
      title: "Automatisation des processus",
      description: "Développement de solutions RPA pour améliorer l'efficacité.",
      image: "path/to/rpa-project.jpg",
      tags: ["UIPath", "Python", "RPA"],
      github: "https://github.com/user/rpa-project",
    },
    {
      title: "Maintenance de machines virtuelles",
      description: "Optimisation et gestion des VM en environnement professionnel.",
      image: "path/to/vm-maintenance.jpg",
      tags: ["C#", "PowerShell"],
      github: null,
    },
  ],
  Scolaires: [
    {
      title: "Gestion scolaire",
      description: "Création d'un site web en PHP et MySQL pour gérer les inscriptions.",
      image: "path/to/school-project.jpg",
      tags: ["PHP", "MySQL", "HTML"],
      github: "https://github.com/user/school-project",
    },
    {
      title: "Jeu éducatif",
      description: "Conception d'un jeu en Python pour apprendre les mathématiques.",
      image: "path/to/game-project.jpg",
      tags: ["Python", "Pygame"],
      github: null,
    },
  ],
  Personnels: [
    {
      title: "Portfolio personnel",
      description: "Création de mon portfolio en ReactJS avec animations avancées.",
      image: "path/to/portfolio.jpg",
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/user/portfolio",
    },
    {
      title: "Blog tech",
      description: "Développement d'un blog pour partager des articles techniques.",
      image: "path/to/blog.jpg",
      tags: ["WordPress", "PHP"],
      github: null,
    },
  ],
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const animation = useSpring({
    height: isOpen ? bounds.height : 0,
    opacity: isOpen ? 1 : 0,
    config: { tension: 170, friction: 26 },
  });

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#178ca4",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span
          style={{
            fontSize: "1.5rem",
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          {isOpen ? "➡️" : "➡️"}
        </span>
      </div>
      <animated.div style={{ ...animation, overflow: "hidden" }}>
        <div ref={ref} className="accordion-content">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

const ProjectCard = ({ title, description, image, tags, github }) => {
  return (
    <div className="project-card">
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
              src="logo-github.png"
              alt="GitHub Link"
              className="github-icon"
            />
          </a>
        ) : (
          <img
            src="path/to/github-icon-crossed.png"
            alt="No GitHub Link"
            className="github-icon crossed"
          />
        )}
      </div>
    </div>
  );
};

const Realisations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="realisations">
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Mes Réalisations</h1>
      {Object.entries(projects).map(([category, projectList], index) => (
        <Accordion key={index} title={category}>
          <Slider {...settings}>
            {projectList.map((project, idx) => (
              <div key={idx}>
                <ProjectCard {...project} />
              </div>
            ))}
          </Slider>
        </Accordion>
      ))}
    </div>
  );
};

export default Realisations;
