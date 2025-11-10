import Layout from '../Layout/Layout'
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Ambassadors = () => {
    const [hideHeader, setHideHeader] = useState(false)

   // Function to check screen width
     const checkScreenWidth = () => {
      setHideHeader(window.innerWidth <= 1021.008)
    }
  
    useEffect(() => {
      checkScreenWidth() 
      window.addEventListener('resize', checkScreenWidth) 
  
      return () => window.removeEventListener('resize', checkScreenWidth)
    }, [])
  return (
   <div className='ambassadors-container-main'>
     <Layout hideHeader={hideHeader}>
<div className='single-store-container subItems-ambassadors-container'>
      <div>
          <AmbassadorsImage />
      </div>
        <EverideTeam />
        <LowCarbonAdventures />
        <VideoThumbnail />
        <AthletesSection />
        <AthletesCard />
        <LogosBanner />
        <StatsGrid/>
</div>
    </Layout>
   </div>
  )
}

export default Ambassadors


const AmbassadorsImage = () => {
  return (
    <div className="ambassadors_classname-w-full ">
      <picture className="ambassadors_classname-h-full ambassadors_classname-bg-surface-overlay ambassadors_classname-swiper-zoom-target ambassadors_classname-e-picture-img ambassadors_classname-block ambassadors_classname-min-h-0 ambassadors_classname-w-full">
        <source 
          data-srcset="https://static.everide.app/-ho-AO-DYKwVrA__AYBDO2zDqnDuQ683CyIvefQVNBU/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.webp" 
          type="image/webp" 
          media="(min-width: 0px)" 
          srcSet="https://static.everide.app/-ho-AO-DYKwVrA__AYBDO2zDqnDuQ683CyIvefQVNBU/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.webp"
        />
        <source 
          data-srcset="https://static.everide.app/Sius2REFxNA1NMOZyrR3mwOYbARk2b_asvYCSNk6PFg/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.png" 
          type="image/png" 
          media="(min-width: 0px)" 
          srcSet="https://static.everide.app/Sius2REFxNA1NMOZyrR3mwOYbARk2b_asvYCSNk6PFg/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.png"
        /> 
        <img 
          width="1600" 
          height="1000" 
          src="https://static.everide.app/Sius2REFxNA1NMOZyrR3mwOYbARk2b_asvYCSNk6PFg/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.png" 
          data-src="https://static.everide.app/Sius2REFxNA1NMOZyrR3mwOYbARk2b_asvYCSNk6PFg/rs:fit:1600:1000:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9jb3Zlci5wbmc.png" 
          alt="" 
          className="ambassadors_classname-h-full ambassadors_classname-object-cover ambassadors_classname-object-center ambassadors_classname-w-full ambassadors_classname-text-transparent ambassadors_classname-border-0" 
        /> 
      </picture>
    </div>
  );
};

const EverideTeam = () => {
  return (
   <div className="athletes-container container">
      <div className="athletes-header">
        <span className="athletes-title">
          <span className="athletes-title-line">The Everide team  
</span>
        </span>
      </div>
      <p className="athletes-description">
     Whether they are climbers, skiers, trail runners, cyclists or surfers, our passionate athletes are committed to protecting the playground ♻️




      </p>
    </div>

  );
};




const LowCarbonAdventures = () => {
  return (
    <div className="athletes-container container">
      <div className="athletes-header">
        <span className="athletes-title">
          <span className="athletes-title-line">Our Low Carbon Adventures </span>
        </span>
      </div>
      <p className="athletes-description">
      Our concept of adventure: local, thoughtful and committed! Watch our latest episodes 🎬


      </p>
    </div>
  );
};


const VideoThumbnail = () => {
  return (
  


<Swiper 
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            
          },
          640: {
            slidesPerView: 2,
         
          },
          768: {
            slidesPerView: 2.5,
            
          },
          1024: {
            slidesPerView: 3.4,
           
          },
        }}
        modules={[]}
        className="ambassadros-swipers container" >
    {
      [1, 2, 3, 4,5,6].map((item, index) => (
        <SwiperSlide
        
      >
         <div className="ambassadors-flex-col ambassadors-rounded-lg ambassadors-overflow-hidden ambassadors-relative ambassadors-h-17rem">
        <button className="ambassadors-relative ambassadors-w-full">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ambassadors-text-white ambassadors-absolute ambassadors-z-10"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40ZM26.9962 21.3355C27.8832 20.8234 27.8832 19.543 26.9962 19.0309L17.6706 13.6468C16.7835 13.1346 15.6747 13.7748 15.6747 14.7991L15.6747 25.5674C15.6747 26.5916 16.7835 27.2318 17.6706 26.7197L26.9962 21.3355Z"
              fill="currentColor"
            />
          </svg>
          <picture className="ambassadors-w-full ambassadors-relative ambassadors-absolute ambassadors-min-h-0">
            <source
              srcSet="https://static.everide.app/JEEYJMO3JQ69-Wao0rRsftlvbtClQ34eqjlcS12DR-M/rs:fit:800:600:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy92aWRlby00LnBuZw.webp"
              type="image/webp"
              media="(min-width: 0px)"
            />
            <source
              srcSet="https://static.everide.app/UGlGQLyt9M1ssA7JNSMgzRsyRhqgdIasYhNSqWrhp-w/rs:fit:800:600:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy92aWRlby00LnBuZw.png"
              type="image/png"
              media="(min-width: 0px)"
            />
            <img
              width="800"
              height="600"
              src="https://static.everide.app/UGlGQLyt9M1ssA7JNSMgzRsyRhqgdIasYhNSqWrhp-w/rs:fit:800:600:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy92aWRlby00LnBuZw.png"
              alt=""
              className="ambassadors-w-full ambassadors-text-transparent ambassadors-border-0 ambassadors-ls-is-cached ambassadors-lazyloaded"
            />
          </picture>
        </button>
      </div>
    </SwiperSlide>
      ))
    }

    
      </Swiper>
  );
};


const AthletesSection = () => {
  return (
    <div className="athletes-container container">
      <div className="athletes-header">
        <span className="athletes-title">
          <span className="athletes-title-line">Our athletes</span>
        </span>
      </div>
      <p className="athletes-description">
        Buy Kilian's jacket at a second-hand price while doing something for the planet? 
        It's possible, discover the team locker room 👇
      </p>
    </div>
  );
};


