import React from "react";
import { useState } from "react";
import "../styles/FilterCategoryPage.css";
const State = ({ selectedState, onselectedState,onBack,onConfirm }) => {

  const brandsList = [
    {
      name: "New with tags",
      tagline: "Brand new item, in perfect condition, never used, with original tags or packaging",
    },
    {
      name: "New without tags",
      tagline: "Brand new item, never used, but missing the original tags or packaging",
    },
    {
      name: "Like new",
      tagline: "Used item in excellent condition with no signs of wear, almost indistinguishable from new",
    },
    {
      name: "Very good",
      tagline: "Gently used item with minimal signs of wear, fully functional and clean",
    },
    {
      name: "Good",
      tagline: "Used item with some visible signs of wear, but still in good working condition",
    },
    {
      name: "Acceptable",
      tagline: "Noticeably used item with clear signs of wear but remains functional",
    },
    {
      name: "For parts or not working",
      tagline: "Item has significant issues or damage and may only be used for parts or repair",
    }
  ];
  

    
  const toggleState = (state) => {
    if (selectedState.includes(state)) {
      onselectedState(selectedState.filter(b => b !== state))
    } else {
      onselectedState([...selectedState, state])
    }
  }
  
  
  return (
    <div className="filter-category-page">
      <div className="secondary-header">
        <button className="back-button-dialog" onClick={onBack}>
          ‹
        </button>
        <h3>Brands</h3>
      </div>

      

      <div className="filter-options">
        {brandsList.map((state,index) => (
          <div
            key={index}
            className="filter-option"
            onClick={() => toggleState(state.name)}
          >
           
            <div className="filter-option-left">
            <span>{state?.name}</span>
            <span className="state-tagline">{state?.tagline}</span>
            </div>
            <div
              className={`state-checkbox ${
                selectedState.includes(state.name) ? "checked" : ""
              }`}
            >
              {selectedState.includes(state.name) && (
                <span className="check-mark">✓</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="confirm-button-container">
        <button className="confirm-button" onClick={onConfirm}>
          To Validate
        </button>
      </div>
    </div>
  );
};

export default State;
