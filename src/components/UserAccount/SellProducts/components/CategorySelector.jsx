import { useNavigate } from 'react-router-dom';
import '../styles/CategorySelector.css';
import { useEffect, useState } from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
  const navigate = useNavigate();
    const [animationClass, setAnimationClass] = useState('slide-in');

  return (
    <div className={`selector-container ${animationClass}`}>
      <div className="selector-header">
        <h2>Activities</h2>
        <button className="close-button" onClick={() => navigate("/")}>×</button>
      </div>
      
      <div className="selector-content">
        <h3 className="selector-prompt">Do you sell a product for?</h3>
        
        <ul className="selector-list">
          {categories.map((category) => (
            <li key={category.id} className="selector-item" onClick={() => onSelectCategory(category)}>
              <div className="selector-item-content">
                <div className="selector-item-icon">
                  <img src={category.iconUrl} alt={category.name} />
                </div>
                <span className="selector-item-name">{category.name}</span>
              </div>
              <div className="selector-item-right">
                {category.isNew && (
                  <span className="">
                    <span className=""><img width={40} height={40} src="https://static.everide.app/3hjW7O5eojPVr70XSc-D695f2CPNQzstR0wQfspzr68/rs:fit:60:60:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9zaXRlL2NhdGFsb2dzL2hpZ2hsaWdodC9uZXcucG5n.webp" alt="" srcset="" /></span>
                  </span>
                )}
                <span className="selector-item-arrow">›</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySelector;