import React from 'react'
import styles from './PlaceOrder.module.css'
import { Grid, Paper, Rating } from '@mui/material'



export default function PlaceOrder() {
  return (
    <div>
        <Grid container>
            <Grid item xs={6}>
                <img id={styles.img} src="https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136" />
            </Grid>
            <Grid item xs={4}>
                <div className={styles.description}>
                    <div className={styles.title}>New Apple iPhone 14 (64GB) - Green</div>
                    <div>
                        <Rating name="read-only" value="3" readOnly style={{fontSize: "20px"}}/>
                        35,650 ratings | 
                        1000+ answered questions
                    </div>
                    <hr></hr>
                    <div>
                        <div className={styles.textgap}>Price: <span id={styles.price}>$1,350.00</span></div>
                        <div className={styles.textgap}>FREE delivery: <strong>Wednesday,Jan 4</strong></div>
                        <div className={styles.textgap}>EMI starts at $100. No Cost EMI available</div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Paper variant='outlined' id={styles.order}>
                    <button className={styles.addtocart}>Add to Cart</button>
                    <button className={styles.buynow}>Buy Now</button>
                </Paper>
            </Grid>
        </Grid>
        
    </div>
  )
}
