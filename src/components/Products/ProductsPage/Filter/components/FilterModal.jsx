import { useState } from 'react'
import MainFiltersPage from './MainFiltersPage'
import SortByPage from './SortByPage'
import BrandsPage from './BrandsPage'
import ColorsPage from './ColorsPage'
import '../styles/FilterModal.css'
import State from './State'
import Gender from './Gender'

const FilterModal = ({ isOpen, setIsOpen , defaultselected }) => {
  const [currentPage, setCurrentPage] = useState(defaultselected)
  const [selectedSort, setSelectedSort] = useState('recent')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedState, setSelectedState] = useState([])
  const [selectedGender, setSelectedGender] = useState([])

  const handleBack = () => {
    setCurrentPage('main')
  }

  // Handle confirming selections and going back to main
  const handleConfirm = () => {
    setCurrentPage('main')
  }

  // Clear all filters
  const handleClearAll = () => {
    setSelectedSort('recent')
    setSelectedBrands([])
    setSelectedColors([])
  }

  // Handle applying all filters and closing modal
  const handleApplyFilters = () => {
    // Logic to apply filters would go here
    console.log('Applied filters:', {
      sort: selectedSort,
      brands: selectedBrands,
      colors: selectedColors
    })
    setIsOpen(!isOpen)
  }

  // Render the appropriate page component based on current state
  const renderPage = () => {
    switch (currentPage) {
      case 'sort':
        return (
          <SortByPage 
            selectedOption={selectedSort}
            onSelect={setSelectedSort}
            onBack={handleBack}
          />
        )
      case 'brands':
        return (
          <BrandsPage 
            selectedBrands={selectedBrands}
            onSelectBrands={setSelectedBrands}
            onBack={handleBack}
            onConfirm={handleConfirm}
          />
        )
      case 'colors':
        return (
          <ColorsPage 
            selectedColors={selectedColors}
            onSelectColors={setSelectedColors}
            onBack={handleBack}
            onConfirm={handleConfirm}
          />
        )
        case 'state':
          return (
            <State 
              selectedState={selectedState}
              onselectedState={setSelectedState}
              onBack={handleBack}
              onConfirm={handleConfirm}
            />
          )
          case 'gender':
          return (
            <Gender 
              selectedGender={selectedGender}
              onselectedGender={setSelectedGender}
              onBack={handleBack}
              onConfirm={handleConfirm}
            />
          )
      default:
        return (
          <MainFiltersPage 
            selectedSort={selectedSort}
            selectedBrands={selectedBrands}
            selectedColors={selectedColors}
            selectedState={selectedState}
            selectedGender={selectedGender}
            onNavigate={setCurrentPage}
          />
        )
    }
  }

  return (
    <div className="filter-overlay ">
      <div className={`filter-modal ${currentPage!== 'main' ? 'filter-model-overlay' : ''}`}>
        <div className={`filter-header ${currentPage ==="main" ? "":"filter-main-model-display"}`} >
          <h2>Filters</h2>
          <button className="close-button" onClick={()=>{setIsOpen(!isOpen)}}>×</button>
        </div>
        
        <div className="filter-content">
          {renderPage()}
        </div>
        
        {currentPage === 'main' && (
          <div className="filter-actions">
            <button 
              className="filter-action-button clear-button" 
              onClick={handleClearAll}
            >
              TO ERASE
            </button>
            <button 
              className="filter-action-button apply-button" 
              onClick={handleApplyFilters}
            >
              SHOW THE RESULTS
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterModal