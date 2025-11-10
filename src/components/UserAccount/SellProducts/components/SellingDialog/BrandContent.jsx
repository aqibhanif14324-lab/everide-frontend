import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const BrandContent = ({ selectedOption, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("selectedOption", selectedOption);
  const brandslist = [
    { id: 'blackcrows', label: 'Black Crows' },
    { id: 'chanel', label: 'Chanel' },
    { id: 'louisvuitton', label: 'Louis Vuitton' },
    { id: 'dior', label: 'Dior' },
    { id: 'hermes', label: 'Hermès' },
    { id: 'givenchy', label: 'Givenchy' },
    { id: 'celine', label: 'Celine' },
    { id: 'lacoste', label: 'Lacoste' },
    { id: 'balmain', label: 'Balmain' },
    { id: 'yvesrocher', label: 'Yves Rocher' },
    { id: 'lancome', label: 'Lancôme' },
    { id: 'biotherm', label: 'Biotherm' },
    { id: 'vichy', label: 'Vichy' },
    { id: 'sezane', label: 'Sézane' },
    { id: 'agnesb', label: 'Agnès B.' },
    { id: 'petitbateau', label: 'Petit Bateau' },
    { id: 'cartier', label: 'Cartier' },
    { id: 'longchamp', label: 'Longchamp' },
    { id: 'kway', label: 'K-Way' },
    { id: 'maje', label: 'Maje' },
  ];

  const filteredBrands = brandslist.filter(brand =>
    brand.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sort-by-page">
      
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon"><BiSearch size={20} /></span>
          <input 
            type="text" 
            className="search-input"
            placeholder="Search for a brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="sort-options">
        {filteredBrands.length > 0 ? (
          filteredBrands.map(option => (
            <div 
              key={option.id} 
              className="sort-option"
              onClick={() => onSelect(option.id)}
            >
              <span>{option.label}</span>
              <div className={`radio-button ${selectedOption === option.id ? 'selected' : ''}`}>
                {selectedOption === option.id && <div className="radio-inner"></div>}
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem' }}>No brands found.</p>
        )}
      </div>
    </div>
  );
};

export default BrandContent;
