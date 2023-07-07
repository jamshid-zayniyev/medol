import React from 'react'
import styles from "../../style/product.module.css"
import AosAnimation from "../AosAnimation/index"
import Translate from '../../utils/Translate'
import Modal from "../Modal"

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
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = React.useState();
    const handleClick = (item) =>{
        setData(item)
        setModalShow(true)
    }
    const dataCard = [
        {id:1, title:<Translate dictionary={{en:"Endovascular surgery",ru:"Эндоваскулярная хирургия",uz:"Endovaskulyar jarrohlik"}}/>, img:product_1},
        {id:2, title:<Translate dictionary={{en:"Laboratory diagnostics",ru:"Лабораторная диагностика",uz:"Laboratoriya diagnostikasi"}}/>, img:product_2},
        {id:3, title:<Translate dictionary={{en:"Cardiac Surgery",ru:"Кардиохирургия",uz:"Yurak jarrohligi"}}/>, img:product_3},
        {id:4, title:<Translate dictionary={{en:"DIABETES",ru:"ДИАБЕТ",uz:"QANDLI DABET"}}/>, img:product_4},
        {id:5, title:<Translate dictionary={{en:"ENDOUROLOGY",ru:"ЭНДОУРОЛОГИЯ",uz:"ENDOUROLOGIYA"}}/>, img:product_5},
        {id:6, title:<Translate dictionary={{en:"ARHYTHMOLOGY",ru:"АРИТМОЛОГИЯ",uz:"ARITMOLOGIYA"}}/>, img:product_6},
    ]
  return (
    <div className={styles.product} id='product'>
        <Modal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
        <div className={styles.title}><Translate dictionary={{en:"PRODUCTS",ru:"ПРОДУКЦИЯ",uz:"MAHSULOTLAR"}}/></div>
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
                <button className={styles.button} onClick={() =>handleClick(item)}><Translate dictionary={{en:"All view",ru:"Посмотреть все",uz:"Barchasini ko'rish"}}/></button>
                </div>
            </div>
            ))}
        </div>
        </AosAnimation>
            <div className={styles.more}><Translate dictionary={{en:"Go to our product catalog  ",ru:"Перейти в каталог нашей продукции  ",uz:"Mahsulotlar katalogimizga o'ting  "}}/>  <AiOutlineRightCircle/></div>
    </div>
  )
}

export default Index