const AthletesCard = () => {

  return (
  
<Swiper 
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            
          },
          640: {
            slidesPerView: 2,
         
          },
          768: {
            slidesPerView: 2.5,
            
          },
          1024: {
            slidesPerView: 3.4,
           
          },
        }}
        modules={[]}
        className="ambassadros-swipers container" >
    {
      [1, 2, 3, 4,5,6].map((item, index) => (
        <SwiperSlide
        
      >
          <div class="athlete-card">
  <a href="/en/shop/kilianjornet" class="athlete-card-link">
    {/* <!-- Main Image --> */}
    <div class="athlete-main-image">
      <img
        src="https://static.everide.app/FmUyIY19Z0pw2wDPWkAJzcwsOJ0loYGRePAVgdzrl5M/rs:fit:800:600:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS04OTMvdS1raWxpYW5qb3JuZXQtMTY3NDU3MjYxMy0xMTMxYS5qcGc.jpg"
        alt="Main image"
      />
    </div>

    {/* <!-- Profile Section --> */}
    <div className='athlete-profile-main-container'>
      <div class="athlete-profile-section">
      <div class="athlete-profile-image">
        <img
          src="https://static.everide.app/MiUbguAJlqR2hnShA1zcFLRJBP4KPaQvY1QFnf81_NQ/rs:fill:100:100:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9maWxlUGljdHVyZXMvdS04OTMvdS1raWxpYW5qb3JuZXQtMTYzNjEwNzk0MC00NjU5Ni5qcGc.jpg"
          alt="Profile image"
        />
      </div>
    </div>
     <div className="athlete_container">
      <div className="athlete_header">
        <div className="athlete_nameWrapper">
          <span className="athlete_name">Xavier De le rue</span>
        </div>
      </div>

      <div className="athlete_stats">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="athlete_icon"
        >
          <path d="M6.04876 5.69194C5.97637 5.86003 5.81794 5.97514 5.63571 5.99204L0.621003 6.45714C0.184117 6.49766 0.00755298 7.04107 0.337184 7.33064L4.12079 10.6545C4.25828 10.7753 4.3188 10.9615 4.27856 11.1401L3.17127 16.053C3.0748 16.4811 3.53705 16.8169 3.91431 16.5929L8.24467 14.0216C8.40203 13.9282 8.59787 13.9282 8.75523 14.0216L13.0856 16.5929C13.4629 16.8169 13.9251 16.4811 13.8286 16.053L12.7213 11.1401C12.6811 10.9615 12.7416 10.7753 12.8791 10.6545L16.6627 7.33064C16.9923 7.04107 16.8158 6.49766 16.3789 6.45714L11.3642 5.99204C11.182 5.97514 11.0235 5.86003 10.9511 5.69194L8.95918 1.0664C8.78564 0.663415 8.21427 0.663414 8.04072 1.0664L6.04876 5.69194Z" />
        </svg>
        <span className="athlete_rating">5</span>
        <span className="athlete_divider">|</span>
        <span className="athlete_ads">1 ad online</span>
      </div>
    </div>
    </div>
  </a>
</div>
    </SwiperSlide>
      ))
    }

    
      </Swiper>
  )
}
const images = [
  {
    webp: "https://static.everide.app/M9SVvivdbPXTL-XYo85h-4tcGhtiJEuU8anCRRiO80Y/rs:fit:520:168:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX2tqZl9ibGFjay5wbmc.webp",
    png: "https://static.everide.app/DFTo5fvDRHsFkzNWKAJykwbNqt75hSkL2S6LwGC_zr4/rs:fit:520:168:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX2tqZl9ibGFjay5wbmc.png",
    fallback: "https://static.everide.app/DFTo5fvDRHsFkzNWKAJykwbNqt75hSkL2S6LwGC_zr4/rs:fit:520:168:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX2tqZl9ibGFjay5wbmc.png",
    width: 520,
    height: 168,
  },
  {
    webp: "https://static.everide.app/ba9dKzoPdOsATLr7vW7E_3iXmKhDUavWlmGwS3nYgDI/rs:fit:560:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3NyZl9ibGFjay5wbmc.webp",
    png: "https://static.everide.app/r29sRywUrkaYDtEwumnhs9HdRRVE_VUatq4zfXLIGHs/rs:fit:560:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3NyZl9ibGFjay5wbmc.png",
    fallback: "https://static.everide.app/r29sRywUrkaYDtEwumnhs9HdRRVE_VUatq4zfXLIGHs/rs:fit:560:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3NyZl9ibGFjay5wbmc.png",
    width: 560,
    height: 180,
  },

   {
    webp: "https://static.everide.app/hVD7kGtOONZ9sS5i1BJrjjw9UfvZiaDGTSxC_xet3YI/rs:fit:520:120:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3Bvd19ibGFjay5wbmc.webp",
    png: "https://static.everide.app/r29sRywUrkaYDtEwumnhs9HdRRVE_VUatq4zfXLIGHs/rs:fit:560:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3NyZl9ibGFjay5wbmc.png",
    fallback: "https://static.everide.app/r29sRywUrkaYDtEwumnhs9HdRRVE_VUatq4zfXLIGHs/rs:fit:560:180:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9wYWdlcy9hbWJhc3NhZG9ycy9sb2dvX3NyZl9ibGFjay5wbmc.png",
    width: 560,
    height: 180,
  },
  // Add more if needed
];


const LogosBanner = () => {
  return (
   <>
   <div className="athletes-container container">
      <div className="athletes-header">
        <span className="athletes-title">
          <span className="athletes-title-line">Our partner organizations  </span>
        </span>
      </div>
      <p className="athletes-description">
        Protecting glaciers, oceans and reducing the impact of our travels: that's why we collect funds by your side ♻️
      </p>
    </div>
    <div className="logo-banner container">
      {images.map((img, idx) => (
        <picture key={idx} className="logo-image">
          <source srcSet={img.webp} type="image/webp" />
          <source srcSet={img.png} type="image/png" />
          <img
            src={img.fallback}
            width={img.width}
            height={img.height}
            alt={`logo-${idx}`}
            className="logo-img"
          />
        </picture>
      ))}
    </div>
   </>
  );
}



const StatsGrid = () => {
  return (
    <div className="stats-grid container">
      <div className="stats-card stats-span-two">
        <span className="stats-title">Athlete Sales</span>
        <span className="stats-main-text">100 %</span>
        <span className="stats-sub-text">donated to associations</span>
      </div>
      <div className="stats-card">
        <span className="stats-title">Collection</span>
        <span className="stats-main-text">10903</span>
        <span className="stats-sub-text">euro</span>
      </div>
      <div className="stats-card">
        <span className="stats-title">CO2 avoided</span>
        <span className="stats-main-text">357</span>
        <span className="stats-sub-text">T / CO2eq</span>
      </div>
    </div>
  );
};