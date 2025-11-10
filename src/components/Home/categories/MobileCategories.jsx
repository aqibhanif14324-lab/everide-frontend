import React from 'react';
import "./MobileCategories.css";

const MobileCategories = () => {
  const categories = [
    {
      name: "Skis",
      href: "/fr/home-skis-occasion",
      image: "https://static.everide.app/c_m63Y4E1TRx2gy6fON4Z3UlhjGg7wIsGJQ20s--3ck/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zNDFfMTY2MTk2MjYyOC0xNjYxOTYyNjI4LWFkOGNiLnBuZw.png"
    },
    {
      name: "Chaussures",
      href: "/fr/home-chaussures-trail-running-occasion",
      image: "https://static.everide.app/OzItBIJ0FPQ9FGvfq6ubK3sVNVZNYj2y-mveutLsw80/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zMzlfMTY5NzEwMDM5MC0xNjk3MTAwMzkwLTgxOTMxLnBuZw.png"
    },
    {
      name: "Boots",
      href: "/fr/home-chaussure-ski-occasion",
      image: "https://static.everide.app/j5B-ZhYMJcKZCbN80vCwGTDir4OVsLqbo2QqCT9Xq_Q/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zMzZfMTY5NTcyMTYxMS0xNjk1NzIxNjExLTA3OWM0LnBuZw.png"
    },
    {
      name: "Montres",
      href: "/fr/home-montres-sport-occasion",
      image: "https://static.everide.app/03_91RcRxV22a-vWy5bBzD_PLd_-qiN7n4R63AGHGBk/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zMzdfMTY4MDE2NTE4Ny0xNjgwMTY1MTg3LWEwNzZmLnBuZw.png"
    },
    {
      name: "Doudounes",
      href: "/fr/home-doudounes-occasion",
      image: "https://static.everide.app/3h38tk-ybJdq4u6oKxFq7zTw3A657UlqcQpM5K4Agi4/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV9fMTY5NzA5ODc5Ni0xNjk3MDk4Nzk2LTBkMTJhLnBuZw.png"
    },
    {
      name: "Chaussons",
      href: "/fr/home-chaussons-escalade-occasion",
      image: "https://static.everide.app/-m0_lPFdnTko9tNQekELlcHVquHPw9Ny_v3nIc_wunI/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zNDBfMTY5NzEwMDQ0OC0xNjk3MTAwNDQ4LTczOWRmLnBuZw.png"
    },
    {
      name: "Sacs à dos",
      href: "/fr/home-sac-a-dos-occasion",
      image: "https://static.everide.app/mm97Bf2kPOe8AqYe-SIG_XCWt6lKHPDAgEUCcCspiMY/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zNDFfMTcyNzI1MjI1MS0xNzI3MjUyMjUxLThmYzZjLmpwZw.jpg"
    },
    {
      name: "Masques",
      href: "/fr/home-masque-ski-occasion",
      image: "https://static.everide.app/JmoM93CL3XHOd4B96dNa32z52YrpOklaC7kX-UEfdd0/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV8zNTFfMTcyNzI1MjA4OS0xNzI3MjUyMDg5LWE3ZGUzLmpwZw.jpg"
    },
    {
      name: "Casques",
      href: "/fr/home-casques-occasion",
      image: "https://static.everide.app/xT8sDV1Hv6cCvnlH5wGzhLpujLuIqM9Qz6XmTx2b2Ns/rs:fill:140:140:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaWNvbl9pbWFnZV9fMTY5NTczNTU3NC0xNjk1NzM1NTc0LTFhNzAxLnBuZw.png"
    }
  ];

  return (
    <div className="mobile-category-container pure-g">
      <div className="mobile-category-swiper pure-u-1">
        <div className="mobile-category-wrapper">
          {categories.map((category, index) => (
            <div key={index} className="mobile-category-slide pure-u-1-4">
              <a 
                href={category.href} 
                className="mobile-category-link pure-button"
              >
                
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="mobile-category-image pure-img" 
                  />
               
                <span className="mobile-category-name pure-menu-link">
                  {category.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCategories;