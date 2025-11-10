import React, { useEffect, useState } from 'react'
import SingleStoreImage from './SingleStoreBackgroundImage/SingleStoreImage'
import Layout from '../Layout/Layout'
import BrandCard from './BrandsCards/Brandcard'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineOutlinedFlag } from 'react-icons/md'
import { StoreTabs } from '../UserAccount/Dashboard/components/TabNav'
import { products } from '../../Data/data'
import StoresItems from './StoreItems/StoresItems'
import { useMenu } from '../UserAccount/Dashboard/context/MenuContext'
import StoresReviews from './StoreReview/StoreReviews'

const SingleStore = () => {
      const [hideHeader, setHideHeader] = useState(false)
       const { activeStoreTab } = useMenu()
      
        // Content for each tab
        const renderTabContent = () => {
          switch (activeStoreTab) {
            case 'Dressing Room':
              return (
            <StoresItems/>
              )
         
            case 'Reviews':
              return (
              <StoresReviews/>
              )
            default:
              return null
          }
        }
          // Function to check screen width
           const checkScreenWidth = () => {
            setHideHeader(window.innerWidth <= 1021.008)
          }
        
          useEffect(() => {
            checkScreenWidth() 
            window.addEventListener('resize', checkScreenWidth) 
        
            return () => window.removeEventListener('resize', checkScreenWidth)
          }, [])
  return (
    <Layout  hideHeader={hideHeader}>
      <div className='single-store-wrapper-container'>
         <div className='single-store-container'>
         <div className="user-list-header message-section-hide-in-computer store-shop">
        <IoIosArrowBack/>
        <MdOutlineOutlinedFlag/>
      </div>
         <SingleStoreImage/>
         <BrandCard/>
       </div>
       <StoreTabs />
      
        {renderTabContent()}
      </div>
    </Layout>
  )
}

export default SingleStore