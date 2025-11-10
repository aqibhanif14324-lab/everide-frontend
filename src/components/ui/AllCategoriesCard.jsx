import React from "react";
import "./AllCategoriesCard.css"; 
const AllCategoriesCard = () => {
  return (
    <div className="all-category-card">
      <div className="all-category-image">
        <picture>
          <source
            srcSet="https://static.everide.app/ItAX8CN_SBUjDa91y9OI41IDVJbVtWc5Om_tfei1Z_4/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9jYXRhbG9ncy9kZWZhdWx0X2ljb25zL2FsbC5wbmc.webp"
            type="image/webp"
          />
          <source
            srcSet="https://static.everide.app/ixLWmLy7GPvpN3obHaJJ04yCl2wFBUXZMiZXzm-ZdEw/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9jYXRhbG9ncy9kZWZhdWx0X2ljb25zL2FsbC5wbmc.png"
            type="image/png"
          />
          <img
            src="https://static.everide.app/ixLWmLy7GPvpN3obHaJJ04yCl2wFBUXZMiZXzm-ZdEw/rs:fill:160:160:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9jYXRhbG9ncy9kZWZhdWx0X2ljb25zL2FsbC5wbmc.png"
            alt="All categories"
            className="all-category-img"
          />
        </picture>
      </div>
      <span className="all-category-label">See all</span>
    </div>
  );
};

export default AllCategoriesCard;