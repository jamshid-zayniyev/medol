import React from 'react'
import location from "../../assets/Image/location.png"
import phone from "../../assets/Image/phone-call.png"
import styles from  "../../style/footer.module.css"
import logo from "../../assets/Image/logo.png"
import Translate from '../../utils/Translate'
import Email from "../../assets/Image/email 1.png"
const Index = () => {
  return (
    <div className={styles.footer} id='svyaz'>
    <div className={styles.footerin}>
        <div className={styles.firstcontact}>
        <div className={styles.contactfooter}>
            <div style={{color:"rgba(89, 89, 89, 1)",fontSize:"26px"}} className={styles.title}>Контакты</div>
            <div style={{}}>
                <div className={styles.footericons}><img src={location} alt="location" /><span><a href="https://goo.gl/maps/ryUVAiPzNKY8MgSDA"><Translate dictionary={{en:"Tashkent city, Chilanzar",ru:"г.Ташкент, Чиланзар",uz:"Tashkent shahar, Chilanzar"}}/></a><br /><a href="https://goo.gl/maps/ryUVAiPzNKY8MgSDA"><Translate dictionary={{en:"10 quarter, building 3/1",ru:"10 квартал, дом 3/1 ",uz:"10-kvartal, bino 3/1"}}/></a></span></div><br />
                <div  className={styles.footericons}><img src={Email} alt="Email" /><span>info@medol.uz </span></div>
            </div>
            <div>
                <div className={styles.footericons}><img src={phone} alt="phone" /><span>+998 71 276-62-53 <br /> +998 71 276-62-54</span></div><br />
                <div><button className={styles.btn}>Оставить заявку</button></div>
            </div>
        </div>
        <br />
        <div className={styles.logoandtext}>
        <div><img src={logo} alt="logo" className={styles.logoimg} /></div>
        <div>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</div>
        </div>
        </div>
        <div className={styles.links}>
            <div>
                <h5  style={{width:"120px"}}>О КОМПАНИИ</h5>
                <div><a href="">История</a></div>
                <div><a href="">Партнеры</a></div>
                <div><a href="">Вакансии</a></div>
            </div>
            <div>
            <h5>ПРОДУКЦИЯ</h5>
            <div>
                <a href="">Эндоваскулярная хирургия</a></div>
                <div><a href="">Аритмология</a></div>
                <div><a href="">Кардиохирургия</a></div>
                <div><a href="">Лабораторная диагностика</a></div>
                <div><a href="">Хирургия</a></div>
                <div><a href="">Эндоурология</a></div>
                <div><a href="">Нейрохирургия</a></div>
                <div><a href="">Анестезиология и реанимация</a></div>
                <div><a href="">Диабет</a></div>
            </div>
            <div>
            <h5>УСЛУГИ</h5>
            <div><a href="">Сервис</a></div>
                <div><a href="">Регистрации</a></div>
                <div><a href="">Услуги логистики</a></div>
            </div>
        </div>
    </div>
    <br />
    <div className={styles.reserve}>
        <br />
        <div>© 2023 ООО «Medical Online Services»</div><br />
        <div>Дизайн сделан:<span style={{color:"rgba(0, 201, 201, 1)"}}> damingues92@gmail.com</span> </div>
    </div>
    </div>
  )
}

export default Index