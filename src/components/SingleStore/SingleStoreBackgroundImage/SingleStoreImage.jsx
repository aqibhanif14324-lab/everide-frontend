import React from 'react';
import "./style.css"; 
const SingleStoreImage = () => {
  return (
    <div className="single_store_container single_store_w_full single_store_overflow_hidden single_store_h_72 single_store_bg_surface_overlay single_store_flex single_store_items_center single_store_justify_center">
      <picture className="single_store_picture single_store_h_full single_store_bg_surface_overlay single_store_block single_store_min_h_0 single_store_w_full">
        <source 
          data-srcset="https://static.everide.app/Wb7y2QOohD-h_KoRXGESvtgcLXjij1I9q8fck7qXur0/rs:fit:1260:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1uaWNfaW1wZXgtMTY3OTkyMDI1My00YjZjZS5qcGc.webp" 
          type="image/webp" 
          media="(min-width: 0px)"
        />
        <source 
          data-srcset="https://static.everide.app/LfOpjGMjH1zR3l1SqnzgrqtRTBCQVU1jcNO9-UQdGMs/rs:fit:1260:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1uaWNfaW1wZXgtMTY3OTkyMDI1My00YjZjZS5qcGc.jpg" 
          type="image/jpg" 
          media="(min-width: 0px)"
        />
        <img 
          width="1260" 
          height="1000" 
          src="https://static.everide.app/LfOpjGMjH1zR3l1SqnzgrqtRTBCQVU1jcNO9-UQdGMs/rs:fit:1260:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS0xNTMvdS1uaWNfaW1wZXgtMTY3OTkyMDI1My00YjZjZS5qcGc.jpg" 
          alt="" 
          className="single_store_img single_store_h_full single_store_object_cover single_store_object_center single_store_w_full single_store_text_transparent single_store_border_0"
        />
      </picture>
    </div>
  );
};

export default SingleStoreImage;