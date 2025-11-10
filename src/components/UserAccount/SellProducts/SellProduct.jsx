import { useEffect, useState } from 'react'
import './styles/SellProucts.css'
import SellForm from './components/SellForm'
import Layout from '../../Layout/Layout'

function SellProducts() {
    const [hideHeader, setHideHeader] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSellForm, setShowSellForm] = useState(false)
 // Function to check screen width
   const checkScreenWidth = () => {
    setHideHeader(window.innerWidth <= 1021.008)
    setIsMobileMenuOpen(window.innerWidth <= 1021.008)
  }

  useEffect(() => {
    checkScreenWidth() 
    window.addEventListener('resize', checkScreenWidth) 

    return () => window.removeEventListener('resize', checkScreenWidth)
  }, [])
  return (
    
        
        <Layout hideHeader={hideHeader} isMobileMenuOpen={isMobileMenuOpen}>
            <SellForm onClose={() => setShowSellForm(false)} />
        </Layout>
      
     
  )
}

export default SellProducts