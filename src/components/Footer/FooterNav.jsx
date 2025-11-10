import React from 'react';
import './FooterNav.css';

const FooterNav = () => {
  const navColumns = [
    {
      title: "About",
      links: [
        { name: "Manifesto", url: "#" },
        { name: "Terms and Conditions", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Legal notices", url: "#" },
        { name: "Publication rules", url: "#" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "How does it work?", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Become a partner seller", url: "#" },
        { name: "Contact us", url: "#" }
      ]
    },
    {
      title: "Follow us",
      socialLinks: [
        { name: "Facebook", url: "#", icon: "facebook" },
        { name: "Instagram", url: "#", icon: "instagram" }
      ]
    }
  ];

  return (
    <div className="footer-nav">
      {navColumns.map((column, index) => (
        <div key={index} className="footer-nav-column">
          <h3 className="footer-nav-title">{column.title}</h3>
          
          {column.links && (
            <ul className="footer-nav-list">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="footer-nav-item">
                  <a href={link.url} className="footer-nav-link">{link.name}</a>
                </li>
              ))}
            </ul>
          )}
          
          {column.socialLinks && (
            <div className="footer-social-links">
              {column.socialLinks.map((social, socialIndex) => (
                <a 
                  key={socialIndex} 
                  href={social.url} 
                  className={`footer-social-link footer-social-${social.icon}`}
                  aria-label={social.name}
                >
                  <div className={`social-icon ${social.icon}`}></div>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterNav;