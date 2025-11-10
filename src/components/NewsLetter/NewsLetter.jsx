import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const isActive = email.length > 0;

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-heading">Abonnez-vous à la newsletter</h2>
      <p className="newsletter-subheading">Toutes les dernières nouvelles de la communauté outdoor</p>
      <form className="newsletter-form" autoComplete="on" noValidate>
        <div className="field-wrapper">
          <div className="field">
            <div className={`material-input-homepage ${isActive ? 'active' : ''}`}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                maxLength="999999"
                spellCheck="false"
                autoComplete="off"
                className="material-input-homepage-field"
              />
              <label className="material-input-homepage-label">Votre email</label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Ok</button>
      </form>
    </section>
  );
};

export default Newsletter;
