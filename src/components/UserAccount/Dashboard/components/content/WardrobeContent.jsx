import { useMenu } from '../../context/MenuContext'
import EmptyState from '../EmptyState'
import '../../styles/WardrobeContent.css'
import AboutUsContent from './AboutusContent/Aboutuscontent'
import NoReviews from './Reviews/NoReviews/NoReviews'

function WardrobeContent() {
  const { activeTab } = useMenu()

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Changing room':
        return (
          <div className="changing-room">
             
            <EmptyState 
              icon="👕"
              title="Start selling clothing and gear on everide"
              description="Give new life to what you no longer need, fast deposit and secure transactions."
              pageInfo="Page 1 of 1"
            />
          
          </div>
        )
      case 'About':
        return (
          <div className="about-content">
            <AboutUsContent />
          </div>
        )
      case 'Reviews':
        return (
          <div className="reviews-content">
           <NoReviews />
          </div>
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

export default WardrobeContent


