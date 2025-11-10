import '../../styles/ContentPages.css'

function InviteContent() {
  return (
    <div className="content-page invite-page">
      <h2>Invite Friends</h2>
      <div className="invite-card">
        <h3>Earn up to €15 in 5 days!</h3>
        <p>Share your personal invite code with friends and earn rewards when they sign up.</p>
        <div className="invite-code">
          <input type="text" value="OUTDOOR677" readOnly />
          <button className="copy-button">Copy</button>
        </div>
        <div className="share-buttons">
          <button className="share-button">Share via Email</button>
          <button className="share-button">Share via WhatsApp</button>
        </div>
      </div>
    </div>
  )
}

export default InviteContent