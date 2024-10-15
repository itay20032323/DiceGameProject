import React from 'react';
import styles from './Dice.module.scss';
import { FaDiceD6, FaDiceOne, FaDiceFive, FaDiceFour, FaDiceSix, FaDiceThree, FaDiceTwo } from 'react-icons/fa6';

const Dice = ({number}) => {
    switch (number){
        case 1:
            return <FaDiceOne className={styles["dice__svg"]}/>
        case 2:
            return <FaDiceTwo className={styles["dice__svg"]}/>
        case 3:
            return <FaDiceThree className={styles["dice__svg"]}/>
        case 4:
            return <FaDiceFour className={styles["dice__svg"]}/>
        case 5:
            return <FaDiceFive className={styles["dice__svg"]}/>
        case 6:
            return <FaDiceSix className={styles["dice__svg"]}/>
        default:
            return <FaDiceD6 className={styles["dice__svg"]}/>

    }
}

export default Dice