import React from 'react';
import "./InviteSection.css"; 
const InvitationSection = () => {
  return (
    <div className="invitation-container">
      <div className="invitation-header">
        {/* Background image will be set via CSS */}
      </div>
      
      <div className="invitation-content">
        <div className="invitation-main-text">
          Invite your friends to join<br />
          the Everide community and win up to 15€
        </div>
        
        <div className="invitation-subtext">
          Win 5€ for every friend subscribed on the platform and 10€ extra after he lists his first 3 items
        </div>
        
        <div className="invitation-input-container">
          <input 
            type="text" 
            className="invitation-input" 
            placeholder="Enter friend's email or copy link"
          />
          <svg 
            width="19" 
            height="22" 
            viewBox="0 0 19 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="invitation-copy-icon"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM6 20H17V6H6V20Z" 
              fill="#717171"
            />
          </svg>
        </div>
        
        <button className="invitation-share-btn">
          Share the sponsorship link
        </button>
        
        <div className="invitation-help">
          How does it work?
          <button className="invitation-help-btn">
            <svg 
              viewBox="0 0 85 85" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="invitation-help-icon"
            >
              <circle cx="42" cy="43" r="23.75" stroke="currentColor" strokeWidth="5" />
              <path 
                d="M39.3682 52.2328H44.8853V57.5833H39.3682V52.2328ZM32.6105 38.9027C32.7587 35.3851 33.9868 32.8918 36.2948 31.4231C37.7513 30.485 39.541 30.016 41.6639 30.016C44.4533 30.016 46.7676 30.6825 48.6066 32.0155C50.458 33.3485 51.3837 35.3233 51.3837 37.94C51.3837 39.5445 50.9826 40.896 50.1803 41.9945C49.7113 42.6611 48.8103 43.5127 47.4773 44.5495L46.1628 45.5677C45.4469 46.1232 44.9717 46.7712 44.7372 47.5117C44.5891 47.9807 44.5089 48.709 44.4965 49.6964H39.4978C39.5718 47.6105 39.7693 46.1725 40.0902 45.3826C40.4111 44.5803 41.2381 43.6608 42.5711 42.624L43.9226 41.5687C44.3669 41.2355 44.7249 40.8714 44.9964 40.4764C45.4901 39.7976 45.737 39.0508 45.737 38.2362C45.737 37.2982 45.4593 36.4465 44.9038 35.6813C44.3608 34.9037 43.361 34.5149 41.9046 34.5149C40.4728 34.5149 39.4546 34.9901 38.8498 35.9405C38.2573 36.8909 37.9611 37.8783 37.9611 38.9027H32.6105Z" 
                fill="currentColor" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationSection;