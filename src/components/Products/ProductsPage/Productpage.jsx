import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import "./Productpage.css";
import { products } from "../../../Data/data";
import FilterModal from "./Filter/components/FilterModal";
import FilterDialog from "./Filter/components/Dialog/FilterDialog";
const Productpage = () => {
  const { category } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const [defaultselected, setDefaultselected] = useState("main");
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container">
        <nav>
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/">Welcome</a>
            </li>

            <li className="breadcrumb-item">
              <a href={`/${category}`}>{category}</a>
            </li>
          </ul>
        </nav>

        {/* filter search */}
        <div className="ski-snow-container">
          <div className="title-section">
            <h2 className="heading-product-page">Ski | Snow</h2>
            <h1 className="subheading">
              Used ski & snow equipment: verified listings, second-hand prices,
              reduce your impact.
            </h1>
          </div>

          <div className="filter-container">
            <div className="filter-scroll">
              <div
                className="filter-badge active"
                onClick={() => {
                  setIsOpen(true);
                  setDefaultselected("main");
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_534_49379)">
                    <circle
                      cx="9"
                      cy="3"
                      r="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <rect
                      x="0.5"
                      y="2.5"
                      width="6"
                      height="1"
                      fill="white"
                      stroke="currentColor"
                    ></rect>
                    <circle
                      cx="3"
                      cy="9"
                      r="2"
                      transform="rotate(-180 3 9)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <rect
                      x="11.5"
                      y="9.5"
                      width="6"
                      height="1"
                      transform="rotate(-180 11.5 9.5)"
                      fill="white"
                      stroke="currentColor"
                    ></rect>
                  </g>
                  <defs>
                    <clipPath id="clip0_534_49379">
                      <rect width="12" height="12" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span>Filter by</span>
                <button>
                  <FilterDialog
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    defaultselected={defaultselected}
                  />
                </button>
              </div>

              <div className="filter-badge"   onClick={() => {
                  setIsOpen(true);
                  setDefaultselected("gender");
                }}>
              <FilterDialog
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  defaultselected={defaultselected}
                />
                  <span>Gender</span>
              </div>

              {/* <div className="filter-badge">
                <span>Size</span>
              </div> */}

              <div
                className="filter-badge"
                onClick={() => {
                  setIsOpen(true);
                  setDefaultselected("brands");
                }}
              >
                <FilterDialog
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  defaultselected={defaultselected}
                />
                <span>Brand</span>
              </div>

              <div
                className="filter-badge"
                onClick={() => {
                  setIsOpen(true);
                  setDefaultselected("colors");
                }}
              >
                <FilterDialog
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  defaultselected={defaultselected}
                />
                <span>Color</span>
              </div>
              <div
                className="filter-badge"
                onClick={() => {
                  setIsOpen(true);
                  setDefaultselected("state");
                }}
              >
                <FilterDialog
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  defaultselected={defaultselected}
                />
                <span>State</span>
              </div>
            </div>
          </div>
        </div>
        {/* filter end */}
        {/* product  */}
        <div className="pf-container ">
          {products.map((product) => (
            <div className="pf-card-wrapper" key={product.id}>
              <a
                href={`/product/${product.title}`}
                onClick={() => {
                  localStorage.setItem(
                    "selectedProduct",
                    JSON.stringify(product)
                  );
                }}
                className="pf-card"
              >
                <div className="pf-gradient-top">
                  <div className="pf-header">
                    <div className="pf-seller-info">
                      <a href="/en/shop/nico73230" className="pf-seller-avatar">
                        <img
                          src={product.seller.avatar}
                          alt="Seller"
                          className="pf-seller-img"
                        />
                      </a>
                      <div className="pf-seller-details">
                        <span className="pf-seller-name">
                          {product.seller.name}
                        </span>
                          <div className="seller-rating-hero-page">
                             <svg
                             width="17"
                             height="17"
                             viewBox="0 0 17 17"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg"
                             class="flex-initial flex-shrink-0 w-4 h-4 text-primary mr-2 sm:w-6 sm:h-6"
                           >
                             <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z"></path>
                           </svg>
                             <span>{product.seller.rating}</span>
                           </div>
                      </div>
                    </div>
                    <button className="pf-favorites-button">
                      {/* heart icon svg */}
                    </button>
                  </div>
                  <div className="pf-image-wrapper">
                    <img
                      src={product.image}
                      alt="Product"
                      className="pf-image"
                    />
                  </div>
                </div>
                <div className="pf-card-details">
                  <h2 className="pf-title">{product.title}</h2>
                  <h3 className="pf-subtitle">{product.subtitle}</h3>
                  <p className="pf-description">{product.description}</p>
                  <div className="pf-price-section">
                    <div className="pf-price-container">
                      <p className="pf-price">
                        <span className="pf-price-value">{product.price}</span>
                      </p>
                    </div>
                    <div className="pf-badge">
                      <span className="pf-badge-text">{product.badge}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Productpage;
