import React from 'react';
import './NoReviews.css'; 
const NoReviews = () => {
  return (
    <div className="no-reviews-container">
      <div className="no-reviews-content">
        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="no-reviews-star-icon">
          <g clipPath="url(#clip0_936_30193)">
            <path 
              d="M24.5816 4.81726C24.9287 4.0113 26.0714 4.0113 26.4185 4.81726L31.5617 16.7602C31.996 17.7688 32.9466 18.4594 34.04 18.5608L46.9878 19.7617C47.8615 19.8427 48.2147 20.9296 47.5554 21.5087L37.7863 30.0907C36.9614 30.8154 36.5982 31.933 36.8397 33.0042L39.6987 45.6893C39.8916 46.5454 38.9671 47.217 38.2126 46.769L27.0317 40.13C26.0876 39.5694 24.9126 39.5694 23.9684 40.13L12.7876 46.769C12.033 47.217 11.1085 46.5454 11.3015 45.6893L14.1605 33.0042C14.4019 31.933 14.0388 30.8154 13.2138 30.0907L3.44472 21.5087C2.78546 20.9295 3.13859 19.8427 4.01236 19.7617L16.9601 18.5608C18.0535 18.4594 19.0041 17.7688 19.4384 16.7602L24.5816 4.81726Z" 
              stroke="currentColor" 
              strokeWidth="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_936_30193">
              <rect width="50" height="50" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </svg>
        <span className="no-reviews-title">outdoor677 doesn't have any review yet</span>
        <span className="no-reviews-subtitle"></span>
      </div>
      <Pagination currentPage={1} totalPages={1} />
    </div>
  );
};

export default NoReviews;

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
    return (
      <div className="pagination-container">
        <div className="pagination-prev"></div>
        <span className="pagination-text">Page {currentPage} sur {totalPages}</span>
        <div className="pagination-next"></div>
      </div>
    );
  };
  