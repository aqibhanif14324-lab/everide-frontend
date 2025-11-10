import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { products } from "../../Data/data";
const ProductCardSlider = () => {
  return (
    <div className="container">
      <div className="section-header-hero-page">
        <div className="title-wrapper">
          <div className="title-content">
            <h2 className="section-title">
              <span className="title-text">Trail Running</span>
            </h2>
          </div>
        </div>
        <a
          href="/page/ambassadors"
          className="see-all-link"
        >
          See all
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
          >
            <path
              d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={10}
        className="products_swiper"
        breakpoints={{
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <a
              href={`/category/${product.title}`}
             
              className="product-card"
            >
              <div className="gradient-top">
                <div className="product-header">
                  <div className="product-info">
                    <a href="/en/shop/nico73230" className="seller-avatar">
                      <img
                        src={product.seller.avatar}
                        alt="Seller"
                        className="seller-img"
                      />
                    </a>
                    <div className="seller-details">
                      <span className="seller-name">{product.seller.name}</span>
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
                  <button className="favorites-button">
                    {/* heart icon svg */}
                  </button>
                </div>
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt="Product"
                    className="product-image"
                  />
                </div>
              </div>
              <div className="product-card_details">
                <h2 className="product-title">{product.title}</h2>
                <h3 className="product-subtitle_info">{product.subtitle}</h3>
                <p className="product-description">{product.description}</p>
                <div className="price-section-home">
                  <div className="price-container-home">
                    <p className="price">
                      <span className="price-value">{product.price}</span>
                    </p>
                  </div>
                  <div className="badge_bg">
                    <span className="badge-text">{product.badge}</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCardSlider;
