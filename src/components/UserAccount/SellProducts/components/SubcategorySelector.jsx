import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CategorySelector.css';

const SubcategorySelector = ({ subcategories, onSelectSubcategory, onBack }) => {
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('slide-in');

  useEffect(() => {
    setAnimationClass('slide-in'); 
  }, []);

  const handleBack = () => {
    setAnimationClass('slide-out'); 
    setTimeout(() => {
      onBack();
    }, 300); 
  };

  return (
    <div className={`selector-container ${animationClass}`}>
      <div className="selector-header">
        <button className="back-button" onClick={handleBack}>‹</button>
        <h2>Kinds</h2>
        <button className="close-button" onClick={() => navigate("/")}>×</button>
      </div>
      
      <div className="selector-content">
        <h3 className="selector-prompt">What do you want to sell?</h3>
        
        <ul className="selector-list">
          {subcategories.map((subcategory) => (
            <li key={subcategory.id} className="selector-item" onClick={() => onSelectSubcategory(subcategory)}>
              <div className="selector-item-content">
                <div className="selector-item-icon">
                  <img src={subcategory.iconUrl} alt={subcategory.name} />
                </div>
                <span className="selector-item-name">{subcategory.name}</span>
              </div>
              <span className="selector-item-arrow">›</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubcategorySelector;
