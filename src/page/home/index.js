import React from 'react'
import Carousel from '../../components/Carousel'
import Product from "../../components/Product"
import Service from "../../components/Service"
import About from '../../components/About'
import Swiper from '../../components/Swiper'
import News from "../../components/News"
import Partner from "../../components/Partner"
const Home = () => {
  return (
    <div>
        <Carousel/>
        <Product/>
        <Service/>
        <About/>
        <News/>
        <Swiper/>
        <Partner/>
        
    </div>
  )
}

export default Home