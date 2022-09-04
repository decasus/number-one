import {useEffect, useState} from "react";
import styles from '../styles/Game.module.scss'
import Number from './number'
import GameTask from "./task";

const Game = () => {

    const [arrayValues, setArrayValues] = useState([]);
    const [rightKey, setRightKey] = useState(0);

    useEffect(() => {
        setArrayValues(createRandomValues(6));
        setRightKey(Math.floor(Math.random() * arrayValues.length));
    }, [])

    function createRandomValues(length) {
        const values = [];
        while (values.length < length) {
            const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
            if (values.indexOf(randomInt) === -1) values.push(randomInt);
        }
        return values;
    }

    const handleClick = (itemIndex) => {
        if (itemIndex === rightKey) {
            setArrayValues(createRandomValues(9));
            setRightKey(Math.floor(Math.random() * arrayValues.length));
        }
    }

    return (
        <div className={styles.game}>
            {/*{<button onClick={() => setArrayValues(createRandomValues(6))}>START</button>}*/}
            <GameTask value={arrayValues[rightKey]}/>
            <div className={styles.game__items}>
            {arrayValues.map((item, index) => {
                return <Number key={index} handler={() => handleClick(index)} value={item} />
            })}
            </div>
        </div>
    );
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Game;
