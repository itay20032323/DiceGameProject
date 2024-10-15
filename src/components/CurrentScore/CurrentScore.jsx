import React from 'react'
import styles from './CurrentScore.module.scss'

const CurrentScore = ({score}) => {
  return (
    <div className={styles["current-score"]}>
      Current
      <br/>
      {score}
    </div>
  )
}

export default CurrentScore