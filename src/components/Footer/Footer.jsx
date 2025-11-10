import React from 'react';
import './Footer.css';
import FooterTop from './FooterTop';
import AppDownload from './AppDownload';
import PartnerLogos from './PartnerLogos';
import FooterNav from './FooterNav';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterTop />
        <AppDownload />
        <div className="footer-divider"></div>
        <PartnerLogos />
        <div className="footer-divider"></div>
        <FooterNav />
        <div className="footer-divider"></div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;