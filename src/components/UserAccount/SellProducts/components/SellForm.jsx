import { useState } from 'react'
import '../styles/SellForm.css'
import CategorySelector from './CategorySelector'
import SubcategorySelector from './SubcategorySelector'
import ProductTypeSelector from './ProductTypeSelector'
import ProductDetailsForm from './ProductDetailsForm'
import { categoriesData } from '../data/categoriesData'

const SellForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  
  const [selectedData, setSelectedData] = useState({
    category: null,
    subcategory: null,
    productType: null
  })
  
  const handleCategorySelect = (category) => {
    setSelectedData({
      ...selectedData,
      category: category,
      subcategory: null,
      productType: null
    })
    setCurrentStep(2)
  }
  
  const handleSubcategorySelect = (subcategory) => {
    setSelectedData({
      ...selectedData,
      subcategory: subcategory,
      productType: null
    })
    setCurrentStep(3)
  }

  
  
  const handleProductTypeSelect = (productType) => {
    setSelectedData({
      ...selectedData,
      productType: productType
    })
    setCurrentStep(4)
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <CategorySelector 
            categories={categoriesData.categories}
            onSelectCategory={handleCategorySelect}
          />
        )
      case 2:
        return (
          <SubcategorySelector 
            subcategories={selectedData.category.subcategories}
            onSelectSubcategory={handleSubcategorySelect}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <ProductTypeSelector 
            productTypes={selectedData.subcategory.productTypes}
            onSelectProductType={handleProductTypeSelect}
            onBack={handleBack}
          />
        )
      case 4:
        return (
          <ProductDetailsForm 
            selectedData={selectedData}
            onBack={handleBack}
            onClose={onClose}
          />
        )
      default:
        return null
    }
  }
  
  return (
    <div className="sell-form-overlay">
      <div className="sell-form-container">
        {renderCurrentStep()}
      </div>
    </div>
  )
}

export default SellForm