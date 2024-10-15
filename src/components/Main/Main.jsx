import React, { useState } from 'react';
import styles from './Main.module.scss';
import { GrPowerCycle } from 'react-icons/gr';
import { FaPlus } from "react-icons/fa6";
import { PiBoxArrowDown } from "react-icons/pi";
import Dice from '../Dice/Dice';

const Main = ({setPlayersScores, playerTurn, setPlayerTurn, setPlayersWins}) => {
  
  const [diceNumbers, setDiceNumbers] = useState([0,0])
  const [finalScore, setFinalScore] = useState(100);

  const handleRollDice = () => {
    var randomDiceOne = Math.floor(Math.random() * 6) + 1;
    var randomDiceTwo = Math.floor(Math.random() * 6) + 1;
    var sumOfDices = randomDiceOne + randomDiceTwo
    
    setDiceNumbers([randomDiceOne, randomDiceTwo]);
    
    setPlayersScores((prev) => {
      const newScores = { ...prev };
  
      if (sumOfDices === 12) {
        newScores[playerTurn].currentScore = 0; 
      } else {
        newScores[playerTurn].currentScore += sumOfDices;
      }
  
      return newScores;
    });

    if (sumOfDices === 12) {
      togglePlayerTurn()
    }
  }

  const handleHoldClick = () => {
    setPlayersScores((prev) => {
      const newScores = { ...prev };

      newScores[playerTurn].totalScore += newScores[playerTurn].currentScore; 
      newScores[playerTurn].currentScore = 0; 

      checkIfSomeWinner(newScores);
      return newScores;
    });

    togglePlayerTurn();
  }

  const togglePlayerTurn = () => {
    setPlayerTurn((prev) => prev === 1 ? 2 : 1)
  }

  const handleNewGame = () => {
    setPlayersScores({
      1: {
        currentScore: 0,
        totalScore: 0
      },
      2: {
        currentScore: 0,
        totalScore: 0
      }
    });
    setPlayerTurn(1);
    setDiceNumbers([0,0]);
  }

  const handleFinalScoreOnChange = (event) => {
    let inputValue = event.target.value;
    if (Number(inputValue) > 0) {
      setFinalScore(inputValue);
    }
  }

  const checkIfSomeWinner = (newScores) => {
    if(newScores[1].totalScore >= finalScore){
      setPlayersWins((prev) => {
        const newPlayersWins = { ...prev };
        newPlayersWins[1] = newPlayersWins[1] + 1;
        localStorage.setItem("playerOneWins", newPlayersWins[1]);
        return newPlayersWins;
      })
      alert("Player 1 is the Winner !")
    } else if (newScores[2].totalScore >= finalScore){
      setPlayersWins((prev) => {
        const newPlayersWins = { ...prev };
        newPlayersWins[2] = newPlayersWins[2] + 1;
        localStorage.setItem("playerTwoWins", newPlayersWins[2]);
        return newPlayersWins;
      })
      alert("Player 2 is the Winner !")
    } else {
      return;
    }

    handleNewGame();
  }

  return (
    <div className={styles.main}>
        <div onClick={handleNewGame} className={`${styles["button-box"]} ${styles["new-game"]}`}>
            <FaPlus className="icon" />
            <h2>NEW GAME</h2>
        </div>

        <Dice number={diceNumbers[0]}/>
        <Dice number={diceNumbers[1]}/>

        <div onClick={handleRollDice} className={`${styles["button-box"]} ${styles["roll-dice"]}`}>
            <GrPowerCycle className="icon" />
            <h2>ROLL DICE</h2>
        </div>

        <div onClick={handleHoldClick} className={`${styles["button-box"]} ${styles["hold"]}`}>
            <PiBoxArrowDown className="icon" />
            <h2>HOLD</h2>
        </div>

        <input 
          type='number' 
          placeholder='Final Score (Default 100)' 
          min={1}
          value={finalScore}
          onChange={handleFinalScoreOnChange}
        />
    </div>
  )
}

export default Main