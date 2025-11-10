import React from "react";
import "./style.css";
const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <div className="container">
        <div className="hero_banner_container  ">
          <h2 class="section-heading">
            Buy, sell your
            <br />
            Outdoor equipment
          </h2>

          <span class="custom-badge">We take care of everything</span>
          <div class="store-links">
            <a
              href="https://apps.apple.com/fr/app/everide/id1587901394"
              target="_blank"
              rel="noreferrer"
              class="store-link apple"
            >
              <img
                src="https://static.everide.app/site/appstore.svg"
                width="108"
                height="33"
                alt="App Store - Apple"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.everide.app&amp;gl=FR"
              target="_blank"
              rel="noreferrer"
              class="store-link"
            >
              <img
                src="https://static.everide.app/site/playstore.svg"
                width="108"
                height="33"
                alt="Google play store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
