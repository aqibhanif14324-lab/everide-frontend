import React from "react";
import "./RecommendedProducts.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const RecommendedProducts = () => {
  const products = [
    {
      id: 1,
      brand: "SILVA",
      name: "Trail tuner battery 4.0 Ah",
      price: "33 €",
      seller: "alexdalex",
      rating: 5,
      condition: "Nine",
      delivery: "Delivery possible",
      image:
        "https://static.everide.app/QeZIwhd4PiYj8zSoU6NK9Z29BqIR2CcOljSH7n_PW8w/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzE4LTAzLTIwMjUvdS0xNTEzNS9wLTAtMTc0MjI5MzEyMi0zY2QxOS5qcGc.jpg",
    },
    {
      id: 2,
      brand: "MOONLIGHT",
      name: "800 Headlamp",
      price: "280 €",
      seller: "rivendell",
      rating: 5,
      delivery: "No hitches",
      image:
        "https://static.everide.app/w3HPdZmVZCQ79XvBf0eS5sGQLg9sNTsDT1tftDJcTpI/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzA4LTAxLTIwMjUvdS0xMzcwMy9wLTAtMTczNjMyMzQ2OC1kMWE3MC5qcGc.jpg",
    },
    {
      id: 3,
      brand: "BLACK DIAMOND",
      name: "Astro 250",
      price: "18 €",
      originalPrice: "30 €",
      discount: "- 40%",
      seller: "traildesbeliers",
      condition: "Nine",
      delivery: "Delivery possible",
      image:
        "https://static.everide.app/_d1cE2XL-TMx2HUfOxXnk6q9Cggo6VLeatYMnQDe3oc/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzI5LTEyLTIwMjQvdS00NTU2OC9wLTAtMTczNTQ5NTQ1Ni02MGYxMy5qcGc.jpg",
    },
    {
      id: 4,
      brand: "SILVA",
      name: "Trail Speed 4XT",
      price: "190 €",
      seller: "charlot",
      rating: 5,
      condition: "Nine",
      delivery: "Delivery possible",
      image:
        "https://static.everide.app/u7s8GTPzkcTEBC6rAJZArtk7gTL2u7WettAK4RsvUW8/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzEyLTAyLTIwMjQvdS01OTgwMC9wLTAtMTcwNzc1MDYzMy0wNTJhMC5qcGc.jpg",
    },
    {
      id: 5,
      brand: "SILVA",
      name: "Cross Trail 5 Ultra",
      price: "200 €",
      seller: "charlot",
      rating: 5,
      condition: "Nine",
      delivery: "Delivery possible",
      image:
        "https://static.everide.app/SQd_o7oy9U8chexbkB-WP_7_nITwM7V_D9-qKtxwhks/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzEyLTAyLTIwMjQvdS01OTgwMC9wLTItMTcwNzc1MDQxOS00MTljZi5qcGc.jpg",
    },
    {
      id: 6,
      brand: "NEO",
      name: "Headlamps",
      price: "15 €",
      seller: "clearunners",
      rating: 5,
      condition: "Nine",
      delivery: "Delivery possible",
      image:
        "https://static.everide.app/3miX03k7P5YMUNu0y5sLSeXdZ8fbb6oW7VCRY5ZxfZg/rs:fill:602:698:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzIyLTEwLTIwMjMvdS0yMjQ5NC9wLTAtMTY5Nzk1OTk5Ni1kNzgxOC5qcGc.jpg",
    },
  ];

  return (
    <div className="similar-products-container">
      <div className="similar-products-header">
        <div className="header-content">
          <h2>Similar products</h2>
        </div>
        <a href="/fr/lampes-trail-running-occasion" className="see-all-link">
          See all
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="see-all-arrow-icon"
          >
            <path
              d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </a>
      </div>

      <div className="products-carousel">
        <div className="carousel-container">
          <div className="carousel-wrapper">
          <Swiper
                slidesPerView={2}
                breakpoints={{
                    500: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4.5 },
                  }}
                
               spaceBetween={10}
                modules={[Pagination]}
                className="recommended-products-swiper"
              >
            {products.map((product) => (
            
                <SwiperSlide>
              
                  <div key={product.id} className="product-card">
                    <a
                      href={`/fr/produit/${product.name
                        .toLowerCase()
                        .replace(/ /g, "-")}-occasion`}
                      className="product-link"
                    >
                      <div className="product-image-container">
                        <div className="seller-info-recommended">
                          <a
                            href={`/fr/shop/${product.seller}`}
                            className="seller-avatar"
                          >
                            <img
                              src="https://static.everide.app/9vMhfQBN4wEc7Yk_DupF_EwZcHQMMjkD-5hCnrQlcaU/rs:fill:60:60:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1tLnBuZw.png"
                              alt={product.seller}
                            />
                          </a>
                          <div className="seller-details">
                            <div className="seller-name">{product.seller}</div>
                            {product.rating && (
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
                             <span>{product.rating}</span>
                           </div>
                            )}
                          </div>
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                        {product.condition && (
                          <div className="condition-badge">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="10"
                                height="10"
                                rx="5"
                                fill="currentColor"
                              ></rect>
                            </svg>
                            <span>{product.condition}</span>
                          </div>
                        )}
                      </div>
                      <div className="product-details">
                        <h2 className="product-brand">{product.brand}</h2>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-size">One size fits all</p>
                        <div className="price-container">
                          <p className="product-price">
                            <span className="current-price">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="original-price">
                                {product.originalPrice}
                              </span>
                            )}
                          </p>
                          {product.discount && (
                           <div className="discount-container">
                             <span className="discount-badge">
                              {product.discount}
                            </span>
                           </div>
                          )}
                        </div>
                        <div className="delivery-badge">
                          <span>{product.delivery}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
          
            ))}
            <SwiperSlide>
            
              <a
                href="/fr/lampes-trail-running-occasion"
                className="view-all-link"
              >
                <div className="view-all-content">
                  <div className="view-all-text">
                    <span>
                      Discover all
                      <br />
                      products
                    </span>
                  </div>
                  <span className="view-all-button">
                    See all
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
        
            </SwiperSlide>
    </Swiper>
            
          </div>
        </div>

        <div className="carousel-nav right">
          <div className="nav-button">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
