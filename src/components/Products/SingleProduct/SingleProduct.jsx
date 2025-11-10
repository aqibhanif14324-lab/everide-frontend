import React, { useEffect, useState, useRef } from "react";
import "./SingleProduct.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// LightGallery
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import ProductDetails from "./ProductDetail/ProductDetails";
import DialogInfo from "./DialogInfo/DialogInfo";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productData, setProductData] = useState(null);
  const lightGalleryRef = useRef(null); // Ref to control LightGallery
  const { id } = useParams();

  const images = [
    {
      original:
        "https://static.everide.app/JaH_rujH9UZKucevkCHME_KKb-Z5sjOdPQuuh3-beU8/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTEtMTc0MzQxMzEyMC05NWM4ZC5qcGc.webp",
      thumbnail:
        "https://static.everide.app/JaH_rujH9UZKucevkCHME_KKb-Z5sjOdPQuuh3-beU8/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTEtMTc0MzQxMzEyMC05NWM4ZC5qcGc.webp",
    },
    {
      original:
        "https://static.everide.app/69dT7Mup9PBzwMYOmTiEQ0VBzMZLyAqRYjEBKUvnMtQ/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTAtMTc0MzQxMzExOS02NzU1Ny5qcGc.webp",
      thumbnail:
        "https://static.everide.app/69dT7Mup9PBzwMYOmTiEQ0VBzMZLyAqRYjEBKUvnMtQ/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTAtMTc0MzQxMzExOS02NzU1Ny5qcGc.webp",
    },
    {
      original:
        "https://static.everide.app/JaH_rujH9UZKucevkCHME_KKb-Z5sjOdPQuuh3-beU8/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTEtMTc0MzQxMzEyMC05NWM4ZC5qcGc.webp",
      thumbnail:
        "https://static.everide.app/JaH_rujH9UZKucevkCHME_KKb-Z5sjOdPQuuh3-beU8/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTEtMTc0MzQxMzEyMC05NWM4ZC5qcGc.webp",
    },
    {
      original:
        "https://static.everide.app/09b4MVmxesmUoMHdogTyA8wqa2DfGBEmn8XFtHRZo9I/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTItMTc0MzQxMzEyMC1iY2FhMi5qcGc.jpg",
      thumbnail:
        "https://static.everide.app/09b4MVmxesmUoMHdogTyA8wqa2DfGBEmn8XFtHRZo9I/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTItMTc0MzQxMzEyMC1iY2FhMi5qcGc.jpg",
    },
    {
      original:
        "https://static.everide.app/09b4MVmxesmUoMHdogTyA8wqa2DfGBEmn8XFtHRZo9I/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTItMTc0MzQxMzEyMC1iY2FhMi5qcGc.jpg",
      thumbnail:
        "https://static.everide.app/09b4MVmxesmUoMHdogTyA8wqa2DfGBEmn8XFtHRZo9I/rs:fit:1000:1000:1/q:75/g:ce/czM6Ly9zaXRlLWFwaS1pbWFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0c1BpY3R1cmVzLzMxLTAzLTIwMjUvdS05NDUyNS9wLTItMTc0MzQxMzEyMC1iY2FhMi5qcGc.jpg",
    },
  ];

  useEffect(() => {
    const data = localStorage.getItem("selectedProduct");
    const parsedData = JSON.parse(data);
    setProductData(parsedData);
  }, [id]);

  return (
    <Layout>
      <div className="single-product-container container">
      <Breadcrumb />
        <div className="single-product-wrapper ">
        
          <div className="gallary-container">
         
            <div className="product-images-container">
              {/* LightGallery ref-based instance (hidden trigger) */}
              <LightGallery
                dynamic
                onInit={(ref) => {
                  lightGalleryRef.current = ref.instance;
                }}
                dynamicEl={images.map((img, index) => ({
                  src: img.original,
                  thumb: img.thumbnail,
                  subHtml: `<h4>Product Image ${index + 1}</h4>`,
                }))}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="custom-light-gallery"
              />
              
              {/* Main Image Swiper */}
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-swiper-product2"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      width={200}
                      height={200}
                      src={img.original}
                      alt={`Product ${index}`}
                      onClick={() =>
                        lightGalleryRef.current?.openGallery(index)
                      }
                      style={{ cursor: "pointer" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-swiper-product"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.thumbnail} alt={`Thumbnail ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

         
            <ProductDetails />
         
        </div>
        <DialogInfo/>
        <RecommendedProducts />
      </div>
    </Layout>
  );
};

export default SingleProduct;


const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/fr" className="breadcrumb-link active">
            accueil
          </a>
        </li>
        <li className="breadcrumb-item">
          
          <a href="/fr/equipement-trail-running-occasion" className="breadcrumb-link">
            trail | running
          </a>
        </li>
        <li className="breadcrumb-item">
          
          <a href="/fr/accessoires-trail-running-occasion" className="breadcrumb-link">
            accessoires
          </a>
        </li>
        <li className="breadcrumb-item">
          
          <a href="/fr/lampes-trail-running-occasion" className="breadcrumb-link">
            lampes frontales
          </a>
        </li>
      </ul>
    </div>
  );
};