import {useEffect, useState} from "react";
import styles from '../styles/Game.module.scss'

const Game = () => {

    const [arrayValues, setArrayValues] = useState([]);
    const [rightKey, setRightKey] = useState(0);

    function createValues() {
        const values = [];
        while (values.length < 6) {
            const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
            if (values.indexOf(randomInt) === -1) values.push(randomInt);
        }
        return values;
    }

    useEffect(() => {
        setArrayValues(createValues());
    }, [])

    useEffect(() => {
        setRightKey(Math.floor(Math.random() * arrayValues.length));
    }, [arrayValues])

    const handleClick = (index) => {
        if (index === rightKey) console.log("Верно!")
    }

    return (
        <div className={styles.game}>
            Найдите значение: {arrayValues[rightKey]}
            {arrayValues.map((item, index) => {
                return (
                    <button key={index} onClick={() => handleClick(index)}>{item}</button>
                )
            })}
        </div>
    );
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default Game;
