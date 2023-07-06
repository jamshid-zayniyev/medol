import React, { useEffect, useState } from 'react'
//components
import CustomSelect from '../CustomSelect'
//style
import styles from  "../../style/topsection.module.css"

// assets
import logo from "../../assets/Image/logo.png"
import location from "../../assets/Image/location.png"
import phone from "../../assets/Image/phone-call.png"
import lupa from "../../assets/Image/magnifier.png"
import facebook from "../../assets/Image/facebook-app.png"
const Index = () => {
   
  return (
    <div className={styles.topsection}>
        <div className={styles.contactup}>
            <div className={styles.contact}>
                <div className={styles.circle}><img src={location} alt="location" /></div>
                <div className={styles.top_text}><a href="https://goo.gl/maps/ryUVAiPzNKY8MgSDA">г.Ташкент, Чиланзар</a><br /><a href="https://goo.gl/maps/ryUVAiPzNKY8MgSDA">10 квартал, дом 3/1</a></div>
            </div>
            <div className={styles.contact}>
               <div className={styles.circle}><a href="tel:+998712766253"><img src={phone} alt="phone" /></a></div>
                <div className={styles.top_text}><a href="tel:+998712766253">+998 71 276-62-53</a> <br /><a href="tel:+998712766254">+998 71 276-62-54</a></div>
            </div>
        </div>
        <div className={styles.centerImg}>
            <img src={logo} alt="logo" />
        </div>
        <div className='d-flex gap-2'>
            <span className={styles.circle}><img src={lupa} alt="lupa" /></span>
            <span className={styles.top_facebook}><img src={facebook} alt="lupa" /> Мы на Facebook</span>
            <span className={styles.top_facebook} style={{width:"150px"}}><CustomSelect/></span>
        </div>
    </div>
  )
}

export default Index