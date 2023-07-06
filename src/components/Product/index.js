import React from 'react'
import styles from "../../style/product.module.css"
import AosAnimation from "../AosAnimation/index"
//assets
import product_1 from "../../assets/productImg/product_1.png"
import product_2 from "../../assets/productImg/product_2.png"
import product_3 from "../../assets/productImg/product_3.png"
import product_4 from "../../assets/productImg/product_4.png"
import product_5 from "../../assets/productImg/product_5.png"
import product_6 from "../../assets/productImg/product_6.png"
//icons
import { AiOutlineRightCircle } from 'react-icons/ai'
const Index = () => {
    const dataCard = [
        {id:1, title:"Эндоваскулярная хирургия", img:product_1},
        {id:2, title:"Лабораторная диагностика", img:product_2},
        {id:3, title:"Кардиохирургия", img:product_3},
        {id:4, title:"ДИАБЕТ", img:product_4},
        {id:5, title:"ЭНДОУРОЛОГИЯ", img:product_5},
        {id:6, title:"АРИТМОЛОГИЯ", img:product_6},
    ]
  return (
    <div className={styles.product}>
        <div className={styles.title}>ПРОДУКЦИЯ</div>
        <AosAnimation dataoas={"fade-up"}>
        <div className={styles.product_cards}>
            {dataCard.map(item=>(
            <div className={styles.product_card}>
                <div className={styles.cardbody}>
                <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.cardtitle}>
                <p>{item.title}</p>
                </div>
                <div className={styles.cardbutton}>
                <button className={styles.button}>Посмотреть все</button>
                </div>
            </div>
            ))}
        </div>
        </AosAnimation>
            <div className={styles.more}>Перейти в каталог нашей продукции <AiOutlineRightCircle/></div>
    </div>
  )
}

export default Index