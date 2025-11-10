"use client"
import { useEffect, useRef } from "react"
import UserItem from "./UserItem"
import "../styles/UserList.css"
import { MessageTabs } from "../../UserAccount/Dashboard/components/TabNav"

function UserList({ users, selectedUser, onSelectUser, onDeleteUser }) {
  const selectedUserRef = useRef(null)

  useEffect(() => {
    // Scroll to the selected user when it changes
    if (selectedUserRef.current) {
      selectedUserRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [selectedUser])

  return (
    <div className="user-list">

      <div className="user-list-content">
        {users.length > 0 ? (
          users.map((user) => {
            const isSelected = selectedUser && user.id === selectedUser.id
            return (
              <div key={user.id} ref={isSelected ? selectedUserRef : null}>
                <UserItem
                  user={user}
                  isSelected={isSelected}
                  onSelect={() => onSelectUser(user)}
                  onDelete={() => onDeleteUser(user.id)}
                />
              </div>
            )
          })
        ) : (
          <div className="no-users">No conversations available</div>
        )}
      </div>
    </div>
  )
}

export default UserList
