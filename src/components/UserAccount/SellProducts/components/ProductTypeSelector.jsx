import { useNavigate } from 'react-router-dom'
import '../styles/CategorySelector.css'
import { useEffect, useState } from 'react';

const ProductTypeSelector = ({ productTypes, onSelectProductType, onBack }) => {
  const navigate = useNavigate()
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
        <button className="back-button" onClick={onBack}>‹</button>
        <h2>Products</h2>
        <button className="close-button" onClick={() => navigate("/")}>×</button>
      </div>
      
      <div className="selector-content">
        <h3 className="selector-prompt">What do you want to sell?</h3>
        
        <ul className="selector-list">
          {productTypes.map((productType) => (
            <li key={productType.id} className="selector-item" onClick={() => onSelectProductType(productType)}>
              <div className="selector-item-content">
                <div className="selector-item-icon">
                  <img src={productType.iconUrl} alt={productType.name} />
                </div>
                <span className="selector-item-name">{productType.name}</span>
              </div>
              <span className="selector-item-arrow">›</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductTypeSelector