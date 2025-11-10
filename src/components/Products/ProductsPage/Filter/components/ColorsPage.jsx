import '../styles/FilterCategoryPage.css'
import '../styles/ColorsPage.css'

const ColorsPage = ({ selectedColors, onSelectColors, onBack, onConfirm }) => {
  const colorsList = [
    { id: 'black', label: 'Black', count: 30, hex: '#000000' },
    { id: 'white', label: 'White', count: 3, hex: '#FFFFFF' },
    { id: 'grey', label: 'Grey', count: 12, hex: '#808080' },
    { id: 'brown', label: 'Brown', count: 1, hex: '#5C3A21' },
    { id: 'beige', label: 'Beige', count: 5, hex: '#F5F5DC' },
    { id: 'orange', label: 'Orange', count: 8, hex: '#FFA500' },
    { id: 'yellow', label: 'Yellow', count: 6, hex: '#FFFF00' },
    { id: 'green', label: 'Green', count: 7, hex: '#008000' },
    { id: 'olive', label: 'Olive Green', count: 5, hex: '#808000' },
    { id: 'turquoise', label: 'Turquoise', count: 8, hex: '#40E0D0' }
  ]
  
  const toggleColor = (colorId) => {
    if (selectedColors.includes(colorId)) {
      onSelectColors(selectedColors.filter(c => c !== colorId))
    } else {
      onSelectColors([...selectedColors, colorId])
    }
  }
  
  return (
    <div className="filter-category-page">
      <div className="secondary-header">
        <button className="back-button" onClick={onBack}>‹</button>
        <h3>Colors</h3>
      </div>
      
      <div className="filter-options">
        {colorsList.map(color => (
          <div 
            key={color.id} 
            className="filter-option color-option-filter"
            onClick={() => toggleColor(color.id)}
          >
            <div className="color-option-left">
              <span 
                className="color-swatch-filter" 
                style={{ 
                  backgroundColor: color.hex,
                  border: color.id === 'white' ? '1px solid #e0e0e0' : 'none'
                }}
              ></span>
              <span className="color-label-filter">
                {color.label} <span className="color-count-filter">({color.count})</span>
              </span>
            </div>
            <div className={`checkbox ${selectedColors.includes(color.id) ? 'checked' : ''}`}>
              {selectedColors.includes(color.id) && <span className="check-mark">✓</span>}
            </div>
          </div>
        ))}
      </div>
      
      <div className="confirm-button-container">
        <button className="confirm-button" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ColorsPage