import React from 'react';

const Cv = () => {
  return (
    <div className='titres' style={{ textAlign: 'center', marginTop: '5%' }}>
              <h1 className="fade-in">Mon CV</h1>
              <p style={{
                fontSize: '1.5rem',
                color: '#34495e', // Gris foncé
                marginTop: '10px',
              }}>
              </p>

              {/* Bouton de téléchargement du CV */}
              <a href="CV Leroy Julian.pdf" download className="download-button">
                  Télécharger le CV
              </a>


              <hr className="divider" />


               {/* Section des expériences */}
      <div className="experiences" style={{ marginTop: '20px' }}>
        <h1 style={{textAlign: 'center'}}>Dernières Expériences</h1>


        <div className="experience">
          <h3>Lyreco Management</h3>
          <p><strong>Durée:</strong> Octobre 2022 - Septembre 2024</p>
          <p><strong>Missions:</strong> Développement d'applications web, maintenance des systèmes existants, collaboration avec l'équipe de conception.</p>
          <p><strong>Langages utilisés:</strong> JavaScript, React, Node.js</p>
        </div>


        <div className="experience">
          <h3>Nom de l'entreprise</h3>
          <p><strong>Durée:</strong> Janvier 2019 - Décembre 2019</p>
          <p><strong>Missions:</strong> Développement de fonctionnalités backend, optimisation des bases de données, intégration de services tiers.</p>
          <p><strong>Langages utilisés:</strong> Python, Django, PostgreSQL</p>
        </div>
        
        </div>
      </div>
  );
};

export default Cv;