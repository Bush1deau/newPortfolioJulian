import React from 'react';

const Cv = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <div className='titres'>
        <h1 className="fade-in">Mon CV</h1>
        <p style={{
          color: '#34495e', // Gris foncé
          marginTop: '10px',
        }}>
        </p>
      </div>
      {/* Bouton de téléchargement du CV */}
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
    </div>
  );
};

export default Cv;