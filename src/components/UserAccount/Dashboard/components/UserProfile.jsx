import { MdVerified } from 'react-icons/md'
import '../styles/UserProfile.css'

function UserProfile({ username, isVerified, joinDate, avatarUrl }) {
  return (
    <div className="user-profile">
      <div className="avatar-container-dashboard">
        <img src={avatarUrl} alt={username} className="user-profile-avatar" />
      </div>
      <div className="user-info">
        <div className="username-container">
          <h3 className="username">{username}</h3>
          {isVerified && (
            <span className="verified-badge">
              <MdVerified/>
              Verified
            </span>
          )}
        </div>
        <p className="join-date">{joinDate}</p>
      </div>
    </div>
  )
}

export default UserProfile