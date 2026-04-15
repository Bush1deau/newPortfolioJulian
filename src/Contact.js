import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm('service_3f1z8l8', 'template_1ffov7o', form.current, 'M9rM_-UFFzwwkCA7O')
      .then(() => setStatus('Message envoyé avec succès !'))
      .catch(() => setStatus('Une erreur est survenue. Veuillez réessayer.'));
  };

  return (
    <div className="contact-wrapper fade-in">
      <h1 className="page-title">Me contacter</h1>

      <div className="contact-info">
        <div className="contact-item">
          <img src="appel.png" alt="Téléphone" className="contact-icon" />
          <p>07 81 86 81 57</p>
        </div>
        <div className="contact-item">
          <img src="email.png" alt="Email" className="contact-icon" />
          <p>julianleroy3@gmail.com</p>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/julian-leroy" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" className="contact-icon" />
          </a>
          <p>Julian Leroy</p>
        </div>
        <div className="contact-item">
          <a href="https://github.com/Bush1deau" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" className="contact-icon" />
          </a>
          <p>Bush1deau</p>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <h2>Envoyer un message</h2>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Nom</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" required rows="4" />
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>

        {status && (
          <p style={{ marginTop: 16, color: status.includes('succès') ? '#4ade80' : '#f87171' }}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
