// import React from 'react'
// import "./style.css"

// const SalesBanner = () => {
//   return (
//   <div className='container'>
//    <section class="custom-section" data-v-d8f314c0="" data-v-3592d44c="">
//     <div class="sales-section">
//   <div class="sales-content">
//     <div class="sales-header">
//       <h2 class="sales-title">
//         <span>Sales Athletes</span>
//       </h2>
//     </div>
//     <p class="sales-description">
//       Equip yourself like a pro, sale for the full benefit of our partner associations
//     </p>
//   </div>
// </div>
//     </section>
   
// {/* swiper js */}

// {/* Swiper container */}
//  {/* Slide 1 */}
//  <div className="swiper-slide_item">
//     <a className="picture-hover" href="/en/ambassadors">
//       <picture>
//         <img src="https://static.everide.app/L10k9Q5RZAfXKrGmoURSVW5yqu0bBibPAK7TlpynHnk/rs:fill:800:480:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9oZXJvL2hlcm8tNS5wbmc.webp" alt="Discover our ambassadors" />
//       </picture>
//       <div className="overlay">
//         <h3>Discover our<br />ambassadors</h3>
//         <span className="flex">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 19.5L8.25 12l7.5-7.5" />
//           </svg>
//           Meet them
//         </span>
//       </div>
//     </a>
//   </div>
//   {/* Slide 2 */}
//   <div className="swiper-slide_item next">
//     <a className="picture-hover" href="/en/ambassadors">
//       <picture>
//         <img src="https://static.everide.app/grPQGlEiaKsqeQlQgRle-aBK6QyQlWZ4X6cLstOMuw4/rs:fill:800:480:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9oZXJvL2hlcm8tNC5wbmc.webp" alt="Discover our ambassadors" />
//       </picture>
//       <div className="overlay">
//         <h3>Discover our<br />ambassadors</h3>
//         <span className="flex">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 19.5L8.25 12l7.5-7.5" />
//           </svg>
//           Meet them
//         </span>
//       </div>
//     </a>
//   </div>

//   </div>
//   )
// }

// export default SalesBanner




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'

const SalesBanner = () => {
  return (
    <div className='container'>
      <section className="custom-section" data-v-d8f314c0="" data-v-3592d44c="">
        <div className="sales-section">
          <div className="sales-content">
            <div className="sales-header">
              <h2 className="sales-title">
                <span>Sales Athletes</span>
              </h2>
            </div>
            <p className="sales-description">
              Equip yourself like a pro, sale for the full benefit of our partner associations
            </p>
          </div>
        </div>
      </section>

      {/* Swiper container */}
      <Swiper
       className='sales_banner_swiper'
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="swiper-slide_item">
            <a className="picture-hover" href="/page/ambassadors">
              <picture>
                <img
                  src="https://static.everide.app/L10k9Q5RZAfXKrGmoURSVW5yqu0bBibPAK7TlpynHnk/rs:fill:800:480:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9oZXJvL2hlcm8tNS5wbmc.webp"
                  alt="Discover our ambassadors"
                  className='swiper-slide_image_scale'
                />
              </picture>
              <div className="overlay">
                <h3>Discover our<br />ambassadors</h3>
                <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Meet them
                </span>
              </div>
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="swiper-slide_item next">
            <a className="picture-hover" href="/page/ambassadors">
              <picture>
                <img
                  src="https://static.everide.app/grPQGlEiaKsqeQlQgRle-aBK6QyQlWZ4X6cLstOMuw4/rs:fill:800:480:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9oZXJvL2hlcm8tNC5wbmc.webp"
                  alt="Discover our ambassadors"
                />
              </picture>
              <div className="overlay">
                <h3>Discover our<br />ambassadors</h3>
                <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Meet them
                </span>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SalesBanner
