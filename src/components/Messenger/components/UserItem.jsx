"use client"

import { useState } from "react"
import { TrashIcon } from "./Icons"
import "../styles/UserItem.css"

function UserItem({ user, isSelected, onSelect, onDelete }) {
  const [showDelete, setShowDelete] = useState(false)

  const handleMouseEnter = () => {
    setShowDelete(true)
  }

  const handleMouseLeave = () => {
    setShowDelete(false)
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    onDelete()
  }

  return (
    <div
      className={`user-item ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        {user.avatar ? (
        <div className="avatar-svg-message">{user.avatar}</div>
        ) : (
        <div className="avatar">
           <div className="avatar-placeholder">{user.name.charAt(0).toUpperCase()}</div>
          </div>
        )}
      </div>
      <div className="user-info-messenger">
        {user.isCompany && (<span className="messge-company-tagline">How it works ✌️</span>)}
        <div className="user-name">{user.name}</div>
        <div className="last-message">{user.lastMessage}</div>
      </div>
      {showDelete && (
        <button className="delete-button" onClick={handleDeleteClick}>
          <TrashIcon />
        </button>
      )}
    </div>
  )
}

export default UserItem
