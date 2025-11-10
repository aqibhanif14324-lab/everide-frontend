import { useEffect, useState } from 'react'

import './Dashboard/styles/App.css'
import { MenuProvider } from './Dashboard/context/MenuContext'
import SideNav from './Dashboard/components/SideNav'
import ContentArea from './Dashboard/components/ContentArea'
import Layout from '../Layout/Layout'

function UserDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  // For mobile view - toggle between menu and content
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
   
    <Layout hideHeader={hideHeader}>
    
     <div className='dashboard-container'>
     <div className="app-container container">
        <div className={`side-nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <SideNav toggleMobileMenu={toggleMobileMenu} />
        </div>
        <div className={`content-area-container ${isMobileMenuOpen ? 'mobile-hidden' : ''}`}>
          <ContentArea toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
     </div>

    </Layout>
   

  )
}

export default UserDashboard