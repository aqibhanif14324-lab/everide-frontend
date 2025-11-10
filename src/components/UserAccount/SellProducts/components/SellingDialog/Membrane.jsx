import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const MembraneContent = ({ selectedOption, onSelect, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("selectedOption", selectedOption);
 const membrane = [
  { id: '2layers', label: '2 layers' },
  { id: '2.5layers', label: '2.5 layers' },
  { id: '3layers', label: '3 layers' },
  { id: 'nomembrane', label: 'No membrane' },
];

  const filteredBrands = membrane.filter(brand =>
    brand.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sort-by-page">
      
     

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
        <div
         
            className="sort-option"
           onClick={()=> onClear("membrane")}
          >
           
          
            <span>I dont't know</span>
           
            
            
          </div>
      </div>
    </div>
  );
};

export default MembraneContent;
