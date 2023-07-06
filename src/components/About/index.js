import React from 'react'
import styles from "../../style/about.module.css"
const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.abouttitle}>О КОМПАНИИ</div>
        <div className={styles.aboutbody}>
        <p className={styles.ellipsis}>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
        <button>Узнать больше</button>
        </div>
        
    </div>
  )
}

export default About