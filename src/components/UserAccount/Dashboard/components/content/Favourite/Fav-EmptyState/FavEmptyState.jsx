import React from 'react';
import "./favEmptyState.css";
import Pagination from '../../../Pagination/Pagination';
const FavoriteEmptyState = () => {
  return (
    <div className="favorite-empty-container">
      <div className="favorite-empty-content">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="favorite-empty-icon"
        >
          <path
            d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75ZM5.77625 3.00097C4.95212 3.01908 4.15434 3.29238 3.49459 3.78259C1.75394 5.03085 1.29526 6.8974 2.25967 9.33558C2.54902 10.0779 3.02228 10.7359 3.63572 11.2488L9.98673 16.5918L16.3495 11.2255C16.9629 10.7125 17.4362 10.0545 17.7255 9.31225C18.69 6.87407 18.2783 5.00751 16.4906 3.79426C13.7973 1.95104 11.6921 3.79426 10.6806 5.03085L9.98673 5.88246L9.30458 5.04251C8.90294 4.46683 8.37878 3.98561 7.76912 3.63286C7.15945 3.2801 6.47915 3.06439 5.77625 3.00097Z"
            fill="currentColor"
          />
        </svg>
        <span className="favorite-empty-title">Save new favorites</span>
        <span className="favorite-empty-description">
          Save all your best picks by adding them to this list
        </span>
      </div>

      <Pagination/>
    </div>
  );
};





export default FavoriteEmptyState;