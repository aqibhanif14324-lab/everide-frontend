import React from "react"
import { useMenu } from "../../../context/MenuContext"
import FavProductItem from "./Fav-Product/FavProductItem"
import FavoriteEmptyState from "./Fav-EmptyState/FavEmptyState"
import ResearchList from "./Research/Research"



function Favourite() {
  const { activeTab } = useMenu()

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Items':
        return (
      <FavProductItem/>
        )
      case 'Dressing rooms':
        return (
          <FavoriteEmptyState/>
        )
      case 'Research':
        return (
        <ResearchList/>
        )
      default:
        return null
    }
  }
  
  return (
    <div className="wardrobe-content">
      {renderTabContent()}
    </div>
  )
}

export default Favourite


