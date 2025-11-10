import React from "react";
import "./input.css"; // We'll define styles here
import { IoSearchOutline } from "react-icons/io5";

const Input = ({ className,name = "given-name", label = "First Name", type,emailClassess , labelClasses}) => {
  return (
    <div className={`field ${className}`}>
      <div className="material-input-wrapper">
        <input
          spellCheck="false"
          maxLength="999999"
          autoComplete="on"
          placeholder=" "
          type={type || "text"}
          name={name}
          className={`material-input ${emailClassess}`}
        />
        <label className={`material-label ${labelClasses}`}>{label}</label>
       {type==="email" &&  <div className="input-actions">
          
          <IoSearchOutline size={25}/>
        </div> }
      </div>
    </div>
  );
};

export default Input;
