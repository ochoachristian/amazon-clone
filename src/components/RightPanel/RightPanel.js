import React, { useEffect } from 'react'
import Product from './Product'
import styles from './RightPanel.module.css'

export default function RightPanel(props) {

    const [listOfProduct, setListOfProduct] = React.useState([]);

    useEffect(() => {
        let list = [
            {
                name : "iPhone",
                rating: "34,656",
                price: "$1,350",
                image: "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
             },
             {
                name : "iPhone",
                rating: "34,656",
                price: "$1,350",
                image: "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
             },
             {
                name : "iPhone",
                rating: "34,656",
                price: "$1,350",
                image: "https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136"
             }
             
        ]
    })

  return (
    <div className={styles.container}>
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
        <Product 
            image='https://ik.imagekit.io/wmunzpstb/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672090159136' 
            rating="34,576" 
            price="$1,350" 
            name="New iPhone 14 - (64GB) Green" 
        />
    </div>
  )
}
