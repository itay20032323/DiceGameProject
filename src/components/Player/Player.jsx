import React from 'react';
import styles from './Player.module.scss';
import TotalScore from '../TotalScore/TotalScore';
import CurrentScore from '../CurrentScore/CurrentScore';

const Player = ({playerNumber, totalScore, currentScore, playerTurn, wins}) => {
  return (
    <div className={styles["player"]} style={playerTurn !== playerNumber ? {opacity: '55%'} : {}}>
        <h1 className={styles["player__title"]}>PLAYER {playerNumber}</h1>
        <h2 className={styles["player__wins"]}>Wins: {wins}</h2>
        <TotalScore score={totalScore} />
        <CurrentScore score={currentScore}/>
    </div>
  )
}

export default Player