import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IlsParlentDeNous.css";

export default function CustomerReviews() {
  return (
   <div className="ils-parlent-section_container">
     <section className="ils-parlent-section container">
      <h2 className="title-review-main">Ils parlent de nous</h2>
      <p className="subtitle-review-container">et on n'est pas peu fier</p>

      <div className="slider-container">
        <Swiper
          modules={[]}
         
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container_reviews"
        >
          <SwiperSlide>
            <div className="card">
              <div className="avatar">
                <picture>
                  <source
                    srcSet="https://static.everide.app/9fdW2Ld_RlIyos_jxqA8EpQgm5WT9vAPZFgP-9QpIOw/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.everide.app/L02sp5pkeebn-p0wrOtljW7NoovmTHQhTvvdpO-5fC0/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.jpg"
                    alt="Xavier Thévenard"
                    className="img"
                  />
                </picture>
              </div>
              <div className="card-content">
                <span className="name">Xavier Thévenard</span>
                <span className="title-review">Une Appli au top !</span>
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card_paragraph">
                  EVERIDE? I was expecting to do the UTMB of the second-hand sale, I did a 5k with 0D+. Interface much too easy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="avatar">
                <picture>
                  <source
                    srcSet="https://static.everide.app/9fdW2Ld_RlIyos_jxqA8EpQgm5WT9vAPZFgP-9QpIOw/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.everide.app/L02sp5pkeebn-p0wrOtljW7NoovmTHQhTvvdpO-5fC0/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.jpg"
                    alt="Xavier Thévenard"
                    className="img"
                  />
                </picture>
              </div>
              <div className="card-content">
                <span className="name">Xavier Thévenard</span>
                <span className="title-review">Une Appli au top !</span>
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card_paragraph">
                  EVERIDE? I was expecting to do the UTMB of the second-hand sale, I did a 5k with 0D+. Interface much too easy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="avatar">
                <picture>
                  <source
                    srcSet="https://static.everide.app/9fdW2Ld_RlIyos_jxqA8EpQgm5WT9vAPZFgP-9QpIOw/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.everide.app/L02sp5pkeebn-p0wrOtljW7NoovmTHQhTvvdpO-5fC0/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.jpg"
                    alt="Xavier Thévenard"
                    className="img"
                  />
                </picture>
              </div>
              <div className="card-content">
                <span className="name">Xavier Thévenard</span>
                <span className="title-review">Une Appli au top !</span>
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card_paragraph">
                  EVERIDE? I was expecting to do the UTMB of the second-hand sale, I did a 5k with 0D+. Interface much too easy.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="avatar">
                <picture>
                  <source
                    srcSet="https://static.everide.app/9fdW2Ld_RlIyos_jxqA8EpQgm5WT9vAPZFgP-9QpIOw/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.everide.app/L02sp5pkeebn-p0wrOtljW7NoovmTHQhTvvdpO-5fC0/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.jpg"
                    alt="Xavier Thévenard"
                    className="img"
                  />
                </picture>
              </div>
              <div className="card-content">
                <span className="name">Xavier Thévenard</span>
                <span className="title-review">Une Appli au top !</span>
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card_paragraph">
                  EVERIDE? I was expecting to do the UTMB of the second-hand sale, I did a 5k with 0D+. Interface much too easy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="avatar">
                <picture>
                  <source
                    srcSet="https://static.everide.app/9fdW2Ld_RlIyos_jxqA8EpQgm5WT9vAPZFgP-9QpIOw/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://static.everide.app/L02sp5pkeebn-p0wrOtljW7NoovmTHQhTvvdpO-5fC0/rs:fill:256:336:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy94YXZpZXItdGhldmVuYXJkLmpwZw.jpg"
                    alt="Xavier Thévenard"
                    className="img"
                  />
                </picture>
              </div>
              <div className="card-content">
                <span className="name">Xavier Thévenard</span>
                <span className="title-review">Une Appli au top !</span>
                <div className="stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="card_paragraph">
                  EVERIDE? I was expecting to do the UTMB of the second-hand sale, I did a 5k with 0D+. Interface much too easy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more <SwiperSlide> elements here for other testimonials */}
        </Swiper>
      </div>
    </section>
   </div>
  );
}

function StarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
      <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194Z" />
    </svg>
  );
}
