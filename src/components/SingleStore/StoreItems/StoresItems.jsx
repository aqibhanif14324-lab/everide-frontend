import React from 'react'
import "./style.css"
import { products } from '../../../Data/data';
const StoresItems = () => {
  return (
     <div className='single-store-container'>
        <div className="store-container ">
              {products.map((product) => (
                <a
                key={product.id}
                  href={`/product/${product.title}`}
                  onClick={() => {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                  }}
                  className="store-card"
                >
                  <div className="store-gradient-top">
                    <div className="store-header">
                      <div className="store-seller-info">
                        <a href="/en/shop/nico73230" className="store-seller-avatar">
                          <img
                            src={product.seller.avatar}
                            alt="Seller"
                            className="store-seller-img"
                          />
                        </a>
                        <div className="store-seller-details">
                          <span className="store-seller-name">
                            {product.seller.name}
                          </span>
                          <div className="store-seller-rating">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="currentColor"
                              className="store-rating-icon"
                            >
                              <path d="M6.04876 5.69194..." />
                            </svg>
                            <span>{product.seller.rating}</span>
                          </div>
                        </div>
                      </div>
                      <button className="store-stores-button">
                        {/* heart icon svg */}
                      </button>
                    </div>
                    <div className="store-image-wrapper">
                      <img
                        src={product.image}
                        alt="Product"
                        className="store-image"
                      />
                    </div>
                  </div>
                  <div className="store-card-details">
                    <h2 className="store-title">{product.title}</h2>
                    <h3 className="store-subtitle">{product.subtitle}</h3>
                    <p className="store-description">{product.description}</p>
                    <div className="store-price-section">
                      <div className="store-price-container">
                        <p className="store-price">
                          <span className="store-price-value">{product.price}</span>
                        </p>
                      </div>
                      <div className="store-badge">
                        <span className="store-badge-text">{product.badge}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            
            </div>
       </div>
  )
}

export default StoresItems