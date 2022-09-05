import styles from "../styles/Game.module.scss";
import {useEffect, useState} from "react";

const GameMenu = (props) => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0) {
            props.onFinish();
        }
    }, [counter]);

    return (
        <div className={styles.menu}>
            <div className={styles.menu__item}>
                <div className={styles['menu__item-text']}>ВРЕМЯ</div>
                <div className={styles['menu__item-index']}>{secondsToTime(counter)}</div>
            </div>
            <div className={styles.menu__item}>
                <div className={styles['menu__item-text']}>УРОВЕНЬ</div>
                <div className={styles['menu__item-index']}>{props.level}</div>
            </div>
            <div className={styles.menu__item}>
                <div className={styles['menu__item-text']}>СЧЁТ</div>
                <div className={styles['menu__item-index']}>{props.score}</div>
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
