import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Référence pour le formulaire
  const form = useRef();

  // État pour le statut du message envoyé
  const [status, setStatus] = useState('');

  // Fonction pour envoyer le formulaire avec EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi du formulaire via EmailJS
    emailjs
      .sendForm(
        'service_3f1z8l8', // ID de ton service EmailJS
        'template_1ffov7o', // ID de ton template
        form.current, // Référence au formulaire HTML
        'M9rM_-UFFzwwkCA7O' // Ta clé publique (trouvée dans ton compte EmailJS)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message envoyé avec succès !');
        },
        (error) => {
          console.log(error.text);
          setStatus('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1 className="fade-in" style={{ fontSize: '3rem', color: '#2c3e50', fontFamily: 'Jost' }}>
        Me contacter
      </h1>

      {/* Première ligne (Numéro de téléphone et email) */}
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          fontFamily: 'Jost',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img src="appel.png" alt="Phone Icon" style={{ width: '40px', height: '40px' }} />
          <p>Tél: 07 81 86 81 57</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img src="email.png" alt="Email Icon" style={{ width: '40px', height: '40px' }} />
          <p>Email: julianleroy3@gmail.com</p>
        </div>
      </div>

      {/* Deuxième ligne (LinkedIn et GitHub) */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/julian-leroy" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn Icon" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>

        <div className="contact-icon">
          <a href="https://github.com/Bush1deau" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub Icon" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div style={{ marginTop: '50px', fontFamily: 'Jost' }}>
        <h2>Envoyer un message</h2>
        <form
          ref={form} // Attache le formulaire à la référence
          onSubmit={handleSubmit}
          style={{ textAlign: 'left', width: '50%', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.2rem' }}>Nom</label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.2rem' }}>Email</label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.2rem' }}>Message</label>
            <textarea
              name="message"
              required
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#178ca4',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '5px',
              fontFamily: 'Jost',
              marginBottom: '4rem',
            }}
          >
            Envoyer
          </button>
        </form>

        {/* Affichage du statut de l'envoi du message */}
        {status && (
          <p
            style={{
              marginTop: '20px',
              fontSize: '1.2rem',
              color: status.includes('succès') ? 'green' : 'red',
            }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
