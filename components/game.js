import {useEffect, useState} from "react";
import styles from '../styles/Game.module.scss'
import GameTask from "./task";
import GameMenu from "./menu";
import GameItems from "./items";

const levelsLength = [6, 6, 6, 12, 12, 16, 25, 25, 25];
const levelsPow = [1, 2, 3, 3, 3, 3, 4, 4, 4];

const Game = () => {

    const [arrayValues, setArrayValues] = useState([]);
    const [rightKey, setRightKey] = useState(0);
    const [gameLevel, setGameLevel] = useState(0);
    const [gameScore, setGameScore] = useState(0);

    let gameOver = false;

    useEffect(() => {
        createNumbers();
        console.log("Level: " + gameLevel)
    }, [gameLevel])

    const createNumbers = () => {
        const values = [];
        const length = levelsLength[gameLevel];
        while (values.length < length) {
            const randomInt = getRandomInt(Math.pow(10, levelsPow[gameLevel] - 1), Math.pow(10, levelsPow[gameLevel]));
            //const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
            if (values.indexOf(randomInt) === -1) values.push(randomInt);
        }
        setArrayValues(values);
        setRightKey(Math.floor(Math.random() * length));
    }

    const handleClick = (itemIndex) => {
        if (gameOver) {
            stopGame();
            return;
        }
        if (itemIndex === rightKey) {
            if (gameLevel < 8)
            {
                setGameLevel(gameLevel + 1)
                setGameScore(gameScore + gameLevel * 10)
            }
            else createNumbers();
        } else {
            if (gameLevel > 0) setGameLevel(gameLevel - 1)
            else createNumbers();
        }
    }

    const onFinishCount = () => {
        gameOver = true;
        console.log("Time is over");
    }

    const stopGame = () => {
        setArrayValues([]);
    }

    const startGame = () => {
        setRightKey(0);
        setGameScore(0);
        setGameLevel(0);
    }

    if (arrayValues.length !== 0) {
        return (
            <div className={styles.game}>
                <GameMenu level={gameLevel} score={gameScore} onFinish={onFinishCount}/>
                <GameTask value={arrayValues[rightKey]}/>
                <GameItems values={arrayValues} level={gameLevel} handler={handleClick}/>
            </div>
        )
    }
    else {
        return (
            <div className={styles.game}>
                <div className={styles["game__result"]}>
                    <div className={styles["game__result-title"]}>Ваш результат:</div>
                    <div className={styles["game__result-score"]}>{gameScore}</div>
                    <button className={styles["game__result-button"]} onClick={startGame}>Начать заново</button>
                </div>
            </div>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Game;
