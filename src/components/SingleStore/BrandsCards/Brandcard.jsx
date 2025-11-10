import React from 'react';
import "./style.css";
const BrandCard = () => {
  return (
    <div className="partner_brand_card_container partner_brand_card_relative partner_brand_card_w_full partner_brand_card_h_28 partner_brand_card_bg_white">
      <div className="partner_brand_card_content partner_brand_card_flex partner_brand_card_flex_row partner_brand_card_items_center partner_brand_card_absolute partner_brand_card_bottom_0 partner_brand_card_left_0 partner_brand_card_flex_1 partner_brand_card_w_full partner_brand_card_px_8 partner_brand_card_pb_1 partner_brand_card_pt_8">
        <div className="partner_brand_card_avatar_container partner_brand_card_w_34 partner_brand_card_h_34">
          <span className="partner_brand_card_avatar_wrapper partner_brand_card_flex partner_brand_card_group partner_brand_card_rounded_full partner_brand_card_overflow_hidden partner_brand_card_border partner_brand_card_border_solid partner_brand_card_border_gray_400 partner_brand_card_w_32 partner_brand_card_h_32">
            <picture className="partner_brand_card_picture partner_brand_card_overflow_webkit partner_brand_card_block partner_brand_card_w_full partner_brand_card_h_full partner_brand_card_rounded_full partner_brand_card_aspect_w_1 partner_brand_card_aspect_h_1 partner_brand_card_bg_surface_overlay partner_brand_card_relative">
              <source 
                data-srcset="https://static.everide.app/mHstdx0UQCJFAq4Qv1URXdD8GBe_n3wKBQUb4rydm4s/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1hcnZhLWZyYW5jZS0xNzI3Nzg5MjI5LTRmMTcxLmpwZw.webp" 
                type="image/webp" 
                media="(min-width: 0px)"
              />
              <source 
                data-srcset="https://static.everide.app/4Vq9SOxh4ivFH2-hhfTZ-k7tK5qEq-HUaFRo8jIJjVw/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1hcnZhLWZyYW5jZS0xNzI3Nzg5MjI5LTRmMTcxLmpwZw.jpg" 
                type="image/jpg" 
                media="(min-width: 0px)"
              />
              <img 
                width="100" 
                height="100" 
                src="https://static.everide.app/4Vq9SOxh4ivFH2-hhfTZ-k7tK5qEq-HUaFRo8jIJjVw/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1hcnZhLWZyYW5jZS0xNzI3Nzg5MjI5LTRmMTcxLmpwZw.jpg" 
                alt="arva-france" 
                className="partner_brand_card_img partner_brand_card_h_full partner_brand_card_object_cover partner_brand_card_w_full partner_brand_card_text_transparent partner_brand_card_border_0"
              />
            </picture>
          </span>
        </div>

        <div className="partner_brand_card_info_container partner_brand_card_flex partner_brand_card_flex_col partner_brand_card_ml_4 partner_brand_card_mt_4 partner_brand_card_flex_1 partner_brand_card_overflow_y_auto">
          <div className="partner_brand_card_header partner_brand_card_flex partner_brand_card_flex_row partner_brand_card_justify_between partner_brand_card_mb_2 partner_brand_card_items_center">
            <div className="partner_brand_card_title_container partner_brand_card_overflow_x_hidden partner_brand_card_w_80">
              <span className="partner_brand_card_title partner_brand_card_font_bold partner_brand_card_font_heading partner_brand_card_block partner_brand_card_truncate partner_brand_card_text_16 partner_brand_card_capitalize">
                arva-france
              </span>
            </div>
            
            <button className="partner_brand_card_favorite_btn partner_brand_card_transition_colors partner_brand_card_duration_300 partner_brand_card_rounded_full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner_brand_card_favorite_icon partner_brand_card_w_8 partner_brand_card_h_8">
                <path d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75ZM5.77625 3.00097C4.95212 3.01908 4.15434 3.29238 3.49459 3.78259C1.75394 5.03085 1.29526 6.8974 2.25967 9.33558C2.54902 10.0779 3.02228 10.7359 3.63572 11.2488L9.98673 16.5918L16.3495 11.2255C16.9629 10.7125 17.4362 10.0545 17.7255 9.31225C18.69 6.87407 18.2783 5.00751 16.4906 3.79426C13.7973 1.95104 11.6921 3.79426 10.6806 5.03085L9.98673 5.88246L9.30458 5.04251C8.90294 4.46683 8.37878 3.98561 7.76912 3.63286C7.15945 3.2801 6.47915 3.06439 5.77625 3.00097Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>

          <div className="partner_brand_card_details partner_brand_card_flex partner_brand_card_flex_row partner_brand_card_text_11 partner_brand_card_font_sans partner_brand_card_items_center">
            <div className="partner_brand_card_badge partner_brand_card_flex partner_brand_card_items_center partner_brand_card_justify_center partner_brand_card_primary partner_brand_card_rounded_full partner_brand_card_text_13 partner_brand_card_py_03 partner_brand_card_px_5">
              <span>Partner brand</span>
            </div>
            
            <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="partner_brand_card_star_icon partner_brand_card_ml_4 partner_brand_card_text_primary partner_brand_card_w_5 partner_brand_card_h_5 partner_brand_card_mr_2">
              <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194ZM8.49995 3.79243L7.42644 6.28523C7.1369 6.95758 6.50315 7.41802 5.77423 7.48563L3.07171 7.73628L5.11077 9.52757C5.66074 10.0107 5.90281 10.7557 5.74185 11.4699L5.14511 14.1176L7.47883 12.7318C8.10828 12.3581 8.89163 12.3581 9.52107 12.7318L11.8548 14.1176L11.258 11.4699C11.0971 10.7557 11.3392 10.0107 11.8891 9.52757L13.9282 7.73628L11.2257 7.48563C10.4967 7.41802 9.86301 6.95758 9.57346 6.28523L8.49995 3.79243Z"></path>
            </svg>
            
            <span className="partner_brand_card_rating partner_brand_card_mt_1 partner_brand_card_text_surface_medium">5</span>
            <span className="partner_brand_card_divider partner_brand_card_ml_2 partner_brand_card_text_surface_medium">|</span>
            <span className="partner_brand_card_articles partner_brand_card_mt_1 partner_brand_card_ml_2 partner_brand_card_text_surface_medium">25 articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;