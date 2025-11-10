import React from 'react';
import './Pagination.css';
const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-spacer pagination-spacer-left"></div>
      <span className="pagination-text">Page 1 sur 1</span>
      <div className="pagination-spacer pagination-spacer-right"></div>
    </div>
  );
};

export default Pagination;