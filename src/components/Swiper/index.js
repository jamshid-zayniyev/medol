import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import news_1 from "../../assets/Image/news.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/swiper.css';
import { AiOutlineRightCircle } from 'react-icons/ai'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
  const dataNews = [
    {id:1,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:2,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:3,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:4,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:5,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:6,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
    {id:7,img:news_1,title:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",date:"26.07.2021",description:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."},
  ]
  return (
    <div>
    <div className='new_slider'>
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        navigation={true}
        pagination={
          false
        }
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
        {dataNews.map(item=>(
        <SwiperSlide>
          <div className='newsslider'>
            <div className='newbody'>
                <div className='newsImg'>
                <img src={item.img} alt={item.title} />
                </div>
                <div className='newstext'>
                <div>
              <p className='title'>{item.title}</p>
            </div>
            <div className='date'>{item.date}</div>
            <div><p className='des'>{item.description}</p></div>
            <button>Подробнее</button>
                </div>
            </div>
          </div>
         
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    <div className='new_slidermobile'>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        navigation={true}
        pagination={
          false
        }
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataNews.map(item=>(
        <SwiperSlide>
        <div className='newsslider'>
          <div className='newbody'>
              <div className='newsImg'>
              <img src={item.img} alt={item.title} />
              </div>
              <div className='newstext'>
              <div>
            <p className='title'>{item.title}</p>
          </div>
          <div className='date'>{item.date}</div>
          <div><p className='des'>{item.description}</p></div>
          <button>Подробнее</button>
              </div>
          </div>
        </div>
       
      </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    <div className='newsfot'>
      <div>Посмотреть все новости <AiOutlineRightCircle/></div>
      <div>Подписаться на новости <AiOutlineRightCircle/></div>
      <div></div>
    </div>
    </div>
  );
}
