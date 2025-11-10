import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categoriesData, gendersData } from '../UserAccount/SellProducts/data/categoriesData'
import SearchCategorySelector from './SearchGender/SearchCategorySelector'
import SearchSubcategorySelector from './SearchGender/SearchSubcategorySelector'
import SearchProductTypeSelector from './SearchGender/SearchProductTypeSelector'
import AllCategoriesCard from '../ui/AllCategoriesCard'

const SearchGenderCategories = ({ currentStep, setCurrentStep }) => {
  const [isHideTopHeader, setisHideTopHeader] = useState(true)
  const [selectedData, setSelectedData] = useState({
    category: null,
    subcategory: null,
    productType: null
  })
  
  const navigate = useNavigate()

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
    // Navigate to /products when product type is selected
    navigate('/category/North%20Face%20Jacket', {
      state: {
        selectedCategory: selectedData.category,
        selectedSubcategory: selectedData.subcategory,
        selectedProductType: productType
      }
    })
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  // Function to check screen width
  const checkScreenWidth = () => {
    setisHideTopHeader(window.innerWidth <= 1021.008)
  }

  useEffect(() => {
    checkScreenWidth() 
    window.addEventListener('resize', checkScreenWidth) 

    return () => window.removeEventListener('resize', checkScreenWidth)
  }, [])

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <SearchCategorySelector 
            categories={gendersData?.genders}
            onSelectCategory={handleCategorySelect}
          />
        )
      case 2:
        return (
          <SearchSubcategorySelector 
            subcategories={selectedData?.category?.subcategories}
            onSelectSubcategory={handleSubcategorySelect}
            onBack={handleBack}
          />
        )
      case 3:
        return (
          <SearchProductTypeSelector 
            productTypes={selectedData?.subcategory?.productTypes}
            onSelectProductType={handleProductTypeSelect}
            onBack={handleBack}
          />
        )
      case 4:
        // This case won't render anything as we navigate away
        return null
      default:
        return null
    }
  }

  return (
    <>
      {currentStep !== 1 && <AllCategoriesCard/>}
      <div className="sell-form-overlay">
        <div className="sell-form-container">
          {renderCurrentStep()}
        </div>
      </div>
    </>
  )
}

export default SearchGenderCategories