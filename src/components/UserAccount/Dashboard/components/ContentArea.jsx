import { useState } from 'react'
import { useMenu } from '../context/MenuContext'
import WardrobeContent from './content/WardrobeContent'


import InviteContent from './content/InviteContent'
import FavoritesContent from './content/FavoritesContent'
import { FaArrowLeft } from 'react-icons/fa6'
import '../styles/ContentArea.css'
import WalletContent from './content/Wallet/WalletContent'
import { FavoritesTabs, TabNav, TransactionTabs } from './TabNav'
import TransactionsContent from './content/Transactions/TransactionsContent'
import InvitationSection from './content/Transactions/InviteSection/InviteSection'
import Favourite from './content/Favourite/Favourite'
import MyInfo from './content/MyInformation/MyInfo'
import PaymentMethodEmptyState from './content/Payment/PaymentMethodEmpty'
import SecuritySettings from './content/SecuritySection/SecuritySection'
import NotificationSettings from './content/NotificaitonsSetting/NotificaitonsSetting'

function ContentArea({ toggleMobileMenu }) {
  const { activeMenuItem } = useMenu()
  
  // Render the appropriate content based on the active menu item
  const renderContent = () => {
    switch (activeMenuItem) {
      case 'My wardrobe':
        return <WardrobeContent />
      case 'My wallet':
        return <WalletContent />
      case 'My transactions':
        return <TransactionsContent />
      case 'Invite friends!':
        return <InvitationSection />
      case 'Favorites':
        return <Favourite />
        case 'My information':
        return <MyInfo />
        case "Payment methods":
          return <PaymentMethodEmptyState />
          case "Account & Security":
            return <SecuritySettings />
            case"Notifications":
            return <NotificationSettings />
            case 'Contact':
              return <>hello contact</>
      default:
        return <div className="placeholder-content">
          <h2>Content for {activeMenuItem}</h2>
          <p>This section is under construction.</p>
        </div>
    }
  }
  
  return (
    <div className="content-area">
      <div className="mobile-header">
        <button className="back-button" onClick={toggleMobileMenu}>
          <FaArrowLeft />
        </button>
        <h2>{activeMenuItem}</h2>
      </div>
    <h4 className='content-section-title'>  {activeMenuItem}</h4>
    
      {/* Tab navigation for My wardrobe */}
      {activeMenuItem === 'My wardrobe' && <TabNav />}
      {activeMenuItem === 'My transactions' && <TransactionTabs />}
      {activeMenuItem === "Favorites" && <FavoritesTabs />}
      {/* Main content area */}
      <div className="content-section">
        {renderContent()}
      </div>
    </div>
  )
}

export default ContentArea
const ImageContainer = () => {
  return (
    <div className="image-container">
      <picture className="image-picture">
        <source 
          srcSet="https://static.everide.app/LwpmOzB2bVKZ3i5k7xmC-yX_zkVHI38KAGZPQc4z2Mw/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.webp" 
          type="image/webp" 
          media="(min-width: 0px)"
        />
        <source 
          srcSet="https://static.everide.app/LAaBsnJk4h1HS3Bf-fHbSD5JilebCoicGnnVKdo_TeQ/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.jpg" 
          type="image/jpg" 
          media="(min-width: 0px)"
        />
        <img 
          width="1260" 
          height="1000" 
          src="https://static.everide.app/LAaBsnJk4h1HS3Bf-fHbSD5JilebCoicGnnVKdo_TeQ/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.jpg" 
          alt="Mountain landscape"
          className="image-content"
        />
      </picture>
    </div>
  );
};