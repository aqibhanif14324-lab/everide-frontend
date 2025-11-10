import { useMenu } from '../context/MenuContext'
import UserProfile from './UserProfile'
import MenuItem from './MenuItem'
import StatisticCard from './StatisticCard'
import PromoCard from './PromoCard'
import { 
  FaShirt, 
  FaWallet, 
  FaClockRotateLeft, 
  FaUsers, 
  FaStar, 
  FaUser, 
  FaCreditCard, 
  FaShieldHalved, 
  FaBell, 
  FaMessage, 
  FaFileLines, 
  FaScaleBalanced, 
  FaLock 
} from 'react-icons/fa6'
import '../styles/SideNav.css'
import { useState } from 'react'
import ContactDialog from './ContactDialog/ContactDialog'

function SideNav({ toggleMobileMenu }) {
  const { activeMenuItem, setActiveMenuItem,setActiveTab,activeTab } = useMenu();

const [isOpen, setIsOpen] = useState(false)
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem)
    if(menuItem === 'My wardrobe') {
      setActiveTab('Changing room');
    }else if(menuItem === 'My transactions') {
      setActiveTab('My purchases');
    }else if(menuItem === 'Favorites') {
      setActiveTab('Items');
    }
    else{
      setActiveTab('');
    }
    toggleMobileMenu(); 
  }

  return (
    <div className="side-nav">

  
      {/* User Profile */}
      <UserProfile 
        username="Outdoor677"
        isVerified={true}
        joinDate="Joined 2 years ago"
        avatarUrl="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=100"
      />
      
      {/* Statistics Cards */}
      <div className="statistics-container">
        <StatisticCard 
          title="Economy" 
          value="0" 
          unit="Euros"
          color="green" 
        />
        <StatisticCard 
          title="CO2 avoided" 
          value="0" 
          unit="kg / CO2eq" 
          color="green"
        />
      </div>
      
      {/* Promo Cards */}
      <PromoCard 
        title="My Everide Guide"
        description="Check all the tips for selling and getting the most out of Everide"
        backgroundColor="#F9A826"
        imageUrl="https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&w=100"
      />
      
      <PromoCard 
        title="Need help?"
        description="Our support and customer service will assist you within 24 hours."
        backgroundColor="#4F6CFF"
        imageUrl="https://images.pexels.com/photos/7309671/pexels-photo-7309671.jpeg?auto=compress&cs=tinysrgb&w=100"
      />
      
      {/* Menu Items */}
      <div className="menu-section">
        <MenuItem 
          icon={<FaShirt />} 
          title="My wardrobe" 
          description="Find your ads and reviews"
          isActive={activeMenuItem === 'My wardrobe'}
          onClick={() => handleMenuItemClick('My wardrobe')}
        />
        
        <MenuItem 
          icon={<FaWallet />} 
          title="My wallet" 
          description="Manage and transfer your money"
          balanceIndicator="0 €"
          isActive={activeMenuItem === 'My wallet'}
          onClick={() => handleMenuItemClick('My wallet')}
        />
        
        <MenuItem 
          icon={<FaClockRotateLeft />} 
          title="My transactions"
          description="Track your purchases and sales"
          isActive={activeMenuItem === 'My transactions'}
          onClick={() => handleMenuItemClick('My transactions')}
        />
        
        <MenuItem 
          icon={<FaUsers />} 
          title="Invite friends!"
          description="Earn up to €15 in 5 days"
          specialBackground={true}
          isActive={activeMenuItem === 'Invite friends!'}
          onClick={() => handleMenuItemClick('Invite friends!')}
        />
        
        <MenuItem 
          icon={<FaUser />} 
          title="Holiday mode"
          // description="Become idle for 30 days"
          isToggle={true}
          // isActive={activeMenuItem === 'Holiday mode'}
          // onClick={() => handleMenuItemClick('Holiday mode')}
        />
        
        <MenuItem 
          icon={<FaStar />} 
          title="Favorites"
          isActive={activeMenuItem === 'Favorites'}
          onClick={() => handleMenuItemClick('Favorites')}
        />
        
        <MenuItem 
          icon={<FaUser />} 
          title="My information"
          isActive={activeMenuItem === 'My information'}
          onClick={() => handleMenuItemClick('My information')}
        />
        
        <MenuItem 
          icon={<FaCreditCard />} 
          title="Payment methods"
          isActive={activeMenuItem === 'Payment methods'}
          onClick={() => handleMenuItemClick('Payment methods')}
        />
        
        <MenuItem 
          icon={<FaShieldHalved />} 
          title="Account & Security"
          isActive={activeMenuItem === 'Account & Security'}
          onClick={() => handleMenuItemClick('Account & Security')}
        />
        
        <MenuItem 
          icon={<FaBell />} 
          title="Notifications"
          isActive={activeMenuItem === 'Notifications'}
          onClick={() => handleMenuItemClick('Notifications')}
        />
        
        {/* <MenuItem 
          icon={<FaMessage />} 
          title="Contact"
          isActive={activeMenuItem === 'Contact'}
          onClick={() => handleMenuItemClick('Contact')}
        /> */}

    
      
          
        <ContactDialog type={"button"}/>
        
    
      </div>
      
      {/* Footer Links */}
      <div className="menu-footer">
        <a href="#" className="footer-link"><FaFileLines className="footer-icon" /> Terms and Conditions</a>
        <a href="#" className="footer-link"><FaScaleBalanced className="footer-icon" /> Legal notices</a>
        <a href="#" className="footer-link"><FaLock className="footer-icon" /> Privacy Policy</a>
        <a href="#" className="footer-link">Log out</a>
      </div>
    </div>
  )
}

export default SideNav