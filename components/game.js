import {useEffect, useState} from "react";
import styles from '../styles/Game.module.scss'
import Number from './number'
import GameTask from "./task";

const Game = () => {

    const [arrayValues, setArrayValues] = useState([]);
    const [rightKey, setRightKey] = useState(0);
    const [gameLevel, setGameLevel] = useState(0);

    useEffect(() => {
        createNumbers(6);
    }, [])

    const createNumbers = (length) => {
        const values = [];
        while (values.length < length) {
            const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
            if (values.indexOf(randomInt) === -1) values.push(randomInt);
        }
        setArrayValues(values);
        setRightKey(Math.floor(Math.random() * length));
    }

    const handleClick = (itemIndex) => {
        if (itemIndex === rightKey) {
            setGameLevel(gameLevel < 9 ? gameLevel+1 : 9)
            createNumbers(6)
        }
        else {
            setGameLevel(gameLevel > 0 ? gameLevel-1 : 0)
            createNumbers(6)
        }
    }

    return (
        <div className={styles.game}>
            {gameLevel}
            <GameTask value={arrayValues[rightKey]}/>
            <div className={styles.game__items}>
            {arrayValues.map((item, index) => {
                return (<Number
                    key={index}
                    handler={() => handleClick(index)}
                    value={item}
                />)
            })}
            </div>
        </div>
    );
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Game;
