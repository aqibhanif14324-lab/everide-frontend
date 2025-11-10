import React from 'react';
import "./style.css"
const StoresReviews = () => {
  const reviews = [
    {
      id: 1,
      username: "outdoor-fan34",
      date: "24/07/2023",
      avatar: "https://static.everide.app/8j8a4ypU4Y8eSmg5_pkNE6tl_k6SOaAE3QWObVEcWfo/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.png",
      rating: 5,
      comment: "Évaluation automatique : vente réalisé avec succès"
    },
    {
      id: 2,
      username: "mathistalal",
      date: "21/07/2023",
      avatar: "https://static.everide.app/rclWYEsGAVrSIfdOqP-Ug7Bpn1C32hhIwvvUXJdZuZw/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1tLnBuZw.png",
      rating: 5,
      comment: "Parfait, merci !"
    },
    {
      id: 3,
      username: "patrice71",
      date: "22/06/2023",
      avatar: "https://static.everide.app/rclWYEsGAVrSIfdOqP-Ug7Bpn1C32hhIwvvUXJdZuZw/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1tLnBuZw.png",
      rating: 5,
      comment: "Évaluation automatique : vente réalisé avec succès"
    },
    {
      id: 4,
      username: "ragnar68",
      date: "05/06/2023",
      avatar: "https://static.everide.app/TB8NHFuArMOcSe_4jmxepV-1ZTbb4q36GDKEG_oY6zM/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0yMjU0Mi91LXJhZ25hcjY4LTE2ODEyMTQzMTUtZjM5NGYuanBn.jpg",
      rating: 5,
      comment: "Article conforme à la description, très bonne communication. Je recommande."
    },
    {
      id: 5,
      username: "r43",
      date: "13/04/2023",
      avatar: "https://static.everide.app/rclWYEsGAVrSIfdOqP-Ug7Bpn1C32hhIwvvUXJdZuZw/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1tLnBuZw.png",
      rating: 5,
      comment: "Évaluation automatique : vente réalisé avec succès"
    },
    {
      id: 6,
      username: "julien-31",
      date: "03/04/2023",
      avatar: "https://static.everide.app/rclWYEsGAVrSIfdOqP-Ug7Bpn1C32hhIwvvUXJdZuZw/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1tLnBuZw.png",
      rating: 5,
      comment: "Super, tt s est bien déroulé"
    },
    {
      id: 7,
      username: "benetx",
      date: "23/03/2023",
      avatar: "https://static.everide.app/gVvhtgykqxHskszV6c-YfIN34kOcXEo4eE8qawuSpM8/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSVV2N1BuTlVmLXZoTE5INmdfWlo2RkZ2UkpySmN3aFNtRDJOUC1pMHllPXM5Ni1j.jpg",
      rating: 5,
      comment: "Évaluation automatique : vente réalisé avec succès"
    }
  ];

  const StarIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z"></path>
    </svg>
  );

  return (
    <div className="user_reviews_container single-store-container">
        <div className="review-container">
  <h2 className="review-title">7 reviews</h2>
</div>

      <div className="user_reviews_content">
        {reviews.map(review => (
          <div key={review.id} className="user_review_item">
            <div className="user_review_header">
              <a href={`/en/shop/${review.username}`} className="user_review_avatar_link">
                <span className="user_review_avatar_wrapper">
                  <picture className="user_review_avatar_picture">
                    <source 
                      srcSet={review.avatar.replace('.jpg', '.webp')} 
                      type="image/webp" 
                    />
                    <source 
                      srcSet={review.avatar} 
                      type="image/jpg" 
                    />
                    <img 
                      width="100" 
                      height="100" 
                      src={review.avatar} 
                      alt={review.username} 
                      className="user_review_avatar_img"
                    />
                  </picture>
                </span>
              </a>
              <div className="user_review_info">
                <span className="user_review_username">{review.username}</span>
                <span className="user_review_date">As a buyer | {review.date}</span>
              </div>
            </div>
            <div className="user_review_body">
              <div className="user_review_rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="user_review_star">
                    <StarIcon />
                  </span>
                ))}
              </div>
              <p className="user_review_comment">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="user_reviews_pagination">
        <div className="user_reviews_pagination_prev"></div>
        <span>Page 1 sur 1</span>
        <div className="user_reviews_pagination_next"></div>
      </div>
    </div>
  );
};

export default StoresReviews;