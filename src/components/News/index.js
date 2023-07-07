import React from 'react'
import styles from "../../style/news.module.css"
import Translate from '../../utils/Translate'
const News = () => {
  return (
    <div className={styles.news} id='news'>
        <div className={styles.newstitle}><Translate dictionary={{en:"NEWS",ru:"НОВОСТИ",uz:"YANGILIKLAR"}}/></div>
    </div>
  )
}

export default News