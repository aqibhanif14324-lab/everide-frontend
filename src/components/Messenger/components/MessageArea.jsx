"use client"

import { useState, useRef, useEffect } from "react"
import Message from "./Message"
import { BackIcon, ImageIcon, AttachmentIcon } from "./Icons"
import "../styles/MessageArea.css"
import ContactDialog from "../../UserAccount/Dashboard/components/ContactDialog/ContactDialog"

function MessageArea({ messages, selectedUser, onSendMessage, onBack, isMobileView }) {
  const [newMessage, setNewMessage] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const fileInputRef = useRef(null)
  const imageInputRef = useRef(null)
  const [prevMessagesLength, setPrevMessagesLength] = useState(0)

  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior })
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    if ((!newMessage.trim() && !selectedFile && !selectedImage) || !selectedUser) return

    const messageData = {
      id: Date.now(),
      text: newMessage.trim(),
      sender: "me",
      timestamp: new Date().toISOString(),
    }

    // Add file data if a file is selected
    if (selectedFile) {
      messageData.file = URL.createObjectURL(selectedFile)
      messageData.fileName = selectedFile.name
    }

    // Add image data if an image is selected
    if (selectedImage) {
      messageData.image = URL.createObjectURL(selectedImage)
    }

    onSendMessage(messageData)
    setNewMessage("")
    setSelectedFile(null)
    setSelectedImage(null)
    setPreviewUrl(null)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setSelectedFile(file)
    setSelectedImage(null) // Clear any selected image
    setPreviewUrl(null)
  }

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setSelectedImage(file)
    setSelectedFile(null) // Clear any selected file

    // Create preview URL for the image
    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)
  }

  const handleAttachmentClick = () => {
    fileInputRef.current.click()
  }

  const handleImageClick = () => {
    imageInputRef.current.click()
  }

  const clearAttachment = () => {
    setSelectedFile(null)
    setSelectedImage(null)
    setPreviewUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
    if (imageInputRef.current) imageInputRef.current.value = ""
  }

  if (!selectedUser) {
    return (
      <div className="message-area">
        <div className="no-conversation">
          <p>Select a conversation to start messaging</p>
        </div>
      </div>
    )
  }

  return (
    <div className="message-area">
      <div className="message-header">
        {isMobileView && (
          <button className="back-button" onClick={onBack}>
            <BackIcon />
          </button>
        )}
        <div className="user-info-header">
        <div className="">
        {selectedUser.avatar ? (
        <div className="avatar-svg-message avatar">{selectedUser.avatar}</div>
        ) : (
        <div className="avatar">
           <div className="avatar-placeholder">{selectedUser.name.charAt(0).toUpperCase()}</div>
          </div>
        )}
      </div>
          <h2>{selectedUser.name}</h2>
        </div>
      </div>

      <div className={`messages-container ${selectedUser?.isCompany?"company-message-container":""}`} ref={messagesContainerRef}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <Message key={message.id} message={message} isCompany={selectedUser.isCompany && message.sender !== "me"} />
          ))
        ) : (
          <div className="no-messages">
            <p>No messages yet. Start a conversation!</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {(selectedFile || selectedImage) && (
        <div className="attachment-preview">
          {selectedFile && (
            <div className="file-preview">
              <span className="file-name">{selectedFile.name}</span>
              <button className="clear-attachment" onClick={clearAttachment}>
                ×
              </button>
            </div>
          )}
          {selectedImage && previewUrl && (
            <div className="image-preview">
              <img src={previewUrl || "/placeholder.svg"} alt="Preview" />
              <button className="clear-attachment" onClick={clearAttachment}>
                ×
              </button>
            </div>
          )}
        </div>
      )}

    {
      !selectedUser.isCompany && (
          <form className="message-input" onSubmit={handleSubmit}>
        <div className="attachment-buttons">
          <button type="button" className="attachment-button" onClick={handleAttachmentClick}>
            <AttachmentIcon />
          </button>
          <button type="button" className="attachment-button" onClick={handleImageClick}>
            <ImageIcon />
          </button>
          <input type="file" ref={fileInputRef} onChange={handleFileSelect} style={{ display: "none" }} />
          <input
            type="file"
            ref={imageInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      )
    }
    {
      selectedUser.isCompany && (
         <ContactDialog text="Contact customer service" type="message-contact-service-button"/>
      )
    }
    </div>
  )
}

export default MessageArea
