import React from 'react'
import LeftPanel from '../LeftPanel/LeftPanel'
import RightPanel from '../RightPanel/RightPanel'
import styles from './DisplayContent.module.css'

export default function DisplayContent() {
  return (
    <div>
       <div className={styles.container}>
          <LeftPanel />
          <RightPanel />
        </div> 
       <div></div>
    </div>
  )
}
