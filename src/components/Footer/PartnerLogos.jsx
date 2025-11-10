import React from 'react';
import './PartnerLogos.css';

const PartnerLogos = () => {
  const partners = [
    {
      name: "Kilian Jornet Foundation",
      logo: "https://static.everide.app/PRAowGU-4OHtalFvf79YC9M6s2VIMcEEsiMjHQJDE1s/rs:fit:560:168:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9mb290ZXIvcGFydG5lcnMva2pmX2xvZ29fd2hpdGUucG5n.webp",
      url: "#"
    },
    {
      name: "Protect Our Winters",
      logo: "https://static.everide.app/BioXN1N66nHrplMQlVAO022EbqfVVon-5WvnhTBIMvo/rs:fit:540:120:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9mb290ZXIvcGFydG5lcnMvcG93X2xvZ29fd2hpdGUucG5nP3Yy.webp",
      url: "#"
    },
    {
      name: "Surfrider Foundation Europe",
      logo: "https://static.everide.app/PkcoytJ9SSiWEb88KkyeeBeny6OSImHXh9ewQqUs6r8/rs:fit:540:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9mb290ZXIvcGFydG5lcnMvbG9nb19zcmYucG5n.webp",
      url: "#"
    },
    {
      name: "OSV Foundation",
      logo: "https://static.everide.app/COJS9UfqR3qo_E2t3OBBc0NPXetA_2uCAUPfz5RQ0Bw/rs:fit:540:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9mb290ZXIvcGFydG5lcnMvbG9nb19vc3Zfd2hpdGUucG5n.webp",
      url: "#"
    }
  ];

  return (
    <div className="partner-logos">
      {partners.map((partner, index) => (
        <a 
          key={index} 
          href={partner.url} 
          className="partner-logo-link"
          title={partner.name}
        >
          <img 
            src={partner.logo} 
            alt={partner.name} 
            className="partner-logo-image" 
          />
        </a>
      ))}
    </div>
  );
};

export default PartnerLogos;