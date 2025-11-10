import React from "react";
import "./FavProductItem.css";
import { products } from "../../../../../../../Data/data";
import Pagination from "../../../Pagination/Pagination";
const FavProductItem = () => {
  return (
    <>
    <div className="favorite-container ">
      {products.map((product) => (
        <a
        key={product.id}
          href={`/product/${product.title}`}
          onClick={() => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
          }}
          className="favorite-card"
        >
          <div className="favorite-gradient-top">
            <div className="favorite-header">
              <div className="favorite-seller-info">
                <a href="/en/shop/nico73230" className="favorite-seller-avatar">
                  <img
                    src={product.seller.avatar}
                    alt="Seller"
                    className="favorite-seller-img"
                  />
                </a>
                <div className="favorite-seller-details">
                  <span className="favorite-seller-name">
                    {product.seller.name}
                  </span>
                  <div className="favorite-seller-rating">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="currentColor"
                      className="favorite-rating-icon"
                    >
                      <path d="M6.04876 5.69194..." />
                    </svg>
                    <span>{product.seller.rating}</span>
                  </div>
                </div>
              </div>
              <button className="favorite-favorites-button">
                {/* heart icon svg */}
              </button>
            </div>
            <div className="favorite-image-wrapper">
              <img
                src={product.image}
                alt="Product"
                className="favorite-image"
              />
            </div>
          </div>
          <div className="favorite-card-details">
            <h2 className="favorite-title">{product.title}</h2>
            <h3 className="favorite-subtitle">{product.subtitle}</h3>
            <p className="favorite-description">{product.description}</p>
            <div className="favorite-price-section">
              <div className="favorite-price-container">
                <p className="favorite-price">
                  <span className="favorite-price-value">{product.price}</span>
                </p>
              </div>
              <div className="favorite-badge">
                <span className="favorite-badge-text">{product.badge}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    
    </div>
      <Pagination/>
    </>
  );
};

export default FavProductItem;
