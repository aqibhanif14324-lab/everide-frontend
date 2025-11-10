import { useMenu } from '../context/MenuContext'
import '../styles/TabNav.css'

function TabNav() {
  const { activeTab, setActiveTab } = useMenu()
  
  const tabs = [
    'Changing room',
    'About',
    'Reviews'
  ]
  
  return (
    <>
   
    <UserProfileCard/>
    <div className="tab-nav">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
    </>
  )
}

const ImageContainer = () => {
  return (
    <div className="aboutus-profile-image-container">
      <picture className="aboutus-profile-image-picture">
        <source 
          srcSet="https://static.everide.app/LwpmOzB2bVKZ3i5k7xmC-yX_zkVHI38KAGZPQc4z2Mw/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.webp" 
          type="image/webp" 
          media="(min-width: 0px)"
        />
        <source 
          srcSet="https://static.everide.app/LAaBsnJk4h1HS3Bf-fHbSD5JilebCoicGnnVKdo_TeQ/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.jpg" 
          type="image/jpg" 
          media="(min-width: 0px)"
        />
        <img 
          width="1260" 
          height="1000" 
          src="https://static.everide.app/LAaBsnJk4h1HS3Bf-fHbSD5JilebCoicGnnVKdo_TeQ/rs:fit:1260:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvaGVhZGVyLW1vdW50YWlucy0xLmpwZw.jpg" 
          alt="Mountain landscape"
          className="aboutus-profile-image-content"
        />
      </picture>
    </div>
  );
};

