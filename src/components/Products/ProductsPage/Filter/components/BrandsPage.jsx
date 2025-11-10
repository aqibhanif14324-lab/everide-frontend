import { useState } from 'react'
import '../styles/FilterCategoryPage.css'
import { BiSearch } from 'react-icons/bi'

const BrandsPage = ({ selectedBrands, onSelectBrands, onBack, onConfirm }) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const brandsList = [
    'ARCTERYX', 'ARVA', 'ASICS', 'BLACK CROWS', 'BLACK DIAMOND', 
    'BROOKS', 'DYNAFIT', 'FIVE TEN', 'GARMIN', 'HAGLOFS'
  ]
  
  // Filter brands based on search term
  const filteredBrands = brandsList.filter(brand => 
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      onSelectBrands(selectedBrands.filter(b => b !== brand))
    } else {
      onSelectBrands([...selectedBrands, brand])
    }
  }
  
  return (
    <div className="filter-category-page">
      <div className="secondary-header">
        <button className="back-button-dialog" onClick={onBack}>‹</button>
        <h3>Brands</h3>
      </div>
      
      <div className="search-container">
        <div className="search-input-wrapper">
          <span className="search-icon"><BiSearch size={20}/></span>
          <input 
            type="text" 
            className="search-input"
            placeholder="Search for a brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="filter-options">
        {filteredBrands.map(brand => (
          <div 
            key={brand} 
            className="filter-option"
            onClick={() => toggleBrand(brand)}
          >
            <span>{brand}</span>
            <div className={`checkbox ${selectedBrands.includes(brand) ? 'checked' : ''}`}>
              {selectedBrands.includes(brand) && <span className="check-mark">✓</span>}
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
  )
}

export default BrandsPage