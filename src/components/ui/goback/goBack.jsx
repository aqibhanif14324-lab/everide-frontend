import React from 'react';
import './GoBackButton.css'; 
const GoBackButton = ({handleBack,setCurrentTab}) => {
    
  return (
    <button className="goback_classname" onClick={handleBack} aria-label="Go Back">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6418 15.3057L4.35803 8.02185L11.6418 0.738038" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
};

export default GoBackButton;