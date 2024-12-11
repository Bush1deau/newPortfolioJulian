import React from 'react';
import './Footer.css';
import waveImage from './waves-footer.png'; // Chemin relatif au fichier Footer.js

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        <h2 className="footer-title">by Julian.</h2>
        <p className="footer-text">© JulianLeroy.com. Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
