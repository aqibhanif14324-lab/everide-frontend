import React, { useEffect, useState } from 'react'
import Layout from "../Layout/Layout"
import "./SearchProducts.css"
import SearchCategories from './SearchCategories'
import { IoSearch } from 'react-icons/io5'
import GoBackButton from '../ui/goback/goBack'
import SearchGenderCategories from './SearchGender'
import AllCategoriesCard from '../ui/AllCategoriesCard'
import BrandsListItem from './SearchBrands/SearchBrands'
import SearchCategoryBrands from './SearchBrands/SearchCategoryBrands'
function SearchProducts() {
        const [hideHeader, setHideHeader] = useState(false)
         const [currentStep, setCurrentStep] = useState(1)

     const [currentTab, setCurrentTab] = useState("sports")
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
        const [isHideTopHeader, setisHideTopHeader] = useState(true)
   const changeStep = (step) => {
    setCurrentTab(step)
    setCurrentStep(1) 
   }
     // Function to check screen width
       const checkScreenWidth = () => {
        setisHideTopHeader(window.innerWidth <= 1021.008)
       setHideHeader(window.innerWidth <= 1021.008)
      }
    
      useEffect(() => {
        checkScreenWidth() 
        window.addEventListener('resize', checkScreenWidth) 
    
        return () => window.removeEventListener('resize', checkScreenWidth)
      }, [])
       const renderCurrentTab = () => {
    switch(currentTab) {
        case "sports":
            return (
          <SearchCategories currentStep={currentStep} setCurrentStep={setCurrentStep} />
            )
      case "brands":
        return (
          <SearchCategoryBrands setCurrentTab={setCurrentTab}/>
        )
    case "genders":
        return <SearchGenderCategories currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      default:
        return null;
    }
  }
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <Layout hideHeader={hideHeader}>
        {
          currentTab !== "brands" && (
            <div className='search_header_container_categories'>
           
            <div className='search_header_text-wapper'>
             {
                currentStep !== 1 && <GoBackButton handleBack={handleBack} />
             }
               <div className="search_container">
             
                    <input
                      type="search"
                      placeholder=""
                      className="search-input"
                      value={searchValue}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IoSearch className="search-icon" size={20} />
                    {!isFocused && searchValue === "" && (
                      <>
                        {" "}
                        <span className="search-label-1">Search</span>
                        <span className="search-label">Clothes, Shoes...</span>
                      </>
                    )}
                  </div>
       
            </div>
         {
                currentStep === 1 && (
                       <div className="searching_tabs_container">
      <div className="searching_tabs_header">
        <div className={`searching_tab_item ${currentTab === "sports"?"searching_tab_item_active":""}`} onClick={()=>changeStep("sports")}>
          <span className="searching_tab_text" >Sports</span>
        </div>
        <div className={`searching_tab_item ${currentTab === "brands"?"searching_tab_item_active":""}`} onClick={()=>changeStep("brands")}>
          <span className="searching_tab_text">Brands</span>
        </div>
        <div className={`searching_tab_item ${currentTab === "genders"?"searching_tab_item_active":""}`} onClick={()=>changeStep("genders")}>
          <span className="searching_tab_text" >Genders</span>
        </div>
      </div>
    </div>
                )
                    
         }
        </div>
          )
        }
    {/* items */}
    <div>
      
          {renderCurrentTab()}
    </div>
    </Layout>
  )
}

export default SearchProducts