import styles from "../styles/Task.module.scss";

const GameTask = (props) => {
    return (
        <div className={styles['game-task']}>
            <p className={styles['game-task__text']}>Найдите значение:</p>
            <span className={styles['game-task__reference']}>{props.value}</span>
        </div>
    );
};

export default GameTask;
