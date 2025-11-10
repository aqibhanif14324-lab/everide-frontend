import React from 'react';
import './BrandsListItem.css'; // Import the CSS file

const BrandsListItem = ({ index, text, onClick }) => {
  return (
    <div className="search-brand-item-view" >
      <div data-index={index}>
        <div className="list-search-brand-item-container" onClick={onClick}>
          <div className="list-search-brand-item-content">
            <span className="search-brand-item-text">{text}</span>
            <div className="search-brand-item-actions">
              {/* Optional right-side content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsListItem;