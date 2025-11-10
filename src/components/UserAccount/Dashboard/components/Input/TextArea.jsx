import React from "react";
import "./input.css"; // We'll define styles here

const TextArea = ({ className,name = "given-name", label = "description" }) => {
  return (
    <div className={`field ${className}`}>
      <div className="material-input-wrapper">
        <textarea
          spellCheck="false"
          maxLength="999999"
          autoComplete="on"
          placeholder=" "
          
  
          name={name}
          className={`material-input `}
        />
        <label className="material-label">{label}</label>
        
      </div>
    </div>
  );
};

export default TextArea;
