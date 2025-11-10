import { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import "./mobileBottomMenu.css"
import { Link } from 'react-router-dom';
const MobileBottomMenu = ({isMobileMenuOpen}) => {
  
      if (isMobileMenuOpen) return null;
  return (

  
    <footer className="bottom-navbar">
      <Link to="/" className="nav-item active">
        <div className="icon-container">
          <svg viewBox="0 0 21.2 19.82" className="icon">
            <path
              d="M300.11,428.41V422h-5.43v6.39H291v-8.28h-2v8.28H287v2h21.1v-2Zm-3.93-4.89h2.43v4.89h-2.43Z"
              transform="translate(-286.9 -410.59)"
              fill="currentColor"
            />
            <path
              d="M288.91,419.11l8.45-6.06,8.6,6.25v.83h2v-1.85l-2.38-1.73v-5.32h-4.1v2.35l-4.12-3-10.43,7.48,0,2,2,0ZM303,412.73h1.1v2.74l-1.1-.8Z"
              transform="translate(-286.9 -410.59)"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="nav-label">Welcome</span>
      </Link>

      <Link to="/search" className="nav-item">
        <div className="icon-container">
          <svg viewBox="0 0 24.15 24.15" className="icon">
            <path
              d="M18.44 17.43A4.45 4.45 0 0 1 17 18.82l3.48 3.48 1.41-1.42ZM11.18 4.04a6.94 6.94 0 0 1 3.85 1.16 6.94 6.94 0 1 1-10.77 5.78 6.7 6.7 0 0 1 .52-2.65 6.91 6.91 0 0 1 6.4-4.29Zm0-2a8.86 8.86 0 1 0 6.32 2.57 8.94 8.94 0 0 0-6.32-2.57Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="nav-label">Search</span>
      </Link>

      <Link to={"/sell/abdur"} className="nav-item sell-button">
        <span className="sell-icon">
          <svg width="52" height="52" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 25H27V21H25V25H21V27H25V31H27V27H31V25Z" fill="white" />
          </svg>
        </span>
        <span className="nav-label-sell">Sell</span>
      </Link>

      <Link to={"/user/messenger/123454"} className="nav-item-message">
        <div className="icon-container">
        <svg width={25} data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.37 25.19" owner="true" class="w-9"><path fill="none" d="M0 1.04h24.15v24.15H0z"></path><path fill="currentColor" d="M3.29 16.41a9.19 9.19 0 0 1-1.28-4.63c0-5.34 4.66-9.69 10.39-9.69s10.4 4.33 10.4 9.65-4.67 9.63-10.39 9.64h-.27a10.88 10.88 0 0 1-3.36-.54l-6.83 2.18ZM12.4 4.02c-4.66 0-8.46 3.48-8.46 7.76a7.18 7.18 0 0 0 1.25 4l.15.22-.85 4.17 4.34-1.38h.06a9.69 9.69 0 0 0 3.27.62h.22c4.68 0 8.49-3.47 8.49-7.71s-3.78-7.68-8.47-7.68Z"></path><path d="M23.81 4.07A3.51 3.51 0 1 1 20.3.57a3.51 3.51 0 0 1 3.51 3.5Z" fill="#35C886" class="hidden"></path><path d="M20.3 8.15a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08Zm0-7a2.93 2.93 0 1 0 2.93 2.93 2.94 2.94 0 0 0-2.93-2.94Z" fill="#fff" class="hidden"></path></svg>
         
        </div>
        <span className="nav-label">Messages</span>
      </Link>

      <Link to="/user/dashboard/123456" className="nav-item">
        <div className="avatar-container">
          <img
            
            src="https://static.everide.app/8j8a4ypU4Y8eSmg5_pkNE6tl_k6SOaAE3QWObVEcWfo/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.png"
            alt="Profile"
            className="avatar-profile"
          />
        </div>
        <span className="nav-label">Profile</span>
      </Link>
    </footer>
      );
    };


export default MobileBottomMenu




