import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useMenu } from '../../UserAccount/Dashboard/context/MenuContext'
import Messenger from '../Messenger'
import { MessageTabs } from '../../UserAccount/Dashboard/components/TabNav'
import Notifications from '../Notification/Notifications'

const MessageAreaToggle = () => {
     const { activeMenuItemMessages,hidetab, setHidetab } = useMenu()

  // Content for each tab
  const renderTabContent = () => {
    switch (activeMenuItemMessages) {
      case 'My messages':
        return (
      <Messenger/>
        )
      case 'My notifications':
        return (
         <Notifications />
        )
     
      default:
        return null
    }
  }
  
    const [hideHeader, setHideHeader] = useState(false)
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
               
     
    {
    hidetab ===false  &&          (
       <>
        <div className="user-list-header message-section-hide-in-computer ">
        <h2>Conversations</h2>
      </div>
         <MessageTabs />
       </>
    )
    }
 <div className="messagner-chat-container">
        {renderTabContent()}
        </div>
          </Layout>
  )
}

export default MessageAreaToggle