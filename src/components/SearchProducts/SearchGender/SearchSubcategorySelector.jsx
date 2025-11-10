import { useNavigate } from 'react-router-dom'
// import '../styles/CategorySelector.css'

const SearchSubcategorySelector = ({ subcategories, onSelectSubcategory, onBack }) => {
  const navigate = useNavigate()
  return (
    <div className="selector-container">
      
      <div className="selector-content">
        
        <ul className="selector-list">
          {subcategories?.map((subcategory) => (
            <li key={subcategory?.id} className="selector-item" onClick={() => onSelectSubcategory(subcategory)}>
              <div className="selector-item-content">
                <div className="selector-item-icon">
                  <img src={subcategory?.iconUrl} alt={subcategory?.name} />
                </div>
                <span className="selector-item-name">{subcategory?.name}</span>
              </div>
              <span className="selector-item-arrow">›</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchSubcategorySelector