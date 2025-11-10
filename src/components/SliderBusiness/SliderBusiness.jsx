import React from "react";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SliderBusiness = () => {
  return (
    <div className="container slider-business">
        <div class="section">
  <div class="header">
    <h2 class="title">Marques Partenaires</h2>
  </div>
  <p class="description">Produits reconditionnés et garantis.</p>
</div>

      <Swiper
        modules={[]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        className="slider_busniess_container"
      >
        <SwiperSlide>
          <div className="swiper-slide-wrapper">
            <Link to="/shop/shop-name" className="swiper-card">
              <div className="image-container">
                <img
                  src="https://static.everide.app/q-42KvnmJ2pdI_tVUW0kXgr4R71xu6FpXqBS0PuJJMo/rs:fit:800:600:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0yMjA1MC91LXN1cGFpci1vZmZpY2lhbC0xNzA0NDYyODkzLTA2OTU1LnBuZw.png"
                  alt="Brand"
                  className="main-image"
                />
                <div className="top-bar">
                  <div className="badge-hero-container">Partner brand</div>
                  <button className="icon-button">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75Z" />
                    </svg>
                  </button>
                </div>
                <div className="brand-logo">
                  <img
                    src="https://static.everide.app/3oAnb0AlxckBR56iMencB4g0-MHgOtcEdYXtJffphNc/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0yMjA1MC91LXN1cGFpci0xNjU1ODE2NzkyLWU3NmJhLmpwZw.webp"
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand-details">
                  <div class="card-container-hero-page">
                    <div class="card-content-home">
                      <span class="shop-title">supair-official</span>
                      <span class="shop-subtitle">
                        Refurbished and guaranteed
                      </span>
                    </div>
                    <div class="rating-section">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        class="rating-star"
                      >
                        <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z" />
                      </svg>
                      <span class="rating-value">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-wrapper">
            <a href="/en/shop/supair-official" className="swiper-card">
              <div className="image-container">
                <img
                  src="https://static.everide.app/EDH7_01kGsKikI13EOef4cRIGm7xWywEmd1xAGmBaoQ/rs:fit:800:600:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1uaWNfaW1wZXgtMTY3OTkyMDI1My00YjZjZS5qcGc.webp"
                  alt="Brand"
                  className="main-image"
                />
                <div className="top-bar">
                  <div className="badge-hero-container">Partner brand</div>
                  <button className="icon-button">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75Z" />
                    </svg>
                  </button>
                </div>
                <div className="brand-logo">
                  <img
                    src="https://static.everide.app/mHstdx0UQCJFAq4Qv1URXdD8GBe_n3wKBQUb4rydm4s/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1hcnZhLWZyYW5jZS0xNzI3Nzg5MjI5LTRmMTcxLmpwZw.webp"
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand-details">
                  <div class="card-container-hero-page">
                    <div class="card-content">
                      <span class="shop-title">supair-official</span>
                      <span class="shop-subtitle">
                        Refurbished and guaranteed
                      </span>
                    </div>
                    <div class="rating-section">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        class="rating-star"
                      >
                        <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z" />
                      </svg>
                      <span class="rating-value">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-wrapper">
            <a href="/en/shop/supair-official" className="swiper-card">
              <div className="image-container">
                <img
                  src="https://static.everide.app/K6LVYj4yTYCG5I008u6m9T26Y_YSL5W-EYetNYL5MIQ/rs:fit:800:600:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0zODk4NC91LWJvbGxlX2V5ZXdlYXJfb2ZmaWNpYWwtMTY3OTkyMjExMy05MzZjNC5qcGc.webp"
                  alt="Brand"
                  className="main-image"
                />
                <div className="top-bar">
                  <div className="badge-hero-container">Partner brand</div>
                  <button className="icon-button">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75Z" />
                    </svg>
                  </button>
                </div>
                <div className="brand-logo">
                  <img
                    src="https://static.everide.app/qkd0WuHzsf3EyinPEekIv4MG3G0RxT1se5AUGVtT_Wc/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0vdS1ib2xsZV9leWV3ZWFyX29mZmljaWFsLTE2Njk4MDY5MjUtZjMyOGQuanBn.webp"
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand-details">
                  <div class="card-container-hero-page">
                    <div class="card-content">
                      <span class="shop-title">supair-official</span>
                      <span class="shop-subtitle">
                        Refurbished and guaranteed
                      </span>
                    </div>
                    <div class="rating-section">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        class="rating-star"
                      >
                        <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z" />
                      </svg>
                      <span class="rating-value">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBusiness;
