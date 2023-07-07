import React from 'react'
import styles from "../../style/about.module.css"
import Translate from '../../utils/Translate'
import Modal from "../Modal"
const About = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState();
  const handleClick = (item) =>{
      setData(item)
      setModalShow(true)
  }
  const dataAbout = [
    {description:<Translate dictionary={{en:'"The MEDOL Group of Companies was created by highly qualified specialists in the field of medicine, engineering and economics, who have significant experience in the market of high medical technologies, which has its own offices in different parts of the Earth. In 2011, MEDOL registered in Uzbekistan FE LLC "Medical Online Services" . The companys goal is to build a transparent long-term business, to benefit society through the development and implementation of advanced technologies in the healthcare system of the Republic of Uzbekistan. ',ru:'"ОГруппа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. ',uz:"MEDOL kompaniyalar guruhi yuqori tibbiy texnologiyalar bozorida katta tajribaga ega bo'lgan, Yerning turli burchaklarida o'z ofislariga ega bo'lgan tibbiyot, muhandislik va iqtisod sohasidagi yuqori malakali mutaxassislar tomonidan yaratilgan. 2011 yilda, MEDOL O‘zbekistonda “Medical Online Services” MChJ XK ro‘yxatdan o‘tgan.Kompaniyaning maqsadi O‘zbekiston Respublikasi sog‘liqni saqlash tizimiga ilg‘or texnologiyalarni ishlab chiqish va joriy etish orqali shaffof uzoq muddatli biznesni qurish, jamiyatga foyda keltirishdir."}}/>}
  ]
  return (
    <div className={styles.about} id='company'>
        <div className={styles.abouttitle}><Translate dictionary={{en:"ABOUT",ru:"О КОМПАНИИ",uz:"KOMPANIYA"}}/></div>
        <Modal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
        <div className={styles.aboutbody}>
        <p className={styles.ellipsis}>
        {dataAbout[0].description}
        </p>
        <button onClick={()=>handleClick(dataAbout[0])}><Translate dictionary={{en:"Read more",ru:"Узнать больше",uz:"Batafsil"}}/></button>
        </div>
        
    </div>
  )
}

export default About