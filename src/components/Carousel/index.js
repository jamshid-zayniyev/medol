import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from "../Navbar"
import TopSection from "../TopSection"
import Responsive from "../Responsive"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../style/carousel.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
//assets
import backImg_1 from "../../assets/Image/hospital.png"
import backImg_2 from "../../assets/Image/hospital.png"
import backImg_3 from "../../assets/Image/hospital.png"
import carouselImg_1 from "../../assets/Image/slide.png"
import carouselImg_2 from "../../assets/Image/slide.png"
import carouselImg_3 from "../../assets/Image/slide.png"
function ControlledCarousel() {
  const dataCarousel = [
    {
        id:1,
        title:"First slide label",
        description:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        img:carouselImg_1,
        backImg:backImg_1,
    },
    {   id:2,
      title:"First slide label",
      description:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img:carouselImg_1,
      backImg:backImg_1,
    },
    {
        id:3,
        title:"First slide label",
        description:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        img:carouselImg_1,
        backImg:backImg_1,
    },
  ]
 
  return (
    <div className='body'>
      <TopSection/>
        <Navbar/>
        <Responsive/>
      <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        > 
      {dataCarousel.map(item=>(
          <SwiperSlide>
          <img src={item.backImg} />
          <div className='header'>
              <div className='header_text'>
                  <h1>Анализатор ABL800 FLEX</h1>
                  <p>{item.description}</p>
                  <button className='btn'>Подробнее</button>
              </div>
              <div className='header_img'>
                  <img src={item.img} alt={item.title} />
              </div>
              <div className='header_text_mobile'>
                  <h1>Анализатор ABL800 FLEX</h1>
                  <p>{item.description}</p>
                  <button className='btn'>Подробнее</button>
              </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}

export default ControlledCarousel;