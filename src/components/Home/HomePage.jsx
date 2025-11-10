import React from 'react'
import Header from '../Header/Header'
import MobileBottomMenu from '../SubHeaders/MobileBottomMenu'
import HeroBanner from '../HeroBanner/HeroBanner'
import SalesBanner from '../HeroSalesBanner/SalesBanner'
import SliderBusiness from '../SliderBusiness/SliderBusiness'
import ProductCardSlider from '../HeroPoductsSlider/HeroProductSlider'
import ProductCardSlider2 from '../HeroPoductsSlider/HeroProductSlider2'
import ProductCardSlider3 from '../HeroPoductsSlider/HeroProductSlider3'
import HeroCategories from '../Categories/HeroSlider'
import Newsletter from '../NewsLetter/NewsLetter'
import GuaranteesSection from '../GuaranteesSection/GuaranteesSection'
import Footer from '../Footer/Footer'
import CustomerReviews from '../Trust/CustomerReviews'
import Layout from '../Layout/Layout'
import MobileCategories from './categories/MobileCategories'

const HomePage = () => {
  return (
    <Layout>
      {/* <Header/> */}
     <MobileCategories/>
     <HeroBanner/>
     <SalesBanner/>
     <SliderBusiness/>
     <ProductCardSlider/>
     <ProductCardSlider2/>
     <ProductCardSlider3/>
     <HeroCategories/>
     <Newsletter/>
     <CustomerReviews/>
     <GuaranteesSection/>
     {/* <Footer/> */}
    </Layout>
  )
}

export default HomePage