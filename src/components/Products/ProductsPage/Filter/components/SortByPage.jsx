import '../styles/SortByPage.css'

const SortByPage = ({ selectedOption, onSelect, onBack }) => {
  const sortOptions = [
    { id: 'recent', label: 'The most recent' },
    { id: 'ascending', label: 'Ascending price' },
    { id: 'descending', label: 'Decreasing price' }
  ]

  return (
    <div className="sort-by-page">
      <div className="secondary-header">
        <button className="back-button" onClick={onBack}>×</button>
        <h3>Sort by</h3>
      </div>
      
      <div className="sort-options">
        {sortOptions.map(option => (
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
        ))}
      </div>
    </div>
  )
}

export default SortByPage