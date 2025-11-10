import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const ChooseDialog = ({ data,selectedOption, onSelect, onClear,dontknow }) => {
console.log("ChooseDialog data:", dontknow);


  return (
    <div className="sort-by-page">
      <div className="sort-options">
        {data.length > 0 ? (
          data.map((option) => (
            <div
              key={option.id}
              className="sort-option"
              onClick={() => onSelect(option.id)}
            >
              <span>{option.label}</span>
              <div
                className={`radio-button ${
                  selectedOption === option.id ? "selected" : ""
                }`}
              >
                {selectedOption === option.id && (
                  <div className="radio-inner"></div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: "1rem" }}>No Options avaliable.</p>
        )}
        <div className="sort-option" onClick={() => onClear(dontknow)}>
          <span>I dont't know</span>
        </div>
      </div>
    </div>
  );
};

export default ChooseDialog;
