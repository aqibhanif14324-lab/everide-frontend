import React from "react";
import { useState } from "react";
import "../styles/FilterCategoryPage.css";
import { BiSearch } from "react-icons/bi";
const Gender = ({ selectedGender, onselectedGender, onBack, onConfirm }) => {
 const brandsList = [
  {
    name: "Man",
    img: "https://static.everide.app/ww4puaHnhwWON3e9NztQCpVggIwvlWLE8RTb7MKMZV8/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL00ucG5n.webp",
    count: 10,
  },
  {
    name: "Women",
    img: "https://static.everide.app/3a3gx6UZYwOcFZATx0NYYlpygf3bJDpT2X7UOP12rcw/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0YucG5n.webp",
    count: 12,
  },
  {
    name: "Unisex",
    img: "https://static.everide.app/DKgb0CgnjotvLz_OU_5eYHcRrqClkOc1Ydoujdp6Vsw/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL1UucG5n.webp",
    count: 7,
  },
  {
    name: "Junior Child",
    img: "https://static.everide.app/LyKdiR3PpkHvT1pgiCK0D9v2lgMLi1obdr3vU_ueZ_M/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0oucG5n.webp",
    count: 5,
  },
  {
    name:"Child",
    img: "https://static.everide.app/e0dukvvkW4zjTveyOeQaALD4MvFQJ_0gbLC7LZ5SNCw/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0sucG5n.webp" ,
  }
];


  const toggleState = (state) => {
    if (selectedGender.includes(state)) {
      onselectedGender(selectedGender.filter((b) => b !== state));
    } else {
      onselectedGender([...selectedGender, state]);
    }
  };

  return (
    <div className="filter-category-page">
      <div className="secondary-header">
        <button className="back-button-dialog" onClick={onBack}>
          ‹
        </button>
        <h3>Gender</h3>
      </div>

      <div className="filter-options">
        {brandsList.map((state, index) => (
          <div
            key={index}
            className="filter-option-gender"
            onClick={() => toggleState(state.name)}
          >
            <div className="filter-option-gender-left">
              <img src={state?.img} alt="" srcset="" />
              <span className="gender-filter-name">{state?.name}</span>
           {state?.count && (   <span className="gender-count-items">({state?.count})</span>)}
            </div>
            <div
              className={`state-checkbox ${
                selectedGender.includes(state.name) ? "checked" : ""
              }`}
            >
              {selectedGender.includes(state.name) && (
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

export default Gender;
