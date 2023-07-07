import React, { useRef, useState } from 'react'
import styles from "../../style/navbar.module.css"
import {AiOutlineBars} from "react-icons/ai"
import Translate from '../../utils/Translate'
const Index = () => {

  const navItem = [
    {id:1,title:<Translate dictionary={{en:"SHOPPING",ru:"МАГАЗИН",uz:"MAGAZIN"}}/>,href:"#market"},
    {id:2,title:<Translate dictionary={{en:"ABOUT",ru:"О КОМПАНИИ",uz:"KOMPANIYA"}}/>,href:"#company"},
    {id:3,title:<Translate dictionary={{en:"PRODUCTS",ru:"ПРОДУКЦИЯ",uz:"MAHSULOTLAR"}}/>,href:"#product"},
    {id:4,title:<Translate dictionary={{en:"SERVICE",ru:"УСЛУГИ",uz:"XIZMATLAR"}}/>,href:"#uslugy"},
    {id:5,title:<Translate dictionary={{en:"DISCOUNT AND NEWS",ru:"АКЦИИ И НОВОСТИ",uz:"YANGILIKLAR"}}/>,href:"#news"},
    {id:6,title:<Translate dictionary={{en:"FEEDBACK",ru:"ОБРАТНАЯ СВЯЗЬ ",uz:"FEEDBACK"}}/>,href:"#svyaz"},
  ]
  const ref = useRef()
  console.log(ref);
  return (
    <div className={styles.navbar}>
      {navItem.map(item=>(
        <div className={styles.item} ref={ref}  ><a href={item.href}>{item.title}</a> <span>●</span></div>
      ))}
    </div>
  )
}

export default Index