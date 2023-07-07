import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import news_1 from "../../assets/Image/news.png"
import Modal from "../Modal"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/swiper.css';
import { AiOutlineRightCircle } from 'react-icons/ai'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Translate from '../../utils/Translate';

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState();
  const handleClick = (item) =>{
      setData(item)
      setModalShow(true)
  }
  const dataNews = [
    {id:1,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:2,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:3,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:4,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:5,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:6,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:7,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Medical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
    {id:8,img:news_1,title:<Translate dictionary={{en:"Master class performed by Gallyamov Eduard Abdulkhaevich",ru:"Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",uz:"Gallyamov Eduard Abdulkhaevich ijrosida mahorat darsi"}}/>,date:"26.07.2021",description:<Translate dictionary={{en:"From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...",ru:"С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",uz:"“19 apreldan 21 aprelgacha “RSNPMTSU” OAJda (Respublika ixtisoslashtirilgan urologiya ilmiy-amaliy tibbiyot markazi) “Ethicon Endo Surgery” (Johnson&Johnson) va “Msedical Online Services” MCHJ XK ko‘magida...” ijrosidagi mahorat darsi o‘tkazildi."}}/>},
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
        <Modal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
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
            <button onClick={()=>handleClick(item)}><Translate dictionary={{en:"Read more",ru:"Подробнее",uz:"Batafsil"}}/></button>
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
          <button onClick={()=>handleClick(item)}><Translate dictionary={{en:"Read more",ru:"Подробнее",uz:"Batafsil"}}/></button>
              </div>
          </div>
        </div>
       
      </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    <div className='newsfot'>
      <div><Translate dictionary={{en:"View all news ",ru:"Посмотреть все новости",uz:"Barcha yangiliklarni ko'rish"}}/><AiOutlineRightCircle/></div>
      <div><Translate dictionary={{en:"Subscribe to news",ru:"Подписаться на новости ",uz:"Yangiliklarga obuna bo'ling"}}/><AiOutlineRightCircle/></div>
      <div></div>
    </div>
    </div>
  );
}
