import { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [activeMenuItem, setActiveMenuItem] = useState('My wardrobe')
  const [activeTab, setActiveTab] = useState('Changing room')
  const [activeMenuItemMessages, setActiveMenuItemMessages] = useState('My messages')
  const [activeTabMessages, setActiveTabMessages  ] = useState("Conversations");
  const [activeStoreTab, setactiveStoreTab] = useState('Dressing Room')
  const [hidetab, setHidetab] = useState(false)
  return (
    <MenuContext.Provider value={{ 
      activeMenuItem, 
      setActiveMenuItem,
      activeTab,
      setActiveTab,
      activeTabMessages,
      setActiveTabMessages,
      activeMenuItemMessages, setActiveMenuItemMessages
    ,hidetab, setHidetab,
    activeStoreTab, setactiveStoreTab
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  return useContext(MenuContext)
}