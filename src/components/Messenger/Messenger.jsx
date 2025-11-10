"use client"

import { useState, useEffect } from "react"
import "./messenger.css"
import UserList from "./components/UserList"
import MessageArea from "./components/MessageArea"

import Layout from "../Layout/Layout"
import { useMenu } from "../UserAccount/Dashboard/context/MenuContext"
import { conversations, users } from "./data"

function Messenger() {
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [usersList, setUsersList] = useState(users)
  const [messages, setMessages] = useState(conversations[selectedUser.id] || [])
  const [isMobileView, setIsMobileView] = useState(false)
  const [showConversation, setShowConversation] = useState(false)
  const { setHidetab} = useMenu();
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setHidetab(true)
    setMessages(conversations[user.id] || [])

    // On mobile, show the conversation view when a user is selected
    if (isMobileView) {
      setShowConversation(true)
    }
  }

  const handleBackToList = () => {
    setHidetab(false)
    setShowConversation(false)
  }

  const handleDeleteUser = (userId) => {
    const updatedUsers = usersList.filter((user) => user.id !== userId)
    setUsersList(updatedUsers)

    // If the deleted user was selected, select the first user in the list
    if (selectedUser.id === userId && updatedUsers.length > 0) {
      handleUserSelect(updatedUsers[0])
    } else if (updatedUsers.length === 0) {
      setSelectedUser(null)
      setMessages([])
    }
  }

  const handleSendMessage = (messageData) => {
    if (!selectedUser) return

    const updatedMessages = [...messages, messageData]
    setMessages(updatedMessages)

    // Simulate response after 1 second for non-file/image messages
    if (messageData.text && !messageData.file && !messageData.image) {
      setTimeout(() => {
        const responseMessage = {
          id: Date.now() + 1,
          text: `This is a response to: "${messageData.text}"`,
          sender: selectedUser.isCompany ? "company" : "user",
          timestamp: new Date().toISOString(),
        }
        setMessages((prev) => [...prev, responseMessage])
      }, 1000)
    }
  }
  
  return (

      <div className={`messenger-container  ${isMobileView && showConversation ? "show-conversation" : ""}`}>
        <div className={`user-list-container ${isMobileView && showConversation ? "hidden" : ""}`}>
          <UserList
            users={usersList}
            selectedUser={selectedUser}
            onSelectUser={handleUserSelect}
            onDeleteUser={handleDeleteUser}
          />
        </div>
        <div className={`message-area-container ${isMobileView && !showConversation ? "hidden" : ""}`}>
          <MessageArea
            messages={messages}
            selectedUser={selectedUser}
            onSendMessage={handleSendMessage}
            onBack={handleBackToList}
            isMobileView={isMobileView}
          />
        </div>
      </div>
 

 
  )
}

export default Messenger
