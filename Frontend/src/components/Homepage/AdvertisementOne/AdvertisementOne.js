import React from 'react'
import styles from './AdvertisementOne.module.css'

export default function AdvertisementOne() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Up to 70% off | Electronics clearance store</div>
        <div className={styles.body}>
            <img id={styles.img} src='https://ik.imagekit.io/wmunzpstb/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672090157997' />
        </div>
        <div className={styles.footer}>See more</div>
    </div>
  )
}
