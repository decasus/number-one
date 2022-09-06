const Results = ({score, startGame}) => {
    return (
        <div className="game">
            <div className="game__result">
                <div className="game__result-title">Ваш результат:</div>
                <div className="game__result-score">{score}</div>
                <button className="game__result-button" onClick={startGame}>Начать заново</button>
            </div>
        </div>
    );
};

export default Results;
