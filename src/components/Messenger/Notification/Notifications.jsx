import React from 'react';
import "./style.css";
const Notifications = () => {
    // make array of 10
    const notifications = [
      { id: 1, message: "Notification 1" },
   
    ]
  return (
 
    
     <div className='user-list-content '>
   
        {notifications.map(notification => (
            <div className="notifications_users_inner">
            <div className="notifications_users_main">
              <div className="notifications_users_message">
                <div className="notifications_users_message_inner">
                  <div className="notifications_users_avatar">
                    <picture className="notifications_users_avatar_picture">
                      <source 
                        srcSet="https://static.everide.app/r1jMvEuAKGQnfJXqUZnbzSQrMD1TH8eWfNbUccg9KXk/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvajU3czEtVVlNcWZ3VWkzQXNVODJTaVRMdzJLb2VDWnU1Nm1sN1NJNjEzcy9yczpmaWxsOjIwMDoyMDA6MS9xOjc1L2N6TTZMeTl6YVhSbExXRndhUzFwYldGblpYTXZZMkZ0Y0dGcFoyNXpYMmx0WVdkbGN5OWpZVzF3WVdsbmJuTmZhVzFoWjJWZlh6RTJOekF5TlRVM01EY3RNVFkzTURJMU5UY3dOeTFsTW1FMFlpNXdibWMuanBn.webp" 
                        type="image/webp" 
                      />
                      <source 
                        srcSet="https://static.everide.app/sTlm7TWfxj-nnYR8UuTjZpVebzAo-FWR2rye5d7aPns/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvajU3czEtVVlNcWZ3VWkzQXNVODJTaVRMdzJLb2VDWnU1Nm1sN1NJNjEzcy9yczpmaWxsOjIwMDoyMDA6MS9xOjc1L2N6TTZMeTl6YVhSbExXRndhUzFwYldGblpYTXZZMkZ0Y0dGcFoyNXpYMmx0WVdkbGN5OWpZVzF3WVdsbmJuTmZhVzFoWjJWZlh6RTJOekF5TlRVM01EY3RNVFkzTURJMU5UY3dOeTFsTW1FMFlpNXdibWMuanBn.jpg" 
                        type="image/jpg" 
                      />
                      <img 
                        src="https://static.everide.app/sTlm7TWfxj-nnYR8UuTjZpVebzAo-FWR2rye5d7aPns/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvajU3czEtVVlNcWZ3VWkzQXNVODJTaVRMdzJLb2VDWnU1Nm1sN1NJNjEzcy9yczpmaWxsOjIwMDoyMDA6MS9xOjc1L2N6TTZMeTl6YVhSbExXRndhUzFwYldGblpYTXZZMkZ0Y0dGcFoyNXpYMmx0WVdkbGN5OWpZVzF3WVdsbmJuTmZhVzFoWjJWZlh6RTJOekF5TlRVM01EY3RNVFkzTURJMU5UY3dOeTFsTW1FMFlpNXdibWMuanBn.jpg" 
                        alt="Kilian Jornet" 
                        className="notifications_users_avatar_img"
                      />
                    </picture>
                  </div>
                  <div className="notifications_users_text">
                    <div className="notifications_users_title">
                      <span>Hi 👋 It's Kilian Jornet</span>
                    </div>
                    <div className="notifications_users_description">
                      <p>
                        Thank you for joining Everide and giving our outdoor equipment a second life! 
                        Let's change our habits together to protect our playground ♻️
                        <br />
                        See you soon in the mountains ⛰
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
  
    )
  }
  


export default Notifications;