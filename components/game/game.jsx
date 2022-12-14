import {useEffect, useRef, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import GameTask from "../task/task";
import GameMenu from "../menu/menu";
import GameItems from "../items/items";
import {levelsLength, levelsPow} from "../../constants/constants";

const Game = ({showResults}) => {
    const [gameLevel, setGameLevel] = useState(0);
    const [gameScore, setGameScore] = useState(0);
    const [gameStep, setGameStep] = useState(0);
    const [arrayValues, setArrayValues] = useState(() => createNumbers(0));
    const [rightKey, setRightKey] = useState(() => Math.floor(Math.random() * 6));

    let gameOver = false;

    useEffect(() => {
        console.log("Level: " + gameLevel)
        if (gameStep > 0) {
            setArrayValues(createNumbers(gameLevel));
            setRightKey(Math.floor(Math.random() * levelsLength[gameLevel]));
        }
    }, [gameStep])

    const handleClick = (itemIndex) => {
        if (gameOver) {
            stopGame();
            return;
        }
        if (itemIndex === rightKey) {
            if (gameLevel < 8) setGameLevel(gameLevel + 1);
            setGameScore(gameScore + gameLevel * 10);
        } else if (gameLevel > 0) setGameLevel(gameLevel - 1)
        setGameStep(gameStep + 1);
    }

    const onFinishCount = () => {
        gameOver = true;
        console.log("Time is over");
    }

    const stopGame = () => {
        setArrayValues([]);
        showResults(gameScore);
    }

    const nodeRef = useRef(null);

    return (<div>
        <GameMenu level={gameLevel} score={gameScore} onFinish={onFinishCount}/>
        <SwitchTransition>
            <CSSTransition nodeRef={nodeRef} key={gameStep} timeout={500} classNames="animate">
                <div ref={nodeRef}>
                    <GameTask value={arrayValues[rightKey]}/>
                    <GameItems values={arrayValues} level={gameLevel} handler={handleClick}/>
                </div>
            </CSSTransition>
        </SwitchTransition>
    </div>)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNumbers(level) {
    const values = [];
    const length = levelsLength[level];
    while (values.length < length) {
        //const randomInt = getRandomInt(Math.pow(10, levelsPow[gameLevel] - 1), Math.pow(10, levelsPow[gameLevel]));
        const randomInt = getRandomInt(Math.pow(10, 1), Math.pow(10, 2));
        if (values.indexOf(randomInt) === -1) values.push(randomInt);
    }
    return values;
}

export default Game;
