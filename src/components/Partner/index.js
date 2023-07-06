import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import news_1 from "../../assets/partner/aesculap-b-braun1 1.png"
import news_2 from "../../assets/partner/asp1 1.png"
import news_3 from "../../assets/partner/bd1 1.png"
import news_4 from "../../assets/partner/biosense1 1.png"
import news_5 from "../../assets/partner/cordis1 1.png"
import news_6 from "../../assets/partner/depuy-synthes-spine-jandj(1) 1.png"
import news_7 from "../../assets/partner/eth 1.png"
import news_8 from "../../assets/partner/ethicon-endo-surgery1 1.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/swiper.css';
import { AiOutlineRightCircle } from 'react-icons/ai'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import styles  from "../../style/about.module.css"
export default function App() {
  const dataNews = [
    {id:1,img:news_1,},
    {id:2,img:news_2,},
    {id:3,img:news_3,},
    {id:4,img:news_4,},
    {id:5,img:news_5,},
    {id:6,img:news_6,},
    {id:7,img:news_7,},
    {id:8,img:news_8},
  ]
  return (
    <div>
        <div className={styles.abouttitle}>ПАРТНЕРЫ</div>
    <div className='partner'>
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={
          false
        }
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='part-slide'>
            <div><img src={news_1} alt="news_1" /></div>
            <div><img src={news_2} alt="news_2" /></div>
        </SwiperSlide>
        <SwiperSlide className='part-slide'>
            <div><img src={news_3} alt="news_3" /></div>
            <div><img src={news_4} alt="news_4" /></div>
        </SwiperSlide>
        <SwiperSlide className='part-slide'>
            <div><img src={news_5} alt="news_5" /></div>
            <div><img src={news_6} alt="news_6" /></div>
        </SwiperSlide>
        <SwiperSlide className='part-slide'>
            <div><img src={news_7} alt="news_7" /></div>
            <div><img src={news_8} alt="news_8" /></div>
        </SwiperSlide>
        <SwiperSlide className='part-slide'>
            <div><img src={news_3} alt="news_3" /></div>
            <div><img src={news_4} alt="news_4" /></div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
