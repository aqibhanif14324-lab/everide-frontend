import { useState } from 'react'
import '../styles/MenuItem.css'

function MenuItem({ 
  icon, 
  title, 
  description, 
  balanceIndicator, 
  isActive,
  isToggle = false,
  specialBackground = false,
  onClick 
}) {
  const [isToggled, setIsToggled] = useState(false)
  
  const handleToggleClick = (e) => {
    e.stopPropagation()
    setIsToggled(!isToggled)
  }
  
  return (
    <div 
      className={`menu-item ${isActive ? 'active' : ''} ${specialBackground ? 'special-bg' : ''}`}
      onClick={onClick}
    >
      <div className="menu-item-left">
        <span className={`menu-icon ${isActive ? 'active' : ''}`}>{icon}</span>
        <div className="menu-text">
          <span className={`menu-title ${isActive ? 'active' : ''}`}>{title}</span>
          {description && <span className="menu-description">{description}</span>}
        </div>
      </div>
      
      <div className="menu-item-right">
        {balanceIndicator && <span className="balance-indicator">{balanceIndicator}</span>}
        {isToggle ? (
          <div 
            className={`toggle-switch ${isToggled ? 'toggled' : ''}`}
            onClick={handleToggleClick}
          >
            <div className="toggle-slider"></div>
          </div>
        ) : (
          <span className={`menu-arrow ${isActive ? 'active' : ''}`}>›</span>
        )}
      </div>
    </div>
  )
}

export default MenuItem