import React from 'react'
import styles from "../../style/service.module.css"
import AosAnoimation from "../../components/AosAnimation"
//image

import service_1 from "../../assets/serviceImg/service_1.png"
import service_2 from "../../assets/serviceImg/service_2.png"
import service_3 from "../../assets/serviceImg/service_3.png"
const Index = () => {
    const dataCard = [
        {id:1, title:"СЕРВИС ОБОРУДОВАНИЯ",description:"Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......", img:service_1},
        {id:2, title:"РЕГИСТРАЦИИ",description:"Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....", img:service_2},
        {id:3, title:"УСЛУГИ ЛОГИСТИКИ", description:"Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",img:service_3},
        
    ]
  return (
    <div className={styles.service}>
        <AosAnoimation>
        <div className={styles.servicetitle}>УСЛУГИ</div>
        <div className={styles.servicelayout}>
            <div className={styles.servicecards}>
                {dataCard.map(item=>(
                <div className={styles.servicecard}>
                    <div><img src={item.img} alt={item.title} /></div>
                    <div className={styles.servicecardbody}>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                    <button className={styles.btn}>Подробнее</button>
                </div>
                ))}
            </div>
        </div>
        </AosAnoimation>
    </div>
  )
}

export default Index