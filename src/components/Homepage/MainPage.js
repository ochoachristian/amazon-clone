import React, { Component } from 'react'
import Advertisementbar from './AdvertisementBar/Advertisementbar';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
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
          <AdvertisementFour />
          <AdvertisementOne />
          <AdvertisementOne />
          <Advertisementbar /> 
          
        </div>

      </div>
    )
  }
}