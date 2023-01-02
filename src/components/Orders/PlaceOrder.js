import React from 'react'
import styles from './PlaceOrder.module.css'
import { Grid, Paper, Rating } from '@mui/material'
import { Link, useParams } from 'react-router-dom'



export default function PlaceOrder(props) {
    const [productDetails, setProductDetails] = React.useState([]);
    let {id} = useParams();

    React.useEffect(() => {
        let list = [
            {
                "id": 1234557,
                "name": "New Apple iPhone 14",
                "rating": "34,500",
                "review": "1000",
                "price": "$1,350",
                "delivery": "FREE",
                "status": "In Stock",
                "emi": "EMI starts at $100. No Cost EMI available",
                "image": "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
            },
            {
                "id": 1234558,
                "name": "New Apple iPhone 14",
                "rating": "34,500",
                "review": "1000",
                "delivery": "FREE",
                "price": "$1,350",
                "status": "In Stock",
                "emi": "EMI starts at $100. No Cost EMI available",
                "image": "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
            },
            {
                "id": 1234553,
                "name": "New Apple iPhone 14",
                "rating": "34,500",
                "review": "1000",
                "delivery": "FREE",
                "price": "$1,350",
                "status": "In Stock",
                "emi": "EMI starts at $100. No Cost EMI available",
                "image": "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
            }
           
        ]

        //mock api 
        let item = list.filter( item => {
            if (item.id == id) return item;
        })
        console.log(id);
        setProductDetails(list[0]);
    },[]);

  return (
    <div>
        <Grid container>
            <Grid item xs={6}>
                <img id={styles.img} src={productDetails.image} />
            </Grid>
            <Grid item xs={4}>
                <div className={styles.description}>
                    <div className={styles.title}>{productDetails.name}</div>
                    <div>
                        <Rating name="read-only" value="3" readOnly style={{fontSize: "20px"}}/>
                        {productDetails.rating}
                    </div>
                    <hr></hr>
                    <div>
                        <div className={styles.textgap}>Price: <span id={styles.price}>{productDetails.price}</span></div>
                        <div className={styles.textgap}>{productDetails.delivery}<strong>Wednesday,Jan 4</strong></div>
                        <div className={styles.textgap}>{productDetails.emi}</div>
                    </div>
                    
                </div>
            </Grid>
            <Grid item xs={3}>
                <Paper variant='outlined' id={styles.order}>
                    <Link to='/checkout'>
                        <button className={styles.addtocart}>Add to Cart</button>
                        <button className={styles.buynow}>Buy Now</button>
                    </Link>
                </Paper>
            </Grid>
        </Grid>
        
    </div>
  )
}
