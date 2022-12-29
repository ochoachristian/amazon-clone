import React from 'react'
import styles from './Product.module.css'

export default function Product(props) {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={props.image} />
        </div>
        <div className={styles.name}>
            {props.name}
        </div>
        <div className={styles.rating}>
            {props.rating}
        </div>
        <div className={styles.price}>
            {props.price}
        </div>
    </div>
  )
}
