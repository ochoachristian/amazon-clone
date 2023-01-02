import React from 'react'
import styles from './LeftSide.module.css'

export default function LeftPanel() {
  return (
    <div className={styles.leftContainer}>
        <div className={styles.header}>
            Brand
        </div>
        <div className={styles.brands}>
            <label className={styles.brandName}>
                <input type='checkbox' value='Apple' />Apple
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Samsung' />Samsung
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Microsoft' />Microsoft
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Playstation' />Playstation
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Xbox' />Xbox
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Nintendo' />Nintendo
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Google' />Google
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Alienware' />Alienware
            </label>
            <label className={styles.brandName}>
                <input type='checkbox' value='Asus' />Asus
            </label>
        </div>
    </div>
  )
}
