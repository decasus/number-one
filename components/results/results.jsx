const Results = ({score, startGame}) => {
    return (
        <div className="result">
            <div className="result__title">Ваш результат:</div>
            <div className="result__score">{score}</div>
            <button className="result__button" onClick={startGame}>Начать заново</button>
        </div>
    );
};

export default Results;
