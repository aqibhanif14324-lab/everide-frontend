import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download">
      <a href="#" className="app-button app-store">
        <img 
          src="https://static.everide.app/site/appstore.svg" 
          alt="Download on the App Store" 
          className="app-button-image"
        
        />
      </a>
      <a href="#" className="app-button google-play">
        <img 
          src="https://static.everide.app/site/playstore.svg" 
          alt="Get it on Google Play" 
          className="app-button-image"

        />
      </a>
    </div>
  );
};

export default AppDownload;