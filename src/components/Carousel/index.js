import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from "../Navbar"
import TopSection from "../TopSection"
import Responsive from "../Responsive"
import Translate from "../../utils/Translate"
import Modal from "../Modal"
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
import carouselImg_1 from "../../assets/Image/slide.png"
function ControlledCarousel() {
  const [modalShow, setModalShow] = React.useState(false);
  const dataCarousel = [
    {
        id:1,
        title:<Translate dictionary={{en:"ABL800 FLEX Analyzer",ru:"Анализатор ABL800 FLEX",uz:"ABL800 FLEX analizatori"}}/>,
        description:<Translate dictionary={{en:"Designed for medium to high throughput tests, the ABL800 FLEX analyzer measures a full range of parameters including pH, blood gases, electrolytes, metabolites and oximetry",ru:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",uz:"O'rta va yuqori o'tkazuvchanlik sinovlari uchun mo'ljallangan ABL800 FLEX analizatori pH, qon gazlari, elektrolitlar, metabolitlar va oksimetriya kabi ko'plab parametrlarni o'lchaydi."}}/>,
        img:carouselImg_1,
        backImg:backImg_1,
    },
    {   id:2,
      title:<Translate dictionary={{en:"ABL800 FLEX Analyzer",ru:"Анализатор ABL800 FLEX",uz:"ABL800 FLEX analizatori"}}/>,
        description:<Translate dictionary={{en:"Designed for medium to high throughput tests, the ABL800 FLEX analyzer measures a full range of parameters including pH, blood gases, electrolytes, metabolites and oximetry",ru:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",uz:"O'rta va yuqori o'tkazuvchanlik sinovlari uchun mo'ljallangan ABL800 FLEX analizatori pH, qon gazlari, elektrolitlar, metabolitlar va oksimetriya kabi ko'plab parametrlarni o'lchaydi."}}/>,
        img:carouselImg_1,
        backImg:backImg_1,
    },
    {
        id:3,
        title:<Translate dictionary={{en:"ABL800 FLEX Analyzer",ru:"Анализатор ABL800 FLEX",uz:"ABL800 FLEX analizatori"}}/>,
        description:<Translate dictionary={{en:"Designed for medium to high throughput tests, the ABL800 FLEX analyzer measures a full range of parameters including pH, blood gases, electrolytes, metabolites and oximetry",ru:"Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",uz:"O'rta va yuqori o'tkazuvchanlik sinovlari uchun mo'ljallangan ABL800 FLEX analizatori pH, qon gazlari, elektrolitlar, metabolitlar va oksimetriya kabi ko'plab parametrlarni o'lchaydi."}}/>,
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
            <Modal
        show={modalShow}
        data={item}
        onHide={() => setModalShow(false)}
      />
          <img src={item.backImg} />
          <div className='header'>
              <div className='header_text'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button className='btn' onClick={() => setModalShow(true)}><Translate dictionary={{en:"Read more",ru:"Подробнее",uz:"Batafsil"}}/></button>
              </div>
              <div className='header_img'>
                  <img src={item.img} alt={item.title} />
              </div>
              <div className='header_text_mobile'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button className='btn' id='btn' onClick={() => setModalShow(true)}><Translate dictionary={{en:"Read more",ru:"Подробнее",uz:"Batafsil"}}/></button>
              </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}

export default ControlledCarousel;