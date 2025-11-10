import React from 'react';
import './SecuritySettings.css';

const SecuritySettings = () => {
  return (
    <div className="settings-container">
      {/* Security Section */}
      <div className="section-header">
        <p>Security</p>
      </div>
      
      <button type="button" className="settings-button">
        <svg viewBox="0 0 85 85" fill="none" className="settings-icon">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M26 23C34.7 23 42.1 28.5667 44.8333 36.3333H79.3333V49.6667H72.6667V63H59.3333V49.6667H44.8333C42.1 57.4333 34.7 63 26 63C14.9667 63 6 54.0333 6 43C6 31.9667 14.9667 23 26 23ZM19.3333 43C19.3333 46.6667 22.3333 49.6667 26 49.6667C29.6667 49.6667 32.6667 46.6667 32.6667 43C32.6667 39.3333 29.6667 36.3333 26 36.3333C22.3333 36.3333 19.3333 39.3333 19.3333 43Z" 
            fill="none" 
            strokeWidth="6" 
            stroke="currentColor"
          />
        </svg>
        
        <div className="button-content">
          <span className="button-title">Change your password</span>
        </div>
        
        <span className="flex-spacer"></span>
        
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black w-6 h-6 mx-6 flex-shrink-0"><path d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059" stroke="currentColor" stroke-width="2"></path></svg>
      </button>

      {/* Account Section */}
      <div className="section-header">
        <p>Account</p>
      </div>
      
      <button type="button" className="settings-button text-danger">
        <svg viewBox="0 0 85 85" fill="currentColor" className="settings-icon delete-icon">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M42.5 15C27.32 15 15 27.32 15 42.5C15 57.68 27.32 70 42.5 70C57.68 70 70 57.68 70 42.5C70 27.32 57.68 15 42.5 15ZM28.75 39.75V45.25H56.25V39.75H28.75ZM20.5 42.5C20.5 54.6275 30.3725 64.5 42.5 64.5C54.6275 64.5 64.5 54.6275 64.5 42.5C64.5 30.3725 54.6275 20.5 42.5 20.5C30.3725 20.5 20.5 30.3725 20.5 42.5Z" 
            fill="currentColor" 
          />
        </svg>
        
        <div className="button-content">
          <span className="button-title delete-account">Delete my account</span>
        </div>
        
        <span className="flex-spacer"></span>
        
        <svg className='danger-icon-arrow' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black w-6 h-6 mx-6 flex-shrink-0"><path d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059" stroke="currentColor" stroke-width="2"></path></svg>
      </button>
    </div>
  );
};

export default SecuritySettings;