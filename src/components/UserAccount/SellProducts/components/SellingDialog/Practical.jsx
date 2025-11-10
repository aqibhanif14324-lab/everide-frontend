import React from "react";
import { useState } from "react";
const Practical = ({  practical, onSelectPractical,onClear,onConfirm }) => {
const practicalOptions = [
  { name: "Alpine skiing" },
  { name: "Ski touring" },
  { name: "Cross-country skiing" },
  { name: "Snowboard" },
  
  { name: "Ver pe 80 CO" },
  { name: "Snowshoeing & winter hiking" },
  
];

  

    
  const toggleState = (state) => {
    if (practical?.includes(state)) {
      onSelectPractical(practical.filter(b => b !== state))
    } else {
      onSelectPractical([...practical, state])
    }
  }
  
  
  return (
    <div className="filter-category-page">
     

      

      <div className="filter-options">
        {practicalOptions.map((state,index) => (
          <div
            key={index}
            className="filter-option"
            onClick={() => toggleState(state.name)}
          >
           
            <div className="filter-option-left">
            <span>{state?.name}</span>
           
            </div>
            <div
              className={`state-checkbox ${
                practical?.includes(state.name) ? "checked" : ""
              }`}
            >
              {practical?.includes(state.name) && (
                <span className="check-mark">✓</span>
              )}
            </div>
          </div>
        ))}


       <div
         
            className="filter-option"
           onClick={()=> onClear("practical")}
          >
           
            <div className="filter-option-left">
            <span>I dont't know</span>
           
            </div>
            
          </div>
      </div>

      <div className="confirm-button-container">
        <button className="confirm-button" onClick={onConfirm}>
          To Validate
        </button>
      </div>
    </div>
  );
};

export default Practical;
