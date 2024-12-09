import React from 'react';

const About = () => {
  return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
              <h1 className="fade-in">A propos de moi</h1>
              <p style={{
                fontSize: '1.5rem',
                color: '#34495e', // Gris foncé
                marginTop: '10px',
              }}>
                Contenu de la page About...
              </p>
      </div>
  );
};

export default About;