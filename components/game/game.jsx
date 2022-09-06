import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import GameTask from "../task/task";
import GameMenu from "../menu/menu";
import GameItems from "../items/items";
import {levelsLength, levelsPow} from "../../constants/constants";

const Game = ({showResults}) => {

    const [arrayValues, setArrayValues] = useState([]);
    const [rightKey, setRightKey] = useState(0);
    const [gameLevel, setGameLevel] = useState(0);
    const [gameScore, setGameScore] = useState(0);
    const [transition, setTransition] = useState(false);

    let gameOver = false;

    useEffect(() => {
        createNumbers();
    }, [])

    useEffect(() => {
        console.log("Level: " + gameLevel)
    }, [gameLevel])

    const createNumbers = () => {
        const values = [];
        const length = levelsLength[gameLevel];
        while (values.length < length) {
            //const randomInt = getRandomInt(Math.pow(10, levelsPow[gameLevel] - 1), Math.pow(10, levelsPow[gameLevel]));
            const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
            if (values.indexOf(randomInt) === -1) values.push(randomInt);
        }
        setArrayValues(values);
        setRightKey(Math.floor(Math.random() * length));
        setTransition(true);
    }

    const handleClick = (itemIndex) => {
        if (gameOver) {
            stopGame();
            return;
        }
        if (itemIndex === rightKey) {
            if (gameLevel < 8) setGameLevel(gameLevel + 1)
            setGameScore(gameScore + (gameLevel + 1) * 10)
        } else if (gameLevel > 0) setGameLevel(gameLevel - 1)

        setTransition(false);
        setTimeout(() => {
            createNumbers();
            setTimeout(() => setTransition(true), 500)
        }, 500);

    }

    const onFinishCount = () => {
        gameOver = true;
        console.log("Time is over");
    }

    const stopGame = () => {
        setArrayValues([]);
        showResults(gameScore);
    }

    return (
        <div className="game">
            <GameMenu level={gameLevel} score={gameScore} onFinish={onFinishCount}/>
            <CSSTransition in={transition} timeout={500} classNames="animate">
                <div>
                    <GameTask value={arrayValues[rightKey]}/>
                    <GameItems values={arrayValues} level={gameLevel} handler={handleClick}/>
                </div>
            </CSSTransition>
        </div>
    )
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Game;
