import React from 'react';
import './FooterBottom.css';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-copyright">
        © Everide {new Date().getFullYear()}
      </div>
      <div className="footer-payment-methods">
        <span className="payment-label">Secure payments</span>
        <div className="payment-icons">
          <div className="payment-icon visa"></div>
          <div className="payment-icon mastercard"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;