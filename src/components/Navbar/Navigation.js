import React, { Component } from 'react'
import styles from './Navbar.module.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div>
      <div className={styles.navbar}>
        <div className={styles.logo}></div>

        <div className={styles.locator}>  
          <div className={styles.locationImage}></div>
          <div className={styles.location}>Staten Island</div>
        </div> 

        <div className={styles.searchBoxComponent}>
          <div>
            <select className={styles.select}>
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
            </select>
          </div>
          <div>
            <input type="text" className={styles.searchbar} />
          </div>
          <div className={styles.searchBoxDiv}>
            <div className={styles.searchIcon}></div>
          </div>
        </div>

        <div className={styles.signIn}>
          <div id={styles.hello}>Hello, Sign In</div>
          <div id={styles.accountList}>Account & List</div>
        </div>
        <div className={styles.returns}>
          <div id={styles.return}>Returns</div>
          <div id={styles.order}> & Order</div>
        </div>
        <div className={styles.cart}>
          <div className={styles.cartImage}></div>
          <div className={styles.cartItems}>0</div>
          <div id={styles.cartText}>Cart</div>
        </div>

      </div>

      <div className={styles.navFooter}>
          <div className={styles.footerText}>Best Seller</div>
          <div className={styles.footerText}>Mobile</div>
          <div className={styles.footerText}>Amazon Pay</div>
          <div className={styles.footerText}>Fashion</div>
          <div className={styles.footerText}>Electronics</div>
          <div className={styles.footerText}>Prime</div>
          <div className={styles.footerText}>New Releases</div>
          <div className={styles.footerText}>Customer Service</div>
          <div className={styles.footerText}>Computers</div>
          <div className={styles.footerText}>Home & Kitchen</div>
      </div>
      </div>
    )
  }
}
