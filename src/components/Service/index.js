import React from 'react'
import styles from "../../style/service.module.css"
import AosAnoimation from "../../components/AosAnimation"
import Modal from "../Modal"
//image

import service_1 from "../../assets/serviceImg/service_1.png"
import service_2 from "../../assets/serviceImg/service_2.png"
import service_3 from "../../assets/serviceImg/service_3.png"
import Translate from '../../utils/Translate'
const Index = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = React.useState();
    const handleClick = (item) =>{
        setData(item)
        setModalShow(true)
    }
    const dataCard = [
        {id:1, title:<Translate dictionary={{en:"EQUIPMENT SERVICE",ru:"СЕРВИС ОБОРУДОВАНИЯ",uz:"USKUNALAR XIZMATI"}}/>,description:<Translate dictionary={{en:"The company provides after-sales service for all products provided. Our engineers have experience and certificates from manufacturers ......",ru:"Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",uz:"Kompaniya taqdim etilgan barcha mahsulotlar uchun sotuvdan keyingi xizmat ko'rsatadi. Bizning muhandislarimiz ishlab chiqaruvchilardan tajriba va sertifikatlarga ega ......"}}/>, img:service_1},
        {id:2, title:<Translate dictionary={{en:"REGISTER",ru:"РЕГИСТРАЦИИ",uz:"RO'YXAT"}}/>,description:<Translate dictionary={{en:"Ensuring the receipt of permits, registration certificates for medical devices Preparation of facilities for ....",ru:"Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",uz:"Ruxsatnomalar, tibbiy buyumlarni ro‘yxatdan o‘tkazish guvohnomalari olinishini ta’minlash ... uchun ob’ektlarni tayyorlash."}}/>, img:service_2},
        {id:3, title:<Translate dictionary={{en:"LOGISTICS SERVICES",ru:"УСЛУГИ ЛОГИСТИКИ",uz:"LOGISTIK XIZMATLARI"}}/>, description:<Translate dictionary={{en:"The company provides after-sales service for all products provided. Our engineers have experience and certificates from manufacturers .....",ru:"Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",uz:"Kompaniya taqdim etilgan barcha mahsulotlar uchun sotuvdan keyingi xizmat ko'rsatadi. Bizning muhandislarimiz ishlab chiqaruvchilardan tajriba va sertifikatlarga ega ..... "}}/>,img:service_3},
        
    ]
  return (
    <div className={styles.service} id='uslugy'>
        <Modal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
        <AosAnoimation>
        <div className={styles.servicetitle}><Translate dictionary={{en:"SERVICE",ru:"УСЛУГИ",uz:"XIZMATLAR"}}/></div>
        <div className={styles.servicelayout}>
            <div className={styles.servicecards}>
                {dataCard.map(item=>(
                <div className={styles.servicecard}>
                    <div><img src={item.img} alt={item.title} /></div>
                    <div className={styles.servicecardbody}>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                    <button className={styles.btn}  onClick={() =>handleClick(item)}><Translate dictionary={{en:"Read more",ru:"Подробнее",uz:"Batafsil"}}/></button>
                </div>
                ))}
            </div>
        </div>
        </AosAnoimation>
    </div>
  )
}

export default Index