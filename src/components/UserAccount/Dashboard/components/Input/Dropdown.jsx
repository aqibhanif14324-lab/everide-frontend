import React, { useState } from "react";
import "./dropdown.css";

const countries = [
  { code: "FR", name: "France" },
  { code: "BE", name: "Belgium" },
  { code: "DE", name: "Germany" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "MC", name: "Monaco" },
  { code: "NL", name: "Netherlands" },
  { code: "LU", name: "Luxembourg" },
  { code: "CH", name: "Swiss" },
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="country-select-container">
 

  <select
    className="country-select"
    value={selectedCountry}
    onChange={handleChange}
  >
    <option value="" disabled hidden>
      Select a country
    </option>
    {countries.map((country) => (
      <option key={country.code} value={country.code}>
        {country.name}
      </option>
    ))}
  </select>

  <svg
        className="dropdown-arrow"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
</div>

  );
};

export default CountrySelect;