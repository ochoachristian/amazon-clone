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
        Navbar 
      </div>
    )
  }
}
