import React, { useRef, useState } from 'react'
import styles from "../../style/navbar.module.css"
import {AiOutlineBars} from "react-icons/ai"
const Index = () => {
  const navItem = [
    {id:1,title:"МАГАЗИН ",href:"#market"},
    {id:2,title:"О КОМПАНИИ ",href:"#company"},
    {id:3,title:"ПРОДУКЦИЯ ",href:"#product"},
    {id:4,title:"УСЛУГИ ",href:"#uslugy"},
    {id:5,title:"АКЦИИ И НОВОСТИ ",href:"#news"},
    {id:6,title:"ОБРАТНАЯ СВЯЗЬ ",href:"#svyaz"},
  ]
  const ref = useRef()
  console.log(ref);
  return (
    <div className={styles.navbar}>
      {navItem.map(item=>(
        <div className={styles.item} ref={ref}><a href={item.href}>{item.title}</a> <span>●</span></div>
      ))}
    </div>
  )
}

export default Index