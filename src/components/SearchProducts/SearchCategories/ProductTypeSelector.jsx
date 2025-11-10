import { useNavigate } from 'react-router-dom'
// import '../styles/CategorySelector.css'

const ProductTypeSelector = ({ productTypes, onSelectProductType, onBack }) => {
  const navigate = useNavigate()
  return (
    <div className="selector-container">
      
      
      <div className="selector-content">
      
        
        <ul className="selector-list">
          {productTypes?.map((productType) => (
            <li key={productType?.id} className="selector-item" onClick={() => onSelectProductType(productType)}>
              <div className="selector-item-content">
                <div className="selector-item-icon">
                  <img src={productType?.iconUrl} alt={productType?.name} />
                </div>
                <span className="selector-item-name">{productType?.name}</span>
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