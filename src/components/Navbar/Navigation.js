import React, { Component } from 'react'
import styles from './Navbar.module.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}></div>

        <div className={styles.locator}>  
          <div className={styles.locationImage}></div>
          <div className={styles.location}>Staten Island</div>
        </div> 

        <div className={styles.search}>
          <div></div>
          <div>
            <input type="text" className={styles.searchbar} />
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}
