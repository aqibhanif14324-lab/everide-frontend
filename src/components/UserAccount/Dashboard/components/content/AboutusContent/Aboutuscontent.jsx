import React from "react";
import "./aboutuscontent.css";

const AboutUsContent = () => {
  return (
    <div className="about-profile-container">
      <div className="about-profile-info-row">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="about-profile-icon"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M5.15 3.03H1.5V19.03H19.5V3.03H15.1"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect x="6.15" y="0.03" width="2" height="6" fill="currentColor" />
            <rect x="12.1" y="0.03" width="2" height="6" fill="currentColor" />
            {[...Array(12)].map((_, i) => {
              const x = 4.72 + 3 * (i % 4);
              const y = 8.03 + 2.97 * Math.floor(i / 4);
              return <rect key={i} x={x} y={y} width="2" height="2" fill="currentColor" />;
            })}
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" transform="translate(0.5 0.03)" />
            </clipPath>
          </defs>
        </svg>
        <span>Member since January 2025</span>
      </div>

      <div className="about-profile-info-row">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="about-profile-icon"
        >
          <path
            d="M10.68 1.04C6.82 1.04 3.68 3.89 3.68 7.4C3.68 8.87 4.23 10.22 5.15 11.3L10.68 18.39L16.21 11.3C17.13 10.22 17.68 8.87 17.68 7.4C17.68 3.89 14.55 1.04 10.68 1.04Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="10.68" cy="7.25" r="1.45" fill="currentColor" stroke="currentColor" />
        </svg>
        <span>Lives at Saint-Denis 93, France</span>
      </div>

      <h2 className="about-profile-heading">Outdoor677 has confirmed</h2>

      <div className="about-profile-confirm-row">
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="about-profile-icon-large"
        >
          <path
            d="M3.31 21L19.99 38.53L47.8 9.32"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <div className="about-profile-text-group">
          <span className="about-profile-label">Address</span>
        </div>
      </div>

      <div className="about-profile-confirm-row">
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="about-profile-icon-large"
        >
          <path
            d="M3.31 21L19.99 38.53L47.8 9.32"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <div className="about-profile-text-group">
          <span className="about-profile-label">Email</span>
        </div>
      </div>

      <div className="about-profile-confirm-row">
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="about-profile-icon-large"
        >
          <path
            d="M3.31 21L19.99 38.53L47.8 9.32"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <div className="about-profile-text-group">
          <span className="about-profile-label">Telephone number</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
