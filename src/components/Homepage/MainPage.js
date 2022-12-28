import React, { Component } from 'react'
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import styles from './MainPage.module.css'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  render() {
    return (
      <div className={styles.mainPage}>
  
        <div className={styles.mainAd}>
          <AdvertisementOne />
          <AdvertisementOne />
          <AdvertisementOne />
          <AdvertisementOne />
          <AdvertisementOne />
        </div>

      </div>
    )
  }
}