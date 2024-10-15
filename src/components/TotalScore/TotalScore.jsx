import React from 'react'
import styles from './TotalScore.module.scss'

const TotalScore = ({score}) => {
  return (
    <h3 className={styles["total-score"]}>
        {score}
    </h3>
  )
}

export default TotalScore