const UserProfileCard = () => {
  return (
   <div className="user-profile-card-main">
    <ImageContainer />
    <div className="profile-card-container">
   
      {/* Avatar Section */}
      <div className="profile-avatar-container">
        <span className="profile-avatar-wrapper">
          <picture className="profile-avatar-picture">
            <source 
              srcSet="https://static.everide.app/_nLQcM-ECXhjb94yGuz_L2yvVxoQJmGpa6rDH7zZG38/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.webp" 
              type="image/webp" 
              media="(min-width: 0px)"
            />
            <source 
              srcSet="https://static.everide.app/8j8a4ypU4Y8eSmg5_pkNE6tl_k6SOaAE3QWObVEcWfo/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.png" 
              type="image/png" 
              media="(min-width: 0px)"
            />
            <img 
              width="100" 
              height="100" 
              src="https://static.everide.app/8j8a4ypU4Y8eSmg5_pkNE6tl_k6SOaAE3QWObVEcWfo/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.png" 
              alt="User avatar"
              className="profile-avatar-image"
            />
          </picture>
          
          {/* Edit overlay (shown on hover) */}
          <div className="profile-avatar-edit-overlay">
            <div className="profile-avatar-edit-icon-container">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-edit-icon">
                <g clipPath="url(#clip0_804_29419)">
                  <path d="M1.29962 10.8673L3.51263 8.67907C3.90219 8.26464 4.92997 7.68444 5.9246 8.67907C6.91923 9.6737 10.732 13.5693 12.514 15.3928" stroke="currentColor"></path>
                  <path d="M8.29401 11.2227L9.25663 10.2601C9.64619 9.8457 10.674 9.26549 11.6686 10.2601C12.6632 11.2548 12.1049 10.7793 13.8869 12.6028" stroke="currentColor"></path>
                  <rect x="14.7845" y="7.77832" width="9" height="2" transform="rotate(90 14.7845 7.77832)" fill="currentColor"></rect>
                  <rect x="14.7845" y="0.77832" width="5" height="2" transform="rotate(90 14.7845 0.77832)" fill="currentColor"></rect>
                  <rect x="16.2845" y="4.27832" width="5" height="2" transform="rotate(-180 16.2845 4.27832)" fill="currentColor"></rect>
                  <rect x="0.40802" y="2.27832" width="9" height="2" fill="currentColor"></rect>
                  <rect x="2.40802" y="2.40186" width="14.3765" height="2" transform="rotate(90 2.40802 2.40186)" fill="currentColor"></rect>
                  <rect x="14.7845" y="16.7783" width="14.3765" height="2" transform="rotate(-180 14.7845 16.7783)" fill="currentColor"></rect>
                </g>
                <defs>
                  <clipPath id="clip0_804_29419">
                    <rect width="16" height="16" fill="white" transform="translate(0.408264 0.77832)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </span>
      </div>

      {/* User Info Section */}
      <div className="profile-info-container">
        <div className="profile-name-container-mobile">
          <span className="profile-username">outdoor677</span>
          <button className="profile-edit-button">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-edit-icon-sm">
              <g clipPath="url(#clip0_833_29448)">
                <rect x="15.2845" y="7" width="9" height="2" transform="rotate(90 15.2845 7)" fill="currentColor"></rect>
                <rect x="0.90802" y="1.5" width="9" height="2" fill="currentColor"></rect>
                <rect x="2.90802" y="1.62354" width="14.3765" height="2" transform="rotate(90 2.90802 1.62354)" fill="currentColor"></rect>
                <rect x="15.2845" y="16" width="14.3765" height="2" transform="rotate(-180 15.2845 16)" fill="currentColor"></rect>
                <path d="M7.82996 9.37513C7.78586 9.3754 7.74221 9.36633 7.70187 9.34852C7.66152 9.33071 7.62541 9.30457 7.59589 9.2718C7.56637 9.23904 7.54412 9.2004 7.53061 9.15843C7.51709 9.11645 7.51261 9.07209 7.51746 9.02826L7.79871 6.47513C7.80659 6.40411 7.83858 6.33793 7.88934 6.28763L13.8518 0.328257C13.9552 0.224229 14.0782 0.141673 14.2136 0.0853374C14.349 0.029002 14.4942 0 14.6409 0C14.7876 0 14.9328 0.029002 15.0682 0.0853374C15.2036 0.141673 15.3266 0.224229 15.43 0.328257L16.58 1.46263C16.684 1.56602 16.7665 1.68897 16.8229 1.82439C16.8792 1.9598 16.9082 2.10503 16.9082 2.25169C16.9082 2.39836 16.8792 2.54359 16.8229 2.679C16.7665 2.81442 16.684 2.93736 16.58 3.04076L10.605 9.00013C10.5547 9.05089 10.4885 9.08288 10.4175 9.09076L7.86434 9.37513H7.82996ZM8.41121 6.65013L8.18309 8.70951L10.2425 8.48138L16.1237 2.59701C16.2149 2.5046 16.2661 2.37998 16.2661 2.25013C16.2661 2.12028 16.2149 1.99566 16.1237 1.90326L14.9893 0.768882C14.8969 0.67766 14.7723 0.626511 14.6425 0.626511C14.5126 0.626511 14.388 0.67766 14.2956 0.768882L8.41121 6.65013Z" fill="currentColor"></path>
                <path d="M15.4925 3.98135C15.4105 3.98101 15.3319 3.94846 15.2737 3.89073L13.0018 1.61885C12.9434 1.55876 12.9112 1.47792 12.9124 1.39412C12.9136 1.31031 12.948 1.23041 13.0081 1.17198C13.0682 1.11355 13.149 1.08138 13.2328 1.08255C13.3166 1.08372 13.3965 1.11814 13.455 1.17823L15.7143 3.4376C15.7725 3.49615 15.8052 3.57536 15.8052 3.65791C15.8052 3.74047 15.7725 3.81968 15.7143 3.87823C15.6862 3.90946 15.652 3.93469 15.6139 3.95241C15.5758 3.97013 15.5345 3.97997 15.4925 3.98135Z" fill="currentColor"></path>
                <path d="M12.9996 3.45033L10.1623 6.2876L10.6043 6.72954L13.4415 3.89227L12.9996 3.45033Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_833_29448">
                  <rect width="16" height="16" fill="white" transform="translate(0.908264)"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Verification Badge */}
        <div>
        <div className="profile-verification-badge">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-verification-icon">
            <path d="M13.9597 6.99996L14.3951 5.65595C14.7206 4.65004 14.2677 3.55593 13.3262 3.07503L12.0683 2.43242L11.4257 1.17451C10.9447 0.233003 9.85063 -0.2206 8.84472 0.105602L7.5 0.540306L6.15598 0.104902C5.15007 -0.2206 4.05595 0.232303 3.57504 1.17381L2.93174 2.43172L1.67382 3.07503C0.732305 3.55593 0.279398 4.65004 0.604903 5.65595L1.04031 6.99996L0.604903 8.34397C0.279398 9.34988 0.732305 10.444 1.67382 10.9249L2.93174 11.5675L3.57434 12.8254C4.05525 13.7669 5.14937 14.2205 6.15528 13.8943L7.5 13.4596L8.84402 13.895C9.84993 14.2205 10.944 13.7676 11.425 12.8261L12.0676 11.5682L13.3255 10.9256C14.267 10.4447 14.7206 9.35058 14.3944 8.34467L13.9597 6.99996ZM6.30508 9.59488L4.69996 7.98977C4.42696 7.71676 4.42696 7.27296 4.69996 6.99996C4.97296 6.72696 5.41677 6.72696 5.68977 6.99996L6.79999 8.11017L10.0102 4.89994C10.2832 4.62694 10.727 4.62694 11 4.89994C11.2731 5.17294 11.2731 5.61675 11 5.88975L7.2949 9.59488C7.02189 9.86788 6.57809 9.86788 6.30508 9.59488Z" fill="currentColor"></path>
          </svg>
          <span className="profile-verification-text">Verified</span>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
};


// transaction tabs
const TransactionTabs = () => {
  const { activeTab, setActiveTab } = useMenu()
  
  const tabs = [
    'My purchases',
    'My Sales'
  ]
  
  return (
    <div className="tab-nav">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

// favorites tabs
const FavoritesTabs = () => {
  const { activeTab, setActiveTab } = useMenu()
  
  const tabs = [
    'Items',
    'Dressing rooms',
    "Research"
  ]
  
  return (
    <div className="tab-nav">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

const MessageTabs = () => {
  const { activeMenuItemMessages, setActiveMenuItemMessages } = useMenu()
  
  const tabs = [
    'My messages',
    'My notifications',
    
  ]
  
  return (
    <div className="tab-nav message-section-hide-in-computer">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeMenuItemMessages === tab ? 'active' : ''}`}
          onClick={() => setActiveMenuItemMessages(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

const StoreTabs = () => {
  const { activeStoreTab, setactiveStoreTab } = useMenu()
  
  const tabs = [
    'Dressing Room',
    'Reviews',
    
  ]
  
  return (
    <div className="tab-nav single-store-container">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab-button ${activeStoreTab === tab ? 'active' : ''}`}
          onClick={() => setactiveStoreTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
export { TabNav, TransactionTabs,FavoritesTabs,MessageTabs,StoreTabs }