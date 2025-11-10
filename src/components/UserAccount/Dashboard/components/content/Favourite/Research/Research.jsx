import React from 'react';
import "./researchlist.css"
import { HiOutlineBellSlash } from "react-icons/hi2";

const ResearchList = () => {
  const favorites = [
    {
      id: 1,
      title: "TRAIL | RUNNING > Chaussures trail",
      href: "/fr/chaussures-trail-running-occasion?states=2"
    },
    {
      id: 2,
      title: "Chaussons > Chaussons",
      href: "/fr/home-chaussons-escalade-occasion?popin=1746030066752"
    },
    {
      id: 3,
      title: "TRAIL | RUNNING > Vestes",
      href: "/fr//////equipement-trail-running-occasion"
    },
    {
      id: 4,
      title: "Masques > Masques",
      href: "/fr/home-masque-ski-occasion?sort_by=field%3Dprice%26direction%3Dasc&brands=43&colors=4&states=6&genders=J&seller_genres=individual"
    }
  ];

  return (
    <div className="favorite-list-container">
      <div className="favorite-list-content">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite-item">
            <a href={favorite.href} className="favorite-item-link">
              <div className="favorite-item-content">
                <button type="button" className="favorite-item-icon">
                <HiOutlineBellSlash />
                 
                </button>
                <div className="favorite-item-details">
                  <div className="favorite-item-header">
                    <div className="favorite-item-title-container">
                      <span className="favorite-item-title">{favorite.title}</span>
                    </div>
                    <button type="button" className="favorite-item-action">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_833_29448)">
                          <rect
                            x="15.2845"
                            y="7"
                            width="9"
                            height="2"
                            transform="rotate(90 15.2845 7)"
                            fill="currentColor"
                          />
                          <rect
                            x="0.90802"
                            y="1.5"
                            width="9"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="2.90802"
                            y="1.62354"
                            width="14.3765"
                            height="2"
                            transform="rotate(90 2.90802 1.62354)"
                            fill="currentColor"
                          />
                          <rect
                            x="15.2845"
                            y="16"
                            width="14.3765"
                            height="2"
                            transform="rotate(-180 15.2845 16)"
                            fill="currentColor"
                          />
                          <path
                            d="M7.82996 9.37513C7.78586 9.3754 7.74221 9.36633 7.70187 9.34852C7.66152 9.33071 7.62541 9.30457 7.59589 9.2718C7.56637 9.23904 7.54412 9.2004 7.53061 9.15843C7.51709 9.11645 7.51261 9.07209 7.51746 9.02826L7.79871 6.47513C7.80659 6.40411 7.83858 6.33793 7.88934 6.28763L13.8518 0.328257C13.9552 0.224229 14.0782 0.141673 14.2136 0.0853374C14.349 0.029002 14.4942 0 14.6409 0C14.7876 0 14.9328 0.029002 15.0682 0.0853374C15.2036 0.141673 15.3266 0.224229 15.43 0.328257L16.58 1.46263C16.684 1.56602 16.7665 1.68897 16.8229 1.82439C16.8792 1.9598 16.9082 2.10503 16.9082 2.25169C16.9082 2.39836 16.8792 2.54359 16.8229 2.679C16.7665 2.81442 16.684 2.93736 16.58 3.04076L10.605 9.00013C10.5547 9.05089 10.4885 9.08288 10.4175 9.09076L7.86434 9.37513H7.82996ZM8.41121 6.65013L8.18309 8.70951L10.2425 8.48138L16.1237 2.59701C16.2149 2.5046 16.2661 2.37998 16.2661 2.25013C16.2661 2.12028 16.2149 1.99566 16.1237 1.90326L14.9893 0.768882C14.8969 0.67766 14.7723 0.626511 14.6425 0.626511C14.5126 0.626511 14.388 0.67766 14.2956 0.768882L8.41121 6.65013Z"
                            fill="currentColor"
                          />
                          <path
                            d="M15.4925 3.98135C15.4105 3.98101 15.3319 3.94846 15.2737 3.89073L13.0018 1.61885C12.9434 1.55876 12.9112 1.47792 12.9124 1.39412C12.9136 1.31031 12.948 1.23041 13.0081 1.17198C13.0682 1.11355 13.149 1.08138 13.2328 1.08255C13.3166 1.08372 13.3965 1.11814 13.455 1.17823L15.7143 3.4376C15.7725 3.49615 15.8052 3.57536 15.8052 3.65791C15.8052 3.74047 15.7725 3.81968 15.7143 3.87823C15.6862 3.90946 15.652 3.93469 15.6139 3.95241C15.5758 3.97013 15.5345 3.97997 15.4925 3.98135Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.9996 3.45033L10.1623 6.2876L10.6043 6.72954L13.4415 3.89227L12.9996 3.45033Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_833_29448">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0.908264)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="favorite-pagination">
        <div className="favorite-pagination-prev"></div>
        <span>Page 1 sur 1</span>
        <div className="favorite-pagination-next"></div>
      </div>
    </div>
  );
};




export default ResearchList;