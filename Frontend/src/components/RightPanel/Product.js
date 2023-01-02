import { Rating } from '@mui/material'
import React from 'react'
import styles from './Product.module.css'
import getSymbolFromCurrency from 'currency-symbol-map'

export default function Product(props) {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={props.product.image} />
        </div>
        <div className={styles.name}>
            {props.product.name}
        </div>
        <div className={styles.rating}>
            <Rating id={styles.stars}  name='read-only' value='4' readOnly />
            {props.product.rating}
        </div>
        <div className={styles.price}>
            {getSymbolFromCurrency('USD')} {props.product.price}
        </div>
    </div>
  )
}
