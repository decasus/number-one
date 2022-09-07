const GameTask = ({value}) => {

    return (
        <div className="game-task">
            <p className="game-task__text">Найдите указанное число:</p>
            <span className="game-task__reference">
                {value}
            </span>
        </div>
    );
};

export default GameTask;