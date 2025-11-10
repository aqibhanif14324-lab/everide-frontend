import "../styles/Message.css"

function Message({ message, isCompany }) {
  const isOutgoing = message.sender === "me"

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Render image if message has an image
  const renderContent = () => {
    if (message.image) {
      return (
        <div className="message-content">
          <img src={message.image || "/placeholder.svg"} alt="Shared image" className="message-image" />
          {message.text && <div className="message-text">{message.text}</div>}
        </div>
      )
    } else if (message.file) {
      return (
        <div className="message-content">
          <div className="file-attachment">
            <div className="file-icon">📎</div>
            <div className="file-info">
              <div className="file-name">{message.fileName || "File"}</div>
              <a href={message.file} download className="file-download">
                Download
              </a>
            </div>
          </div>
          {message.text && <div className="message-text">{message.text}</div>}
        </div>
      )
    } else {
      return <div className="message-content">{message.text}</div>
    }
  }

  if (isCompany) {
    return (
      <div className="message-wrapper company-message incomming">
         <div className="avatar-company-container">
          <div className="company-avatar">ride</div>
        </div>
        <div className="message incoming company">
          {renderContent()}
          <div className="message-time">{formatTime(message.timestamp)}</div>
        </div>
       
      </div>
    )
  }

  return (
    <div className={`message-wrapper ${isOutgoing ? "outgoing" : "incoming"}`}>
      {!isOutgoing && (
        <div className="avatar">
          <div className="user-avatar"></div>
        </div>
      )}
      <div className={`message ${isOutgoing ? "outgoing" : "incoming"}`}>
        {renderContent()}
        <div className="message-time">{formatTime(message.timestamp)}</div>
      </div>
    </div>
  )
}

export default Message
