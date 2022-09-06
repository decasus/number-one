import {useEffect, useState} from "react";

const GameMenu = ({level, score, onFinish}) => {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            onFinish();
        }
    }, [counter]);

    return (
        <div className="menu">
            <div className="menu__item">
                <div className="menu__item-text">ВРЕМЯ</div>
                <div className="menu__item-index">{secondsToTime(counter)}</div>
            </div>
            <div className="menu__item">
                <div className="menu__item-text">УРОВЕНЬ</div>
                <div className="menu__item-index">{level}</div>
            </div>
            <div className="menu__item">
                <div className="menu__item-text">СЧЁТ</div>
                <div className="menu__item-index">{score}</div>
            </div>
        </div>
    );
};

function secondsToTime(e) {
    const m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(e % 60).toString().padStart(2, '0');
    return m + ':' + s;
}

export default GameMenu;
