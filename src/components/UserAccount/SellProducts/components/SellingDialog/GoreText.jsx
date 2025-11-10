import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const GoreTextContent = ({ selectedOption, onSelect, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const goreTexOptions = [
    { id: "yes", label: "Yes" },
    { id: "no", label: "No" },
  ];

  const filteredBrands = goreTexOptions.filter((brand) =>
    brand.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sort-by-page">
      <div className="sort-options">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((option) => (
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
        <div className="sort-option" onClick={() => onClear("goreTex")}>
          <span>I dont't know</span>
        </div>
      </div>
    </div>
  );
};

export default GoreTextContent;
