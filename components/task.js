import styles from "../styles/Task.module.scss";

const GameTask = (props) => {
    return (
        <div className={styles['game-task']}>
            <p className={styles['game-task__text']}>Найдите указанное число:</p>
            <span className={`${styles['game-task__reference']} ${styles['game-task__reference_ng-enter']}`}>{props.value}</span>
        </div>
    );
};

export default GameTask;
