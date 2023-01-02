import React from 'react'
import styles from "./Checkout.module.css"
import { Grid } from '@mui/material'
import CheckoutItems from './CheckoutItems'

export default function Checkout() {
  return (
    <div className={styles.body}>
        <Grid container className={styles.con}>
            <Grid item={10} >
                <div className={styles.container}>
                    <div className={styles.title}>Shopping Cart</div>
                    <div>
                        <CheckoutItems />
                        <CheckoutItems />
                        <CheckoutItems />
                    </div>
                </div>
            </Grid>
            <Grid item={2}>
              <div id={styles.subcontainer}>
                  <div id={styles.sub}><strong>Subtotal (2 items): $2,700</strong></div>
                  <div id={styles.buttoncontainer}>
                    <button className={styles.button}>Proceed to Checkout</button>
                  </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
