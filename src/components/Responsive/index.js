import React, { useState } from 'react'
import logo from "../../assets/Image/logo.png"
import location from "../../assets/Image/location.png"
import phone from "../../assets/Image/phone-call.png"
import lupa from "../../assets/Image/magnifier.png"
import facebook from "../../assets/Image/facebook-app.png"
//icons
import {AiOutlineBars,AiOutlineClose} from "react-icons/ai"
import AosAnimation from "../AosAnimation/index"

//css
import styles from "../../style/responsive.module.css"
import CustomSelect from '../CustomSelect'
const Index = () => {
    const [bar,setBar] = useState(true)
    const navItem = [
        {id:1,title:"МАГАЗИН ",href:"#market"},
        {id:2,title:"О КОМПАНИИ ",href:"#company"},
        {id:3,title:"ПРОДУКЦИЯ ",href:"#product"},
        {id:4,title:"УСЛУГИ ",href:"#uslugy"},
        {id:5,title:"АКЦИИ И НОВОСТИ ",href:"#news"},
        {id:6,title:"ОБРАТНАЯ СВЯЗЬ ",href:"#svyaz"},
      ]
    console.log(bar);
  return (
    <div className={styles.mobile}>
    <div className={styles.responsive}>
        <div className={styles.mobile_icon}>
            <div><a href="https://goo.gl/maps/ryUVAiPzNKY8MgSDA"><img src={location} alt="location" /></a></div>
            <div><a href="tel:+998712766253"><img src={phone} alt="phone" /></a></div>
        </div>
        <div className={styles.resImg}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.mobile_icon}>
            <div><img src={lupa} alt="lupa" /></div>
            <div onClick={()=>setBar((prev)=>!prev)}>{bar ? <AiOutlineBars/> : <AiOutlineClose/>}</div>
        </div>
    </div>
    {bar ? null : <div className={styles.mobilebar}>
    <AosAnimation dataoas={"fade-up"} >
      <div className={styles.mobilelang}>
            <span className={styles.top_facebook}><img src={facebook} alt="lupa" /> Мы на Facebook</span>
            <span className={styles.top_facebook} style={{width:"150px"}}><CustomSelect/></span>
        </div>
    {navItem.map(item=>(
        <div className={styles.item}><a href={item.href}>{item.title}</a></div>
      ))}
      </AosAnimation>
    </div> }
    </div>
  )
}

export default Index